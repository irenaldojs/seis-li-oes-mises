import { Bookmark, Home, Info } from "@mui/icons-material";

import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMark } from "../../store/mark";
import { Rotas } from "../../routes";
import TabButton from "../TabButton";

export default function AppBarComponent() {
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

  return (
    <AppBar
      position="fixed"
      component="nav"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
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
