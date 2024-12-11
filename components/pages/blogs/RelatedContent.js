import React from "react";

import blogs from "../../../constants/blogs.json";
import Card from "./Card";

export default function RelatedContent({ ids }) {
  const blogsArray = blogs?.list?.filter((blog) => ids.includes(blog.id));
  return (
    <div className="w-full">
      <p className="text-2xl md:text-3xl text-center">
        Don't miss these stories:
      </p>
      <p className="tex-base md:text-lg mt-4 font-thin text-justify leading-[24px] md:leading-[40px] text-gray-tertiary">
        If you are looking to get into the software and IT services industry in
        the USA, you’re future couldn’t look brighter. We can help direct you to
        the right companies. Check out our website to know more!
      </p>
      <div className="grid md:px-6 mt-6 md:mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsArray?.map((item) => (
          <Card item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
}
