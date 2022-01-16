export default class Loading {
    constructor(server) {
        this.server = server;
        this.newsList = document.querySelector('.list-news');
        this.news = {
            date: 'date',
            img: 'http://url.com',
            text: 'Dune - 2021'
        }
    }

    events() {
        this.createNews(this.news);
    }

    createNews(news) {
        const divNews = document.createElement('div');
        const divDate = document.createElement('div');
        const bodyNews = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('p');
        divDate.textContent = news.date;
        image.src = news.img;
        text.textContent = news.text;
        bodyNews.className = 'news-body';
        image.className = 'news-img';
        bodyNews.append(image);
        bodyNews.append(text);
        divNews.append(divDate);
        divNews.append(bodyNews);
        return divNews;
    }
}
