import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";
import styles from "./Posts.module.scss";
function Posts() {
  const getPosts = useSelector((state) => state.posts);
  const { data } = getPosts;
  const posts = data;
  console.log("Posts show", posts);
  console.log(posts.length);
  return (
    <div className={styles.Posts}>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={styles.Posts_grid}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Posts;
