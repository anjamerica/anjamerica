// import React, { useState, useEffect, useContext } from "react";
// import JobCard from "../../components/career/JobCard";
// import Footer from "../../components/landin/Footer";
// import Header from "../../components/landin/Header";
// import Loader from "../../components/layout/Loader";
// import { loadingContext } from "../../hooks/loadingContext";
// import { getJobDetails } from "../../services/JobDetails";

// export default function Career() {
//   const [jobData, setJobData] = useState([]);
//   const { loaderToggler } = useContext(loadingContext);

//   useEffect(() => {
//     const getDetails = async () => {
//       try {
//         //get job details
//         loaderToggler(true);
//         const response = await getJobDetails();
//         setJobData(response.data.payload);
//         loaderToggler(false);
//       } catch (err) {
//         console.error(err?.response?.data?.message);
//         loaderToggler(false);
//       }
//     };
//     getDetails();
//   }, []);

//   console.log(jobData);

//   return (
//     <main className="relative mx-auto w-full h-full snap-y">
//       <section className="relative">
//         <div
//           style={{
//             // background: `url(${"/landing/career.png"})`,
//             objectFit: "cover",
//             backgroundSize: "100%",
//             backgroundRepeat: "no-repeat",
//           }}
//           className="w-full lg:h-[18rem] h-full bg-image-mobile lg:-mt-[80px] sm:bg-image-web-career"
//         >
//           <div className=" h-[224px] sm:h-[227px]  pt-10 pb-20  w-full">
//             <div className="flex h-full flex-col justify-center mt-[20px] self-center items-center">
//               <div className="flex justify-center">
//                 <span className="text-[#FFD700] text-[.85rem] md:text-[16px] 2xl:text-[20px] font-[700]">
//                   EXPLORE A CAREER AT Future Forward
//                 </span>
//               </div>
//               <div className="text-anim-blog  text-[24px]  font-[900] sm:text-[34px] xl:text-[36px] 2xl:text-[42px] text-[#0339D9] uppercase heading-main">
//                 Join us
//               </div>
//               <div className="flex items-center justify-center mt-2">
//                 <span className="text-primary-gray  text-[16px] text-center  md:text-[18px] 2xl:text-[20px] w-[13rem] sm:w-full ">
//                   New jobs everyday - Leave us your resume for future
//                   opportunities!
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <hr className="h-[5px] bg-primary-blue" />
//       <section id="career">
//         <Loader />
//         {jobData.length > 0 ? (
//           <div className="flex flex-col justify-center items-center py-10 gap-4">
//             <div
//               className="px-5 w-full flex flex-col gap-8 md:px-10"
//               data-aos="fade-down"
//             >
//               {jobData &&
//                 jobData.map((item, i) => {
//                   return (
//                     <div key={i}>
//                       <JobCard item={item} />
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         ) : (
//           <div className="w-full h-fit pb-10 flex flex-col justify-start md:justify-center">
//             <img
//               alt="no data"
//               src="/admin/no_content.png"
//               className="w-96 h-[15rem] md:h-[20rem] md:self-center object-contain"
//             />
//             <p className="font-semibold  text-primary-gray self-center">
//               No Jobs Available
//             </p>
//           </div>
//         )}
//       </section>
//       <section>
//         <Footer />
//       </section>
//     </main>
//   );
// }


import React from 'react'

export default function index() {
  return (
    <div></div>
  )
}

