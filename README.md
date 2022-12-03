# Quinto reto del calendario de adVUEnto
Para este reto hemos decidido separarnos de adventofvue.com y
hacer reto por nuestra cuenta para poderlo tener en nuestro horario.

## El problema
Como veréis, la estructura del proyecto ya empieza a tener forma de proyecto real. Para este reto
usaremos un input de tipo search cómo el que hicimos en el primer reto, pero en vez de
mostrar los productos en una fila y dentro del mismo componente, lo haremos componentizando y usando
comunicación entre componentes.

Para ello, tenemos el padre App.vue, que es el que tiene el input y el listado de cards. Tenemos que 
pensar el App.vue como la pieza central de la aplicación, que es la que se encarga de comunicar los datos
entre los componentes. SearchProducts.vue se usará como componente con la lógica de búsqueda de productos,
ya que se encargará de llamar al servicio de productos y filtrarlos. Luego tenemos el componente ProductList.vue
que se encargará de montar la lista de productos, recibiendo por parámetro la lista de productos, y por último 
tenemos el componente ProductCard.vue que se encargará de mostrar la información de cada producto.

## El reto
El reto consiste en completar los componentes SearchProducts.vue, ProductList.vue y ProductCard.vue para que 
funcione la aplicación. Para ello, tenéis que seguir los siguientes pasos:
- Hacer que SearchProducts le pase un listado de productos cada vez que se haga una búsqueda. La lógica del componente 
está hecha, pero falta que se pase el listado de productos al componente padre.
- Hacer que ProductList reciba el listado de productos y lo muestre en pantalla. Para ello, tenéis que usar v-for para
recorrer el listado de productos y mostrarlos en pantalla.
- Hacer que ProductCard reciba un producto y lo muestre en pantalla. Para ello, tenéis que usar props para recibir el producto.

Para los Seniors y los que quieran ir más allá, os proponemos que uséis la composition API para hacer el reto. Pensad que se
trata de aprender entre todos y que no hay una única forma de hacerlo, así que si tenéis alguna duda, podéis preguntar en el
canal de Teams.

## Enviar el reto
Para enviar el reto, tenéis que hacer un fork de este repositorio, hacer los cambios necesarios y enviar el link usando la
opción de compartir (Share) de StackBlitz a onesaitux@minsait.com.