import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../store/useConversation.js";

const useListenMessages = () => {
 
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  
  useEffect(() => {
    socket?.on("new message", (newMessage) => {
    newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });
   
    return () => socket?.off("new message");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
