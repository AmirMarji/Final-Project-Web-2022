const posts = require('../data/posts.json');

function getAllPosts() {
  return posts;
}

function getPostByTitle(title) {
  return posts.find(post => post.title === title);
}

module.exports = {
    getAllPosts,
    getPostByTitle
};