import Head from 'next/head'
import css from '../styles/Home.module.css'
import TabBar from '../components/TabBar';
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
      text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru9tijokpti0u9t hrij4kogkrti0u9hir4nkljrkothi ren4kmlrgkogjnfhietink43mlokjtihnkm4l3kjoehienk5mhjongftk5sap"
      sender="a"
      />
{/* body */}
 

    </div>
  )
}

