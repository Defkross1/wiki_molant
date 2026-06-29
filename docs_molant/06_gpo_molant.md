 Políticas de Grupo (GPO)

1. Diseño y Creación de la GPO

Para centralizar y automatizar el control de las configuraciones del entorno de usuario y del equipo dentro de la Unidad Organizativa corporativa, se procedió a implementar una Directiva de Grupo (GPO) personalizada mediante la consola "Administración de directivas de grupo".

Nombre de la GPO: GPO_Seguridad_molant

Definición del Caso de Uso: Se configuró una directiva restrictiva orientada a la seguridad del escritorio del usuario final. En este caso, se deshabilitó el acceso al Panel de Control y a la Configuración del sistema para impedir que los usuarios operativos realicen modificaciones que comprometan el rendimiento o la seguridad de la estación cliente.

Ruta de directiva editada: Configuración de usuario > Directivas > Plantillas administrativas > Panel de control > Prohibir el acceso a Configuración de PC y Panel de control (Estado: Habilitada).

2. Vinculación a la Unidad Organizativa

Para que la política surta efecto únicamente sobre el personal administrativo y no afecte a todo el dominio, se vinculó de forma estricta la directiva GPO_Seguridad_molant a la Unidad Organizativa creada con anterioridad, denominada OU_molant.

3. Comprobación y Actualización en la Estación Cliente

Una vez vinculada la directiva, se accedió a la máquina virtual cliente PC01 para forzar e inspeccionar la inmediata aplicación de las nuevas políticas:

Forzar actualización de políticas: Se ejecutó el comando en consola:
gpupdate /force

Verificación del efecto: Tras procesar la directiva, se intentó abrir el Panel de Control desde la cuenta del usuario de dominio amolina. El sistema operativo bloqueó la acción de forma correcta, desplegando un mensaje indicando que la operación fue cancelada debido a restricciones vigentes en el equipo.

4. Evidencia Física

Nota: La correcta vinculación de la GPO en el árbol de directivas y el mensaje de restricción del sistema operativo visualizado en la pantalla del cliente se comprueban en la captura de pantalla guardada en: img_molant/06_gpo_aplicada.png.