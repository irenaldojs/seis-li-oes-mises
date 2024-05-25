import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Capitalismo from "./pages/Capitalismo";
import Socialismo from "./pages/Socialismo";
import Intervencionismo from "./pages/Intervencionismo";
import Inflacao from "./pages/Inflacao";
import InvestimentoExterno from "./pages/InvestimentoExterno";
import PoliticasEIdeais from "./pages/PoliticasEIdeais";
import About from "./pages/About";
import { Rotas } from "./routes";
import AppBarComponent from "./components/AppBarComponent";
import Prefacio from "./pages/Prefacio";
import BottomBarComponent from "./components/BottomBarComponent";
import Sumario from "./pages/Sumario";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";
import { useMode } from "./store/mode";
import { appTheme } from "./themeApp";
import { useLayoutEffect } from "react";

function App() {
  const { theme, fontSize, loadTheme } = useMode((state) => state);
  const configTheme = createTheme(appTheme(theme, fontSize));

  useLayoutEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeProvider theme={configTheme}>
      <Container>
        <AppBarComponent />
        <Routes>
          <Route path={Rotas.Home} element={<Home />} />
          <Route path={Rotas.Prefacio} element={<Prefacio />} />
          <Route path={Rotas.Capitalismo} element={<Capitalismo />} />
          <Route path={Rotas.Socialismo} element={<Socialismo />} />
          <Route path={Rotas.Intervencionismo} element={<Intervencionismo />} />
          <Route path={Rotas.Inflacao} element={<Inflacao />} />
          <Route
            path={Rotas.InvestimentoExterno}
            element={<InvestimentoExterno />}
          />
          <Route path={Rotas.PoliticasEIdeais} element={<PoliticasEIdeais />} />
          <Route path={Rotas.About} element={<About />} />
          <Route path={Rotas.Sumario} element={<Sumario />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <BottomBarComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
