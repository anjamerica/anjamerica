export const ClientCard = ({ item }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="w-16 h-16 block">
        <img className="w-full" src={item?.icon} />
      </span>
      <h3 className="text-2xl font-semibold py-4">{item?.title}</h3>
      <p className="text-center">{item?.description}</p>
    </div>
  );
};

export const OnboardingCard = ({ item }) => {
  return (
    <div className="w-full bg-secondary-4 border-4  border-opacity-30 border-solid border-secondary-5 p-4 rounded-2xl bg-opacity-60">
      <h3 className="text-2xl font-opensans font-semibold pb-2 text-white">{item?.title}</h3>
      <p className="">
        {item?.description}
      </p>
    </div>
  );
};
