import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class OfferReChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="95%" height="auto" aspect={2.2}>
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
          barGap={25}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Basic" stackId="company1" fill="#145A32" />
          <Bar dataKey="Bonus" stackId="company1" fill="#1E8449" />
          <Bar dataKey="HRA" stackId="company1" fill="#27AE60" />
          <Bar dataKey="Special Allowance" stackId="company1" fill="#7DCEA0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default OfferReChart;