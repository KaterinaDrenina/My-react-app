import Voting from './components/Voting';
import './App.css';

function App() {

  const emojis = [
    { id: 1, src: 'assets/images/1.jpg', alt: 'Emoji 1', votes: 0},
    { id: 2, src: 'assets/images/2.jpg', alt: 'Emoji 2', votes: 0},
    { id: 3, src: 'assets/images/3.jpeg', alt: 'Emoji 3', votes: 0},
    { id: 4, src: 'assets/images/4.jpeg', alt: 'Emoji 4', votes: 0},
    { id: 5, src: 'assets/images/5.jpeg', alt: 'Emoji 5', votes: 0},
  ];


  return (
    <div className="app">
      <Voting emojis={ emojis }/>
    </div>
  );
}

export default App;
