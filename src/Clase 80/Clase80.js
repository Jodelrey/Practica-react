Descripción de la situación
Para evitar futuros conflictos y tener una convención que nos evite tener que estar pensando buenos nombres, a la hora de definir props que sean eventos y necesiten de un callback, vamos a usar lo siguiente:

Convención

onEvent
onSubjectEvent

es decir, el prefijo on- más el nombre del evento, y en caso de que sea necesario, sobre qué se hace el evento (por ejemplo, cuando hay dos eventos iguales sobre distintos componentes).

Ejemplos

onClick
onDeleteIconClick
onTextInputChange
onEditIconClick

Las funciones que actúen como callbacks de dichos eventos (los event handlers) se escriben:

Convención

handleEvent
handleSubjectEvent

de la misma manera que los eventos, excepto que utilizan el prefijo handle-

Ejemplos

handleClick
handleDeleteIconClick
handleTextInputChange
handleEditIconClick


Otras situaciones
Cuando un handler necesita invocar a otro handler (para no repetir código), se extrae en una nueva función el código que se necesita y se la invoca desde ambos handlers. Nunca se invoca un handler desde otro.