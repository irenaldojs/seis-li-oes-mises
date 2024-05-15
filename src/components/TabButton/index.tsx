import { Typography } from "@mui/material";
import React from "react";

type TabButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function TabButton({ children, onClick }: TabButtonProps) {
  return (
    <Typography
      onClick={onClick}
      variant="button"
      fontFamily={"Barlow Condensed"}
      sx={{
        textTransform: "uppercase",
        cursor: "pointer",
        ":hover": { color: "#085475" },
      }}
    >
      {children}
    </Typography>
  );
}
