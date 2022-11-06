import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface IStaderpriceProps {}

const Staderprice: React.FunctionComponent<IStaderpriceProps> = (props) => {
  const [staderp, setStaderp] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let maticxdata = await CoinGeckoClient.coins.fetch('stader-maticx', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    var xprice = maticxdata.data.market_data.current_price.usd;
    var maticprice = maticdata.data.market_data.current_price.usd;
    if (xprice && maticprice) {
      setStaderp(parseFloat(xprice) / parseFloat(maticprice));
    }
    console.log(staderp);
  };

  getData();

  return <div>MATICx/MATIC : {staderp}</div>;
};

export default Staderprice;
