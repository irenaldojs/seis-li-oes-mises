import { Bookmark, Close, Home, Info, Menu } from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMark } from "../../store/mark";
import { Rotas } from "../../routes";
import TabButton from "../TabButton";

export default function AppBarComponent() {
  const [open, setOpen] = useState(false);
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

  const toggleDrawer = (swapOpen?: boolean) =>
    swapOpen !== undefined ? setOpen(swapOpen) : setOpen(!open);

  return (
    <AppBar position="fixed" component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <Box
            padding={2}
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ minWidth: 250 }}
          >
            <Box display={"flex"} justifyContent={"right"}>
              <IconButton onClick={() => toggleDrawer(false)}>
                <Close />
              </IconButton>
            </Box>
            <Divider />
            <Link
              href={Rotas.Capitalismo}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              1º - O Capitalismo
            </Link>
            <Link
              href={Rotas.Socialismo}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              2º - O Socialismo
            </Link>
            <Link
              href={Rotas.Intervencionismo}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              3º - O Intervencionismo
            </Link>
            <Link
              href={Rotas.Inflacao}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              4º - A Inflação
            </Link>
            <Link
              href={Rotas.InvestimentoExterno}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              5º - Investimento Externo
            </Link>
            <Link
              href={Rotas.PoliticasEIdeais}
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              6º - Políticas e Ideais
            </Link>
          </Box>
        </Drawer>

        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{
            mr: 2,
            display: {
              sm: "none",
            },
          }}
          onClick={() => toggleDrawer()}
        >
          <Menu />
        </IconButton>

        <Avatar
          src="/avatar.jpeg"
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Box
          display={{ xs: "none", sm: "flex" }}
          gap={2}
          flexGrow={1}
          alignSelf={"flex-end"}
          paddingBottom={1}
        >
          <TabButton onClick={() => navigate(Rotas.Prefacio)}>
            Prefácio
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.Capitalismo)}>
            O Capitalismo
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.Socialismo)}>
            O Socialismo
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.Intervencionismo)}>
            O Intervencionismo
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.Inflacao)}>
            A Inflação
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.InvestimentoExterno)}>
            Investimento Externo
          </TabButton>
          <TabButton onClick={() => navigate(Rotas.PoliticasEIdeais)}>
            Politicas e Ideais
          </TabButton>
        </Box>

        <IconButton href="/home">
          <Home fontSize="large" />
        </IconButton>

        <IconButton href="/about">
          <Info fontSize="large" />
        </IconButton>
        <IconButton onClick={swapMark}>
          <Bookmark fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
