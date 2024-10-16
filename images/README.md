# REACT NATIVE

React Native es un framework de desarrollo de aplicaciones móviles creado por Facebook que permite a los desarrolladores construir aplicaciones nativas para sistemas operativos como iOS y Android utilizando JavaScript y React. A diferencia de otras soluciones que emplean tecnologías web para crear apps móviles, React Native traduce el código JavaScript en componentes nativos, lo que resulta en aplicaciones con un rendimiento y experiencia de usuario comparables a las creadas con código nativo (como Swift para iOS o Java/Kotlin para Android).

## Multiplataforma

![multiplataforma](/images/multiplataforma.png)

### pagina web oficial

[react native](https://reactnative.dev/)

Principales características de React Native:

1. Escritura en JavaScript: Los desarrolladores usan React, una biblioteca popular de JavaScript, para crear la interfaz de usuario de la aplicación.
2. Componentes nativos: Aunque el código se escribe en JavaScript, React Native usa componentes nativos bajo el capó, lo que garantiza que las aplicaciones tengan un aspecto y rendimiento similares a los de las aplicaciones nativas.
3. Multiplataforma: Permite escribir una sola base de código que se puede compilar tanto para iOS como para Android, reduciendo el esfuerzo de desarrollo.
4. Recarga en vivo (Hot Reloading): Facilita un flujo de trabajo de desarrollo más rápido, permitiendo que los cambios en el código se reflejen de inmediato en la aplicación sin necesidad de recompilar.

## Diferencias entre React y React Native

Aunque React y React Native comparten la misma base, hay algunas diferencias clave entre ellos:

Plataforma de destino:

React se utiliza para construir aplicaciones web (que corren en navegadores), mientras que React Native se usa para construir aplicaciones móviles nativas (iOS y Android).
Componentes:

En React usamos componentes HTML (como `<div>, <h1>, <p>, etc.`).
En React Native, usamos componentes nativos específicos de las plataformas móviles. Por ejemplo:

```javascript
<View> en lugar de <div>
<Text> en lugar de <p> o cualquier etiqueta de texto
<Image> en lugar de <img>
```

Estilos:

En React (para la web), usamos CSS o bibliotecas de estilos para darle estilo a los componentes.
En React Native, los estilos se escriben directamente en JavaScript utilizando un objeto de estilos que tiene una sintaxis similar a CSS, pero no incluye todas las propiedades y funcionalidades de CSS (por ejemplo, no tiene flexibilidad para usar animaciones o pseudo-clases como :hover).
Renderizado:

React genera HTML DOM (para la web).
React Native genera componentes nativos (para Android e iOS).

## Componentes principales de React Native

React Native tiene un conjunto de componentes específicos que reemplazan los componentes del HTML tradicional y están optimizados para trabajar en plataformas móviles:

```javascript


<View>: Es el equivalente a <div> en la web. Se utiliza para agrupar otros componentes y estructurar la interfaz de usuario.

<Text>: Equivalente a <p> o <span> en HTML. Se usa para mostrar texto.

<Image>: Se utiliza para mostrar imágenes, como <img> en HTML.

<ScrollView>: Un contenedor que permite a los usuarios desplazarse por el contenido que excede el tamaño de la pantalla. Similar a la funcionalidad overflow: scroll en CSS.

<TextInput>: Es el equivalente a <input> en HTML, pero específicamente para introducir texto.

<Button>: Para mostrar un botón nativo en la plataforma. Sin embargo, es bastante básico, y a menudo se reemplaza por botones personalizados dentro de <TouchableOpacity> o <TouchableHighlight> para más control sobre el estilo.

<TouchableOpacity> y <TouchableHighlight>: Estos componentes permiten que el área presionable de un elemento sea reconocida como un toque. Se usan para crear botones u otros elementos interactivos.

<FlatList> y <SectionList>: Son componentes para mostrar listas de datos. Son muy eficientes y optimizados para manejar grandes cantidades de datos en una lista o sección.

<SafeAreaView>: Asegura que el contenido no sea cubierto por áreas especiales de los dispositivos, como la barra de estado o el notch en los iPhones.

<Modal>: Para mostrar contenido en una ventana emergente o superpuesta, como un diálogo.

<StatusBar>: Componente que permite controlar el color, visibilidad y estilo de la barra de estado del dispositivo (donde aparece la hora, batería, etc.).
```

Otros conceptos importantes en React Native
Navegación: Las aplicaciones móviles requieren navegación entre pantallas. React Native no incluye una solución de navegación por defecto, pero se suelen utilizar bibliotecas como react-navigation o React Native Navigation.

Animaciones: React Native ofrece la API Animated para crear animaciones fluidas y nativas.

Acceso a hardware: React Native puede acceder a funcionalidades del dispositivo como la cámara, GPS, almacenamiento, etc., a través de APIs nativas o mediante paquetes como react-native-camera, react-native-geolocation, entre otros.

## Quienes usan react native

![image](/images/react%20native.png)
