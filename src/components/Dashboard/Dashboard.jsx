import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import { getPosts } from "../../redux/slice/postsSlice";
import Posts from "../Posts/Posts";
function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.createPost}>
        <Link className={styles.createPost_link} to="/form">
          Create a Post
        </Link>
      </div>
      <div className="dashboard_posts">
        <Posts />
      </div>
    </div>
  );
}

export default Dashboard;
