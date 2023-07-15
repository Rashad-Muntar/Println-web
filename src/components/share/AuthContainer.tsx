interface Props {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}
const AuthContainer = ({ children, heading, subHeading }: Props) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center self-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="mb-5 text-xl">{heading}</h1>
        <p className="mb-10 w-[60%] text-center">{subHeading}</p>
      </div>
      {children}
    </div>
  );
};

export default AuthContainer;
