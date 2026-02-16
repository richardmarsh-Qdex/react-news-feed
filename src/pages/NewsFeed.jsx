import { useState, useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { fetchArticles } from '../services/api'
import './NewsFeed.css'

function NewsFeed() {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadArticles()
  }, [])

  useEffect(() => {
    filterArticles()
  }, [articles, selectedCategory])

  const loadArticles = async () => {
    try {
      const data = await fetchArticles()
      setArticles(data)
      setLoading(false)
    } catch (error) {
      console.error('Error loading articles:', error)
      setLoading(false)
    }
  }

  const filterArticles = () => {
    let filtered = articles
    if (selectedCategory !== 'All') {
      filtered = articles.filter(article => article.category === selectedCategory)
    }
    setFilteredArticles(filtered)
  }

  const handleSearch = (query) => {
    if (!query) {
      filterArticles()
      return
    }
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredArticles(filtered)
  }

  if (loading) {
    return <div className="loading">Loading articles...</div>
  }

  return (
    <div className="news-feed">
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
