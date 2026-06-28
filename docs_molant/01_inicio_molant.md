# Portada: Laboratorio de Infraestructura Windows Server 2025

# 1. Identificación del Proyecto
 **Asignatura:** T13V35 Sistemas Operativos
 **Docente:** Rubén Schnettler Lucero
 **Estudiante:** Antolín Molina
 **Identificador de Corrección:** wiki_molant

# 2. Objetivo del Laboratorio
El propósito fundamental de esta simulación práctica es realizar el despliegue, la configuración y la posterior administración de objetos de dominio bajo el sistema operativo de red Windows Server 2025, integrando servicios críticos de infraestructura y estaciones de trabajo de forma segura y centralizada.

# 3. Topología de la Red Interna
Para el aislamiento seguro del laboratorio, se configuró una red interna privada dentro del entorno VirtualBox bajo el identificador único "redlab". Esta infraestructura se compone de las siguientes instancias virtuales:

# Controlador de Dominio (VM 1)
 **Nombre del Equipo:** SRV-DC01
 **Sistema Operativo:** Windows Server 2025
 **Dirección IP Fija:** 192.168.10.10
 **Máscara de Subred:** 255.255.255.0
 **Roles Principales:** Active Directory Domain Services (AD DS), Servidor DNS y Servidor DHCP.

# Estación de Trabajo Cliente (VM 2)
 **Nombre del Equipo:** PC01
 **Sistema Operativo:** Windows 10 Pro
 **Asignación de IP:** Dinámica, provista de forma automatizada mediante el alcance (ámbito) activo del servidor DHCP.
 **Pertenece a:** Dominio corporativo `inacap.local` de forma verificada.