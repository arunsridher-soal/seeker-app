import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
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
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://dsep-protocol-client.becknprotocol.io/search",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return <div className="App"></div>;
}

export default App;
