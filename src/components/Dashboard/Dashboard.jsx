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
      <div className={styles.featuredPosts}>Featured Posts</div>
      <div className={styles.dashboard_home}>
        <div className={styles.dashboard_home_posts}>
          <Posts />
        </div>

        <div className={styles.dashboard_home_rightsection}>
          <div className={styles.dashboard_home_rightsection_widgets}>
            widgets
          </div>
          <div className={styles.dashboard_home_rightsection_categories}>
            categories
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
