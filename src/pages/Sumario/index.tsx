import { Link } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent";
import { Rotas } from "../../routes";
import { Box } from "@mui/material";

export default function Sumario() {
  return (
    <ContainerComponent title="Sumário">
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        sx={{ textIndent: 0, fontSize: "0.9rem" }}
        fontFamily={"Playfair Display"}
      >
        <Link to={Rotas.Prefacio}>Prefácio por Margit von Mises</Link>
        <Link to={Rotas.Capitalismo}>
          Capítulo 1 - Primeira Lição: O capitalismo
        </Link>
        <Link to={Rotas.Socialismo}>
          Capítulo 2 - Segunda Lição: O socialismo
        </Link>
      </Box>
    </ContainerComponent>
  );
}
