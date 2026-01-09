import { io } from "socket.io-client";
 
let socket = null;
 
export const connectSocket = (token, extraPayload = {}) => {
  if (socket) return socket;
 
  socket = io(import.meta.env.VITE_SOCKET_URL, {
    autoConnect: false,
    auth: {
      token,
      ...extraPayload, // { kitchenId }
    },
  });
 
  socket.connect();
 
  return socket;
};
 
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
 
export const getSocket = () => socket;