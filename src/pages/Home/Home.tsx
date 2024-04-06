import { CircularProgress, Container, Pagination } from "@mui/material";
import { PostCard } from "../../components/PostCard";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../store/postsSlice";
import { Root } from "./Home.styles";
import { Post } from "../../utils/types";
import { fetchComments } from "../../store/commentsSlice";
import { CommentCard } from "../../components/CommentCard";
import { Search } from "../../components/Search";

const PAGE_SIZE = 10;

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Post>();
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, loadingStatus: postLoadingStatus } = useAppSelector(
    (state) => state.posts
  );
  const [searchValue, setSearchValue] = useState("");

  const { users } = useAppSelector((state) => state.users);
  const { comments } = useAppSelector((state) => state.comments);

  const handleCardClick = (post: Post) => {
    setSelectedItem(post);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedItem?.id) dispatch(fetchComments(selectedItem?.id));
  }, [dispatch, selectedItem?.id]);

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
  };

  const handleFilterPosts = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const filteredItems = searchValue
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

  console.log("filteredItems");
  console.log(filteredItems);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedPosts = filteredItems.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );
  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);

  return (
    <Root elevation={0}>
      <Container className="container posts-section">
        {postLoadingStatus === "success" ? (
          <>
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
              }}
            >
              <Search onChange={handleFilterPosts} />
            </div>
            <ul className="list">
              {paginatedPosts.map((post) => (
                <PostCard
                  title={post.title}
                  description={post.body}
                  key={post.id}
                  subTitle={`Author : ${users[post.userId]}`}
                  selected={post.id === selectedItem?.id}
                  onClick={() => handleCardClick(post)}
                />
              ))}
            </ul>
            {totalPages > 0 && (
              <Pagination
                count={totalPages}
                className="pagination"
                page={currentPage}
                onChange={handlePageChange}
                color="standard"
              />
            )}
          </>
        ) : (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
      </Container>
      <Container className="container comments-section">
        <ul className="list">
          {selectedItem
            ? comments.map((comment) => (
                <CommentCard
                  title={comment.name}
                  description={comment.body}
                  key={comment.id}
                />
              ))
            : null}
        </ul>
      </Container>
    </Root>
  );
};
