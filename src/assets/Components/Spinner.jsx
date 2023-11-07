import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <InfinitySpin
                width='200'
                color="#3B82F6"
            />
        </div>
    );
};

export default Spinner;