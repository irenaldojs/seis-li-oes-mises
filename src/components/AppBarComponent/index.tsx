import { Bookmark } from "@mui/icons-material";

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
          <TabButton onClick={() => navigate(Rotas.Home)}>Início</TabButton>
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
          <TabButton onClick={() => navigate(Rotas.About)}>Sobre</TabButton>
        </Box>
        <IconButton onClick={swapMark} sx={{ alignSelf: "flex-end" }}>
          <Bookmark fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
