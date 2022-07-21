// import React from "react";
// import Link from "next/link";
// import data from "./BlogData";

// export default function BlogCard() {

//   return (
//     <>
//       {data.map((item, i) => {
//         return (
//           <div
//             className="rounded-xl w-fit  h-full bg-[#F0F0F0] drop-shadow-xl"
//             key={i}
//           >
//             <img src={item.img} className="w-full rounded-t-xl h-[40%]" />
//             <div className="p-5 flex flex-col justify-evenly gap-4">
//               <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
//                 {item.date}
//               </span>
//               <p className="text-primary-blue-dark md:text-base xl:text-xl font-bold break-words">
//                 {item.header}
//               </p>
//               <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
//                 {item.content}
//               </p>
//               <Link href={`/blogs/${item.blogId}`} passHref>
//                 <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
//                   READ MORE
//                 </span>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
