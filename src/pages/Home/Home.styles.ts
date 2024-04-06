import { Paper, styled } from "@mui/material";

export const Root = styled(Paper)((props) => ({
  backgroundColor: props.theme.palette.background.default,
  display: "flex",
  "& .container": {
    flexBasis: "50%",
    margin: 0,
    padding: "20px",
    overflow: "auto",
    height: "100vh",
    "& ul": {
      gap: "10px",
      display: "flex",
      flexDirection: "column",
    },
  },

}));
