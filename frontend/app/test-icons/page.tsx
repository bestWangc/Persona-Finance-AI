'use client';

export default function TestIcons() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-3xl mb-8">Font Awesome 图标测试</h1>
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-microchip text-4xl text-neon-blue mb-2"></i>
          <p className="text-sm">fas fa-microchip</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-dna text-4xl text-neon-green mb-2"></i>
          <p className="text-sm">fas fa-dna</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-project-diagram text-4xl text-neon-purple mb-2"></i>
          <p className="text-sm">fas fa-project-diagram</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-rocket text-4xl text-neon-blue mb-2"></i>
          <p className="text-sm">fas fa-rocket</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-bolt text-4xl text-yellow-400 mb-2"></i>
          <p className="text-sm">fas fa-bolt</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-chart-line text-4xl text-green-400 mb-2"></i>
          <p className="text-sm">fas fa-chart-line</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-coins text-4xl text-yellow-500 mb-2"></i>
          <p className="text-sm">fas fa-coins</p>
        </div>
        
        <div className="text-center p-4 border border-neon-blue/30 rounded-lg">
          <i className="fas fa-brain text-4xl text-pink-400 mb-2"></i>
          <p className="text-sm">fas fa-brain</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">导航栏中使用的图标</h2>
        <div className="flex gap-4">
          <i className="fas fa-exchange-alt text-2xl text-neon-blue"></i>
          <i className="fas fa-trending-up text-2xl text-neon-green"></i>
          <i className="fas fa-flask text-2xl text-neon-purple"></i>
          <i className="fas fa-link text-2xl text-neon-blue"></i>
          <i className="fas fa-arrow-right text-2xl text-white"></i>
          <i className="fas fa-check text-2xl text-green-400"></i>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg">
          如果你能看到上面的图标，说明 Font Awesome 已经成功从 npm 包加载！
        </p>
      </div>
    </div>
  );
}
