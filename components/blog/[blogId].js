// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import BlogCard from "../../components/blog/BlogCard";
// import BlogContent from "../../components/blog/BlogContent";
// import data from "../../components/blog/BlogData";
// import Footer from "../../components/landin/Footer";
// import Header from "../../components/landin/Header";

// const details = data;
// export default function Index() {
//   const router = useRouter();
//   // const [details,setDetails] = useState()
//   const { blogId } = router.query;
//   const found = details.filter((obj) => {
//     return obj.blogId === blogId;
//   });
//   return (
//     <main className="mx-auto w-full h-full snap-y">
//       <Header />
//       <section>
//         <div>
//           {found &&
//             found.map((item, i) => {
//               return (
//                 <div className="relative w-full h-full" key={i}>
//                   <div className="relative">
//                     <div className="img-gradient">

//                     <img
//                       src={item.img}
//                       className="w-full h-[80vh]"
//                     /></div>
//                     <div className="absolute top-[30%] right-[50%] translate-x-[50%] translate-y-[50%]">
//                       <div className="flex flex-col text-center">
//                         <span className="text-normal-landing font-semibold">
//                           {item.date}
//                         </span>
//                         <span className="text-anim-blog text-white text-[2rem] font-semibold">
//                           {item.header}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="-mt-[8%] p-5 md:p-10 w-full">
//                     <BlogContent item={item} />
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </section>
//       <section>
//       <div className="flex flex-col gap-4 mt-4 text-center w-full">
//         <span className="text-[#b6b6b6] text-xl w-full self-center">Don&apos;t miss these stories&colon;</span>
//         <div className='p-5 md:p-10 grid grid-cols-1 w-full h-full gap-4 md:gap-4 xl:gap-10 md:grid-cols-3'><BlogCard/></div>


//         </div>
//       </section>
      

//       {/* <section>
//         <Footer/>
//     </section> */}
//     </main>
//   );
// }
