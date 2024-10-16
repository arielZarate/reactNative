import { GET_POST } from "@/interface/Post";
import React, { useState, useEffect } from "react";
import { getPost } from "@/services/ApiService";

export default function UsePostHook() {
  const [form, setForm] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const [posts, setPosts] = useState<GET_POST[]>([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [editingPost, setEditingPost] = useState(null);
  const [isPressed, setIsPressed] = useState(false);

  //traer todos los posts

  useEffect(() => {
    getPost()
      .then((res) => {
        if (res) {
          //  console.log("posts", res);
          if (Array.isArray(res)) {
            setPosts(res);
          } else {
            console.log("Error: Expected an array of posts");
          }
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false); // Cambia el estado de carga a false después de la solicitud
      });
  }, []);




  //retornamos 
  return {
    posts,
    setPosts,
    loading,
    setLoading,
    isPressed,
    setIsPressed,
    form,
    setForm,
  };
}
