import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface IAnkrcpriceProps {}

const Ankrcprice: React.FunctionComponent<IAnkrcpriceProps> = (props) => {
  const [Ankrcp, setAnkrcp] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let Ankrcdata = await CoinGeckoClient.coins.fetch('ankr-reward-earning-matic', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    var Ankrcprice = Ankrcdata.data.market_data.current_price.usd;
    var maticprice = maticdata.data.market_data.current_price.usd;
    if (Ankrcprice && maticprice) {
      setAnkrcp(parseFloat(Ankrcprice) / parseFloat(maticprice));
    }
    console.log(Ankrcp);
  };

  getData();

  return <div>aMATICc/MATIC : {Ankrcp}</div>;
};

export default Ankrcprice;
