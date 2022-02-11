import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
} from "shards-react";
import {
  LineSeries,
  FlexibleXYPlot,
  XAxis,
  YAxis,
  DiscreteColorLegend,
} from "react-vis";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          title: "Market Cap",
          disabled: false,
          data: [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 },
          ],
        },
        {
          title: "Volume",
          disabled: false,
          data: [
            { x: 0, y: 2 },
            { x: 1, y: 10 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 11 },
            { x: 5, y: 7 },
            { x: 6, y: 22 },
            { x: 7, y: 3 },
            { x: 8, y: 7 },
            { x: 9, y: 0 },
          ],
        },
        {
          title: "Price",
          disabled: false,
          data: [
            { x: 0, y: 7 },
            { x: 1, y: 5 },
            { x: 2, y: 2 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 4 },
            { x: 6, y: 6 },
            { x: 7, y: 13 },
            { x: 8, y: 1 },
            { x: 9, y: 11 },
          ],
        },
      ],
    };
  }

  clickHandler = (item, i) => {
    const { series } = this.state;
    series[i].disabled = !series[i].disabled;
    this.setState({ series });
  };

  render() {
    return (
      <Card className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Prices Chart</h6>
        </CardHeader>
        <CardBody className="pv-0">
          <Row>
            <Col lg="9">
              <FlexibleXYPlot height={300}>
                {this.state.series.map((chartData) => (
                  <LineSeries
                    data={chartData.data}
                    opacity={chartData.disabled ? 0.2 : 1}
                  />
                ))}
                <XAxis />
                <YAxis />
              </FlexibleXYPlot>
            </Col>
            <Col lg="3">
              <DiscreteColorLegend
                items={this.state.series}
                orientation="vertical"
                onItemClick={this.clickHandler}
              />
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col className="text-center view-report">
              <h6>Min: value</h6>
              <h6>Min: value</h6>
              <h6>Min: value</h6>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
};

export default UsersOverview;
