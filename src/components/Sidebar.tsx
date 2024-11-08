import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  isOpen: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-20 transform lg:transform-none lg:opacity-100
      w-64 bg-white border-r border-gray-200 pt-16 pb-4
      lg:static lg:flex flex-col
      transition duration-200 ease-in-out
      ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'}
    `}>
      <div className="flex-1 h-0 overflow-y-auto">
        <nav className="px-3 mt-6">
          <div className="space-y-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`
                w-full flex items-center px-3 py-2 text-sm font-medium rounded-md
                ${selectedCategory === 'all'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-900 hover:bg-gray-50'}
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
                    w-full flex items-center px-3 py-2 text-sm font-medium rounded-md
                    ${selectedCategory === category.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-900 hover:bg-gray-50'}
                  `}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span className="truncate">{category.name}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;