// Create a function getPostById(id) that acquires the post item from
//the jsonplaceholder API by its id. Print into console
// `Post #[id]: “[Title]”.

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getPostById = async (id: number) => {
  try {
    const response = await axios.get(url + "/posts/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(url + "/users/" + userId);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Takes in a post and figures how manyest the given post is
 * of all the posts made by the user who did the given post.
 * Ex: Poster has posted three posts in total, and the second
 * of these posts is given as a parameter. Function returns 2.
 * @param post: Post
 * @returns postnumber: number
 */
const postNumberOfUser = async (post: Post) => {
  try {
    const response = await axios.get(url + "/users/" + post.userId + "/posts");
    const postsByUser: Post[] = response.data;
    return postsByUser.findIndex((usersPost) => post.id === usersPost.id) + 1;
  } catch (error) {
    console.log(error);
  }
};

const getPostComments = async (id: number) => {
  try {
    const response = await axios.get(url + "/posts/" + id + "/comments");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const printPostComments = async (comments: Comment[]) => {
  const firstCommentNumber = comments[0].id;
  comments.forEach((comment) => {
    console.log(
      `Comment #${comment.id - (firstCommentNumber - 1)}: ${comment.name}:\n ${
        comment.body
      }\n`
    );
  });
};

const postAPost = async (post: Post) => {
  try {
    const response = await axios.post(url + "/posts", post);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const updateAPost = async (post: Post) => {
  try {
    const response = await axios.put(url + "/posts/" + post.id, post);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const post: Post = await getPostById(42);
  const poster: User = await getUserById(post.userId);
  const postnumber = await postNumberOfUser(post);
  const comments: Comment[] = await getPostComments(post.id);

  console.log(`Post #${postnumber} by ${poster.username}: ${post.title}`);
  await printPostComments(comments);

  const newPost: Post = {
    id: 0,
    body: "Message body lorem ipsum liirum lopsum",
    title: "Message Title",
    userId: 23,
  };
  await postAPost(newPost);

  const updatedPost: Post = {
    id: post.id,
    title: "Uusi hieno otsikko WAU!",
    body: post.body,
    userId: post.userId,
  };
  await updateAPost(updatedPost);
})();
