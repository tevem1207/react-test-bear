import { Box, GlobalStyles, ThemeProvider, createTheme } from "@mui/material";
import { ReactComponent as PolarBearSVG } from "./assets/polar-bear.svg";
import { Input, PageLayout, Speak, Speaks } from "./components";
import { Routes, Route, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const switchRoute = () => {
    navigate(location.pathname === "/" ? "/view" : "/");
  };

  const addMemo = (content: string) => {
    console.log(content);
    axios
      .post("http://13.125.255.21:80/memo/", content)
      .then(() => navigate("/view"))
      .catch((err) => console.log(err));
  };

  const deleteMemo = (id: number) => {
    axios
      .delete(`http://13.125.255.21:80/memo/${id}`)
      .then(() => navigate("/view"))
      .catch((err) => console.log(err));
  };

  const PolarBear = () => {
    return (
      <Box
        sx={{
          cursor: "pointer",
          transition: "all ease 500ms",
          "&:hover": { transform: "scale(1.1, 1.1)" },
        }}
      >
        <PolarBearSVG onClick={switchRoute} />
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <PageLayout>
        <Box
          sx={{
            height: "300px",
            overflow: "auto",
            marginTop: 2,
            "@keyframes fade": {
              from: { transform: "scale(0.8)", opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Speak fontWeight={700} callBack={() => navigate("/view")}>
                    고재민입니다~
                  </Speak>
                }
              />
              <Route
                path="/view"
                element={<Speaks deleteMemo={deleteMemo} />}
              />
            </Routes>
          </Box>
        </Box>
        <PolarBear />
        <Input addMemo={addMemo} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
