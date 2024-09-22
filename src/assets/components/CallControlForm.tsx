import React, { useState } from 'react';
import CoreInput from './CoreInput';
import CoreCheckbox from './CoreCheckbox';
import CoreLoadingBar from './CoreLoadingBar';
import CoreButton from './CoreButton';
import { IRouteData } from '../../types/types';
import { processService } from '../../service/processService';

const CallControlForm: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [routeValue, setRouteValue] = useState('');
    const [benchValue, setBenchValue] = useState('');

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleButtonClick = async () => {
        setLoading(true);
        const newData: IRouteData = {
            id: null,
            station: benchValue,
            route: routeValue,
            time: new Date().toLocaleTimeString(),
            waiting: isChecked,
        };
    
        try {
            setProgress(0);
            
            // Crie uma promessa para esperar o progresso
            const progressPromise = new Promise<void>((resolve) => {
                const intervalId = setInterval(() => {
                    setProgress((prev) => {
                        if (prev >= 100) {
                            clearInterval(intervalId);
                            resolve(); // Resolve a promessa quando o progresso chega a 100
                            return 100;
                        }
                        return Math.min(prev + 5, 100); // Incrementa o progresso
                    });
                }, 50);
            });
    
            // Aguarde a barra de progresso completar
            await progressPromise;
    
            // Após a barra de progresso estar completa, faça a inserção
            await processService.insertProcess(newData);
            setProgress(100); // Define o progresso como completo
        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        } finally {
            setLoading(false); // Para o loading
            setRouteValue('');
            setBenchValue('');
            setIsChecked(false);
        }
    };

    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const fullRegex = /^[A-Ka-k]-?(5[0-2]|[1-4][1-9]|[1-4]\d|[1-9]\d?)$/;

        if (newValue.length === 1 && /^[A-Ka-k]$/.test(newValue)) {
            setRouteValue(newValue.toLocaleUpperCase() + '-');
        } else if (fullRegex.test(newValue)) {
            setRouteValue(newValue);
        }

        if (newValue.length < routeValue.length) {
            if (routeValue.charAt(routeValue.length - 1) === '-') {
                setRouteValue('');
            } else {
                setRouteValue(newValue);
            }
        }
    }

    const handleBenchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const numberRegex = /^(1[0-9]|20|[1-9])$/;

        if (numberRegex.test(newValue)) {
            setBenchValue(newValue);
        } else {
            setBenchValue('');
        }
    };

    const isSubmitButtonDisabled = (): boolean => {
        return routeValue.length < 3 || benchValue.trim() === '';
    };

    const routeInputIsValid = (): boolean => {
        return routeValue.length > 2;
    };

    const benchValueIsValid = (): boolean => {
        return !(benchValue.trim() === '');
    };

    return (
        <div className=' w-full flex flex-col bg-gray-800 outline outline-2 outline-white rounded-xl shadow-md p-6'>
            <h3 className='text-lg md:text-xl font-semibold mb-6 self-center text-white'>
                CONTROLE DE CHAMADA
            </h3>

            <form id='CallControlForm' action="">
                <CoreInput
                    id={'cageInput'}
                    onChange={handleRouteChange}
                    formValidation={true}
                    formDafaultMessage='Rota válida'
                    formValidationFailedMessage='Digite uma rota válida: A-21, C-51'
                    success={routeInputIsValid()}
                    type={'text'}
                    ariaLabel={'Rota'}
                    value={routeValue}
                    placeholder='Qual Rota?'
                    className="mb-4" // Adicionei margem inferior
                />

                <CoreInput
                    id={'benchInput'}
                    onChange={handleBenchChange}
                    formValidation={true}
                    formDafaultMessage='Estação válida'
                    formValidationFailedMessage='Digite uma estação válida: de 1 a 20'
                    success={benchValueIsValid()}
                    type={'text'}
                    ariaLabel={'Estação'}
                    value={benchValue}
                    placeholder='Para qual Estação?'
                    className="mb-4" // Adicionei margem inferior
                />
            </form>

            <div className='flex flex-col items-center'>
                <CoreCheckbox
                    id="wait-checkbox"
                    label="Aguardar na espera"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className='mt-4'>
                    <CoreLoadingBar size={'default'} progress={progress} hidden={!loading}></CoreLoadingBar>
                    <CoreButton
                        label="Chamar Motorista"
                        onClick={handleButtonClick}
                        variant="orange"
                        disabled={isSubmitButtonDisabled()}
                    />
                </div>
            </div>
        </div>
    );
};

export default CallControlForm;
