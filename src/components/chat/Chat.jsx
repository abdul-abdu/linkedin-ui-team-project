import { useState, useRef, useEffect } from "react";
import { Overlay, Popover, Button, OverlayTrigger } from "react-bootstrap";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
import io from "socket.io-client";

const my_img =
  "https://media-exp1.licdn.com/dms/image/C4E03AQGpH7jY8lHsRw/profile-displayphoto-shrink_200_200/0/1612692253182?e=1618444800&v=beta&t=4caXU-kDIZqk8e-Ck3B63BRcggE9wgBza3YRS0s2kZk";

const username = "Abdug'affor";

const connOptions = {
  transports: ["websocket"],
};

const socket = io("https://striveschool-api.herokuapp.com/", connOptions);

const Chat = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [messageTo, setMessageTo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [myMessage, setmyMessage] = useState("");
  const [currentUsers, setCurrentUsers] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    // sendUserName();

    socket.on("list", (users) => setCurrentUsers(users));

    socket.on("connect", () => console.log("connected to socket"));

    return () => socket.removeAllListeners();
  }, []);

  const sendUserName = () => {
    socket.emit("setUsername", {
      //emitting an event with a payload to send the message to all connected users
      username: username, //state.username
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (myMessage !== "") {
      socket.emit("chatmessage", {
        to: messageTo,
        text: myMessage,
      });

      setmyMessage(""); //resets the message text
      getMessages();
    }
  };

  const getMessages = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/messages/" + username
      );

      if (response.ok) {
        const messages = await response.json();
        setMessages(messages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        borderRadius: "20px",
        color: "#000000",
        width: "250px",
      }}
      className="chat"
    >
      <div
        onClick={(event) => {
          setShow(!show);
          setTarget(event.target);
        }}
        className="d-flex "
      >
        <img
          src={my_img}
          alt="my_img"
          style={{ borderRadius: "50%", width: "30px", height: "30px" }}
        />
        <b>Messaging</b>
        <IoIosArrowUp />
      </div>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            <input type="text" placeholder="Search messages" />
          </Popover.Title>
          <Popover.Content>
            {currentUsers &&
              currentUsers.map((user, idx) => (
                <div key={idx}>
                  <strong
                    onClick={() => {
                      setMessageTo(user);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {user}
                  </strong>
                </div>
              ))}
          </Popover.Content>
          <OverlayTrigger
            trigger="click"
            placement={"left"}
            overlay={
              <Popover id={`popover-positioned-left`}>
                <Popover.Title as="h3">{`Send Message To ${messageTo}`}</Popover.Title>
                <Popover.Content>
                  {messageTo ? <h4>Message</h4> : <h2>Select a User</h2>}
                  {messages.length > 0 &&
                    messages.map((msg) => JSON.stringify(msg))}
                  <form id="chat" onSubmit={sendMessage}>
                    <input
                      autoComplete="off"
                      className="bg-warning"
                      onChange={(e) => setmyMessage(e.currentTarget.value)}
                    />
                    <Button type="submit" className="rounded-0">
                      Send
                    </Button>
                  </form>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="secondary">Send Message</Button>
          </OverlayTrigger>
        </Popover>
      </Overlay>
    </div>
  );
};

export default Chat;
