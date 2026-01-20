import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { fetchArticle } from '../services/api'
import './ArticleDetail.css'

function ArticleDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadArticle()
  }, [id])

  const loadArticle = async () => {
    try {
      const data = await fetchArticle(id)
      setArticle(data)
      setLoading(false)
    } catch (error) {
      console.error('Error loading article:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Loading article...</div>
  }

  if (!article) {
    return <div className="error">Article not found</div>
  }

  return (
    <div className="article-detail">
      <div className="container">
        <Link to="/" className="back-link">← Back to Feed</Link>
        <article>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>{article.author}</span>
            <span>{format(new Date(article.publishedAt), 'MMMM d, yyyy')}</span>
            <span>{article.category}</span>
          </div>
          {article.image && (
            <img src={article.image} alt={article.title} className="featured-image" />
          )}
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </div>
  )
}

export default ArticleDetail
