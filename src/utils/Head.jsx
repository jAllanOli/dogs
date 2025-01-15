import React from "react";

export const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | dogs" || "React App";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description || "");
  }, [props]);
  return <></>;
};
