import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

var BarChart = require("react-chartjs").Bar;

class Attributes extends Component {
  render() {
    let chartData = {
      labels: ["Exp", "Skills", "Comms", "Attitude"],
      datasets: [{
          data: this.props.data.attributes
        }],
    }
    return (
      <div className="col">
        <Card style={{marginBottom: "1em"}}>
          <CardBody style={{width: "60%"}}>
             <CardTitle>Attributes</CardTitle>
              <BarChart data={chartData} width="250" height="150" redraw />
          </CardBody>
        </Card>

        <Card style={{marginBottom: "1em"}}>
          <CardBody>
             <CardTitle>Weapons</CardTitle>
             </CardBody>
        </Card>
      </div>
    );
  }
}


export default Attributes;
