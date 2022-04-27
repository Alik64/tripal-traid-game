import ava from "./assets/images/ava.jpg";
import { ReactComponent as GitHub } from "./assets/images/github.svg";
import { ReactComponent as LinkedIn } from "./assets/images/linkedin.svg";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={s.root}>
      <Container className={s.container}>
        <div className={s.imgWrap}>
          <img src={ava} alt="Avatar" className={s.avatar} />
        </div>
        <section className={s.description}>
          <section className={s.description_headings}>
            <Heading backLine>Albert BARSAMOV </Heading>
            <Heading level={2} className={s.dev}>
              React Developer <ReactLogo className={s.logo} />
            </Heading>
            <Heading level={3}>
              {" "}
              " Anything you can imagine can be coded! ;) "
            </Heading>
          </section>
          <section className={s.description_about}>
            <br />
            <Heading level={4} backLine>
              About me
            </Heading>
            <Text>
              Self-taught, persevering, autonomous, organized, in constant
              technological evolution.​
            </Text>
            <br />
            <Text>
              I am convinced that my diversified experience will allow me to put
              all my skills at the service of an ambitious and successful group.
            </Text>
          </section>
          <br />
          <section>
            <Heading level={4} backLine>
              Follow me
            </Heading>
            <div className={s.socials}>
              <a
                href="https://github.com/Alik64"
                target="_blank"
                rel="noreferrer noopener"
                className={s.socials_link}
              >
                <GitHub className={s.socials_ico} />
                <Text>GitHub</Text>
              </a>

              <a
                href="https://www.linkedin.com/in/albert-64/"
                target="_blank"
                rel="noreferrer noopener"
                className={s.socials_link}
              >
                <LinkedIn className={s.socials_ico} />
                <Text>LinkedIn</Text>
              </a>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Contacts;
