import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PostCardPropTypes } from "./PostCard.types";
import { PostContainer } from "./PostCard.styles";
import { Avatar } from "@mui/material";

export function PostCard(props: PostCardPropTypes) {
  const { title, description, selected, onClick, subTitle } = props;

  return (
    <PostContainer variant="outlined" onClick={onClick} selected={selected}>
      <CardContent>
      <Avatar alt={title} src={`https://avatar.iran.liara.run/public?${title}`} className="comment-img" />
        <Typography color="primary.contrastText" gutterBottom>
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="caption"
          gutterBottom
        >
          {subTitle}
        </Typography>
        <Typography variant="subtitle2" className="description">
          {description}
        </Typography>
      </CardContent>
    </PostContainer>
  );
}
