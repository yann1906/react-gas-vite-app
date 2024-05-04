import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Page2() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/Avion3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "red",
        opacity: 0.8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: isHovered ? "0 0 10px 5px rgba(0, 0, 0, 0.5)" : "none",
        transition: "box-shadow 0.3s ease-in-out",
        fontSize: "2rem", // Increase font size
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        style={{ color: "white", textAlign: "center", fontFamily: "Tilt Neon" }}
      >
        Page2
      </h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/home"
        style={{ alignSelf: "center" }}
      >
        Get started
      </Button>
    </div>
  );
}

export default Page2;
