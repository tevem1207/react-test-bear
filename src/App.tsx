import { Box, Typography } from "@mui/material";
import { ReactComponent as PolarBearSVG } from "./assets/polar-bear.svg";
import { PageLayout } from "./components";
import { Routes, Route, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const switchRoute = () => {
    navigate(location.pathname === "/" ? "/view" : "/");
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

  const Jamin = () => {
    return (
      <Typography
        variant="h3"
        fontWeight={700}
        color={"white"}
        onClick={() => navigate("/")}
      >
        고재민입니다~
      </Typography>
    );
  };

  const Bear = () => {
    return (
      <Typography
        variant="h3"
        fontWeight={700}
        color={"white"}
        onClick={() => navigate("/")}
      >
        곰인데요~
      </Typography>
    );
  };

  return (
    <>
      <PageLayout>
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            marginTop: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<Bear />} />
            <Route path="/view" element={<Jamin />} />
          </Routes>
        </Box>
        <PolarBear />
      </PageLayout>
    </>
  );
}

export default App;
