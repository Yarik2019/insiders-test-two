import { Triangle } from "react-loader-spinner";

interface LoaderProps {
  height?: number;
  width?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  height = 80,
  width = 80,
  color = "#4fa94d",
}) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Triangle
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
