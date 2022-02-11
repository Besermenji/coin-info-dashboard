import React, { useContext, useEffect, useState } from "react";
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
import { ApiContext } from "../../provider/ApiProvider";

const PricesChart = ({ selectedCoin }) => {
  const { client } = useContext(ApiContext);
  const [coinMetrics, setCoinMetrics] = useState();
  const [coinHourlyData, setCoinHourlyData] = useState();
  useEffect(() => {
    (async () => {
      if (selectedCoin) {
        const response = await client.getTokenMetrics(selectedCoin);
        setCoinMetrics(response);
        const hourlyDataResponse = await client.getTokenHourlyData(selectedCoin);
        const parsedResponse = hourlyDataResponse.open.map((value, index) => ({
          x: index,
          y: Number((value.value || 0).toFixed(2))
        })).filter(value => value.y !== 0);
        setCoinHourlyData({ data: parsedResponse, title: 'Open' });
      }
    })()
  }, [selectedCoin]);

  if (!coinMetrics || !coinHourlyData) return null;
  return (
    <Card className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Prices Chart</h6>
      </CardHeader>
      <CardBody className="pv-0">
        <Row>
          <Col lg="9">
            <FlexibleXYPlot height={300}>
              <LineSeries
                data={coinHourlyData.data}
                opacity={coinHourlyData.disabled ? 0.2 : 1}
              />
              <XAxis />
              <YAxis />
            </FlexibleXYPlot>
          </Col>
          {/* <Col lg="3">
            <DiscreteColorLegend
              items={this.state.series}
              orientation="vertical"
              onItemClick={this.clickHandler}
            />
          </Col> */}
        </Row>
      </CardBody>
      <CardFooter className="border-top">
        <Row>
          <Col className="text-center view-report">
            <h6>Min: {coinMetrics.min}</h6>
            <h6>Max: {coinMetrics.max}</h6>
            <h6>Std: {coinMetrics.std}</h6>
            <h6>Mean: {coinMetrics.mean}</h6>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
}

// class UsersOverview extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       series: [
//         {
//           title: "Market Cap",
//           disabled: false,
//           data: [
//             { x: 0, y: 8 },
//             { x: 1, y: 5 },
//             { x: 2, y: 4 },
//             { x: 3, y: 9 },
//             { x: 4, y: 1 },
//             { x: 5, y: 7 },
//             { x: 6, y: 6 },
//             { x: 7, y: 3 },
//             { x: 8, y: 2 },
//             { x: 9, y: 0 },
//           ],
//         },
//         {
//           title: "Volume",
//           disabled: false,
//           data: [
//             { x: 0, y: 2 },
//             { x: 1, y: 10 },
//             { x: 2, y: 4 },
//             { x: 3, y: 9 },
//             { x: 4, y: 11 },
//             { x: 5, y: 7 },
//             { x: 6, y: 22 },
//             { x: 7, y: 3 },
//             { x: 8, y: 7 },
//             { x: 9, y: 0 },
//           ],
//         },
//         {
//           title: "Price",
//           disabled: false,
//           data: [
//             { x: 0, y: 7 },
//             { x: 1, y: 5 },
//             { x: 2, y: 2 },
//             { x: 3, y: 9 },
//             { x: 4, y: 1 },
//             { x: 5, y: 4 },
//             { x: 6, y: 6 },
//             { x: 7, y: 13 },
//             { x: 8, y: 1 },
//             { x: 9, y: 11 },
//           ],
//         },
//       ],
//     };
//   }

//   clickHandler = (item, i) => {
//     const { series } = this.state;
//     series[i].disabled = !series[i].disabled;
//     this.setState({ series });
//   };

//   render() {
//     return (
//       <Card className="h-100">
//         <CardHeader className="border-bottom">
//           <h6 className="m-0">Prices Chart</h6>
//         </CardHeader>
//         <CardBody className="pv-0">
//           <Row>
//             <Col lg="9">
//               <FlexibleXYPlot height={300}>
//                 {this.state.series.map((chartData) => (
//                   <LineSeries
//                     data={chartData.data}
//                     opacity={chartData.disabled ? 0.2 : 1}
//                   />
//                 ))}
//                 <XAxis />
//                 <YAxis />
//               </FlexibleXYPlot>
//             </Col>
//             <Col lg="3">
//               <DiscreteColorLegend
//                 items={this.state.series}
//                 orientation="vertical"
//                 onItemClick={this.clickHandler}
//               />
//             </Col>
//           </Row>
//         </CardBody>
//         <CardFooter className="border-top">
//           <Row>
//             <Col className="text-center view-report">
//               <h6>Min: value</h6>
//               <h6>Min: value</h6>
//               <h6>Min: value</h6>
//             </Col>
//           </Row>
//         </CardFooter>
//       </Card>
//     );
//   }
// }



export default PricesChart;
