import { Book, Bookmark, Home, Info } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect } from "react";
import { Rotas } from "../../routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useMark } from "../../store/mark";

export default function BottomBarComponent() {
  const [value, setValue] = React.useState("/");
  const location = useLocation();
  const navigate = useNavigate();
  const { loadMark } = useMark((state) => state);

  const swapMark = async () => {
    const [page, verse] = loadMark();

    navigate(page ?? "");

    setTimeout(() => {
      const element = document.getElementById(verse?.toString() ?? "");

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  useEffect(() => {
    if (value === "mark") {
      swapMark();
    } else {
      navigate(value);
    }
  }, [value]);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0 }}
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Início"
        icon={<Home />}
        value={Rotas.Home}
      />
      <BottomNavigationAction
        label="Sumário"
        icon={<Book />}
        value={Rotas.Sumario}
      />
      <BottomNavigationAction
        label="Marcador"
        icon={<Bookmark />}
        value="mark"
      />
      <BottomNavigationAction
        label="Sobre"
        icon={<Info />}
        value={Rotas.About}
      />
    </BottomNavigation>
  );
}
