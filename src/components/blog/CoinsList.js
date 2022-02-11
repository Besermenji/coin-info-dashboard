import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "shards-react";
import { ApiContext } from "../../provider/ApiProvider";



const CoinsList = ({ selectedCoin, onCoinRowPress }) => {
  const { client } = useContext(ApiContext);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await client.getTokenList();
      setCoins(response);
    })();
  }, [])
  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">List of Coins</h6>
      </CardHeader>
      <CardBody>
        <ListGroup> {
          coins.map((coin) => <ListGroupItem active={selectedCoin === coin}><a onClick={(e) => { e.preventDefault(); onCoinRowPress(coin) }}>{coin}</a> </ListGroupItem>)
        }
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default CoinsList;
