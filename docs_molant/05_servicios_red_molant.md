Servicios de Red (DNS y DHCP con Ámbito Activo)

1. Configuración del Servidor DNS

El rol de Servidor DNS se instaló de forma integrada junto con los Servicios de Dominio de Active Directory (AD DS). Esto garantizó la creación automática de la zona de búsqueda directa para el espacio de nombres inacap.local.

Para asegurar el correcto funcionamiento del entorno:

Se validó que el servidor utilizara su propio bucle local (127.0.0.1) o su IP estática (192.168.10.10) como DNS preferido.

Se configuraron los registros de recursos esenciales (registros tipo A y NS) que permiten traducir el nombre del controlador de dominio (SRV-DC01.inacap.local) a su dirección IP física.

2. Configuración del Servidor DHCP e Implementación del Ámbito Activo

Para evitar la asignación manual de direccionamiento en los puestos cliente del laboratorio, se instaló y autorizó el rol de DHCP en el servidor SRV-DC01. Posteriormente, se configuró un nuevo ámbito de red con los siguientes parámetros detallados:

Nombre del Ámbito: Ambito_Corporativo_molant

Rango de Direcciones de Distribución:

Dirección Inicial: 192.168.10.50

Dirección Final: 192.168.10.100

Máscara de Subred: 255.255.255.0 (Prefijo /24)

Opciones de Ámbito Críticas (Scope Options):

Opción 003 (Enrutador / Puerta de Enlace): 192.168.10.1 (Para simular la salida perimetral).

Opción 006 (Servidores DNS): 192.168.10.10 (Apunta directamente a nuestro controlador de dominio para resolver nombres corporativos).

Opción 015 (Nombre de Dominio): inacap.local (Sufijo de conexión automática de la red).

Una vez creado, se procedió con la Activación del Ámbito desde la consola administrativa de DHCP para iniciar la escucha de peticiones de descubrimiento de red.

3. Validación y Entrega de IP Dinámica

La estación de trabajo cliente PC01 se configuró para "Obtener una dirección IP automáticamente". Tras reiniciar la interfaz de red, el cliente envió una solicitud DHCP que fue atendida de inmediato por el servidor, asignándole la primera IP disponible en el rango configurado (192.168.10.50) junto con el enrutador y los DNS correctos del dominio.

4. Evidencia Técnica

Nota: El correcto estado del pool de direcciones del DHCP, la asignación activa de la concesión (lease) para la MAC address de la VM cliente y los registros de nombres DNS correspondientes se demuestran en la captura de pantalla guardada en: img_molant/05_dhcp_ambito.png.