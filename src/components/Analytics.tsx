import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white neon-text">Analytics Overview</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded-md hover:bg-white/10">
            Last 7 days
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded-md hover:bg-white/10">
            Last 30 days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Popular Categories</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {['Content Creation', 'Image Generation', 'Chatbots', 'Video Editing'].map((category, index) => (
              <div key={category} className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{category}</span>
                    <span className="text-sm text-gray-400">{90 - index * 20}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-indigo-500 rounded-full h-2 neon-border"
                      style={{ width: `${90 - index * 20}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Trending Tools</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { name: 'ChatGPT', growth: '+85%' },
              { name: 'Midjourney', growth: '+65%' },
              { name: 'Jasper', growth: '+45%' },
              { name: 'Runway', growth: '+35%' },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
                <span className="text-sm font-medium text-green-400">{tool.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;