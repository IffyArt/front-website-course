import Header from './components/Header';
import './styles/style.css';

function App() {
  return (
    <div>
      <Header />
      <div
        className='btn-group'
        role='group'
        aria-label='Basic mixed styles example'
      >
        <span className='material-symbols-outlined'>logout</span>
        <button type='button' className='btn btn-danger'>
          Left
        </button>
        <button type='button' className='btn btn-warning'>
          Middle
        </button>
        <button type='button' className='btn btn-success'>
          Right
        </button>
      </div>
    </div>
  );
}

export default App;
