import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import './ArticleCard.css'

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <Link to={`/article/${article.id}`}>
        <div className="article-image">
          <img src={article.image || '/placeholder.jpg'} alt={article.title} />
        </div>
        <div className="article-content">
          <h2>{article.title}</h2>
          <p className="excerpt">{article.excerpt}</p>
          <div className="article-meta">
            <span className="author">{article.author}</span>
            <span className="date">
              {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
            </span>
            <span className="category">{article.category}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard
