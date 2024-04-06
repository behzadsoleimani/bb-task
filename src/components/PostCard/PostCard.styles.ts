import { Card, Theme, styled } from "@mui/material";
import { CardContainerProps } from "./PostCard.types";

export const CardContainer = styled(Card)<CardContainerProps>(
  ({ selected, theme }: CardContainerProps & { theme: Theme }) => ({
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / .6)',
    cursor: "pointer",
    height: '200px',
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${selected ? theme.palette.info.main : "transparent"}`,
    // '&: hover': {
    //   transform: 'scale(1.01)'
    // }
  })
);
