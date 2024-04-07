import { Post } from "../../utils/types";

export const getFilteredPosts = (searchValue: string, posts: Post[], users: Record<number, string>) => {
  return searchValue
    ? posts.filter(({ title, body, userId }) => {
        const username = users[userId];

        const isTitleFound = title.toLowerCase().includes(searchValue);
        if (isTitleFound) {
          return true;
        }

        const isAuthorFound = username.toLowerCase().includes(searchValue);
        if (isAuthorFound) {
          return true;
        }

        const isDescFound = body.toLowerCase().includes(searchValue);
        if (isDescFound) {
          return true;
        }

        return false;
      })
    : posts;
}