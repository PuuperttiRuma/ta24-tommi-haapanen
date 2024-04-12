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
    }
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }
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

(async () => {
  const post: Post = await getPostById(42);  
  const user: User = await getUserById(post.userId);
  console.log(`Post #${post.id}: "${post.title}".`);
  console.log(`User #${user.id}: "${user.name}".`);
})();