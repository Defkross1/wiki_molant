# Criterio 2.1.3: Unión de Estación Cliente al Dominio

# 1. Conectividad
Antes de unir la estación `PC01` (Windows 10 Pro) al dominio, verificamos la comunicación con el servidor. Se configuró la tarjeta de red en "redlab" y se probó la resolución de nombres con el servidor:

 **Comando:** `ping inacap.local`

Esto confirma que el cliente llega correctamente al DNS del servidor `SRV-DC01` (192.168.10.10).

# 2. Proceso de unión
Una vez validada la red, procedimos a unir el equipo al dominio:

1. En la configuración avanzada del sistema, cambiamos el equipo de "Grupo de trabajo" a "Dominio" (`inacap.local`).
2. Introdujimos las credenciales de administrador del dominio para autorizar el cambio.
3. Tras reiniciar, iniciamos sesión con el usuario operativo: `amolina`.

# 3. Verificación
El éxito de la unión se puede verificar en el Panel de Control. La captura de pantalla se guardó en `img_molant/04_cliente_dominio.png`.