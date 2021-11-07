import React from "react";
import AddMessage from "./AddMessage";
import Message from "./Message";
import { useState } from "react";

interface messageSend {
  messageText: string;
  messageAuthor: string;
}

interface props {
  editMode: boolean;
}

function MessageBoard({ editMode }: props) {
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

  const addPost = function (messageSend: messageSend): void {
    let newPost = {
      id: Math.floor(Math.random() * 100000),
      timestamp: "ignoreme",
      messageContent: messageSend.messageText,
      author: messageSend.messageAuthor,
    };
    updateMessageData([...messageData, newPost]);
  };

  const deleteMessage = function (id: number): void {
    console.log(id);
    updateMessageData(messageData.filter((message) => message.id !== id));
  };

  let deleteHeader = editMode ? <th style={{ width: "100px" }}>Delete</th> : "";

  return (
    <>
      <table className="messageTable">
        <tbody>
          <tr>
            <th>Message</th>
            <th style={{ width: "100px" }}>Author</th>
            {deleteHeader}
          </tr>
          {messageData.map((post) => (
            <Message
              key={post.id}
              id={post.id}
              content={post.messageContent}
              author={post.author}
              deleteMessage={deleteMessage}
              editMode={editMode}
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
