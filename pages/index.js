import Head from 'next/head'
import { useEffect } from 'react';
import Alert from '../components/Alert'
import Background from '../components/Background';
import Banner from '../components/Banner'
import ActivityCard from '../components/ActivityCard';
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import FullCard from '../components/FullCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData,cardData}) {
  
  return (
    <div className="">
      <Head>
        <title>BRB Rentals</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world, all made possible by hosts on BRB Rentals."/>
        <link rel="icon" href="/favicon.ico" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link rel="apple-touch-icon" href="/logo180.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/logo32.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png"/>
      </Head>
      {/* Dark Mode Background */}
      <Background >
      {/* Alert */}
      <Alert />
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="overflow-x-scroll sm:overflow-hidden max-w-screen-2xl mx-auto px-8 sm:px-16 dark:bg-gray-900">
        <section className="pt-16">
          <h2 className="text-4xl font-semibold pb-5 dark:text-gray-50">Explore Nearby</h2>

          {/* Pull some data from  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map((item) => (
                <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 pt-16 dark:text-gray-50">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3" >
            {
              cardData?.map(({img,title}) => (
                <MediumCard key={img} img={img} title={title} />
              ))
            }
          </div>
        </section>
      
        <LargeCard 
          img="/images/greatoutdoors.jpg"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
          description="Wishlists created by BRB Rentals"
        />

        <ActivityCard />

        <FullCard 
          img="/images/hero.jpg"
          title="Try Hosting"
          buttonText="Learn More"
          description="Join millions of hosts already on BRB Rentals"
        />

      </main>
      <Footer />
    </Background>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://brb.jackjona.ga/data/explorenearby.json").then((res) => res.json());
  const cardData = await fetch("https://brb.jackjona.ga/data/liveanywhere.json").then((res) => res.json());
  
  return {
    props:{
      exploreData,
      cardData,
    }
  }
}
