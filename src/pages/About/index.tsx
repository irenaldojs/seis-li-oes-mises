import { Box, IconButton, Typography } from "@mui/material";
import ContainerComponent from "../../components/ContainerComponent";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function About() {
  return (
    <ContainerComponent title="Sobre o projeto">
      <Box>
        <Typography variant="body1" sx={{ textIndent: "2em" }}>
          Olá, seja bem-vindo ao projeto! Meu nome é Irenaldo Júnior, sou
          estudante de Análise e Desenvolvimento de Sistemas, e este projeto faz
          parte da minha iniciativa de pesquisa e desenvolvimento de soluções
          para o cotidiano. A proposta é criar uma plataforma que permita ter
          uma leitura agradável principalmente em dispositivos móveis.
        </Typography>
        <Typography variant="body1" sx={{ textIndent: "2em" }}>
          Explore, divirta-se e sinta-se em casa!
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="h6">Contato: </Typography>
        <Box display={"flex"} gap={2} justifyContent={"center"} fontSize={80}>
          <IconButton href="https://www.linkedin.com/in/irenaldo-júnior-da-silva/">
            <LinkedIn sx={styleIcon} />
          </IconButton>
          <IconButton href="mailto:irenaldojs@gmail.com">
            <GitHub sx={styleIcon} />
          </IconButton>
          <IconButton href="mailto:irenaldojs@gmail.com">
            <Email sx={styleIcon} />
          </IconButton>
        </Box>
      </Box>
    </ContainerComponent>
  );
}

const styleIcon = { fontSize: { xs: 60, sm: 80 } };
