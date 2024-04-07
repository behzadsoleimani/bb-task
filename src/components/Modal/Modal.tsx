import {
  DialogContent,
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ModalProps } from './Modal.types';
import { PropsWithChildren } from 'react';

export function Modal(props: PropsWithChildren<ModalProps>) {
  const { onClose, open, title, subtitle, children, actions } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
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
        {subtitle && <DialogContentText>{subtitle}</DialogContentText>}
        {children}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}
