import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://dsep-protocol-client.becknprotocol.io/search", {
      method: "POST",
      body: {
        context: {
          domain: "dsep:courses",
          action: "search",
          version: "1.0.0",
          bap_uri: "https://dsep-protocol-network.becknprotocol.io/",
          bap_id: "dsep-protocol.becknprotocol.io",
        },
        message: {
          intent: {
            item: {
              descriptor: {
                name: "python",
              },
            },
          },
        },
      },
    })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return <div className="App"></div>;
}

export default App;
