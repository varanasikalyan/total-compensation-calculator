import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { RECHARTS, yearGrouping, yearLabels, yearsAttributeArray } from '../mock/Mock';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Year on Year',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = yearLabels(RECHARTS.data);
const labelsData = yearGrouping(RECHARTS.data);
const chartsjsdata = {
  labels,
  datasets: [
    {
      label: 'Basic',
      data: yearsAttributeArray(labelsData, "Basic"),
      backgroundColor: 'rgb(21, 67, 96)',
    },
    {
      label: 'Bonus',
      data: yearsAttributeArray(labelsData, "Bonus"),
      backgroundColor: 'rgb(40, 116, 166)',
    },
    {
      label: 'HRA',
      data: yearsAttributeArray(labelsData, "HRA"),
      backgroundColor: 'rgb(20, 90, 50)',
    },
    {
      label: 'Special Allowance',
      data: yearsAttributeArray(labelsData, "Special Allowance"),
      backgroundColor: 'rgb(35, 155, 86)',
    },
  ],
};

class OfferChartJs extends Component {
  state = {

  }
  render() {
    return (<Bar options={options} data={chartsjsdata} />)
  }
}

export default OfferChartJs;