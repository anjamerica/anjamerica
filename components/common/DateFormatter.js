export const DateFormatter = (dt) => {
  const date = new Date(dt);
  return (
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
  );
};