import { Typography, TypographyProps } from "@mui/material";

interface SpeakProps extends TypographyProps {
  children: React.ReactNode;
  callBack: () => void;
}

export const Speak = ({ children, callBack, ...props }: SpeakProps) => {
  return (
    <Typography
      variant="h3"
      color="text.primary"
      onClick={callBack}
      sx={{
        animation: "500ms ease fade",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        margin: 1,
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
