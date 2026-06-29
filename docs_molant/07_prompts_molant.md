# Bitácora Transversal de Uso de Inteligencia Artificial

**Estudiante:** Antolín Molina
**ID Proyecto:** wiki_molant
**Asignatura:** T13V35 Sistemas Operativos

-----------------------------------------------------

# 1. Registro de Interacciones y Prompts por Sección

# Fase 1: Configuración Inicial del Entorno
**Herramienta Utilizada:** Chatbot Externo (Gemini)
**Prompt Textual Aplicado:** *"Actúa como un tutor de desarrollo web y explícame paso a paso cómo iniciar un proyecto con React, Vite y Tailwind CSS en la raíz del disco C de forma manual para alguien que nunca ha programado."*
**Resultado:** Se obtuvo la secuencia exacta de comandos de inicialización (`npm create vite@latest`) y la estructura base de carpetas del proyecto.

# Fase de Depuración: Errores Críticos de Compilación (PostCSS / JSX Tokens)
**Herramienta Utilizada:** Chatbot Externo (Gemini)
**Prompt Textual Aplicado:** *"Tengo un error de renderizado en Vite de tipo ts(1382) 'Unexpected token' provocado por caracteres de flechas en un esquema de red, y además fallos de PostCSS de tipo ENOENT al intentar resolver la directiva @import de Tailwind v4 en mi disco C. Ayúdame a solucionar ambos problemas para estabilizar el servidor."*
* **Resultado:** Se identificó que el compilador interpretaba el carácter `>` como el cierre erróneo de una etiqueta HTML. Se aplicó una reestructuración de la topología usando caracteres de bloques protegidos y se desacopló el procesamiento pesado del archivo CSS.

------------------------------------------------------

# 2. Registro de Correcciones y Justificación Técnica

Durante el desarrollo de la wiki web se presentaron dos desviaciones críticas que requirieron intervención manual y corrección sobre el código generado por la IA:

1. **Sintaxis de Clases en Componentes:** La IA inicialmente sugirió inyectar las clases de Tailwind de forma directa en los botones sin las comillas correspondientes (`className={flex...}`). Esto rompía el árbol de renderizado de React. Se corrigió manualmente envolviendo los literales en cadenas de texto tradicionales (`className="flex..."`).
2. **Rutas del Compilador CSS:** Al utilizar Tailwind v4, las directivas `@apply` y `@theme` arrojaban advertencias en el editor y errores `ENOENT` al buscar carpetas físicas locales. La solución adoptada fue vaciar las reglas complejas de `src/index.css` e implementar la inyección nativa del framework directamente en la cabecera de `index.html` para asegurar un entorno de ejecución ligero y libre de fallos de compilación local.

---

# 3. Reflexión Final: Uso de IA como Agente vs Chatbot

El uso de la Inteligencia Artificial en este laboratorio sirvió como un catalizador de aprendizaje técnico acelerado. 

Al diferenciar su uso, la interacción con modelos externos en modo Chatbot permitió resolver dudas conceptuales, lógicas y sintácticas específicas de manera inmediata (como la sanitización de tokens en JSX), actuando como un consultor puntual. Por otro lado, la adopción de herramientas en modo Agente (con contexto completo del espacio de trabajo) facilitó mantener la coherencia estructural del proyecto respecto a los códigos identificadores exigidos en la pauta de evaluación.

Esta asistencia no reemplazó el criterio humano del administrador de sistemas; por el contrario, requirió comprender la arquitectura modular de React para corregir fallas de integración, asegurando que la aplicación final fuera un fiel reflejo de las configuraciones del servidor de Windows Server implementado en VirtualBox.