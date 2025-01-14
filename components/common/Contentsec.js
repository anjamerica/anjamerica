import React from 'react'

const Contentsec = ({item}) => {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-white">
    <div className="w-full flex justify-center">
    </div>
    <div className="flex justify-center pt-8 xl:pb-20">
      <div className="w-full max-w-[1300px] flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full xl:w-[45%]">
          <img
            className={`w-[511.64px] h-[352px] rounded-xl  object-cover max-h-[450px] ${item?.imageStyle}`}
            src={item?.img}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="w-full xl:w-[45%]"
        >
          {item?.para?.map((item, i) => (
            <div className="mb-2" key={i}>
              <p
                key={i}
                className="text-base mt-5 md:mt-7 mx-[-29px] leading-[32px] text-justify font-normal text-gray-dark"
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contentsec
