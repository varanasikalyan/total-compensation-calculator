import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class OfferReChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="auto" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bonus" stackId="a" fill="#8884d8" />
          <Bar dataKey="Basic" stackId="a" fill="#82ca9d" />
          <Bar dataKey="HRA" stackId="a" fill="#8824d8" />
          <Bar dataKey="Special Allowance" stackId="a" fill="#2884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default OfferReChart;