import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import RedPlanet from '../components/RedPlanet'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
      </Head>
      <div>
        <Canvas>
          <RedPlanet />
        </Canvas>

      </div>
    </div>
  )
}
