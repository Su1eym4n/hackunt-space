import Head from 'next/head'
import css from '../styles/Home.module.css'
import TabBar from '../components/TabBar';
import Choice from '../components/Choice';
import Message from '../components/Message';

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

        <div className={css.title}>
          Final Frontier
        </div>
        <TabBar 
        page="Home"
        className={css.tab}/>
      </div>

      <Choice
        text="as"
      />
      <Message 
      text="kyoyo wassap"
      sender="a"
      />
{/* body */}
 

    </div>
  )
}

