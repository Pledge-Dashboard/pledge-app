import * as React from 'react';
import axios from 'axios';
const CoinGecko = require('coingecko-api');

interface ITenderizepriceProps {}

const Tenderizeprice: React.FunctionComponent<ITenderizepriceProps> = (props) => {
  const [Tenderizep, setTenderizep] = React.useState(0);

  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    let Tenderizedata = await CoinGeckoClient.coins.fetch('tmatic', {});
    let maticdata = await CoinGeckoClient.coins.fetch('matic-network', {});
    var Tenderizeprice = Tenderizedata.data.market_data.current_price.usd;
    var maticprice = maticdata.data.market_data.current_price.usd;
    if (Tenderizeprice && maticprice) {
      setTenderizep(parseFloat(Tenderizeprice) / parseFloat(maticprice));
    }
    console.log(Tenderizep);
  };

  getData();

  return <div>tMATIC/MATIC : {Tenderizep}</div>;
};

export default Tenderizeprice;
