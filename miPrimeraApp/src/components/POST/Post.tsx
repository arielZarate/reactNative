import React from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { createPost, deletePost, updatePost } from "@/services/ApiService";
import UsePostHook from "@/hooks/usePost";
import { CREATE_POST, GET_POST } from "@/interface/Post";

export default function TodoPost() {
  const { posts, form, setForm, loading, setLoading, isPressed, setIsPressed } =
    UsePostHook();

  //===========HANDLE CHANGE ===================================
  const handleChange = (value: string, name: string) => {
    //console.log(name + ":", value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  ///=======handle create post==================

  const handleCreate = async () => {
    //console.log("From Data", form);

    if (form.body === "" || form.title === "" || form.userId === "") {
      Alert.alert(
        "ATENCION",
        "debe completar todos los campos para poder crear"
      );
      return;
    }

    const newObj = {
      ...form,
      userId: parseInt(form.userId),
    };
    const res = await createPost(newObj);
    if (!res) {
      Alert.alert("Error", "No se pudo crear el post.");
      return;
    }

    // Mostrar la alerta al crear el post correctamente
    Alert.alert("INFO DE POST", "El post ha sido creado exitosamente.");

    setTimeout(() => {
      setForm({
        userId: "",
        body: "",
        title: "",
      });
    }, 800);
  };

  //===========fin de handle create===================

  // Define las funciones de manejo de edición y eliminación
  const handleUpdate = async (value: GET_POST) => {
    //console.log("Edit post with id:", value.id);
    // console.log("Edit post with value:", value);
    // Lógica para editar el post

    /*
    if (value.body === "" || value.title === "" || value.userId === 0) {
        Alert.alert(
          "ATENCION",
          "debe completar todos los campos para poder crear"
        );
        return;
      }
 */

    const objUpdate = {
      title: value.title,
      body: value.body,
      userId: value.userId,
    };
    const res = await updatePost(value.id, objUpdate);

    if (!res) {
      Alert.alert("INFO POST", "post no actualizado");
    }

    setTimeout(() => {
      Alert.alert("UPDATE", "Post actualizado con exito!");
    }, 700);
  };

  const handleDelete = async (id: number) => {
    console.log("Delete post with id:", id);
    const res = await deletePost(id);
    if (!res) {
      Alert.alert("ERROR", "post no ha sido eliminado");
    }

    setTimeout(() => {
      Alert.alert("DELETED", "Post eliminado con exito");
    }, 800);
  };

  // Mostrar loading mientras se obtienen los posts
  if (loading) {
    return (
      <View className="p-7">
        <Text className="text-sm font-bold text-gray-300  text-center">
          Cargando...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      {/* Usar ScrollView para el formulario */}

      <Text className="text-cyan-500 font-semibold text-center text-xl mt-3">
        Crear un nuevo POST
      </Text>
      <View className="p-4">
        <TextInput
          placeholder="Title"
          value={form.title}
          onChangeText={(value) => handleChange(value, "title")}
          className="border border-gray-900 p-2 rounded-md mb-1"
        />
        <TextInput
          placeholder="Body"
          value={form.body}
          onChangeText={(value) => handleChange(value, "body")}
          className="border border-gray-900 p-2 rounded-md mb-1"
        />

        <TextInput
          placeholder="UserId"
          value={form.userId.toString()}
          onChangeText={(value) => handleChange(value, "userId")}
          className="border border-gray-900 p-2 rounded-md mb-1"
        />

        {/*{editingPost ? 'Update Post' : */}

        <TouchableOpacity
          onPress={handleCreate}
          className={`hover:bg-cyan-800 rounded-md `}
          onPressIn={() => setIsPressed(true)} // Cambia el estado cuando el botón es presionado
          onPressOut={() => setIsPressed(false)} // Vuelve al estado original al soltar
          activeOpacity={0.9} // Evita que cambie la opacidad al presionar
          delayPressIn={0}
        >
          <Text
            className={`text-center font-bold border p-4 text-gray-500 ${
              isPressed
                ? "bg-sky-700 text-white  duration-100  ease-in-out"
                : ""
            } `}
          >
            Crear Post
          </Text>
        </TouchableOpacity>
      </View>

      <View className="">
        <Text className="text-slate-700 font-semibold  text-xl mt-4 px-4">
          Lista de Post
        </Text>

        {posts.length > 0 ? (
          posts.map((item) => {
            return (
              <View
                key={item.id ? item.id.toString() : Math.random().toString()}
                style={{ padding: 10, borderBottomWidth: 1 }}
              >
                <Text className="font-bold text-green-600 text-base">
                  {item.title}
                </Text>
                <Text className="bg-slate-800 text-green-400 p-2 rounded-sm">
                  {item.body}
                </Text>

                <View className="flex flex-row gap-2 justify-around mt-0.5 ">
                  <TouchableOpacity
                    className="bg-yellow-300 p-3 rounded-md w-32"
                    onPress={() => handleUpdate(item)}
                  >
                    <Text className="text-sm font-semibold text-center">
                      Actualizar
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="bg-red-500 p-3 rounded-md w-32 "
                    onPress={() => handleDelete(item.id)}
                  >
                    <Text className="text-sm font-semibold text-center">
                      Eliminar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <Text>No hay posts disponibles.</Text>
        )}
      </View>
    </ScrollView>
  );
}

/*



 <FlatList
          data={posts}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text className="font-bold text-green-600  text-base">
                {item.title}
              </Text>
              <Text className="bg-slate-800  text-green-400 p-2 rounded-sm">
                {item.body}
              </Text>
             <Button title="Edit" />
            <Button title="Delete" /> 
            </View>
          )}
         
        />



*/
