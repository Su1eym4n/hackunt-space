import Head from 'next/head'
import css from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import RedPlanet from '../components/RedPlanet'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TabBar from '../components/TabBar';
export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
        <link rel="stylesheet" href="https://use.typekit.net/lho8hpo.css"></link>
      </Head>
      <div className={css.nav}>
        <div className={css.title}>
          Final Frontier
        </div>
        <TabBar className={css.tab}/>
      </div>
      
      
      <div>

      </div>
    </div>
  )
}
