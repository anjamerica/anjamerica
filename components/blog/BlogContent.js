import React from "react";

export default function BlogContent({ item }) {
  const count = 1;

  console.log(item);
  return (
    <div className="w-full h-fit bg-white rounded-xl drop-shadow-lg p-5 md:p-10">
      <div className="flex flex-col gap-4">
        <p className="text-[#333] text-xs xl:text-base font-light break-words">
          {item.contentFull}
        </p>
        <p className="text-[1rem] text-[#333] break-words  font-semibold">
          {item.subHeader}
        </p>
        <div>
          {item.subContent && item.subContent.map((data, i) => {
            return (
              <div className="gap-4 flex" key={i}>
                <div className="flex flex-row my-2 ml-8 gap-1">
                  <span className="text-[#333] text-xs xl:text-base font-light ">
                    {count++}.
                  </span>{" "}
                  &nbsp; &nbsp;
                  <p className="text-[1rem] text-[#333] break-words  font-semibold">
                    {data.header}{" "}
                    <span className="text-[#333] text-xs xl:text-base font-light break-words">
                      {data.content}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {item.paragraph && item.paragraph.map((item, i) => {
            return (
                <div className="flex flex-col gap-2 my-4" key={i}>
                    <p className="text-[1rem] text-[#333] break-words  font-semibold">{item.header}</p>
                    <span className="text-[#333] text-xs xl:text-base font-light break-words">{item.content}</span>
                </div>
            )
          })}
        </div>
        <div className="text-[#333] text-xs xl:text-base font-light break-words">
          {item.conclution}
        </div>
      </div>
    </div>
  );
}
