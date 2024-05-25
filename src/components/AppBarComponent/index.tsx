import {
  Bookmark,
  DarkMode,
  Settings,
  TextDecrease,
  TextIncrease,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMark } from "../../store/mark";
import { Rotas } from "../../routes";
import TabButton from "../TabButton";
import { useState } from "react";
import { useMode } from "../../store/mode";

export default function AppBarComponent() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { loadMark } = useMark((state) => state);
  const { addFontSize, subFontSize, swapTheme, theme } = useMode(
    (state) => state,
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      component="nav"
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Toolbar
        variant="regular"
        sx={{
          justifyContent: "center",
          display: "flex",
          gap: 1,
        }}
      >
        <Avatar
          src="/avatar.jpeg"
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Box
          display={{ xs: "none", sm: "flex" }}
          gap={2}
          alignSelf={"flex-end"}
          paddingBottom={1}
        >
          <TabButton route={Rotas.Home}>Início</TabButton>
          <TabButton route={Rotas.Prefacio}>Prefácio</TabButton>
          <TabButton route={Rotas.Capitalismo}>O Capitalismo</TabButton>
          <TabButton route={Rotas.Socialismo}>O Socialismo</TabButton>
          <TabButton route={Rotas.Intervencionismo}>
            O Intervencionismo
          </TabButton>
          <TabButton route={Rotas.Inflacao}>A Inflação</TabButton>
          <TabButton route={Rotas.InvestimentoExterno}>
            Investimento Externo
          </TabButton>
          <TabButton route={Rotas.PoliticasEIdeais}>
            Politicas e Ideais
          </TabButton>
          <TabButton route={Rotas.About}>Sobre</TabButton>
        </Box>
        <IconButton
          sx={{ alignSelf: "flex-end" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Settings fontSize="large" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open ? true : false}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              loadMark(navigate);
              handleClose();
            }}
            sx={menuItemProps}
          >
            <Bookmark />
            Marcardor
          </MenuItem>
          <MenuItem onClick={addFontSize} sx={menuItemProps}>
            <TextIncrease />
            Aumentar Fonte
          </MenuItem>
          <MenuItem onClick={subFontSize} sx={menuItemProps}>
            <TextDecrease />
            Diminuir Fonte
          </MenuItem>
          <MenuItem onClick={swapTheme} sx={menuItemProps}>
            <DarkMode />
            {theme === "light" ? "Tema Escuro" : "Tema Claro"}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

const menuItemProps = { display: "flex", gap: 2, fontSize: "inherit" };
