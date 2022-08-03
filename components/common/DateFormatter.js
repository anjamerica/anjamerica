export const DateFormatter = (dt) => {
  const date = new Date(dt);
  const defaultDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  //   console.log(date);
//   console.log(dt);
//   console.log(defaultDate);
  let today = new Date();
  let diff = parseInt((today - date) / (1000 * 60 * 60 * 24), 10);

  console.log(diff);
  switch (diff) {
    case 0:
      return "Today";

    case 1:
      return "Yesterday";

    case 2:
      return "2 Days ago";
    default:
      return (
        (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
      );
  }
};
