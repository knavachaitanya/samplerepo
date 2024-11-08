import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import Analytics from './components/Analytics';
import CategoryTabs from './components/CategoryTabs';
import { Tool } from './types';
import { tools, categories } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const filtered = tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const toggleFavorite = (toolId: string) => {
    setFavorites(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <div className="min-h-screen galaxy-background">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={isMenuOpen}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        
        <main className="flex-1 px-4 lg:px-8 py-8 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <div className="mt-8">
              <Analytics />
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <div
                    key={tool.id}
                    className={hoveredCard && hoveredCard !== tool.id ? 'blur-background' : ''}
                    onMouseEnter={() => setHoveredCard(tool.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <ToolCard
                      tool={tool}
                      isFavorite={favorites.includes(tool.id)}
                      onToggleFavorite={() => toggleFavorite(tool.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;