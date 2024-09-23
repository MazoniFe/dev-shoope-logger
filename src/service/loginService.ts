// src/services/processService.ts
import { ApiService } from './api';
import { IUserLogin } from '../types/types'; // Importar o tipo IRouteData, se necessário

export const loginService = {
    async doLogin(data: IUserLogin): Promise<IUserLogin> { // Define o retorno como uma Promise de IRouteData
        try {
            const result = await ApiService.post('account/login', data, {
                Accept: '*/*',
                'Content-Type': 'application/json',
            });
            return result as IUserLogin; // Assegura que o resultado é tratado como IRouteData
        } catch (error) {
            console.error('Erro ao inserir processo:', error);
            throw error;
        }
    },
};