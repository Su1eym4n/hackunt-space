import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import css from '../styles/Home.module.css'
import TabBar from '../components/TabBar';
import LightBulb from '../components/LightBulb'
import ChatPlanet from '../components/ChatPlanet'
import Choice from '../components/Choice';
import Message from '../components/Message';
import TypeAnim from '../components/TypeAnim';
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
        <TabBar className={css.tab}/>
      </div>
{/* body */}
      <div className={css.body}>
        <div className={css.intro}>
          <div className={css.col1}>
          <div>Welcome Earthlings</div>
          <div>Explore galaxies and communicate with astronauts using Final Frontier.</div>
          </div>
         <div className={css.col2}>
          <Canvas
              shadows={true}
              className={css.canvas2}
              camera={{
              position: [2, 2, 2],
              }}
          >
              <ambientLight color={"white"} intensity={0.2} />
              <LightBulb position={[0, 5, 3]} />
              <ChatPlanet rotateX={5} rotateY={5} />
              {/* <OrbitControls/> */}
          </Canvas>
         </div>
        </div>
        <div>Our Solar System by the Numbers</div>
        <div className={css.planets}>
          <div className={css.col}> 8 planets</div>
          <div className={css.col}> 200+ moons</div>
          <div className={css.col}> 1,113,527 Asteroids</div>
          <div className={css.col}> 3,743 Comets</div>
        </div>
      </div>
    </div>
  )
}

