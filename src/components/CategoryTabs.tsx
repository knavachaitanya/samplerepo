import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="flex space-x-1 p-1 min-w-max">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${selectedCategory === 'all'
                ? 'bg-indigo-500/20 text-indigo-400 neon-border'
                : 'text-gray-300 hover:bg-white/10'}
            `}
          >
            All Tools
          </button>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${selectedCategory === category.id
                    ? 'bg-indigo-500/20 text-indigo-400 neon-border'
                    : 'text-gray-300 hover:bg-white/10'}
                `}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;