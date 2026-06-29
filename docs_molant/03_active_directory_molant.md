# Criterio 2.1.2: Active Directory y Gestión de Objetos de Dominio

# 1. Promoción del Servidor a Controlador de Dominio (DC)
Se procedió con la instalación del rol de servicios de dominio de Active Directory (AD DS) mediante el Administrador del Servidor. Tras la copia de los archivos binarios, se ejecutó el asistente de configuración para promover el equipo a controlador de dominio, configurando un nuevo bosque bajo el nombre de dominio DNS totalmente calificado (FQDN) `inacap.local`.

# 2. Estructuración Jerárquica del Directorio
Para dar cumplimiento estricto a las políticas de orden jerárquico y delegación de funciones del laboratorio, se estructuró la base de datos de Active Directory mediante la consola "Usuarios y equipos de Active Directory", implementando los siguientes objetos:

 **Unidad Organizativa (OU):** Se generó una Unidad Organizativa principal con el sufijo identificador obligatorio de la evaluación, nombrada `OU_molant`, actuando como el contenedor raíz para la segregación de cuentas administrativas y operativas.
 **Grupos de Seguridad:** Se aprovisionó un grupo de seguridad local de tipo Global denominado `GG_Administracion`, diseñado para la posterior asignación de privilegios de acceso y vinculación centralizada.
 **Cuentas de Usuarios:** Se dieron de alta usuarios de prueba en el directorio estructurado, asignándoles credenciales estandarizadas y asociándolos al grupo global correspondiente para validar la herencia de objetos:
  - **Usuario 1:** `amolina` (Molina Antolín - Cuenta Operativa).
  - **Usuario 2:** `soporte_molant` (Cuenta de soporte técnico local).

# 3. Evidencia Física del Criterio
> Nota: La correcta jerarquía del árbol de directorio, la promoción exitosa del dominio `inacap.local` y la existencia visual de la OU junto a sus usuarios y grupos de seguridad se encuentran validados mediante la captura de pantalla guardada en: `img_molant/03_usuarios_ou.png`.