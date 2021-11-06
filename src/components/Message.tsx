import React from "react";

interface props {
  content: string;
  author?: string;
  deleteMessage(id: number): void;
  id: number;
}

function Message({ content, author, deleteMessage, id }: props) {
  const handleDelete = function (e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    deleteMessage(id);
  };

  return (
    <tr>
      <td>{content}</td>
      <td>{author ? author : "anonymous"}</td>
      <td style={{ textAlign: "center" }}>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
}

export default Message;
