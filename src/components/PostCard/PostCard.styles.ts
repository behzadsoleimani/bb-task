import { Card, Theme, styled } from '@mui/material';
import { CardContainerProps } from './PostCard.types';

export const PostContainer = styled(Card)<CardContainerProps>(
  ({ selected, theme }: CardContainerProps & { theme: Theme }) => ({
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / .6)',
    borderRadius: '15px',
    cursor: 'pointer',
    height: '160px',
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${selected ? theme.palette.info.main : 'transparent'}`,
    '&: hover': {
      transform: 'scale(1.01)',
    },
    '& .description': {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 3,
      textOverflow: 'ellipsis',
    },
  })
);
