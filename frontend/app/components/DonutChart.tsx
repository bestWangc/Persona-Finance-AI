'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// 注册 Chart.js 组件
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['套利策略', '趋势跟随', '做市策略', '波动交易', '跨链策略', '混合型'],
    datasets: [
      {
        data: [28, 22, 18, 15, 10, 7],
        backgroundColor: [
          'rgba(189, 0, 255, 0.7)',
          'rgba(0, 199, 255, 0.7)',
          'rgba(0, 255, 157, 0.7)',
          'rgba(0, 240, 255, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(255, 46, 109, 0.7)'
        ],
        borderColor: 'rgba(0, 15, 34, 0.8)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 15, 34, 0.9)',
        titleColor: '#f0f7ff',
        bodyColor: '#f0f7ff',
        borderColor: '#00c7ff',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;