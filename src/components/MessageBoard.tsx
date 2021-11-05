import React from "react";
import AddMessage from "./AddMessage";
import Message from "./Message";
import { useState } from "react";

interface messageSend {
  messageText: string;
  messageAuthor: string;
}

function MessageBoard() {
  const [messageData, updateMessageData] = useState([
    {
      id: 1,
      timestamp: "test",
      messageContent: "Hello World",
      author: "System",
    },
    {
      id: 2,
      timestamp: "another",
      messageContent: "Hello again",
      author: "Daryl",
    },
    { id: 3, timestamp: "ignore", messageContent: "STOP SAYING HELLO!" },
  ]);

  let addPost = function (messageSend: messageSend): void {
    let newPost = {
      id: Math.floor(Math.random() * 100000),
      timestamp: "ignoreme",
      messageContent: messageSend.messageText,
      author: messageSend.messageAuthor,
    };
    updateMessageData([...messageData, newPost]);
  };

  return (
    <>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th style={{ width: "500px" }}>Message</th>
            <th>Author</th>
          </tr>
          {messageData.map((post) => (
            <Message
              key={post.id}
              content={post.messageContent}
              author={post.author}
            />
          ))}
        </tbody>
      </table>
      <br />
      <AddMessage addPost={addPost} />
    </>
  );
}

export default MessageBoard;
