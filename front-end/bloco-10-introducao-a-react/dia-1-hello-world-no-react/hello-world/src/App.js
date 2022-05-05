import './App.css';

const tarefas = [
  'Ir à obra',
  'Comprar material',
  'Pagar contas',
  'Passar na padaria'
];

const Task = (value, index) => {
  return (
    <li key={value}>{value}</li>
  )
}

function App() {
  return (
    <div className='App'>
    <h1>{Task('Lista de tarefas:')}</h1>
    {tarefas.map((tarefa, index) => Task(tarefa, index))}
    </div>
  );
}

export default App;
