# Criterio 2.1.1: Instalación y Configuración Básica del Servidor

# 1. Procedimiento de Inicialización del Sistema
Se realizó el despliegue del sistema operativo de red Windows Server 2025 en la plataforma de virtualización VirtualBox. El proceso contempló la selección de la versión con Experiencia de Escritorio (Desktop Experience) para habilitar la interfaz gráfica de administración del sistema.

# 2. Parámetros Críticos de Configuración Local
Para garantizar la estabilidad de los servicios de directorio e infraestructura que se montarán posteriormente, se aplicaron de forma estricta los siguientes cambios en el servidor local:

**Asignación del Nombre del Equipo:** El identificador del servidor se modificó de los valores aleatorios de instalación al nombre estandarizado corporativo `SRV-DC01` para facilitar su identificación jerárquica en la red.
**Configuración del Direccionamiento IP Local (Fijo):** Los servicios de red centralizados exigen que el servidor cuente con parámetros de direccionamiento inmutables. Se asignaron manualmente las siguientes propiedades en la interfaz de red Ethernet:
  - *Dirección IP:* `192.168.10.10`
  - *Máscara de Subred:* `255.255.255.0` (Prefijo /24)
  - *Servidor DNS Preferido:* `127.0.0.1` (Dirección de bucle local o loopback, necesaria ya que el propio equipo se convertirá en el resolvedor de nombres del dominio).
**Gestión de Seguridad Perimetral local:** Se mantuvieron los perfiles del Firewall de Windows activos de forma preventiva y se configuraron las excepciones requeridas por las herramientas administrativas, resguardando la integridad del sistema frente a accesos no autorizados en el segmento de red.

# 3. Evidencia del Logro Técnico
> Nota: El estado operativo y la validación final del direccionamiento IP y nombre de host descritos en esta sección se encuentran debidamente validados en la captura de pantalla correspondiente guardada localmente en la ruta: `img_molant/02_ip_fija.png`.