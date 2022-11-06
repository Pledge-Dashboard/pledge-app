import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface IClaystackpriceProps {}

const Claystackprice: React.FunctionComponent<IClaystackpriceProps> = (props) => {
  const [Claystackp, setClaystackp] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let Claystackdata = await CoinGeckoClient.coins.fetch('ankr-matic-reward-earning-bond', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    var Claystackprice = Claystackdata.data.market_data.current_price.usd;
    var maticprice = maticdata.data.market_data.current_price.usd;
    if (Claystackprice && maticprice) {
      setClaystackp(parseFloat(Claystackprice) / parseFloat(maticprice));
    }
    console.log(Claystackp);
  };

  getData();

  return <div>aMATICb/MATIC : {Claystackp}</div>;
};

export default Claystackprice;
