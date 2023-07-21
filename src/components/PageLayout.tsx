import { Container, Stack } from "@mui/material";
import { ReactNode, useEffect } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const setScreenSize = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => window.removeEventListener("resize", setScreenSize);
  }, []);
  return (
    <Stack
      className="App"
      justifyContent="center"
      height="calc(var(--vh, 1vh) * 100)"
      sx={{
        ".fade-enter": {
          opacity: 0,
        },
        ".fade-enter-active": {
          opacity: 1,
          transition: "opacity 300ms",
        },
        ".fade-exit": {
          opacity: 1,
        },
        ".fade-exit-active": {
          opacity: 0,
          transition: "opacity 300ms",
        },
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};
