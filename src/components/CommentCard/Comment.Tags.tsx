import { CommentTagsModalProps } from './CommentCard.types';
import {
  Autocomplete,
  DialogContent,
  Chip,
  Dialog,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const tagOptions = [
  { key: 0, label: 'Positive' },
  { key: 1, label: 'Negative' },
  { key: 2, label: 'ThankYou' },
  { key: 3, label: 'Funny' },
];
export function CommentTags(props: CommentTagsModalProps) {
  const { onClose, setTags , tags } = props;

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }} >
        Choose Tags
      </DialogTitle>
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
        <DialogContentText >
          Feel free to create your own tags
        </DialogContentText>
          <Autocomplete
            autoComplete
            defaultValue={tags}
            onChange={(_, value) => setTags(value)}
            multiple
            id="tags-filled"
            options={tagOptions.map((option) => option.label)}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  p: '5px',
                }}
                variant="filled"
              />
            )}
          />
      </DialogContent>
    </Dialog>
  );
}
