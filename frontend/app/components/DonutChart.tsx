'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Chart: any;
  }
}

const DonutChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    // 延迟初始化，确保 Chart.js 已加载
    const initChart = () => {
      if (typeof window !== 'undefined' && window.Chart && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        
        // 销毁之前的图表实例
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['套利策略', '趋势跟随', '做市策略', '波动交易', '跨链策略', '混合型'],
            datasets: [{
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
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: {
                display: false
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
                  label: function(context: any) {
                    return context.label + ': ' + context.parsed + '%';
                  }
                }
              }
            }
          }
        });
      }
    };

    // 如果 Chart.js 已经加载，立即初始化
    if (typeof window !== 'undefined' && window.Chart) {
      initChart();
    } else {
      // 否则等待脚本加载
      const timer = setTimeout(initChart, 500);
      return () => clearTimeout(timer);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default DonutChart;
