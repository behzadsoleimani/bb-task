import { Card, styled } from "@mui/material";

export const CommentContainer = styled(Card)(() => ({
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / .6)",
  borderRadius: "10px",
  maxWidth: '400px',
  height: "150px",
  backgroundColor: '#fff',
  '& .comment-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '& .comment-header': {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      '& .comment-img': {
        width: 24,
        height: 24
      }
    }
  },
  "& .description": {
    lineHeight: 'normal'
  },
}));
