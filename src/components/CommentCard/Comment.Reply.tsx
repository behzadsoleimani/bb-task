import { CommentRepliesModalProps } from './CommentCard.types';
import {
  DialogContent,
  Dialog,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export function CommentReplies(props: CommentRepliesModalProps) {
  const { onClose, confirm, title } = props;
  const [textValue, setTextValue] = useState('');

  const handleConfirm = () => {
    confirm(textValue);
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>Add Reply to {title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          multiline
          rows={5}
          fullWidth
          sx={{
            p: '5px',
          }}
          variant="filled"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleConfirm}
          disabled={!textValue}
          variant="contained"
          color="secondary">
          Reply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
