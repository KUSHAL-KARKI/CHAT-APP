import React from "react";
import Conversation from "../sidebar/Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { conversations } = useGetConversations();

  return (
    <div
      className="py2
     flex flex-col overflow-auto"
    >
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};

export default Conversations;
