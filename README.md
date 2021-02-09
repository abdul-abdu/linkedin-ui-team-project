# LinkedIn clone frontend

![Preview](https://github.com/Abdugaffor-97/linkedin-ui-team-project/blob/main/linkedin.gif)

Module 7 - D7

    Today you'll be working on your LinkedIn application. Your task is to implement a realtime chat.
    The chat will be a 1 to 1 chat with the other users in the platform.
    You'll be using Socket.io to handle the requests.
    Start from your previous Linkedin App.
    Use these endpoints to implement the feed feature.
    ########### WARNING ############################################
    install the specific 2.3.0 version of socket.io-clientby doing:
    npm i socket.io-client@2.3.0
    ################################################################
    API:
    ---------------------------------------------------------------------------
    WEB SOCKET:
    There are three available methods:
    1) event name: "setUsername"
        payload: ({
            username: "user1" //SHOULD BE THE SAME AS YOUR USERID (es.: user1)
        })
    2) event name: "list"
        payload: ({}) //GETS THE LIST OF AVAILABLE USERS (changes automatically on login)

    3) event name: "chatmessage"
        payload ({
            to: "receiver username",
            text: "the message to be sent"
        }) //SENDS A PRIVATE MESSAGE TO A SPECIFIC USER
    MESSAGES:
    GET https://striveschool-api.herokuapp.com/api/messages/{userId}
    Retrieves past messages for your account.

    ---------------------------------------------------------------------------
    MESSAGE Model:
      {
        "_id": "5d9500ba9987a700173304e0", //server gen
        "from": "admin",
        "text": "test",
        "to": "user",
        "createdAt": "2019-10-02T19:55:38.104Z", //server gen
        "updatedAt": "2019-10-02T19:55:38.104Z", //server gen
        "__v": 0 //server gen
    }
    SOCKET URL: "https://striveschool-api.herokuapp.com"
    SOCKET connection options:
    {
      transports: ["websocket"],
    };

    ---------------------------------------------------------------------------
    Make it as close as possible to the LinkedIn Direct Message page
