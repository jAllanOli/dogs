export const Error = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};
