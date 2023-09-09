import { useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("https://api.dsep.samagra.io");
function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });

    socket.on("response", (payload) => {
      console.log("ccc payload in response: ", payload);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
    };
  }, []);
  return <div className="App"></div>;
}

export default App;
