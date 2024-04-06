import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CommentCardPropTypes, ModalContent } from './CommentCard.types';
import { Actions, CommentContainer, ReplyContainer } from './CommentCard.styles';
import { Avatar, Chip, Divider } from '@mui/material';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import { CommentTags } from './Comment.Tags';
import { useState } from 'react';
import { CommentReplies } from './Comment.Reply';

export function CommentCard(props: CommentCardPropTypes) {
  const { title, description } = props;
  const [isDialogOpen, setIsDialogOpen] = useState<ModalContent | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [replies, setReplies] = useState<string[]>([]);

  const handleClose = () => setIsDialogOpen(null);

  return (
    <>
      <CommentContainer variant="outlined">
        <CardContent className="comment-content">
          <div className="comment-header">
            <Avatar
              alt={title}
              src={`https://avatar.iran.liara.run/public?${title}`}
              className="comment-img"
            />
            <Typography
              sx={{
                fontWeight: 'bold',
              }}>
              {title}
            </Typography>
            <Actions>
              <ReplyOutlinedIcon
                color="action"
                onClick={() => setIsDialogOpen(ModalContent.REPLY)}
              />
              <SellOutlinedIcon
                color="action"
                onClick={() => setIsDialogOpen(ModalContent.TAGS)}
              />
            </Actions>
          </div>
          <Typography variant="subtitle2" className="description">
            {description}
          </Typography>
          <div
            style={{
              display: 'flex',
              gap: '2px',
              flexWrap: 'wrap',
            }}>
            {tags.map((tag, index) => (
              <Chip variant="filled" key={index} size="small" label={tag} />
            ))}
          </div>
        </CardContent>
        {isDialogOpen === ModalContent.TAGS && (
          <CommentTags onClose={handleClose} setTags={setTags} tags={tags} />
        )}
        {isDialogOpen === ModalContent.REPLY && (
          <CommentReplies
            onClose={handleClose}
            title={title}
            confirm={(value) => setReplies((prev) => [...prev, value])}
          />
        )}
      </CommentContainer>
      {replies.map((reply, index) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2px'
        }}>
        <Divider orientation='vertical' sx={{height: '15px' , backgroundColor: 'gray' , width: '1px'}}/>
        <ReplyContainer variant="outlined" key={index}>
          <CardContent className="reply-content">
              <Avatar
                alt={reply}
                src={`https://avatar.iran.liara.run/public?${reply}`}
                className="reply-img"
              />
              <Typography variant="subtitle2" color="white">
                : {reply}
              </Typography>
          </CardContent>
        </ReplyContainer>
        </div>
      ))}
    </>
  );
}
