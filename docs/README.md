<h1 align="center"> Modal Vista Rapida </h1>

Componente que permite visualizar los productos agregados al carrito en cuanto se adiciona un producto

![special-info-modal](https://user-images.githubusercontent.com/95322919/197269634-d6e5ff17-2a5f-41d4-8432-7bd873d93fa9.png)

____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex

- :pushpin: `Paso 2 - Clone estos archivos` con el link proporcionado en el repositorio 
- :pushpin: `Paso 3 - Instalacion de nodos de react`: 
  Ingresar a la carpeta de react ejecutando el comando en consola ```$ cd react```
  y dentro de esta instalar lo siguiente: <br>
  :pencil2:`1` Nodos de react ejecutando en consola el comando ```$ yarn``` <br>
  :pencil2:`2` Paquete `css-handles` para los estilos basicos ```$ @vtex/css-handles```
- :pushpin: `Paso 4 - Volver a carpeta principal del proyecto y linkear app a su Tienda`: 
  Ejecute comando en consola ```$ vtex link```
  ________
## :key: Listado de apps que están funcionando en la tienda
  1.  "vtex.product-context": "0.x",
  2.  "vtex.order-manager": "0.x",
  3.  "vtex.checkout-resources": "0.x"
__________
## :key:Dependencias

1. Store GraphQl

```ruby
  "dependencies": 
  {
    "vtex.store-graphql": "2.x"
  }
```
2. Store-theme: Coloque esta dependencia en el archivo `manifest.json` de su tienda

```ruby
  "dependencies": 
  {
    "itglobers.add-to-cart-info": "0.x"
  }
```
## :key:Manera de llamar al componente: 
Ejemplo:
```
"flex-layout.row#example":{
    "children":["add-to-cart-info"]
    }
```

## :black_nib:Autor

 [<sub>Génesis Pinto</sub>](https://github.com/genesispinto) 
