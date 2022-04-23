import React from 'react'
import { Canvas} from '@react-three/fiber'
import RedPlanet from '../components/RedPlanet'
import styles from '../styles/Home.module.css'
function home() {
    return (
        <div className={styles.container}>
            <div>
                <Canvas>
                    <RedPlanet />
                </Canvas>
            </div>
        </div>
    )
}

export default home
