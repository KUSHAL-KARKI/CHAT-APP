import React from "react";
import Conversation from "../sidebar/Conversation";

const Conversations = () => {
  return (
    <div
      className="py2
     flex flex-col overflow-auto"
    >
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
