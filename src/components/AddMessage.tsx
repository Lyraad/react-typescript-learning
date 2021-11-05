import React from "react";
import { useState } from "react";

interface props {
  addPost(newPost: messageSend): void;
}

interface messageSend {
  messageText: string;
  messageAuthor: string;
}

function AddMessage({ addPost }: props) {
  const [MessageText, setMessageText] = useState("");
  const [MessageAuthor, setMessageAuthor] = useState("");

  const sendPost = function (e: React.FormEvent) {
    e.preventDefault();
    if (MessageText) {
      let sendData: messageSend;
      sendData = {
        messageText: MessageText,
        messageAuthor: MessageAuthor,
      };
      setMessageText("");
      setMessageAuthor("");
      addPost(sendData);
    } else {
      alert("Message field cannot be blank");
    }
  };

  return (
    <>
      <form action="submit" onSubmit={sendPost}>
        <label htmlFor="Message">Message:</label>
        <input
          id="Message"
          value={MessageText}
          type="text"
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            //Test using old style function
            setMessageText(e.target.value);
          }}
        />
        <label htmlFor="Author">Author (Optional):</label>
        <input
          id="Author"
          value={MessageAuthor}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setMessageAuthor(e.target.value)
          }
        />
        {
          //on change using arrow function for comparison
        }
        <button>Submit</button>
      </form>
    </>
  );
}
export default AddMessage;
