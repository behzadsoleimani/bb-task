import { CommentRepliesModalProps } from './CommentCard.types';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Modal } from '../Modal';

export function CommentReplies(props: CommentRepliesModalProps) {
  const { onClose, confirm, title } = props;
  const [textValue, setTextValue] = useState('');

  const handleConfirm = () => {
    confirm(textValue);
    onClose();
  };

  return (
    <Modal
      open
      onClose={onClose}
      title={`Add Reply to ${title}`}
      actions={
        <Button
          onClick={handleConfirm}
          disabled={!textValue}
          variant="contained"
          color="secondary">
          Reply
        </Button>
      }>
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
    </Modal>
  );
}
