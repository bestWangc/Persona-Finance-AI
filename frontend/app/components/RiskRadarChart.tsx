'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Chart: any;
  }
}

const RiskRadarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Chart && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      
      // 销毁之前的图表实例
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new window.Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['风险承受', '收益预期', '交易频率', '市场敏感度', '技术分析', '基本面分析'],
          datasets: [{
            label: '当前人格',
            data: [85, 70, 60, 90, 75, 45],
            backgroundColor: 'rgba(189, 0, 255, 0.2)',
            borderColor: '#bd00ff',
            borderWidth: 2,
            pointBackgroundColor: '#bd00ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#bd00ff'
          }, {
            label: '进化目标',
            data: [75, 85, 80, 85, 90, 70],
            backgroundColor: 'rgba(0, 255, 157, 0.2)',
            borderColor: '#00ff9d',
            borderWidth: 2,
            pointBackgroundColor: '#00ff9d',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00ff9d'
          }]
        },
        options: {
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
        }
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full"
      style={{ maxHeight: '200px' }}
    />
  );
};

export default RiskRadarChart;
