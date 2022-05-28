import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Year 1',
    uv: 100,
    "Base Salary": 0,
    amt: 0,
  },
  {
    name: 'Year 2',
    uv: 100,
    "Base Salary": 0,
    amt: 0,
  },
  {
    name: 'Year 3',
    uv: 100,
    "Base Salary": 0,
    amt: 0,
  },
  {
    name: 'Year 4',
    uv: 100,
    "Base Salary": 0,
    amt: 0,
  },
];

class OfferReChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="auto" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Base Salary" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default OfferReChart;