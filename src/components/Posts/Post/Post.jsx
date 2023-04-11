import React from "react";
import styles from "./Post.module.scss";
import moment from "moment";
import { Button, Card, CardMedia, Typography } from "@mui/material";
import { AccessAlarmOutlined } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Post({ post }) {
  const createdBy = `Created by: ${post.creator}`;
  return (
    <div className={styles.Post}>
      <Card className={styles.Post_card} elevation={20}>
        <CardMedia
          className={styles.Post_card_media}
          component="img"
          height="200"
          image={post.selectedFile}
          alt="Paella dish"
        />
        <div className={styles.Post_card_title}>{post.title}</div>
        <div className={styles.Post_card_info}>
          <div className={styles.Post_card_info_creator}>
            <Typography variant="h6">{createdBy}</Typography>
          </div>
          <div className={styles.Post_card_info_createdAt}>
            <div className={styles.Post_card_info_createdAt_icon}>
              <AccessAlarmOutlined sx={{ color: "purple", height: 20 }} />
            </div>

            <div className={styles.Post_card_info_createdAt_time}>
              {moment(post.createdAt).fromNow()}
            </div>
          </div>
        </div>
        <div className={styles.Post_card_message}>{post.message}</div>
        <Button
          className={styles.Post_card_button}
          variant="container"
          color="secondary"
          size="large"
          fullWidth
        >
          Continue Reading
        </Button>
        <div className={styles.Post_card_buttons}>
          <Button className={styles.Post_card_buttons_like}>
            <FavoriteIcon />
          </Button>
          <Button className={styles.Post_card_buttons_edit}>Edit</Button>
        </div>
      </Card>
    </div>
  );
}

export default Post;
