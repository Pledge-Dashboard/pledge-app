import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface ILidopriceProps {}

const Lidoprice: React.FunctionComponent<ILidopriceProps> = (props) => {
  const [lidop, setLidop] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let stmaticdata = await CoinGeckoClient.coins.fetch('lido-staked-matic', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    if (stmaticdata.success === true && maticdata.success === true) {
      var stprice = stmaticdata.data.market_data.current_price.usd;
      var maticprice = maticdata.data.market_data.current_price.usd;
    } else {
      stprice = 0;
      maticprice = 0;
    }
    if (stprice && maticprice) {
      setLidop(parseFloat(stprice) / parseFloat(maticprice));
    }
    console.log(lidop);
  };

  getData();

  return <div>stMATIC/MATIC : {lidop}</div>;
};

export default Lidoprice;
