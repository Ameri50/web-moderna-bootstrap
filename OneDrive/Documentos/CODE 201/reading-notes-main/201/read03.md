# ¿Qué es el box model en CSS y cuáles son sus componentes principales?

- El modelo de caja es un concepto esencial en CSS que describe cómo se calcula el tamaño y el espacio ocupado por un elemento. Sus componentes principales son:

- Contenido : el área donde se muestra el contenido del elemento.

- Relleno : el espacio entre el contenido y el borde.

- Borde : el borde alrededor del relleno.

- Margen : el espacio fuera del borde que separa el elemento de otros.

## ¿Cuál es la diferencia entre box-sizing: content-boxy box-sizing: border-box, y cómo afecta esto al diseño de una página web?

- content-box: el ancho y alto se aplican solo al contenido; padding y border se agregan aparte, aumentando el tamaño total del elemento.

- border-box: el ancho y alto incluyen el contenido, padding y border, simplificando el cálculo del tamaño total del elemento.

- Impacto : border-boxfacilitar el diseño al evitar que el relleno o los bordes aumenten el tamaño total del elemento.

### ¿Cuáles son las propiedades principales que se utilizan para configurar un contenedor flex y cómo afecta la disposición de los elementos dentro de él?

- display: flex:define el contenedor flex.

- flex-direction: determina la dirección de los elementos (fila, columna).

- justify-content: alinea los elementos horizontalmente (inicio, centro, espacio entre).

- align-items: alinea los elementos verticalmente (inicio, centro, estirado).

- flex-wrap: controla si los elementos deben envolver cuando no caben.

- Estas propiedades permiten organizar elementos de manera flexible y dinámica.

#### ¿Cómo se utiliza la propiedad flexpara controlar el tamaño y el crecimiento de los elementos flexibles dentro de un contenedor?

- La propiedad flexcombina tres valores:

- flex-grow: define cuánto puede crecer un elemento respecto a los demás.

- flex-shrink: defina cuánto puede reducirse en caso de falta de espacio.

- flex-basis: establece el tamaño inicial antes de aplicar flex-growo flex-shrink.

- Ejemplo: flex: 1 1 autoindica que el elemento puede crecer y reducirse según el espacio disponible.

##### ¿Cuáles son las diferencias entre los formatos de color RGB, RGBA, hexadecimal y HSL en CSS, y en qué situaciones sería más conveniente utilizar cada uno?

- RGB : define colores mediante valores de rojo, verde y azul (ej. rgb(255, 0, 0)para rojo).

- RGBA : añade un canal alfa para la transparencia (ej. rgba(255, 0, 0, 0.5)).

- Hexadecimal : usa un código hexadecimal para representar colores (ej. #FF0000para rojo).

- HSL : utiliza tono (hue), saturación y luminosidad, más intuitivo para ajustes de color (ej. hsl(0, 100%, 50%)).

- Uso sugirió :

- RGB/Hex: colores sólidos.

- RGBA: colores con transparencia.

- HSL: fácil manipulación de matices y saturación.
