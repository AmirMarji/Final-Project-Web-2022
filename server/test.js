const posts = require("./models/posts");

async function main() {
    const allPosts = await posts.getAllPosts();
    console.log(allPosts);
    }

    main();