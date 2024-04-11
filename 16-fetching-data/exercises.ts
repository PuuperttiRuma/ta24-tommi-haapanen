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

const getPostById = async (id: number) => {
  try {
    const response = await axios.get(url + "/posts/" + id);
    return response.data;
  } catch (error) {
    console.log(error);    
  }  
};

const getUserById = async (userId: number) => {

}

(async () => {
  const post: Post = await getPostById(42);
  console.log(`Post #${post.id}: "${post.title}".`);
})();