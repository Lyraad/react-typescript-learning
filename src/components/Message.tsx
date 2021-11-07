import React from "react";

interface props {
  content: string;
  author?: string;
  deleteMessage(id: number): void;
  id: number;
  editMode: boolean;
}

function Message({ content, author, deleteMessage, id, editMode }: props) {
  const handleDelete = function (e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    deleteMessage(id);
  };

  const deleteButton = editMode ? (
    <td style={{ textAlign: "center" }}>
      <button onClick={handleDelete}>X</button>
    </td>
  ) : (
    ""
  );

  return (
    <tr>
      <td>{content}</td>
      <td>{author ? author : "anonymous"}</td>
      {deleteButton}
    </tr>
  );
}

export default Message;
