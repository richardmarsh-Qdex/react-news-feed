import './CategoryFilter.css'

const categories = ['All', 'Technology', 'Sports', 'Politics', 'Business', 'Entertainment']

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
