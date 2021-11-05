import React from "react";

interface props {
  content: string;
  author?: string;
}

function Message({ content, author }: props) {
  return (
    <tr>
      <td>{content}</td>
      <td>{author ? author : "anonymous"}</td>
    </tr>
  );
}

export default Message;
