import { useDispatch, useSelector } from "react-redux"; // Importando useDispatch
import CallControlForm from "./assets/components/CallControlForm";
import ProcessStatus from "./assets/components/ProcessStatus";
import LoginForm from "./assets/components/LoginForm";
import { RootState } from "./types/types";
import { hideLoginForm } from "./features/loginForm/loginSlice";
import { MdClose } from "react-icons/md"; // Importando o ícone de fechar

const App = () => {
    const dispatch = useDispatch(); // Inicializando dispatch
    const isLoginFormVisible = useSelector((state: RootState) => state.loginForm.isVisible);
    
    const handleClose = () => {
        dispatch(hideLoginForm()); // Dispara a ação para esconder o formulário de login
    };

    return (
        <div className="grid min-h-screen bg-gray-800 grid-rows-5 px-10 py-6 gap-6 relative">
            <div className="row-span-1 flex items-center justify-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png"
                    className="w-20 lg:w-22 h-auto rounded-lg shadow-md"
                    alt=""
                />
            </div>
            <div className="row-span-4 grid grid-cols-1 md:grid-cols-5 justify-items-center align-items-center gap-4">
                <div className="w-full md:col-span-2">
                    <CallControlForm />
                </div>
                <div className="w-full md:col-span-3">
                    <ProcessStatus />
                </div>
            </div>

            {/* Fundo fumê e formulário de login */}
            {isLoginFormVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 w-80 md:w-1/3 lg:w-1/4 px-8 py-6 rounded-lg shadow-lg transition-transform transform">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-semibold text-center text-gray-200">Acesso Admin</h4>
                            <button onClick={handleClose} className="text-gray-400 hover:text-gray-200">
                                <MdClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
