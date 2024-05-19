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
        p={1}
        sx={{
          textIndent: 0,
          fontSize: 0.8 * fontSize + "rem",
          color: theme === "light" ? "black" : "white",
        }}
        fontFamily={"Playfair Display"}
      >
        {indices.map((index, count) => (
          <Box key={"count_" + count}>
            <Link to={index.link}>{index.title}</Link>
          </Box>
        ))}
      </Box>
    </ContainerComponent>
  );
}

const indices: { title: string; link: string }[] = [
  {
    title: "Prefácio por Margit von Mises",
    link: Rotas.Prefacio,
  },
  {
    title: "Primeira Lição: O Capitalismo",
    link: Rotas.Capitalismo,
  },
  {
    title: "Segunda Lição: O Socialismo",
    link: Rotas.Socialismo,
  },
  {
    title: "Terceira Lição: O Intervucionismo",
    link: Rotas.Intervencionismo,
  },
  {
    title: "Quarta lição: A Inflação",
    link: Rotas.Inflacao,
  },
  {
    title: "Quinta lição: Investimento Externo",
    link: Rotas.InvestimentoExterno,
  },
  {
    title: "Sexta lição : Política e Ideias",
    link: Rotas.PoliticasEIdeais,
  },
];
