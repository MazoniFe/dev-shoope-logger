// src/services/processService.ts
import { ApiService } from './api';
import { IAPIResponse, IRouteData } from '../types/types'; // Importar o tipo IRouteData, se necessário

export const processService = {
    async getProcessList(): Promise<IRouteData[]> { // Define que o retorno é uma Promise de uma lista de IRouteData
        try {
            const result = await ApiService.get('process', {
                Accept: '*/*',
                'Content-Type': 'application/json',
            });
            return result.content as IRouteData[]; // Assegura que o resultado é tratado como uma lista de IRouteData
        } catch (error) {
            console.error('Erro ao buscar lista de processos:', error);
            throw error;
        }
    },

    async insertProcess(data: IRouteData): Promise<IRouteData> { // Define o retorno como uma Promise de IRouteData
        try {
            const result = await ApiService.post('process', data, {
                Accept: '*/*',
                'Content-Type': 'application/json',
            });
            return result as IRouteData; // Assegura que o resultado é tratado como IRouteData
        } catch (error) {
            console.error('Erro ao inserir processo:', error);
            throw error;
        }
    },

    async clearDatabase(): Promise<IAPIResponse> { // Define o retorno como uma Promise de IRouteData
        try {
            const result = await ApiService.delete('process/clear', {
                Accept: '*/*',
                'Content-Type': 'application/json',
            });
            return result as IAPIResponse; // Assegura que o resultado é tratado como IRouteData
        } catch (error) {
            console.error('Erro ao inserir processo:', error);
            throw error;
        }
    },
};