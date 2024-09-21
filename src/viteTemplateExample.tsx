import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-300 to-purple-500 text-white">
      <header className="py-10">
        <div className="flex space-x-10 justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="logo transform hover:scale-110 transition-transform duration-300 ease-in-out"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react transform hover:scale-110 transition-transform duration-300 ease-in-out animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>
      </header>

      <h1 className="text-4xl font-bold mt-8">Vite + React</h1>

      <p className="text-2xl my-6">Contador: <span className="font-mono">{count}</span></p>

      <div className="card flex space-x-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={() => dispatch(increment())}
        >
          Incrementar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={() => dispatch(decrement())}
        >
          Diminuir
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Incrementar em 5
        </button>
      </div>

      <footer className="mt-12">
        <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
          Clique nos logos para saber mais sobre Vite e React.
        </p>
      </footer>
    </div>
  );
}

export default App;
