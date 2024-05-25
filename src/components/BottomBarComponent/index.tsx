import {
  Book,
  Bookmark,
  DarkMode,
  Home,
  Info,
  Settings,
  TextDecrease,
  TextIncrease,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Rotas } from "../../routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useMark } from "../../store/mark";
import { useMode } from "../../store/mode";

export default function BottomBarComponent() {
  const [value, setValue] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();
  const { loadMark } = useMark((state) => state);
  const { addFontSize, subFontSize, swapTheme } = useMode((state) => state);

  const actionBottomNavigation = (event: string) => {
    if (event === "mark") {
      loadMark(navigate);
    } else {
      navigate(event);
    }

    setValue(event);
  };

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: { xs: "flex", md: "none" },
      }}
      showLabels
      value={value}
      onChange={(_, newValue) => actionBottomNavigation(newValue)}
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
        label="Sobre"
        icon={<Info />}
        value={Rotas.About}
      />
      <BottomNavigationAction
        label="Marcador"
        icon={<Bookmark />}
        value="mark"
      />
      <Box position={"relative"}>
        <SpeedDial
          ariaLabel="SpeedDial"
          FabProps={{
            size: "small",
            variant: "circular",
            color: "default",
          }}
          sx={{
            position: "absolute",
            bottom: 65,
            right: 10,
          }}
          icon={<Settings />}
        >
          <SpeedDialAction
            icon={<TextIncrease fontSize="small" />}
            tooltipTitle={"Aumentar Fonte"}
            FabProps={{ size: "small", variant: "extended" }}
            onClick={() => addFontSize()}
          />
          <SpeedDialAction
            icon={<TextDecrease fontSize="small" />}
            tooltipTitle={"Diminuir Fonte"}
            FabProps={{ size: "small", variant: "extended" }}
            onClick={() => subFontSize()}
          />
          <SpeedDialAction
            icon={<DarkMode fontSize="small" />}
            tooltipTitle={"Alternar Tema"}
            FabProps={{ size: "small", variant: "extended" }}
            onClick={() => swapTheme()}
          />
        </SpeedDial>
      </Box>
    </BottomNavigation>
  );
}
