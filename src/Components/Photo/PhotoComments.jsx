import React from "react";
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import { UserContext } from "../../UserContext";
import styles from "./PhotoComments.module.css";

export const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.comment}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};
