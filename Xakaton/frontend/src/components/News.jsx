import {newsList} from './NewsList';

function News() {
    return (
        <div className="news-page">
        {newsList.map((news) => (
            <a href={news.content} target='_blank' key={news.id} className="news-item">
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-info">
                    <h3>{news.title}</h3>
                    <p>{news.date}</p>
                </div>
            </a>
        ))}
        </div>
    );
}

export default News;