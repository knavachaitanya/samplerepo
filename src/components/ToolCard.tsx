import React, { useState } from 'react';
import { Star, StarOff, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isFavorite, onToggleFavorite }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = tool.icon;

  return (
    <div className="glass-card rounded-xl overflow-hidden transform transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${tool.backgroundColor} text-white shadow-lg neon-border`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-white neon-text">{tool.name}</h3>
              <p className="text-sm text-gray-300 capitalize">{tool.category.replace('-', ' ')}</p>
            </div>
          </div>
          <button
            onClick={onToggleFavorite}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            {isFavorite ? (
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            ) : (
              <StarOff className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        
        <p className="mt-4 text-sm text-gray-300 line-clamp-2">
          {tool.description}
        </p>
        
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className={`
              px-3 py-1 rounded-full text-xs font-medium shadow-lg neon-border
              ${tool.pricing === 'Free' ? 'bg-green-900/50 text-green-400' :
                tool.pricing === 'Paid' ? 'bg-blue-900/50 text-blue-400' :
                'bg-purple-900/50 text-purple-400'}
            `}>
              {tool.pricing}
            </span>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white"
              >
                {isExpanded ? (
                  <>Less info <ChevronUp className="ml-1 h-4 w-4" /></>
                ) : (
                  <>More info <ChevronDown className="ml-1 h-4 w-4" /></>
                )}
              </button>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Visit
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 py-4 bg-white/5 border-t border-white/10">
          <div className="prose prose-sm max-w-none prose-invert">
            <h4 className="text-sm font-medium text-white mb-2">Use Cases</h4>
            <div className="text-sm text-gray-300 whitespace-pre-line">
              {tool.longDescription}
            </div>
            
            <h4 className="text-sm font-medium text-white mt-4 mb-2">Key Features</h4>
            <ul className="list-disc pl-4 text-sm text-gray-300">
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;