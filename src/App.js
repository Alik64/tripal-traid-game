
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Text from './components/Text/Text';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Text element='div' disabled strong italic>
        Hello world
      </Text>
      <Footer />
    </div>
  );
}

export default App;
