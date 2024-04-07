import { Post } from "../../utils/types";

export interface PostsSectionProps {
  posts: Post[];
  users: Record<number, string>;
  setSelectedItem: (selectedItem?: Post) => void;
  selectedItem?: Post;
}