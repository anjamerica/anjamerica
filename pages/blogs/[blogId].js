import React from "react";
import { useRouter } from "next/router";
import BLG01 from "../../components/pages/blogs/BLG01";
import BLG02 from "../../components/pages/blogs/BLG02";
import BLG03 from "../../components/pages/blogs/BLG03";
import BLG05 from "../../components/pages/blogs/BLG05";
import BLG06 from "../../components/pages/blogs/BLG06";
import BLG07 from "../../components/pages/blogs/BLG07";
import BLG08 from "../../components/pages/blogs/BLG08";
import BLG09 from "../../components/pages/blogs/BLG09";
import BLG10 from "../../components/pages/blogs/BLG10";
import BLG11 from "../../components/pages/blogs/BLG11";

export default function Index() {
  const router = useRouter();

  const { blogId } = router.query;

  const content = ContentHandler(blogId);

  return <div>{content}</div>;
}

function ContentHandler(id) {
  switch (id) {
    case "ANJBLG-01":
      return <BLG01 />;
    case "ANJBLG-02":
      return <BLG02 />;
    case "ANJBLG-03":
      return <BLG03 />;
    case "ANJBLG-05":
      return <BLG05 />;
    case "ANJBLG-06":
      return <BLG06 />;
    case "ANJBLG-07":
      return <BLG07 />;
    case "ANJBLG-08":
      return <BLG08 />;
    case "ANJBLG-09":
      return <BLG09 />;
    case "ANJBLG-10":
      return <BLG10 />;
    case "ANJBLG-11":
      return <BLG11 />;
    default:
      return null;
  }
}
