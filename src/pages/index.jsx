import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import * as Style from "../styles/style";
import { Colors } from "../styles/colors";

// React Icons
import Tilt from "react-parallax-tilt";
import Fade from "react-awesome-reveal";
import { MdEmail } from "react-icons/md";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { FaTiktok, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

// Components
import Particulas from "../components/Particulas";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Walyson Moura</title>
        <meta name="description" content="Links sociais Walyson Moura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particulas />

      <div className="btnFloat">
        <button>
          <Link
            target="_blank"
            href="mailto:walysonmoura222@gmail.com?subject=Walyson%20Moura&body=Olá%20quero%20saber%20mais%20sobre%20seu%20trabalho"
          >
            <MdEmail size={40} color={Colors.azul1} />
          </Link>
        </button>
        <div className="cicle1"></div>
        <div className="cicle2"></div>
        <div className="cicle3"></div>

        <button>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+5585987520858&text=Olá%20quero%20saber%20mais%20sobre%20seu%20trabalho"
          >
            <FaWhatsapp size={40} color={Colors.azul1} />
          </Link>
        </button>
      </div>

      <Style.Container>
        <Fade direction="right" cascade>
          <Style.Imagem>
            <Tilt
              className="tilt-img"
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
              style={{ position: "absolute" }}
            >
              <Image
                className="img"
                src="/Images/walyson1.png"
                width={300}
                height={300}
                alt="img"
                style={{ position: "absolute" }}
              />
            </Tilt>
          </Style.Imagem>
          <Style.Principal>
            <h1>Walyson Moura</h1>
            <h3>Full stack developer, Freelancer and entrepreneur</h3>

            <Button
              icon={<BiCodeAlt size={25} />}
              nome="Portifólio"
              link="http://portifolio-walyson-moura.vercel.app/"
            />
          </Style.Principal>
          <Style.Links>
            <Button
              icon={<FiGithub size={20} />}
              nome="Github"
              link="https://github.com/WalysonMoura"
            />
            <Button
              icon={<FiInstagram size={20} />}
              nome="Instagram"
              link="https://www.instagram.com/walysonmoura222/"
            />
            <Button
              icon={<FiYoutube size={20} />}
              nome="Youtube"
              link="https://youtube.com/channel/UCiR6SbMp6t3SDIZ2w0zqHfg"
            />
            <Button
              icon={<FiFacebook size={20} />}
              nome="Facebook"
              link="https://www.facebook.com/Walyson-Moura-103495168790253/"
            />
            <Button
              icon={<FiLinkedin size={20} />}
              nome="Linkedin"
              link="https://br.linkedin.com/in/walyson-moura-302562218"
            />
            <Button
              icon={<FaTiktok size={20} />}
              nome="Tiktok"
              link="http://tiktok.com/@walysonmoura222"
            />
            <Button
              icon={<FaPinterestP size={20} />}
              nome="Pinterest"
              link="https://pin.it/16hFBE9"
            />
          </Style.Links>
        </Fade>
        <Style.wg>
          <h2>Conheça a minha empresa!</h2>
        </Style.wg>
        <Style.ecommerce>
          <h2>Conheça o meu E-commerce!</h2>

          <Image
            src="/Images/notbook.png"
            alt="logo WizenShop"
            width={700}
            height={475}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Style.ecommerce>
      </Style.Container>
    </>
  );
}
