const posts = require("./models/posts");

async function main() {
    const allPosts = await posts.getPosts();
    console.log(allPosts);
    }

    main();