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
];

function MessageBoard() {
  return (
    <>
      {messageData.map((post) => (
        <h3 key={post.id}>{post.messageContent}</h3>
      ))}

      <AddMessage />
    </>
  );
}

export default MessageBoard;
