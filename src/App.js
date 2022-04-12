
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Text from './components/Text/Text';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
