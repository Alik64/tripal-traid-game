
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

import Container from './components/Container';
import Heading from './components/Heading';
import Text from './components/Text/Text';

import s from './App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading backLine >
              Marvel cards
            </Heading>
            <Heading level={2} >
              Collect your best five
            </Heading>
          </div>

          <div className={s.cardWrap}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

        </Container>
      </section>
      <Footer />
    </div >
  );
}

export default App;
