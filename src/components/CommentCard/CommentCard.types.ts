export interface CommentCardPropTypes {
  title: string;
  description: string;
}

export interface CommentTagsModalProps {
  onClose: () => void;
  setTags: (value: string[]) => void;
  tags: string[];
}

export interface CommentRepliesModalProps {
  title: string;
  onClose: () => void;
  confirm: (value: string) => void;
}

export enum ModalContent {
  TAGS = 'TAGS',
  REPLY = 'REPLY',
}
