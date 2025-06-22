# PFAI 组件拆分说明

## 概述

已成功将 `index.html` 转换为 4 个 Next.js + Tailwind CSS 组件，并在首页中使用。保留了原有的 Navbar 组件。

## 创建的组件

### 1. Hero.tsx

- **位置**: `app/components/Hero.tsx`
- **功能**: 主要英雄区域，包含标题和 NFT 预览
- **特性**:
  - 响应式布局（桌面端左右布局，移动端上下布局）
  - 渐变文字效果
  - 动画脉冲效果
  - 3D 预览卡片

### 2. ValueProposition.tsx

- **位置**: `app/components/ValueProposition.tsx`
- **功能**: 价值主张卡片展示
- **特性**:
  - 三列网格布局（响应式）
  - 悬停动画效果
  - 进度条和动态元素
  - 渐变边框

### 3. TechComparison.tsx

- **位置**: `app/components/TechComparison.tsx`
- **功能**: 技术对比展示
- **特性**:
  - 对比表格布局
  - 实时数据展示
  - 响应式网格

### 4. Ecosystem.tsx

- **位置**: `app/components/Ecosystem.tsx`
- **功能**: 生态系统展示
- **特性**:
  - 复杂的卡片布局
  - 交互式地图节点
  - 排行榜展示
  - 统计数据可视化

## 技术实现

### Tailwind CSS 配置

- 添加了自定义颜色主题（深空蓝、霓虹色等）
- 自定义动画（脉冲、闪烁）
- 自定义字体（JetBrains Mono）

### 响应式设计

- 移动优先设计
- 断点：sm, md, lg, xl
- 灵活的网格和弹性布局

### 样式特性

- 渐变背景和边框
- 毛玻璃效果（backdrop-blur）
- 悬停动画和过渡效果
- 自定义阴影和发光效果

## 使用方式

在 `app/page.tsx` 中导入并使用：

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import TechComparison from "./components/TechComparison";
import Ecosystem from "./components/Ecosystem";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space to-space-dark text-text-light relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProposition />
      <TechComparison />
      <Ecosystem />
    </div>
  );
}
```

## 依赖项

- Next.js 14
- React 18
- Tailwind CSS
- Font Awesome 6.0 (通过 CDN)
- Google Fonts (Inter + JetBrains Mono)

## 运行项目

```bash
npm run dev
```

访问 http://localhost:3000 查看效果。

## 注意事项

- 所有组件都是客户端组件（'use client'）
- 图标使用 Font Awesome
- 颜色主题已在 tailwind.config.ts 中定义
- 响应式设计已优化移动端体验
