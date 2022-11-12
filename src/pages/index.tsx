import Head from 'next/head';
import { Landing } from '../sections/Landing';
import { Stats } from '../sections/Stats';
import { Here } from '../sections/Here';
import { What } from '../sections/What';

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
        <What />
        <Here />
      </main>
    </div>
  );
}
