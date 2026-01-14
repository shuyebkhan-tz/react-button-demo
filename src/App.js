import { useState } from "react";
import ParentButton from "./Components/Buttons/ParentButton";
import Card from "./Components/Cards/Card";

function App() {


   const [showParentButton, setShowParentButton] = useState(false);
  return (
    <div>
      {showParentButton ? <ParentButton onClick={() => setShowParentButton(false)} /> : 
     <div
      style={{
        minHeight: "100vh",
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
     <Card
  heading="Switch to button"
  buttonText="Button"
  description="Click on button switch to button component"
  onClick={() => setShowParentButton(true)}
  cardStyle={{
    background: "#ecfeff",
    border: "2px solid #06b6d4",
  }}
  buttonStyle={{
    background: "#06b6d4",
  }}
/>

<Card
  heading="Profile"
  buttonText="Dummy"
  cardStyle={{
    background: "#fef2f2",
    border: "2px solid #ef4444",
  }}
  buttonStyle={{
    background: "#ef4444",
  }}
/>

    </div>
}
    </div>
  );
}

export default App;