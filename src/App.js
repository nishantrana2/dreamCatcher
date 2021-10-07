import { ThemeProvider } from "@emotion/react";
import Errors from "./pages/Errors";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Errors />
    </ThemeProvider>
  );
}

export default App;
