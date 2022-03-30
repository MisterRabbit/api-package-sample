import AppRepository from '../AppRepository.js';

class PostRepository extends AppRepository {
    constructor() {
        super();

        // Переопределяем базовый путь запросов
        this.basePath = 'posts/';

        // Добавляем маршруты
        this.appendRoutes({
            posts: '10',
        });
    }

    // Обновление настроек отображения для пользователя
    getPosts() {
        return this.get({ from: this.url.posts });
    }
}

// Экспортируем синглтон
const postRepository = new PostRepository();
Object.freeze(postRepository);
export default postRepository;