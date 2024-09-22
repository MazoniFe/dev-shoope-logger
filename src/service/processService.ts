// src/services/processService.ts
import { ApiService } from './api';
import { RouteData } from '../types/types'; // Importar o tipo RouteData, se necessário

export const processService = {
    async getProcessList(): Promise<RouteData[]> { // Define que o retorno é uma Promise de uma lista de RouteData
        try {
            const result = await ApiService.get('process', {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
            return result as RouteData[]; // Assegura que o resultado é tratado como uma lista de RouteData
        } catch (error) {
            console.error('Erro ao buscar lista de processos:', error);
            throw error;
        }
    },

    async insertProcess(data: RouteData): Promise<RouteData> { // Define o retorno como uma Promise de RouteData
        try {
            const result = await ApiService.post('process', data, {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
            return result as RouteData; // Assegura que o resultado é tratado como RouteData
        } catch (error) {
            console.error('Erro ao inserir processo:', error);
            throw error;
        }
    },
};