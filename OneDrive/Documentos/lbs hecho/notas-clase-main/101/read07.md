# ¿Qué es el control de versiones?

- El control de versiones es un sistema que rastrea y gestiona los cambios realizados en archivos a lo largo del tiempo.

- Este proceso es fundamental en el desarrollo de software, ya que permite a los desarrolladores mantener un historial de modificaciones, revertir a versiones anteriores, comparar cambios y colaborar en equipo sin conflictos.

- Herramientas como Git permiten controlar versiones de código, lo que facilita la coordinación y la resolución de problemas cuando múltiples personas trabajan en un mismo proyecto.

## ¿Qué es "clone" en Git?

- El comando git clone se utiliza para copiar un repositorio Git remoto (como uno alojado en GitHub) a tu máquina local.

- Cuando clonas un repositorio, obtienes una copia completa del código, junto con todo su historial de versiones, en tu computadora local.

- git clone= --<https://github.com/usuario/repositorio.git-->
Este comando descarga todos los archivos del repositorio y configura la conexión con el repositorio remoto para futuros cambios.

### ¿Cuál es el comando para agregar los archivos modificados a la zona de preparación?

- El comando para agregar archivos a la zona de preparación (staging area) en Git es:

- git add archivo
Este comando marca los cambios realizados en el archivo o archivos indicados para incluirlos en el próximo commit. Si deseas agregar todos los archivos modificados, puedes usar:

- git add .
Este comando agrega todos los archivos cambiados (excepto los ignorados) en el directorio actual y sus subdirectorios.

#### ¿Cuál es el comando para enviar la captura de los archivos modificados a GitHub?

- Para enviar los cambios (commits) a un repositorio remoto en GitHub, se utiliza el comando:

- git push origin nombre-rama
git push: Envía los commits locales al repositorio remoto.
origin: Es el nombre predeterminado del repositorio remoto. Puedes cambiarlo si tu remoto tiene otro nombre.

- nombre-rama: Es la rama donde deseas enviar los cambios. Por ejemplo, main o master.
Por ejemplo: git push origin main
