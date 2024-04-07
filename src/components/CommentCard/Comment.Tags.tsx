import { CommentTagsModalProps } from './CommentCard.types';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { Modal } from '../Modal';

const tagOptions = [
  { key: 0, label: 'Positive' },
  { key: 1, label: 'Negative' },
  { key: 2, label: 'ThankYou' },
  { key: 3, label: 'Funny' },
];
export function CommentTags(props: CommentTagsModalProps) {
  const { onClose, setTags, tags } = props;

  return (
    <Modal
      open
      onClose={onClose}
      title={'Choose Tags'}
      subtitle="Feel free to create your own tags">
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
    </Modal>
  );
}
