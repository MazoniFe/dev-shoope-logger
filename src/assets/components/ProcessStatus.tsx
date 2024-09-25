import { useSelector, useDispatch } from "react-redux";
import CoreBadge from "./CoreBadge";
import { IStationColorMap, ProcessState, RootState } from "../../types/types";
import { useEffect, useState } from "react";
import { processService } from "../../service/processService"; // Importe seu serviço
import { setProcessData } from "../../features/process/processSlice";
import { FaClock } from 'react-icons/fa'; // Example ico
import CoreSpinner from "./CoreSpinner";


const ProcessStatus = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: { process: ProcessState }) => state.process.data);
    const user = useSelector((state: RootState) => state.loginForm.user);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const stationColor: IStationColorMap = {
        1: 'bg-red-600',
        2: 'bg-blue-600',
        3: 'bg-green-600',
        4: 'bg-yellow-600',
        5: 'bg-purple-600',
        6: 'bg-orange-600',
        7: 'bg-pink-600',
        8: 'bg-teal-600',
        9: 'bg-indigo-600',
        10: 'bg-gray-600',
        11: 'bg-rose-600',
        12: 'bg-cyan-600',
        13: 'bg-lime-600',
        14: 'bg-emerald-600',
        15: 'bg-sky-600',
        16: 'bg-violet-600',
        17: 'bg-amber-600',
        18: 'bg-fuchsia-600',
        19: 'bg-rose-400',
        20: 'bg-stone-600',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await processService.getProcessList();
                dispatch(setProcessData(result));
                setError('');
            } catch (err) {
                console.log(err);
                setError('Erro de conexão com o servidor');
            }
        };

        fetchData(); // Chamada inicial
        const intervalId = setInterval(() => {
            fetchData();
        }, 2000);

        return () => {
            clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
        };
    }, [dispatch]);

    const clearDatabase = () => {
        setLoading(true); // Ativar o estado de carregamento

        processService.clearDatabase()
            .then((response) => {
                // Aqui você pode lidar com a resposta do serviço
                console.log("Banco de dados limpo com sucesso:", response);
            })
            .catch((error) => {
                // Lida com erros aqui
                console.error("Erro ao limpar o banco de dados:", error);
            })
            .finally(() => {
                setLoading(false); // Desativar o estado de carregamento
            });
    };

    return (
        <div className="flex flex-col p-6 bg-gray-800 outline outline-2 outline-white rounded-xl shadow-md">
            <div className="relative flex items-center mb-4">
                <h3 className="flex-1 text-lg md:text-2xl font-semibold text-center text-white">
                    STATUS DO PROCESSO
                </h3>

                {user !== null && (
                    <div className="flex items-center justify-center relative">
                        {isLoading && (
                            <div className="absolute left-[-15px] sm:left-[-20px] md:left-[-25px] lg:left-[-30px]">
                                <CoreSpinner size="small" />
                            </div>
                        )}
                        <button
                            className={`ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={clearDatabase}
                            disabled={isLoading}
                        >
                            Deletar
                        </button>
                    </div>
                )}
            </div>

            {error && <p className="text-center text-red-600">{error}</p>}

            <div className="relative overflow-y-auto max-h-96"> {/* Ajuste a altura máxima conforme necessário */}
                <table className={`min-w-full table-auto border-collapse`}>
                    <thead className="bg-orange-500 rounded-xl shadow-md sticky top-0"> {/* Adicionado sticky para o cabeçalho */}
                        <tr>
                            <th className="px-2 py-3 text-left text-white text-base lg:text-xl font-medium sm:text-sm min-w-[100px]">ESTAÇÃO</th>
                            <th className="px-2 py-3 text-left text-white text-base lg:text-xl font-medium sm:text-sm min-w-[100px]">ROTA</th>
                            <th className="px-2 py-3 text-left text-white text-base lg:text-xl font-medium sm:text-sm min-w-[100px]">HORÁRIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length < 1 ? (
                            <tr>
                                <td colSpan={3} className="px-4 py-4 text-center text-gray-300 text-base sm:text-sm">
                                    Nenhum dado disponível
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-700 transition duration-200">
                                    <td className="px-2 py-4 text-gray-300 align-middle">
                                        <CoreBadge
                                            text={item.station}
                                            color={stationColor[Number(item.station)]}
                                            size="medium"
                                        />
                                    </td>
                                    <td className="px-2 flex py-4 font-semibold text-gray-300 text-base lg:text-2xl align-middle">
                                        {item.route}
                                        {item.waiting ? (
                                            <div className="ml-2 flex items-center">
                                                <div className="hidden md:flex">
                                                    <CoreBadge
                                                        text="Em espera"
                                                        color={stationColor[1]}
                                                        size="smedium"
                                                    />
                                                </div>
                                                <div className="md:hidden flex items-center">
                                                    <FaClock className="text-yellow-500" />
                                                </div>
                                            </div>
                                        ) : null}
                                    </td>
                                    <td className="px-2 py-4 font-semibold text-gray-300 text-base md:text-base lg:text-2xl align-middle">
                                        {item.time}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default ProcessStatus;
