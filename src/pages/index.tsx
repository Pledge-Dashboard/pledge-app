import Head from 'next/head';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import Platforms from '../sections/Platforms';
import LiquidStakingInfo from '../sections/LiquidStakingInfo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pledge</title>
        <meta
          name="description"
          content="Liquid Staking Derivates on Polygon PoS"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <Landing />
        <Stats />
        <LiquidStakingInfo />
        <Platforms />
      </main>
    </div>
  );
}
