import React, {useState} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import PricesChart from "./../components/blog/PricesChart";
import CoinsList from "../components/blog/CoinsList";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

const BlogOverview = () => {
  const [selectedCoin, setSelectedCoin] = useState();

  const handleCoinRowPress = (coin) => {
    setSelectedCoin(coin);
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Dashboard" subtitle="" className="text-sm-left mb-3" />
      </Row>

      <Row>
        {/* Prices */}
        {selectedCoin ? <Col lg="9" className="mb-4">
          <PricesChart />
        </Col>: <></>}

        {/* Users by Device */}
        <Col lg="3" className="mb-4">
          <CoinsList onCoinRowPress={handleCoinRowPress} selectedCoin={selectedCoin} />
        </Col>


      </Row>
    </Container>
  );
}



export default BlogOverview;
