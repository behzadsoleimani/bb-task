import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CommentCardPropTypes } from "./CommentCard.types";
import { CommentContainer } from "./CommentCard.styles";
import { Avatar } from "@mui/material";


export function CommentCard(props: CommentCardPropTypes) {
  const { title, description } = props;

  return (
    <CommentContainer
      variant="outlined"
    >
      <CardContent className="comment-content"
      >
        <div className="comment-header">
        <Avatar alt={title} src={`https://avatar.iran.liara.run/public?${title}`} className="comment-img" />
        <Typography sx={{
          fontWeight: 'bold'
        }}>
          {title}
        </Typography>
        </div>
        <Typography
          variant="subtitle2"
          className="description"
        >
          {description}
        </Typography>
      </CardContent>
    </CommentContainer>
  );
}
