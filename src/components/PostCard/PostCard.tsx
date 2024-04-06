import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardPropTypes } from "./PostCard.types";
import { CardContainer } from "./PostCard.styles";


export function PostCard(props: CardPropTypes) {
  const { title, description, selected, onClick, subTitle } = props;

  return (
    <CardContainer
      variant="outlined"
      onClick={onClick}
      selected={selected}
    >
      <CardContent 
      >
        <Typography color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{
          fontWeight: 'bold'
        }} variant="caption" gutterBottom>
          {subTitle}
        </Typography>
        <Typography
          variant="subtitle2"
        >
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
}
