import axios from "axios";
import {GET_POST,CREATE_POST } from "@/interface/Post";
const URLBASE = "https://jsonplaceholder.typicode.com";

const getPost = async ():Promise<GET_POST> => {
  try {
    const res = await axios.get(`${URLBASE}/posts`);

    const posts = res.data;
    if (res.status !== 200 && !posts) {
      throw new Error("post not found");
    }

   // console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const createPost = async (post:CREATE_POST):Promise<GET_POST> => {
    try {
      const res = await axios.post(`${URLBASE}/posts`,post
      );
  
      const posts = res.data;
      if (res.status !== 200 && !posts) {
        throw new Error("post not created");
      }
  
     // console.log(posts);
      return posts;
    } catch (error) {
      console.error("Error creating posts:", error);
      throw error;
    }
  };


 const updatePost = async (id:number, post:CREATE_POST):Promise<any> => {
    try {
        const res = await axios.put(`${URLBASE}/posts/${id}`, post);
       
      const posts = res.data;
      if (res.status !== 200 && !posts) {
        throw new Error("post not update");
      }
  
     // console.log(posts);
      return posts;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
};

 const deletePost = async (id:number) => {
    try {
        const res= await axios.delete(`${URLBASE}/posts/${id}`);
        
      const posts = res.data;
      if (res.status !== 200 && !posts) {
        throw new Error("post not deleted");
      }
    // console.log("deleted",posts);
      return posts;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};

export {
getPost,
createPost,
updatePost,
deletePost

}