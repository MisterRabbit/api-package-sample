import postRepository from './api/posts/postsRepository.js';

async function getData() {
    const response = await postRepository.getPosts();
    console.log(response)
}

setTimeout(() => {
    getData();
}, 1000)