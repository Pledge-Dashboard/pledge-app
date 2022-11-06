import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface IAnkrbpriceProps {}

const Ankrbprice: React.FunctionComponent<IAnkrbpriceProps> = (props) => {
  const [Ankrbp, setAnkrbp] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let ankrbdata = await CoinGeckoClient.coins.fetch('ankr-matic-reward-earning-bond', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    var ankrbprice = ankrbdata.data.market_data.current_price.usd;
    var maticprice = maticdata.data.market_data.current_price.usd;
    if (ankrbprice && maticprice) {
      setAnkrbp(parseFloat(ankrbprice) / parseFloat(maticprice));
    }
    console.log(Ankrbp);
  };

  getData();

  return <div>aMATICb/MATIC : {Ankrbp}</div>;
};

export default Ankrbprice;
