#AngularJS con Google Maps

En esta Prueba se utilizó AngularJS para la resolución de problemas relacionados con Google Maps en su versión más básica.

Para poder utilizar la aplicación es necesario seguir los siguientes pasos:
1.	Es necesario clonar el sitio desde el repositorio de git que corresponde al siguiente enlace. https://github.com/futjesus/angular.git
	
2.	Es necesario luego utilizar el comando bower install para descargar todas las dependencias necesarias utilizadas en la aplicación.

3.	Es necesario crear un servidor virtual para su uso, en el caso de prueba se hizo con servidor apache utilizando XAMPP, el mismo debe apuntar a la carpeta raíz del proyecto.

Como usar la aplicación:

1.	Pantalla de inicio de sesión:
En esta pantalla se muestran dos campos para el inicio de sesión, el mismo se colocó de forma estática para su uso y así evitar ingresar sin conocimiento, es necesario iniciar sesión ya que la aplicación usa ui-route para el manejo de las rutas, además al iniciar sesión genera un token de sesión que tiene una validez de 15 días, por lo que no es necesario iniciar sesión cada vez que se desea utilizar.

2.	Pantalla principal
Esta es una pantalla que no muestra nada en principio, ya que normalmente en esta sección se muestra información relevante, es importante mencionar que el inicio de sesión queda almacenado en la cookies de la PC por lo que si es eliminada será necesario iniciar nuevamente sesión.

3.	Pantalla contactos
Es una pantalla bastante sencilla, ya que muestra la información proveniente de los servicios de la API ofrecida, correspondiente a todos los usuarios registrados que serán responsables de una tarea en particular.

4.	Pantalla tareas
Es la sección más completa y en la que se implementa el uso de Google Maps, en su versión básica, ya que es una herramienta bastante completa. 
En esta tarea podemos ver que se agregan tareas que están ubicadas en el mapa, en la que se tendrá asignado un responsable que son agregados previamente en la sección de contactos, además de utilizar nuevamente el API para la implementación de las actividades.

Nota: se trabajaron en los controladores para así mejorar el uso del scope y trabajar de una manera mas sencilla, se crearon fabricas para compartir métodos entre controladores, data biding para mantener el funcionamiento en tiempo real, se utilizó el ui-route para el manejo de las rutas y se tomó en cuenta el tipo de codificación solicitada.
Se trató de mantener el código lo más limpio posible y fácil entendimiento, pero de igual manera cualquier duda que se tenga con gusto estoy a disposición.

Saludos.

