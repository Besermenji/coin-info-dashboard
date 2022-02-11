import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "shards-react";

class CoinsList extends React.Component {
  render() {
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">List of Coins</h6>
        </CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>Bitcoin</ListGroupItem>
            <ListGroupItem active>Ethereum</ListGroupItem>
            <ListGroupItem>DAI</ListGroupItem>
            <ListGroupItem>Solana</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default CoinsList;
