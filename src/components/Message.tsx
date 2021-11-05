import React from "react";

interface props {
  content: string;
}

function Message({ content }: props) {
  return <h3>{content}</h3>;
}

export default Message;
