import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import RedPlanet from '../components/RedPlanet'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TabBar from '../components/TabBar';
import { bgcolor } from '@mui/system';
import { Button } from '@mui/material';
import response from '../components/message_comps/response';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
      </Head>
      <div className={styles.row}>
        <div>
        Logo
        </div>
        <div className={styles.row}>
          <TabBar />
        </div>
      </div>
      <div className={styles.row}>
        <div>
          Mars
        </div>
      </div>


    </div>
  )
}

