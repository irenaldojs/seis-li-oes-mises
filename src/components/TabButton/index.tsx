import { Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type TabButtonProps = {
  children: React.ReactNode;
  route: string;
};

export default function TabButton({ children, route }: TabButtonProps) {
  const navigate = useNavigate();
  const path = useLocation();

  function handleClick() {
    navigate(route);
  }

  return (
    <Typography
      onClick={() => handleClick()}
      variant="button"
      fontFamily={"Barlow Condensed"}
      sx={{
        textTransform: "uppercase",
        cursor: "pointer",
        ":hover": { color: "#085475" },
        borderBottom:
          path.pathname === route
            ? "2px solid #085475"
            : "2px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </Typography>
  );
}
