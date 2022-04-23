import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import RedPlanet from '../components/RedPlanet'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TabBar from '../components/TabBar';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
      </Head>
      <TabBar/>
      <div>
        <Canvas>
          <RedPlanet />
        </Canvas>
      </div>
      <div>

      </div>
    </div>
  )
}
