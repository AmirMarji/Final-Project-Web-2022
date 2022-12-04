const posts = require('../data/posts.json');
const list = [];
const { connect } = require('./mongo');


const COLLECTION_NAME = 'Posts';

async function collection(){
    const client = await connect();
    return client.db('App').collection(COLLECTION_NAME);
}

async function getPosts() {
    const db  = await collection();
    const data = await db.find({}).toArray();
    return data;
}





function getAllPosts() {
  return posts;
}

function getPostByTitle(title) {
  return posts.find(post => post.title === title);
}

function addPost(post) {
  let postItem = list.find(item => item.title === post.title);
  if (!postItem) {
    list.push(post);
  }
  else{
    postItem = post;
  }

  return { ...postItem, product: getPostByTitle(post.title) };
    
}

function deletePost(title) {
  const index = posts.findIndex(post => post.title === title);
  posts.splice(index, 1);
}



module.exports = {
    getAllPosts,
    getPostByTitle,
    addPost,
    deletePost,
    getPosts

};