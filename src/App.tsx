import CallControlForm from "./assets/components/CallControlForm";
import ProcessStatus from "./assets/components/ProcessStatus";
const App = () => {
    return (
        <div className="grid min-h-screen bg-gray-800 grid-rows-5">
            <div className="row-span-1 flex items-center justify-center">
                <img
                    src="../public/images/Shopee_logo.svg.png"
                    className="w-20 lg:w-22 h-auto rounded-lg shadow-md"
                    alt=""
                />
            </div>

            <div className="row-span-4 grid grid-cols-1 md:grid-cols-2 justify-items-center align-items-center gap-4">
                <div className="w-full md:w-2/3">
                    <CallControlForm />
                </div>
                <div className="w-full md:w-2/3">
                    <ProcessStatus />
                </div>
            </div>
        </div>
    );
};

export default App;


