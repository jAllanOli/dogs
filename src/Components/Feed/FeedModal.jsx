import React from "react";
import { Error } from "../../utils/Error";
import { Loading } from "../../utils/Loading";
import { useFetch } from "../../hooks/useFetch";
import { PhotoContent } from "../Photo/PhotoContent";
import { PHOTO_GET } from "../../Api";
import styles from "./FeedModal.module.css";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    }

    fetchPhoto();
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
