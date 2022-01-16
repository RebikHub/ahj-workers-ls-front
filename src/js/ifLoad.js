export default class Loading {
    constructor(server) {
        this.server = server;
        this.newsList = document.querySelector('.')
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
        const div
    }
}
