import { Link } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent";
import { Rotas } from "../../routes";
import { Box } from "@mui/material";
import { useMode } from "../../store/mode";

export default function Sumario() {
  const { fontSize, theme } = useMode((state) => state);
  return (
    <ContainerComponent title="Sumário">
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        sx={{
          textIndent: 0,
          fontSize: 0.8 * fontSize + "rem",
          color: theme === "light" ? "black" : "white",
        }}
        fontFamily={"Playfair Display"}
      >
        <Link to={Rotas.Prefacio}>Prefácio por Margit von Mises</Link>
        <Link to={Rotas.Capitalismo}>
          Capítulo 1 - Primeira Lição: O Capitalismo
        </Link>
        <Link to={Rotas.Socialismo}>
          Capítulo 2 - Segunda Lição: O Socialismo
        </Link>
        <Link to={Rotas.Intervencionismo}>
          Capítulo 3 - Terceira Lição: O Intervencionismo
        </Link>
        <Link to={Rotas.Inflacao}>Capítulo 4 – Quarta lição: A Inflação</Link>
        <Link to={Rotas.InvestimentoExterno}>
          Capítulo 5 – Quinta lição: Investimento Externo
        </Link>
        <Link to={Rotas.PoliticasEIdeais}>
          Capítulo 6 – Sexta lição : Política e Ideias
        </Link>
      </Box>
    </ContainerComponent>
  );
}
