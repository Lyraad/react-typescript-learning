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
  { id: 2, timestamp: "another", messageContent: "Hello again" },
  { id: 3, timestamp: "ignore", messageContent: "FOOOOO BAAAARR" },
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
      {messageData.map((post) => (
        <Message key={post.id} content={post.messageContent} />
      ))}

      <AddMessage />
    </>
  );
}

export default MessageBoard;
