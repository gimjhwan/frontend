import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Preview from "./Preview";
// css
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Preview />
    </ThemeProvider>
  </StrictMode>
);
