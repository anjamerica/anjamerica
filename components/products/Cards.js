// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// export default function Cards() {
//   return (
//     <div className="p-5 sm:px-[50px] md:px-[150px]">
//       <Swiper
//         slidesPerView={1}
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//       >
//         <SwiperSlide>
//           <div>
//             <Card1 />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <Card2 />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <Card3 />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// const Card1 = () => {
//   return (
//     <div className="flex flex-col w-full lg:flex-row-reverse justify-between gap-0 md:gap-10 fade-in">
//       <img
//         alt="product image"
//         src="/assets/landing/product.svg"
//         className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mt-0 flex self-center lg:self-start  md:mt-0"
//       />
//       <div>
//         <p className="text-primary-blue  heading-main  md:w-full py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base text-[24px] 2xl:text-[30px]">
//           Vita Insurance Agency Management System
//         </p>
//         <p className="flex flex-col items-start text-[#535353] heading-main font-semibold text-[16px] sm:text-[24px] 2xl:text-[30px] break-words mt-2 text-left mx-[2.5rem] md:mx-0 ">
//           It’s time to Digitize your Insurance Agency Instant Service for
//           Customers
//         </p>
//         <div className="mt-4 mx-[2.5rem] md:mx-0 self-left">
//           <svg
//             width="108"
//             height="3"
//             viewBox="0 0 108 3"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M107.5 0L0 2L107.5 3V0Z" fill="#07038C" />
//           </svg>
//         </div>
//         <div className="flex flex-col items-left gap-2 2xl:gap-4 break-words mt-8 mx-[2.5rem] md:mx-0">
//           <div className="flex flex-row gap-2">
//             <ul>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Flexibility for Staff
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Operational efficiency
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Increase profitability
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card2 = () => {
//   return (
//     <div className="flex flex-col w-full lg:flex-row-reverse justify-between gap-0 md:gap-10 fade-in">
//       <img
//         alt="product image"
//         src="/assets/landing/product_2.svg"
//         className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mt-0 flex self-center lg:self-start  md:mt-0"
//       />
//       <div>
//         <p className="text-primary-blue  heading-main  md:w-full py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base text-[24px] 2xl:text-[30px]">
//           Online Enrollment system
//         </p>
//         <div className="mt-4 mx-[2.5rem] md:mx-0 self-left">
//           <svg
//             width="108"
//             height="3"
//             viewBox="0 0 108 3"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M107.5 0L0 2L107.5 3V0Z" fill="#07038C" />
//           </svg>
//         </div>
//         <div className="flex flex-col items-left gap-2 2xl:gap-4 break-words mt-8 mx-[2.5rem] md:mx-0">
//           <div className="flex flex-row gap-2">
//             <ul>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Simple, Seamless & Secure Plan Selection
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Easy Enrolment
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   All under one roof
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card3 = () => {
//   return (
//     <div className="flex flex-col w-full lg:flex-row-reverse justify-between gap-0 md:gap-10 fade-in">
//       <img
//         alt="product image"
//         src="/assets/landing/product.svg"
//         className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mt-0 flex self-center lg:self-start  md:mt-0"
//       />
//       <div>
//         <p className="text-primary-blue  heading-main  md:w-full py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base text-[24px] 2xl:text-[30px]">
//           Commission Tracking system
//         </p>
//         <div className="mt-4 mx-[2.5rem] md:mx-0 self-left">
//           <svg
//             width="108"
//             height="3"
//             viewBox="0 0 108 3"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M107.5 0L0 2L107.5 3V0Z" fill="#07038C" />
//           </svg>
//         </div>
//         <div className="flex flex-col items-left gap-2 2xl:gap-4 break-words mt-8 mx-[2.5rem] md:mx-0">
//           <div className="flex flex-row gap-2">
//             <ul>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Accurate Calculations
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Unlimited Commission Splits
//                 </span>
//               </li>
//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Email individual Reports at a click
//                 </span>
//               </li>

//               <li className="flex flex-row gap-2 items-center my-2">
//                 <span>
//                   <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
//                 </span>
//                 <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
//                   Agent access to commissions round the clock
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
