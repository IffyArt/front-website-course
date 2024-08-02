import Btn from './components/Btn';

function App() {
  return (
    <div>
      <Btn color='red' onClick={() => console.log('red')} />
      <Btn color='blue' onClick={() => console.log('blue')} />
    </div>
  );
}

export default App;
