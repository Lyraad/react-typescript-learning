import React from "react";
import AddMessage from "./AddMessage";
import Message from "./Message";

interface message {
  id: number;
  timestamp: string;
  messageContent: string;
  author?: string;
}

let messageData: message[];

messageData = [
  { id: 1, timestamp: "test", messageContent: "Hello World", author: "System" },
  {
    id: 2,
    timestamp: "another",
    messageContent: "Hello again",
    author: "Daryl",
  },
  { id: 3, timestamp: "ignore", messageContent: "STOP SAYING HELLO!" },
];

// let addPost = function (postContent: string): void {
//   let newPost = {
//     id: Math.floor(Math.random() * 100000),
//     timestamp: "ignoreme",
//     messageContent: postContent,
//     author: "system",
//   };
//   let newData = [...messageData, newPost];
//   messageData = newData;
// };

function MessageBoard() {
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
      <AddMessage />
    </>
  );
}

export default MessageBoard;
