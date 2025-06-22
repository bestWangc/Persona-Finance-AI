'use client';

import { useState, useEffect } from 'react';

interface CountingNumberProps {
  targetNumber: number;
  duration?: number;
  className?: string;
  formatNumber?: boolean;
  prefix?: string;
  suffix?: string;
  animateOnMount?: boolean;
  continuousAnimation?: boolean;
}

const CountingNumber = ({
  targetNumber,
  duration = 2000,
  className = '',
  formatNumber = true,
  prefix = '',
  suffix = '',
  animateOnMount = true,
  continuousAnimation = false
}: CountingNumberProps) => {
  const [currentNumber, setCurrentNumber] = useState(animateOnMount ? 0 : targetNumber);
  const [isAnimating, setIsAnimating] = useState(false);

  const formatNumberWithCommas = (num: number) => {
    if (!formatNumber) {
      // 如果是小数，保留一位小数
      if (num % 1 !== 0) {
        return num.toFixed(1);
      }
      return num.toString();
    }
    return num.toLocaleString();
  };

  const animateToTarget = (target: number) => {
    setIsAnimating(true);
    const startTime = Date.now();
    const startNumber = currentNumber;
    const difference = target - startNumber;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // 使用 easeOutCubic 缓动函数
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newNumber = startNumber + (difference * easeOutCubic);

      // 如果目标数字是整数，则向下取整；如果是小数，则保留精度
      const finalNumber = target % 1 === 0 ? Math.floor(newNumber) : Math.round(newNumber * 10) / 10;

      setCurrentNumber(finalNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentNumber(target);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (animateOnMount) {
      animateToTarget(targetNumber);
    }
  }, [targetNumber, animateOnMount]);

  useEffect(() => {
    if (continuousAnimation && !isAnimating) {
      const interval = setInterval(() => {
        // 在目标数字的 ±5% 范围内随机变化
        const variation = targetNumber * 0.05;
        const randomTarget = targetNumber + (Math.random() - 0.5) * 2 * variation;
        animateToTarget(Math.floor(randomTarget));
      }, 3000 + Math.random() * 2000); // 3-5秒随机间隔

      return () => clearInterval(interval);
    }
  }, [continuousAnimation, isAnimating, targetNumber]);

  return (
    <span className={className}>
      {prefix}{formatNumberWithCommas(currentNumber)}{suffix}
    </span>
  );
};

export default CountingNumber;
