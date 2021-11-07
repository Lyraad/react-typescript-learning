import React from "react";

import MessageBoard from "../components/MessageBoard";

function Home() {
  return (
    <div>
      <MessageBoard editMode={false} />
    </div>
  );
}

export default Home;
