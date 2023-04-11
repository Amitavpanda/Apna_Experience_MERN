import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Form.module.scss";
import { Button, Grid, Paper, TextField } from "@mui/material";
import FileBase64 from "react-file-base64";
import { createPost } from "../../redux/slice/postsSlice";
function Form() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPost(postData));

      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const clear = () => {
    console.log("clear");
  };
  return (
    <div className={styles.Form}>
      <div className={styles.Form_element}>
        <Paper className={styles.Form_element_paper} elevation={20}>
          <form
            autoComplete="off"
            noValidate
            className={styles.form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <Grid align="center">
              <h2 className={styles.form_heading}>Share your Experience</h2>
            </Grid>
            <TextField
              sx={{ marginBottom: 2 }}
              name="creator"
              variant="outlined"
              label="Creator"
              fullWidth
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <TextField
              sx={{ marginBottom: 2 }}
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              sx={{ marginBottom: 2 }}
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
            <TextField
              sx={{ marginBottom: 2 }}
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
            <div className={styles.form_fileInput}>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <Button
              className={styles.form_submit}
              variant="container"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <Button
              className={styles.form_clear}
              variant="container"
              color="secondary"
              size="large"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default Form;
