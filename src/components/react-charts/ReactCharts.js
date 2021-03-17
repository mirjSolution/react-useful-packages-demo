//npm install react-chartjs-2 chart.js

import React from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DonutChart';
import LineChart from './LineChart';

function ReactCharts() {
  return (
    <div className='chart'>
      <LineChart />
      <BarChart />
      <DoughnutChart />
    </div>
  );
}

export default ReactCharts;
