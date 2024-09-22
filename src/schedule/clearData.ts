import { processService } from "../service/processService";

const clearDataSchedule = async (): Promise<void> => {
    const checkTime = async () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        // Verifica se é 20h
        if (hours >= 17 && minutes >= 42) {
            console.log('Limpando o estado do processSlice às 20h...');
            await processService.clearDatabase();
            console.log('Dados Limpos do Banco');
        }
    };

    // Verifica a hora a cada minuto (60000 ms)
    setInterval(checkTime, 60000);
};

export default clearDataSchedule;


