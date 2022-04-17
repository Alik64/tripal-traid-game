
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

import Container from './components/Container';
import Heading from './components/Heading';


import s from './App.module.scss';
import CharacterCard from './components/CharacterCard';

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
            <div>
              <CharacterCard />
            </div>
            <div>
              <CharacterCard />
            </div>
            <div>
              <CharacterCard />
            </div>

          </div>

        </Container>
      </section>
      <Footer />
    </div >
  );
}

export default App;
