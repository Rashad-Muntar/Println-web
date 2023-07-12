import { Puff } from "react-loader-spinner";
interface Props {
  color: string;
  height?: string;
  width?: string;
}
const Spinner = ({ color, height, width }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Puff
        height={height}
        width={width}
        radius={1}
        color={color}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;