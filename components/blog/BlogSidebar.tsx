import { useState } from 'react';
import styles from '@/styles/BlogSidebar.module.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface BlogSidebarProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function BlogSidebar({
  categories,
  selectedCategories,
  setSelectedCategories,
  searchTerm,
  setSearchTerm
}: BlogSidebarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.searchContainer} ${isSearchFocused ? styles.focused : ''}`}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button 
            className={styles.clearButton}
            onClick={clearSearch}
            aria-label="Suche löschen"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <div className={styles.categoriesContainer}>
        <h3>Kategorien</h3>
        <div className={styles.categoryList}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategories.includes(category) ? styles.active : ''
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
} 