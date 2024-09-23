import { useSelector, useDispatch } from "react-redux";
import CoreBadge from "./CoreBadge";
import CoreSpinner from './CoreSpinner';
import { IStationColorMap, ProcessState } from "../../types/types";
import { useEffect, useState } from "react";
import { processService } from "../../service/processService"; // Importe seu serviço
import { setProcessData } from "../../features/process/processSlice";
import { FaClock } from 'react-icons/fa'; // Example ico


const ProcessStatus = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: { process: ProcessState }) => state.process.data);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
            setLoading(true);
            try {
                const result = await processService.getProcessList();
                dispatch(setProcessData(result));
            } catch (err) {
                setError('Erro de conexão com o servidor');
                
                // Define um timeout para limpar a mensagem de erro após 5 segundos
                setTimeout(() => {
                    setError(null);
                }, 5000);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [dispatch]);
    

    return (
        <div className="flex flex-col p-6 bg-gray-800 outline outline-2 outline-white rounded-xl shadow-md">
            <div className="relative flex items-center mb-4">
                <h3 className="flex-1 text-lg md:text-2xl font-semibold text-center text-white">
                    STATUS DO PROCESSO
                </h3>
                {loading && (
                    <div className="absolute right-0">
                        <CoreSpinner size="medium" />
                    </div>
                )}
            </div>


            {error && <p className="text-center text-red-600">{error}</p>}
            <div className="relative overflow-x-auto">
                <table className={`min-w-full table-auto border-collapse`}>
                    <thead className="bg-orange-500 rounded-xl shadow-md">
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
                                                {/* Render CoreBadge for larger screens */}
                                                <div className="hidden md:flex">
                                                    <CoreBadge
                                                        text="Em espera"
                                                        color={stationColor[1]}
                                                        size="smedium"
                                                    />
                                                </div>
                                                {/* Render icon for smaller screens */}
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
