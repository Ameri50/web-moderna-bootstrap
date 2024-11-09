# ¿Qué hacen los siguientes comandos?

- pwd (Print Working Directory):
Este comando muestra la ruta del directorio actual en el que te encuentras. Es útil para saber en qué parte del sistema de archivos estás ubicado.

- ls (List):
Muestra una lista de archivos y directorios en el directorio actual. Puedes añadir argumentos a ls para obtener información adicional, como detalles de permisos, tamaños de archivo, y ver archivos ocultos.

- cd (Change Directory):
Cambia el directorio actual a otro. Se utiliza para navegar por el sistema de archivos. Por ejemplo, cd /home/usuario te movería al directorio especificado.

- mkdir (Make Directory):
Crea un nuevo directorio en la ubicación actual o en la que especifiques. Por ejemplo, mkdir carpeta-nueva creará un directorio llamado "carpeta-nueva".

- touch:
Crea un archivo vacío con el nombre y ubicación especificados. Si el archivo ya existe, actualiza su marca de tiempo de última modificación. Por ejemplo, touch archivo.txt crea un archivo vacío llamado "archivo.txt".

## ¿Qué sucede en el siguiente escenario si ingresas estos comandos y argumentos en la línea de comandos?

- cd projects:
Cambia al directorio llamado "projects", que debe existir previamente en el directorio actual.

- mkdir new-project:
Crea un nuevo directorio llamado "new-project" dentro de "projects".

- touch new-project/newfile.md:
Crea un archivo vacío llamado "newfile.md" dentro del directorio "new-project".

- cd ..:
Vuelve al directorio anterior (es decir, "sube" un nivel en la jerarquía de directorios).

- ls projects/new-project:
Lista los archivos dentro del directorio "new-project", ubicado dentro de "projects". En este caso, el resultado sería mostrar el archivo "newfile.md", ya que fue creado en el paso anterior.

### ¿Qué comando usarías en la terminal para listar todos los archivos, incluidos los archivos ocultos, en un directorio de Linux o macOS?

- El comando sería:

ls -a

-a: Muestra todos los archivos, incluidos los archivos ocultos. Los archivos ocultos en Linux y macOS son aquellos cuyo nombre comienza con un punto (.)

Ejemplos de archivos ocultos comunes son .bashrc o .gitignore.
