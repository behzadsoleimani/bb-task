export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}
