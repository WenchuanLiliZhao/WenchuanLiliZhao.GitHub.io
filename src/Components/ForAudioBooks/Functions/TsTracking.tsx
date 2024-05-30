import { useEffect, useState } from 'react';

export default function TsTracking() {
  const [lastY, setLastY] = useState<number | null>(null);

  // 一个函数用于获取当前激活元素的高度和水平位置
  const updateIfPositionChanged = () => {
    const activeElement = document.querySelector('.transcript-sentence.tracking.active');

    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const currentY = rect.top + window.scrollY;

      // 检查输入的参数是否有效
      if (typeof currentY !== 'number' || currentY < 0) {
          console.error('Invalid position. It should be a non-negative number.');
          return;
      }

      // 仅当高度或左侧位置发生变化时更新状态并进行滚动
      if (currentY !== lastY) {
        console.log(`y: ${currentY}`);
        
        // 更新状态
        setLastY(currentY);

        // 计算滚动位置
        const position = currentY - 360;

        // 滚动到指定位置
        window.scrollTo(0, position);
      }
    }
  }

  useEffect(() => {
    // 设置定时器，每 0.01 秒调用一次 updateIfPositionChanged
    const intervalId = setInterval(updateIfPositionChanged, 10);

    // 组件卸载时清理定时器
    return () => clearInterval(intervalId);
  }, [lastY]); // 依赖数组包括 lastHeight ，确保使用的是最新的状态
}
