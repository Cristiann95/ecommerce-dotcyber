# E-Commerce Dotcyber

Este es un proyecto de un e-commerce de productos tecnológicos desarrollado con **React** y **Vite**. Permite a los usuarios explorar una variedad de productos, filtrarlos por categoría, ver detalles, agregar productos al carrito y simular una compra finalizando con los datos del usuario. El proyecto utiliza varias bibliotecas y herramientas, incluidas **Firebase** como base de datos para productos y usuarios.

## Características

-   **Catálogo de productos**: Los productos tecnológicos se muestran con su nombre, imagen y precio.
-   **Filtrado de productos**: Los usuarios pueden filtrar los productos por categoría.
-   **Detalles del producto**: Al hacer clic en un producto, se muestra una vista con su descripción y con detalles más completos.
-   **Carrito de compras**: Los productos pueden ser agregados al carrito y modificados.
-   **Simulación de compra**: Los usuarios pueden ingresar sus datos para simular una compra.
-   **Diseño responsive**: La interfaz se adapta a diferentes tamaños de pantalla.
-   **Interacciones dinámicas**: Se incluyen notificaciones y alertas con **SweetAlert2** y **Toastify**.
-   **Rutas con React Router**: Para una navegación fluida entre diferentes secciones de la aplicación.


## Tecnologías y Herramientas

-   **[React](https://reactjs.org/)**: Framework principal para la creación de interfaces interactivas.
-   **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida para un desarrollo optimizado.
-   **[Bootstrap](https://getbootstrap.com/)** y **[React Bootstrap](https://react-bootstrap.netlify.app/)**: Bibliotecas de UI para diseñar la interfaz responsiva y estilizada.
-   **[SweetAlert2](https://sweetalert2.github.io/)**: Para mostrar alertas personalizadas.
-   **[Toastify](https://apvarun.github.io/toastify-js/)**: Para mostrar notificaciones tipo toast.
-   **[React Router](https://reactrouter.com/)**: Para el manejo de rutas en la aplicación.
-   **[Firebase](https://firebase.google.com/)**: Base de datos en tiempo real para almacenar y recuperar información de productos, además de enviar los datos del usuario durante la simulación de compra.

## Instalación

1.  Clona el repositorio en tu máquina local:
    
    ```bash
    git clone https://github.com/Cristiann95/ecommerce-dotcyber
    
    ```
    
2.  Navega al directorio del proyecto:
    
    ```bash
    cd dotcyber-ecommerce
    
    ```
    
3.  Instala las dependencias:
    
    ```bash
    npm install
    
    ```
    

    
4.  Ejecuta el proyecto en modo de desarrollo:
    
    ```bash
    npm run dev
    
    ```
    
    

## Estructura del Proyecto

```
/src
  /assets          # Imágenes y recursos estáticos
  /components      # Componentes reutilizables (Botones, Tarjetas de Producto, etc.)
  /context         # Manejo del estado global (Carrito, Productos)
  /firebase        # Configuración de Firebase y funciones para interactuar con la base de datos
 
  App.css          # Archivo de estilo

```

