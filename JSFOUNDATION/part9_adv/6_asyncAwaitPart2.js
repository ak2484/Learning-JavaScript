function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching the blog data");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    //                     or

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log("fetch complete");
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
