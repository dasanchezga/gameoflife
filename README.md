# Conway's Game of Life

## Desarrollado por Daniel Leonardo Sanchez Galindo

### Descripción del Proyecto

Este proyecto implementa el "Juego de la Vida" de Conway utilizando la biblioteca p5.js. El Juego de la Vida es un autómata celular bidimensional que sigue reglas simples pero da lugar a patrones complejos y dinámicos.

### Funcionalidades Principales

1. Iniciar/Detener el Juego: Un botón permite iniciar o detener la simulación del juego.
2. Reiniciar: Otro botón reinicia la cuadrícula a un estado inicial.
3. Guardar Configuraciones: Se pueden guardar hasta tres configuraciones distintas de la cuadrícula.
4. Cargar Configuraciones: Las configuraciones guardadas pueden ser cargadas mediante las teclas 1, 2 y 3.
   
### Uso del Proyecto

1. Iniciar la Aplicación:

* Abre el archivo HTML en un navegador web compatible con p5.js.
* Asegúrate de tener una conexión a Internet para cargar la biblioteca p5.js.
  
2. Interactuar con la Aplicación:

* Haz clic en las celdas de la cuadrícula para cambiar su estado (viva/muerta) cuando el juego está detenido.
* Utiliza el botón "Iniciar/Detener" para comenzar o detener la simulación del juego.
* Utiliza el botón "Reiniciar" para volver a un estado inicial de la cuadrícula.
  
3. Guardar y Cargar Configuraciones:

* Utiliza los botones "Guardar Configuración 1", "Guardar Configuración 2" y "Guardar Configuración 3" para guardar la configuración actual en una de las tres ranuras.
* Presiona las teclas 1, 2 o 3 para cargar la configuración previamente guardada.

  
### Estructura del Código

* El código está organizado en funciones que manejan diferentes aspectos del juego, como la inicialización, la generación de la próxima cuadrícula y la manipulación de eventos del mouse y teclado.
* Se utiliza la biblioteca p5.js para la manipulación del lienzo y la interfaz de usuario.

  
### Persistencia de Configuraciones

* Las configuraciones de la cuadrícula se guardan y cargan utilizando localStorage en el navegador.
* Tres configuraciones diferentes pueden ser guardadas y cargadas mediante las teclas 1, 2 y 3.
  
### Recomendaciones
* Recuerda que las configuraciones se guardan localmente en el navegador. Si limpias los datos del navegador, se perderán las configuraciones guardadas.
