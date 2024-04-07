import { Card, styled } from '@mui/material';

export const CommentContainer = styled(Card)(() => ({
  position: 'relative',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / .6)',
  borderRadius: '10px',
  maxWidth: '450px',
  height: '160px',
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
        height: 24,
      },
    },
  },
  '& .description': {
    lineHeight: 'normal',
  },
}));

export const Actions = styled('div')(() => ({
  cursor: 'pointer',
  position: 'absolute',
  bottom: 5,
  right: 5,
}));

export const ReplyContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / .6)',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '450px',
  backgroundColor: theme.palette.primary.dark,
  '& .reply-content': {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    gap: '10px',
    '& .reply-img': {
      width: 16,
      height: 16,
    },
  },
}));

export const Tags = styled('div')(() => ({
  display: 'flex',
  gap: '2px',
  flexWrap: 'wrap',
}));
