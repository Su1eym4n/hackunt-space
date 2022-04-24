import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import css from '../styles/Home.module.css'
import LightBulb from '../components/LightBulb'
import ChatPlanet from '../components/ChatPlanet'
import Choice from '../components/Choice';
import Message from '../components/Message';

import Link from 'next/link'


export default function Home() {
  return (
    <div className={css.container}>
{/* head */}
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
        <link rel="stylesheet" href="https://use.typekit.net/lho8hpo.css"></link>
      </Head>
{/* navbar */}
      <div className={css.nav}>
        <img className={css.logo} src="/FINAL_FRONTIER_LOGO.png"/>
        <div className={css.title}>FINAL FRONTIER</div>

        <div className={css.navLinkContainer}>
            <div className={css.navLinkTop}></div>

            <Link href="/chat">
              <div className={css.navLink}>Astronaut Chat</div>
            </Link>
            <Link href="/">
              <div className={css.navLink}>Home</div>
            </Link>
            
        </div>
      </div>
{/* body */}
      <div className={css.body}>
        <div className={css.intro}>
          <div className={css.col1}>
          <div className={css.i1}>Welcome Earthlings</div>
          <div className={css.i2}>Explore galaxies and communicate with</div>
          <div className={css.i2}>astronauts using Final Frontier.</div>
          </div>
         <div className={css.col2}>
           <Canvas
              shadows={true}
              className={css.canvas2}
              camera={{
              position: [1, 1,1],
              }}
          >
              <ambientLight color={"white"} intensity={0.2} />
              <LightBulb position={[0, 5, 3]} />
              <ChatPlanet rotateAmount={0.01} rotateToX={500000}/>
              {/* <OrbitControls/> */}
          </Canvas>
         </div>
        </div>
        <div className={css.info}>Our Solar System by the Numbers</div>
        <div className={css.planets}>
          <div className={css.col}> <img className={css.img} src="/planet1.png"/> 8 <p className={css.text}>planets</p></div>
          <div className={css.col}> <img className={css.img} src="/moon.png"/> 200+ <p className={css.text}>moons</p></div>
          <div className={css.col}> <img className={css.img} src="/asteroid.png"/> 1,113,527 <p className={css.text}>Asteroids</p></div>
          <div className={css.col}> <img className={css.img} src="/comet.png"/> 3,743 <p className={css.text}>Comets</p></div>
        </div>
      </div>
    </div>
  )
}

