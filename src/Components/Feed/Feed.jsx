import React from "react";
import { FeedPhotos } from "./FeedPhotos";
import { FeedModal } from "./FeedModal";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState();
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};
