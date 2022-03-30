# api-package-sample

The sample of API package


How to use:

1. Create AppRepository file

```js
import { BaseRepository } from '@nexters/repository';

class AppRepository extends BaseRepository {
  constructor() {
      super();
      this.hostUrl = 'https://host.ru/';
  }
}

export default AppRepository;
```

2. Crate repository for your entity
```js
import AppRepository from '@/repository/AppRepository';

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
```

3. Use repository in your components
```js
import postRepository from '@/repository/posts/postsRepository';

async function getData() {
    const response = await postRepository.getPosts();
}
```