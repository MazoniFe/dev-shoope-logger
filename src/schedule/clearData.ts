import { store } from '../store/store';
import { clearData } from '../features/process/processSlice';

const clearDataSchedule = (): void => {
    const checkTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        // Verifica se é 20h
        if (hours === 0 && minutes === 0) {
            console.log('Limpando o estado do processSlice às 20h...');
            store.dispatch(clearData());
        }
    };

    // Verifica a hora a cada minuto (60000 ms)
    setInterval(checkTime, 60000);
};

export default clearDataSchedule;


