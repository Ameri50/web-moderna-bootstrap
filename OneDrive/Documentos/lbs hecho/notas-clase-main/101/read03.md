
# ¿Cuál es el propósito de CSS?

- CSS (Cascading Style Sheets) es el lenguaje utilizado para dar estilo y diseño a una página web. Con CSS, puedes controlar colores, fuentes, márgenes, tamaños, posiciones y el aspecto visual de los elementos HTML. CSS permite separar el contenido (HTML) del diseño visual, lo que facilita la creación de páginas más atractivas y coherentes.

## ¿Qué analogía NO técnica usarías para explicar la responsabilidad de HTML vs. CSS?

- Imagina que HTML es como el esqueleto de una casa: define la estructura y ubicación de cada habitación, las paredes y el techo. CSS, en cambio, es como la decoración de interiores: se encarga de los colores de las paredes, el tipo de muebles, la disposición de los cuadros, y el estilo general que hace que la casa se vea atractiva y acogedora. Sin HTML, la casa no tendría estructura; sin CSS, la casa sería funcional pero no tendría estilo.

### ¿Cuáles son las tres formas de insertar CSS en tu proyecto?

- CSS en línea: Se aplica directamente en el elemento HTML utilizando el atributo style.

html
Copiar código
"p style="color: red;">Texto en rojo"
CSS interno: Se coloca en la sección "head" de tu documento HTML dentro de una etiqueta "style".
"head" "style" p {color: red;} "style" "head"
CSS externo: Se escribe en un archivo separado (por ejemplo, estilos.css) y se vincula al HTML con la etiqueta "link".

"head" "link rel="stylesheet" href="estilos.css"" "head"
Y en el archivo estilos.css: "p { color: red;} "
