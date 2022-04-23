import Head from 'next/head'
import css from '../styles/Home.module.css'
import TabBar from '../components/TabBar';

export default function Home() {
  return (
    <div className={css.container}>
{/* head */}
      <Head>
        <title>Mars</title>
        <link rel="icon" href="/mars.png" />
        <link rel="stylesheet" href="https://use.typekit.net/lho8hpo.css"></link>
      </Head>
<<<<<<< HEAD

=======
{/* navbar */}
>>>>>>> 9abf98e8e29d1bd8a38dc49f62e2ccd39196c44f
      <div className={css.nav}>

        <div className={css.title}>
          Final Frontier
        </div>
        <TabBar className={css.tab}/>
      </div>
<<<<<<< HEAD
      
=======
{/* body */}
      <div>
>>>>>>> 9abf98e8e29d1bd8a38dc49f62e2ccd39196c44f

    </div>
  )
}

