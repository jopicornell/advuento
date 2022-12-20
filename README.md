# Sexto reto del calendario de adVUEnto

Seguimos con el proyecto del reto anterior. Hemos resuelto el anterior reto y ahora vamos a añadir una
nueva funcionalidad: el carrito de compra.

## El problema

Para hacer el carrito de compra, hemos creado un nuevo componente llamado `ShopingCart.vue` y hemos añadido
un `AppHeader.vue` para tener el `SearchProduct.vue` y el `ShopingCart.vue` en un mismo componente.

Para resolver este reto vamos a usar pinia, un plugin tipo Vuex para Vue 3. Ya lo tenéis creado en `src/store/cart.ts`
(no os preocupéis por el TS, de momento es solo JS) y lo hemos importado en `src/components/ProductCard.vue` usando la
Composition API (sólo un poquito, para que nos vayamos acostumbrando). Si no sabéis cómo usarlo, no os preocupéis por
entenderlo mucho. Si váis al componente`ProductCard.vue` veréis que hay una función llamada `setup` que es donde se usa
pinia (`useCartStore`) con un return. Pensad en esta función como un `created` de Vue 2 pero que lo que devuelve es lo
que se puede usar en el template. Después, podremos usar lo que devolvamos en la función `setup` también en los métodos.

Cómo véis, se pueden usar funcionalidades de Vue 2 como `methods` y `computed` pero también se pueden usar las nuevas
funcionalidades de Vue 3 como `setup`.

## Cómo usaremos pinia

Pinia es un plugin que nos permite tener un estado global en nuestra aplicación usando la Composition API. En este caso,
vamos a usarlo para guardar los productos que el usuario añada al carrito. En el template del componente `ShoppingCart`
podremos acceder al carrito usando la variable `cartStore.cartList`. También, en el componente `ProductCard.vue`
podremos llamar a los métodos de pinia que definamos dentro de `actions` del store simplemente usando
`cartStore.addProduct(product)`.

En la documentación de Pinia podéis ver más información de cómo usarlo, pero de manera resumida, tenemos un state y una
acción. El state es el estado del carrito y las acciones son los métodos que podemos usar para modificar el estado. Así
pues, en addProduct modificaremos la variable `cartList`para añadir el producto que nos llega por parámetro. Las
variables son reactivas, así que si modificamos el estado de la propiedad `cartList` del state, se actualizará en el 
template que se use.

## El reto

El reto consiste en añadir la funcionalidad a los componentes `ProductCard.vue` y `ShopingCart.vue` para que el usuario
pueda añadir productos al carrito y verlos en el componente `ShopingCart.vue`. Para ello, tenéis que hacer lo siguiente:

- Añadir al botón del componente `ProductCard.vue` el evento que al hacer click llame a la función `addProduct` de
  pinia.
- Implementar la acción `addProduct` de pinia para que añada el producto al carrito. Recordad usar `this` para acceder
  a las variables del store.
- Usar en el template del componente `ShopingCart.vue` la variable `cartStore.cartList` para mostrar los productos que
  hay en el carrito.


- Hacer que SearchProducts le pase un listado de productos cada vez que se haga una búsqueda. La lógica del componente
  está hecha, pero falta que se pase el listado de productos al componente padre.
- Hacer que ProductList reciba el listado de productos y lo muestre en pantalla. Para ello, tenéis que usar v-for para
  recorrer el listado de productos y mostrarlos en pantalla.
- Hacer que ProductCard reciba un producto y lo muestre en pantalla. Para ello, tenéis que usar props para recibir el
  producto
  y modificar el template.

Para los Seniors y los que quieran ir más allá, os proponemos que uséis la composition API para hacer el reto. Pensad
que se
trata de aprender entre todos y que no hay una única forma de hacerlo, así que si tenéis alguna duda, podéis preguntar
en el
canal de Teams.

## Enviar el reto

Para enviar el reto, tenéis que hacer un fork de este repositorio, hacer los cambios necesarios y enviar el link usando
la
opción de compartir (Share) de StackBlitz a onesaitux@minsait.com.