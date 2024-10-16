# Mi primera App con REACT NATIVE

Este es un proyecto creado con react-native un app TodoPost usando la api de jsonplaceholder 

[jsonplaceholder](https://jsonplaceholder.typicode.com/)

![json](/miPrimeraApp/img/crud%20de%20l%20api.png)

La idea era hacer algo basico paar entender el funcionamiento de react native usando expo 

## Ventajas de usar expo

1. Usar Expo en lugar de React Native directamente tiene varias ventajas, especialmente para desarrolladores que buscan una forma más sencilla y rápida de crear aplicaciones móviles. Aquí hay algunas de las principales ventajas de utilizar Expo:

2. Configuración Sencilla: Expo proporciona una configuración lista para usar, lo que significa que puedes comenzar a desarrollar sin tener que configurar herramientas nativas, lo que ahorra tiempo y esfuerzo.

3. Acceso a Funcionalidades Integradas: Expo incluye una serie de bibliotecas y APIs listas para usar (como cámara, ubicación, notificaciones, etc.) que simplifican el desarrollo de funcionalidades comunes sin necesidad de configurar módulos nativos.

4. Desarrollo Rápido: Con Expo, puedes ver tus cambios en tiempo real en un dispositivo o simulador a través de la aplicación Expo Go, lo que acelera el proceso de desarrollo.

5. Actualizaciones Over-the-Air: Expo permite actualizar la aplicación sin necesidad de pasar por el proceso de aprobación de la App Store o Google Play, lo que facilita la implementación de correcciones y nuevas funciones rápidamente.

6. Documentación Extensa: Expo tiene una documentación clara y extensa, lo que ayuda a los desarrolladores a encontrar soluciones y entender cómo usar las distintas funcionalidades.

7. Compatibilidad Multiplataforma: Expo está diseñado para funcionar sin problemas en iOS y Android, lo que facilita el desarrollo de aplicaciones que funcionan en ambas plataformas.

8. Ecosistema y Comunidad: Expo cuenta con una comunidad activa y un ecosistema de herramientas y bibliotecas que pueden facilitar el desarrollo y la solución de problemas.

9. Simplicidad de Despliegue: Al usar Expo, puedes publicar tu aplicación en línea de manera rápida y sencilla sin la necesidad de lidiar con configuraciones complicadas de compilación.

10. Previews en Dispositivos: Puedes probar tu aplicación en dispositivos físicos sin necesidad de un emulador, lo que permite un desarrollo y pruebas más cómodos.


 ## Creacion de proyecto con expo

1. `npx create-expo-app NombreDelProyecto` 
2. `cd NombreDelProyecto`
3. `npm start`



## Estructura del proyecto

![estructura](/miPrimeraApp/img/mira%20la%20estructura.png)


# Api Creada 

![image](/miPrimeraApp/img/WhatsApp%20Image%202024-10-16%20at%201.16.14%20AM.jpeg)

![image](/miPrimeraApp//img/WhatsApp%20Image%202024-10-16%20at%201.16.13%20AM%20(1).jpeg)

![image](./img/WhatsApp%20Image%202024-10-16%20at%201.16.12%20AM.jpeg)

![image](./img/WhatsApp%20Image%202024-10-16%20at%201.16.13%20AM%20(2).jpeg)

![image](/miPrimeraApp/img/WhatsApp%20Image%202024-10-16%20at%201.16.12%20AM%20(1).jpeg)



## Creacion de apk con Expo

Una vez finalizada la app , deberemos ejecutar los siguientes comandos

1. Instalar EAS CLI

`npm install -g eas-cli`


2. Iniciar sesión en tu cuenta de Expo
`eas login`

3. Configurar tu proyecto
Asegúrate de que tu proyecto esté configurado correctamente. Si no has creado un archivo eas.json, puedes hacerlo ejecutando el siguiente comando:`eas build:configure`

Se creara en la raiz un archivo `app.json`
 Debe tener esta configuracion 

 
      `"android":{
        "buildType":"apk"
      }`


```json
{
  "cli": {
    "version": ">= 12.5.2",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios":{
        "simulator":true
      }
      ,
      "android":{
        "buildType":"apk"
      }

    },

    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}


```

5. Crear el apk

`eas build -p android --profile preview`

6. Descragar apk de expo
![expo](/miPrimeraApp/img/vamoo.png)