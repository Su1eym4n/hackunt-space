import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import css from '../styles/Home.module.css'
import LightBulb from '../components/LightBulb'
import ChatPlanet from '../components/ChatPlanet'
import Choice from '../components/Choice';
import Message from '../components/Message';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
            <Link href="/chat"><div className={css.navLink}>Astronaut Chat</div></Link>
            <Link href="/"><div className={css.navLink}>Home</div></Link>
        </div>
      </div>
{/* body */}
      <div className={css.body}>
        {/* main text and planet */}
        <div className={css.intro}>
          {/* main text */}
          <div className={css.col1}>
          <div className={css.i1}>Welcome Earthlings</div>
          <div className={css.i2}>Explore galaxies and communicate with</div>
          <div className={css.i2}>astronauts using Final Frontier.</div>
        </div>
        {/* planet */}
         <div className={css.col2}>
           <Canvas
              shadows={true}
              className={css.canvas}
              camera={{
              position: [1, 1,1],
              }}
          >
              <ambientLight color={"white"} intensity={0.2} />
              <LightBulb position={[0, 5, 3]} />
              <ChatPlanet rotateAmount={0.0075} rotateToX={500000}/>
              {/* <OrbitControls/> */}
          </Canvas>
         </div>
        </div>
{/* mars weather */}
{/* number facts */}
        <div className={css.info}>Our Solar System by the Numbers</div>
        <div className={css.planets}>
          <div className={css.col}> <img className={css.img} src="/planet1.png"/> 8 <p className={css.text}>Planets</p></div>
          <div className={css.col}> <img className={css.img} src="/moon.png"/> 200+ <p className={css.text}>Moons</p></div>
          <div className={css.col}> <img className={css.img} src="/asteroid.png"/> 1,113,527 <p className={css.text}>Asteroids</p></div>
          <div className={css.col}> <img className={css.img} src="/comet.png"/> 3,743 <p className={css.text}>Comets</p></div>
        </div>
{/* story cards */}
        <div className={css.info}>Stories</div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/mars.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    </div>
  )
}

