const posts = require('../data/posts.json');

function getAllPosts() {
  return posts;
}

function getPostByTitle(title) {
  return posts.find(post => post.title === title);
}

function addPost(post) {
  posts.push(post);
}

function deletePost(title) {
  const index = posts.findIndex(post => post.title === title);
  posts.splice(index, 1);
}



module.exports = {
    getAllPosts,
    getPostByTitle,
    addPost,
    deletePost

};