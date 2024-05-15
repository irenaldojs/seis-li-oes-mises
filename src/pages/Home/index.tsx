import { Box, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      gap={2}
      marginTop={{ xs: 10, md: 20 }}
      marginBottom={20}
      p={1}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "3rem",
            md: "5rem",
          },
        }}
      >
        As Seis Lições
      </Typography>
      <Box sx={{ maxWidth: 800, textIndent: 50 }}>
        <Typography variant="body1">
          As Seis Lições Síntese da obra do grande economista Ludwig von Mises,
          talvez o maior da história, As Seis Lições pode ser considerado a
          melhor introdução ao pensamento do mestre e um grande resumo de sua
          extensa produção acadêmica. Trata-se de um livro curto: em poucas
          palavras, ele demonstra a perenidade de seus conceitos a respeito de
          política econômica, como propriedade privada, livre comércio, preços,
          juros, moeda e inflação, bem como os de sistemas político-econômicos,
          como capitalismo, intervencionismo, socialismo, investimento externo.
          Fruto de palestras dirigidas a empresários, professores e alunos, As
          Seis Lições foi organizado pela viúva de Mises, é um clássico da
          ciência econômica em linguagem acessível para o público leigo e,
          provavelmente, o livro mais vendido do autor.
        </Typography>
        <br />
        <br />
        <Box
          display={"flex"}
          flexDirection="column"
          gap={1}
          border={1}
          borderRadius={2}
          p={1}
        >
          <Typography variant="h5" textAlign={"center"}>
            Ludwig von Mises
          </Typography>
          <Typography variant="body2">
            Ludwig von Mises foi o reconhecido líder da Escola Austríaca, um
            prodigioso originador na teoria econômica e um autor prolífico. Os
            escritos e palestras de Mises abarcavam teoria econômica, história,
            epistemologia, governo e filosofia política.
          </Typography>
        </Box>
        <br />
        <Typography variant="body1">Referencias:</Typography>
        <Box marginLeft={2} sx={{ textDecoration: "none" }}>
          <Typography variant="body2">
            <Link href="https://mises.org.br/livros/76/as-seis-licoes">
              Instituto Ludwig von Mises Brasil
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
