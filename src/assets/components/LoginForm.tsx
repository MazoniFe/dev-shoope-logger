import React, { useEffect, useState } from 'react';
import CoreInput from './CoreInput';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoginForm, login } from '../../features/loginForm/loginSlice';
import { IUserLogin, RootState } from '../../types/types';
import { loginService } from '../../service/loginService';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoginFormVisible = useSelector((state: RootState) => state.loginForm.isVisible);


    useEffect(() => {
        // Se a modal não estiver visível, resetar os valores do formulário
        if (!isLoginFormVisible) {
            setUsername('');
            setPassword('');
        }
    }, [isLoginFormVisible]); // Executar quando isLoginFormVisible mudar

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const callLoginAPI = async () => {
        const data: IUserLogin = {
            email: username,
            password: password,
        };
    
        try {
            setLoading(true);
            const response = await loginService.doLogin(data);
            
            console.log('Login bem-sucedido:', response);
            dispatch(login(response)); 
            dispatch(hideLoginForm());
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = async (e: React.FormEvent) => {
        e.preventDefault();
        await callLoginAPI();
    };

    return (
        <form id='LoginForm' onSubmit={handleButtonClick} className="flex flex-col">
            <CoreInput
                id='usernameInput'
                onChange={handleUsernameChange}
                formValidation={true}
                formDafaultMessage='Email válido'
                formValidationFailedMessage='Email um usuário válido'
                success={username.length > 0} // Condição de sucesso
                type='text'
                ariaLabel='Email'
                value={username}
                placeholder='Digite um email'
                className="mb-4"
            />

            <CoreInput
                id='passwordInput'
                onChange={handlePasswordChange}
                formValidation={true}
                formDafaultMessage='Senha válida'
                formValidationFailedMessage='Digite uma senha válida'
                success={password.length >= 6} // Exemplo: senha deve ter pelo menos 6 caracteres
                type='password'
                ariaLabel='Senha'
                value={password}
                placeholder='Digite um senha'
                className="mb-4"
            />

            <div className='my-3'>
                <button
                    type='submit'
                    className={`bg-blue-500 w-full text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Login'}
                </button>
            </div>

        </form>
    );
};

export default LoginForm;
