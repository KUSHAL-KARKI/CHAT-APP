import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../store/useConversation";

const Messages = () => {
  const {messages} = useConversation() ;
  const { loading } = useGetMessages();
 useListenMessages();
  const lastMessageRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
 
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={index} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center"> SEND A MESSAGE TO START THE CONVERSATION</p>
      )}
    </div>
  );
};

export default Messages;
