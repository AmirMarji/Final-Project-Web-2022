const posts = require('../data/posts.json');
const list = [];
const { connect } = require('./mongo');


const COLLECTION_NAME = 'Posts';

async function collection(){
    const client = await connect();
    return client.db('App').collection(COLLECTION_NAME);
}

async function getAllPosts() {
    const db  = await collection();
    const data = await db.find({}).toArray();
   return await Promise.all(data.map(async (post) => {
        return post;
    }));
}

async function getPostByTitle(title) {
    const db  = await collection();
    const data = await db
        .find
        ({title: title})
        .toArray();
    return await Promise.all(data.map(async (post) => {
        return post;
    }));  

}

async function addPost(post) {
    const db  = await collection();
    await db.insertOne(post);
}

async function deletePost(title) {
    const db  = await collection();
    await db.deleteOne({title: title}); 
}

// function getAllPosts() {
//   return posts;
// }

// function getPostByTitle(title) {
//   return posts.find(post => post.title === title);
// }

// function addPost(post) {
//   let postItem = list.find(item => item.title === post.title);
//   if (!postItem) {
//     list.push(post);
//   }
//   else{
//     postItem = post;
//   }

//   return { ...postItem, product: getPostByTitle(post.title) };
    
// }

// function deletePost(title) {
//   const index = posts.findIndex(post => post.title === title);
//   posts.splice(index, 1);
// }



module.exports = {
    collection,
    COLLECTION_NAME,
    getAllPosts,
    getPostByTitle,
    addPost,
    deletePost


};