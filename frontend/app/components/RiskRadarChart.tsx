'use client';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// 注册 Chart.js 组件
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RiskRadarChart = () => {
  const data = {
    labels: ['Risk', 'Earn', 'Trading frequency', 'Latency', 'TA Signals', 'Hotspot Analysis'],
    datasets: [
      {
        label: 'Current',
        data: [85, 70, 60, 90, 75, 45],
        backgroundColor: 'rgba(189, 0, 255, 0.2)',
        borderColor: '#bd00ff',
        borderWidth: 2,
        pointBackgroundColor: '#bd00ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#bd00ff'
      },
      {
        label: 'Evolution Target',
        data: [75, 85, 80, 85, 90, 70],
        backgroundColor: 'rgba(0, 255, 157, 0.2)',
        borderColor: '#00ff9d',
        borderWidth: 2,
        pointBackgroundColor: '#00ff9d',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00ff9d'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#f0f7ff',
          font: {
            size: 12
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#a0b1c5',
          backdropColor: 'transparent',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(0, 199, 255, 0.3)'
        },
        angleLines: {
          color: 'rgba(0, 199, 255, 0.3)'
        },
        pointLabels: {
          color: '#f0f7ff',
          font: {
            size: 11
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 4,
        hoverRadius: 6
      }
    }
  };

  return (
    <div className="w-full h-full" style={{ maxHeight: '200px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RiskRadarChart;
