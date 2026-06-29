import React, { useState } from 'react';
import {Server, BookOpen, Layers, Network, Monitor, Radio, ShieldCheck, Shield, Activity, Users, Globe, Wifi, Database,Terminal,HelpCircle,CheckCircle,Key} 
from 'lucide-react';


// 1. SUB-COMPONENTE: Portada e Inicio (Pestaña 1)

function Inicio() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-700">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
            <Server size={32} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Evaluación Sumativa N°2</span>
            <h2 className="text-2xl font-bold tracking-tight">Portada y Topología del Laboratorio</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
              <ShieldCheck className="text-slate-500" size={18} />
              Identificación
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong className="text-slate-700">Asignatura:</strong> T13V35 Sistemas Operativos</li>
              <li><strong className="text-slate-700">Docente:</strong> Rubén Schnettler L.</li>
              <li><strong className="text-slate-700">Estudiante:</strong> Antolín Molina</li>
              <li><strong className="text-slate-700">Código ID:</strong> molant</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
            INACAP Valparaíso · 2026
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-3">Objetivo General</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Desplegar, configurar y administrar de forma íntegra un entorno de red centralizado basado en 
            <strong> Windows Server 2025</strong>. El foco principal está puesto en la correcta administración 
            del servidor y en la claridad procedimental del aprovisionamiento de roles de infraestructura críticos.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-6">Esquema de Red Interna Aislada ("redlab")</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 bg-slate-50 p-6 rounded-lg border border-slate-100">
          
          <div className="w-full md:w-64 bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
            <div className="mx-auto w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mb-3">
              <Server size={20} />
            </div>
            <h4 className="font-bold text-sm text-slate-800">SERVIDOR (VM 1)</h4>
            <p className="text-xs text-red-500 font-mono font-bold mt-1">SRV-DC01</p>
            <div className="mt-3 pt-3 border-t border-slate-100 text-left space-y-1 text-xs text-slate-500">
              <p>• Windows Server 2025</p>
              <p>• IP: 192.168.10.10 (Fija)</p>
              <p>• Roles: AD DS + DNS + DHCP</p>
            </div>
          </div>

          <div className="flex items-center justify-center text-slate-400 rotate-90 md:rotate-0">
            <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-0.5 rounded md:my-0 my-2">redlab</span>
          </div>

          <div className="w-full md:w-64 bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
            <div className="mx-auto w-10 h-10 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-3">
              <Monitor size={20} />
            </div>
            <h4 className="font-bold text-sm text-slate-800">CLIENTE (VM 2)</h4>
            <p className="text-xs text-blue-500 font-mono font-bold mt-1">PC01</p>
            <div className="mt-3 pt-3 border-t border-slate-100 text-left space-y-1 text-xs text-slate-500">
              <p>• Windows 10 Pro</p>
              <p>• IP: Automática por DHCP</p>
              <p>• Dominio: inacap.local</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// 2. SUB-COMPONENTE: Instalación y Configuración Básica (Pestaña 2)

function Instalacion() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Layers className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.1 Instalación y Configuración Básica</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Preparación inicial del entorno e inmunización del sistema base.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Layers className="text-slate-500" size={16} />
              Identidad y Red Local
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between p-2 bg-white rounded border border-slate-100">
                <span className="text-slate-400">HOSTNAME:</span>
                <span className="font-bold text-slate-700">SRV-DC01</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded border border-slate-100">
                <span className="text-slate-400">IP ESTÁTICA:</span>
                <span className="font-bold text-slate-700">192.168.10.10</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded border border-slate-100">
                <span className="text-slate-400">MÁSCARA:</span>
                <span className="font-bold text-slate-700">255.255.255.0</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded border border-slate-100">
                <span className="text-slate-400">DNS LOCAL:</span>
                <span className="font-bold text-slate-700">127.0.0.1</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Shield className="text-slate-500" size={16} />
              Políticas de Inmunización
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              El <strong>Firewall de Windows</strong> se mantiene habilitado en todos sus perfiles (Dominio, Privado y Público) durante la fase de despliegue. Se justifican los parámetros estáticos de red para impedir colisiones con servicios de asignación dinámica externos.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <HelpCircle className="text-slate-500" size={16} />
              Validación Visual del Criterio
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              A continuación se muestra el estado técnico del servidor local como evidencia física exigida en la evaluación:
            </p>
          </div>

          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-44 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
            <Server size={32} className="mb-2 text-slate-300" />
            <span className="text-xs font-semibold text-slate-500">`img_molant/02_ip_fija.png`</span>
            <span className="text-[10px] text-slate-400 mt-1">(Copia tu captura física en la carpeta pública del proyecto para visualizarla)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. SUB-COMPONENTE: Active Directory (Pestaña 3)

function ActiveDirectory() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Network className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.2 Active Directory y Gestión de Objetos</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Promoción del controlador de dominio "inacap.local" y diseño de la estructura lógica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Network size={16} className="text-slate-500" />
              Estructura del Bosque
            </h3>
            <div className="p-3 bg-white rounded border border-slate-100 text-center font-mono text-xs font-bold text-slate-700">
              inacap.local
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 mb-2">Objetos Creados:</h4>
            <div className="space-y-1.5 text-xs">
              <div className="p-2 bg-white rounded border border-slate-100 font-mono">
                <span className="text-red-500 font-bold">OU:</span> OU_molant
              </div>
              <div className="p-2 bg-white rounded border border-slate-100 font-mono">
                <span className="text-slate-500 font-bold">Grupo:</span> GG_Administracion
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Users size={16} className="text-slate-500" />
            Cuentas de Usuario (AD)
          </h3>
          <p className="text-xs text-slate-500 mb-3">Usuarios registrados de forma manual dentro de la Unidad Organizativa:</p>
          <ul className="space-y-2 text-xs">
            <li className="p-2.5 bg-white rounded border border-slate-100 flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-700">Antolín Molina</p>
                <p className="text-[10px] text-slate-400 font-mono">User Logon: amolina</p>
              </div>
              <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">Activo</span>
            </li>
            <li className="p-2.5 bg-white rounded border border-slate-100 flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-700">Soporte Técnico</p>
                <p className="text-[10px] text-slate-400 font-mono">User Logon: soporte_molant</p>
              </div>
              <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">Activo</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <ShieldCheck size={16} className="text-slate-500" />
              Prueba de Logro
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              La verificación formal de este criterio requiere comprobar la anidación correcta de los usuarios dentro de sus respectivos grupos.
            </p>
          </div>

          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center text-slate-400 p-2 text-center">
            <Server size={24} className="mb-1 text-slate-300" />
            <span className="text-[11px] font-mono font-semibold text-slate-500">`img_molant/03_usuarios_ou.png`</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. SUB-COMPONENTE: Estación Cliente en Dominio (Pestaña 4)

function Cliente() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Monitor className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.3 Incorporación del Cliente al Dominio</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Conectividad de red interna, emparejamiento e inicio de sesión de usuario de dominio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Terminal size={16} className="text-slate-500" />
              Verificación de ICMP y DNS
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Comando fundamental ejecutado en la terminal del cliente para comprobar la resolución de nombres:
            </p>
            <div className="bg-slate-900 text-slate-200 p-3 rounded font-mono text-xs shadow-inner">
              <p className="text-slate-500">C:\Users\amolina&gt; ping inacap.local</p>
              <p className="text-green-400">Respuesta desde 192.168.10.10: bytes=32... TTL=128</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 space-y-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1">
            <ShieldCheck size={16} className="text-slate-500" />
            Estado de Autenticación
          </h3>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-white rounded border border-slate-100">
              <p className="text-slate-400 font-medium">Estación Host:</p>
              <p className="font-bold text-slate-700 font-mono">PC01</p>
            </div>
            <div className="p-2.5 bg-white rounded border border-slate-100">
              <p className="text-slate-400 font-medium">Dominio Adscrito:</p>
              <p className="font-bold text-slate-700 font-mono text-blue-600">inacap.local</p>
            </div>
            <div className="p-2.5 bg-white rounded border border-slate-100">
              <p className="text-slate-400 font-medium">Sesión Inicial Validada:</p>
              <p className="font-bold text-slate-700 font-mono">amolina@inacap.local</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-slate-500" />
              Evidencia Requerida
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              La captura física en el cliente debe mostrar el nombre completo del dominio en las propiedades de la computadora.
            </p>
          </div>

          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center text-slate-400 p-2 text-center">
            <Monitor size={24} className="mb-1 text-slate-300" />
            <span className="text-[11px] font-mono font-semibold text-slate-500">`img_molant/04_cliente_dominio.png`</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// 5. SUB-COMPONENTE: Servicios de Red DNS/DHCP (Pestaña 5)

function ServiciosRed() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Radio className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.4 Servicios de Red (DNS y DHCP)</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Suministro centralizado de nombres de dominio y direccionamiento IP dinámico para estaciones cliente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2 pb-2 border-b border-slate-200/40">
            <Globe size={18} className="text-slate-500" />
            Resolución de Nombres (DNS)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            La zona de búsqueda directa se estructuró de forma nativa para soportar el espacio de Active Directory, garantizando la resolución inversa y la identificación del Host.
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-white rounded border border-slate-100 flex justify-between font-mono">
              <span className="text-slate-400">Zona Directa:</span>
              <span className="font-bold text-slate-700">inacap.local</span>
            </div>
            <div className="p-2.5 bg-white rounded border border-slate-100 flex justify-between font-mono">
              <span className="text-slate-400">Host (Registro A):</span>
              <span className="font-bold text-slate-700">SRV-DC01.inacap.local &rarr; 192.168.10.10</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2 pb-2 border-b border-slate-200/40">
            <Wifi size={18} className="text-slate-500" />
            Asignación Dinámica (DHCP)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            El ámbito corporativo se activó para proveer parámetros de red sin necesidad de intervenir manualmente los puestos cliente de la red interna "redlab".
          </p>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 bg-white rounded border border-slate-100 flex justify-between">
              <span className="text-slate-400 text-[11px]">Nombre de Ámbito:</span>
              <span className="font-bold text-slate-700">Ambito_Corporativo_molant</span>
            </div>
            <div className="p-2 bg-white rounded border border-slate-100 flex justify-between">
              <span className="text-slate-400 text-[11px]">Rango de Entrega:</span>
              <span className="font-bold text-slate-700">192.168.10.50 - 100</span>
            </div>
            <div className="p-2 bg-white rounded border border-slate-100 flex justify-between">
              <span className="text-slate-400 text-[11px]">Opción 006 (DNS Server):</span>
              <span className="font-bold text-blue-600">192.168.10.10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Database size={16} className="text-slate-500" />
            Concesión Activa (Lease)
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            La base de datos del servidor DHCP registra de forma estricta la asociación de la IP concedida al adaptador de la máquina virtual cliente.
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200/60 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 font-mono">
              <span className="text-slate-400">Cliente DHCP:</span>
              <span className="font-bold text-slate-700">PC01</span>
            </div>
            <div className="flex justify-between py-1 font-mono">
              <span className="text-slate-400">IP Concedida:</span>
              <span className="font-bold text-red-500">192.168.10.50</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-between">
          <h4 className="text-xs font-bold text-slate-700 mb-2">Evidencia del Logro Técnico en el Laboratorio:</h4>
          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
            <Activity size={24} className="mb-1 text-slate-300" />
            <span className="text-[11px] font-mono font-semibold text-slate-500">`img_molant/05_dhcp_ambito.png`</span>
            <span className="text-[10px] text-slate-400">(Muestra el pool de direcciones con la concesión asignada al cliente)</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// 6. SUB-COMPONENTE: Políticas de Grupo GPO (Pestaña 6)

function Gpo() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Key className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.5 Políticas de Grupo (GPO)</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Creación, vinculación y comprobación de directivas de seguridad centralizadas en la Unidad Organizativa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Key size={16} className="text-slate-500" />
            Estructura de la Directiva
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-100">
              <span className="text-slate-400 font-medium">Nombre GPO:</span>
              <p className="font-bold text-slate-700 font-mono mt-0.5">GPO_Seguridad_molant</p>
            </div>
            <div className="p-3 bg-white rounded border border-slate-100">
              <span className="text-slate-400 font-medium">Vinculado a:</span>
              <p className="font-bold text-red-500 font-mono mt-0.5">OU_molant</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 space-y-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <ShieldCheck size={16} className="text-slate-500" />
            Caso de Uso Configurado
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Se restringió el acceso a las herramientas críticas del sistema mediante la plantilla administrativa:
          </p>
          <div className="p-2.5 bg-yellow-50 border border-yellow-100 rounded text-[11px] text-yellow-800 leading-relaxed font-medium">
            "Prohibir el acceso a Configuración de PC y Panel de control" &rarr; <span className="font-bold text-red-600">Habilitada</span>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Terminal size={16} className="text-slate-500" />
              Verificación de la Directiva
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Para validar los cambios de forma instantánea en el cliente, se fuerza el refresco de las directivas en consola:
            </p>
            <div className="bg-slate-900 text-slate-200 p-2 rounded font-mono text-[10px] shadow-inner mb-3">
              <p className="text-slate-500">C:\&gt; gpupdate /force</p>
              <p className="text-green-400">Actualizando directiva de usuario...</p>
              <p className="text-green-400">Se completó con éxito.</p>
            </div>
          </div>

          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-24 flex flex-col items-center justify-center text-slate-400 p-1 text-center">
            <span className="text-[10px] font-mono font-semibold text-slate-500">`img_molant/06_gpo_aplicada.png`</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// 7. COMPONENTE PRINCIPAL (App): Manejo de Estado y Diseño General

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-600">
      {/* Encabezado */}
      <header className="bg-slate-900 text-white py-6 px-6 shadow-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Server size={36} className="text-red-500" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Wiki Windows Server (Unidad 2)</h1>
              <p className="text-slate-400 text-xs font-medium mt-0.5">TI3V35 Sistemas Operativos · INACAP Valparaíso</p>
            </div>
          </div>
          <div className="text-center sm:text-right text-xs text-slate-400">
            <p className="font-semibold text-slate-300">Estudiante: Antolín Molina</p>
            <p className="font-mono text-slate-500">ID: molant</p>
          </div>
        </div>
      </header>

      {/* Menú de Navegación de la Wiki */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto py-2">
          <button
            onClick={() => setSeccionActiva('inicio')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'inicio' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={14} />
            Portada
          </button>
          
          <button
            onClick={() => setSeccionActiva('instalacion')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'instalacion' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers size={14} />
            2.1.1 Config. Básica
          </button>

          <button
            onClick={() => setSeccionActiva('ad')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'ad' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Network size={14} />
            2.1.2 Active Directory
          </button>

          <button
            onClick={() => setSeccionActiva('cliente')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'cliente' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Monitor size={14} />
            2.1.3 Estación Cliente
          </button>

          <button
            onClick={() => setSeccionActiva('servicios')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'servicios' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Radio size={14} />
            2.1.4 Servicios de Red
          </button>

          <button
            onClick={() => setSeccionActiva('gpo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'gpo' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Key size={14} />
            2.1.5 GPO
          </button>
        </div>
      </nav>

      {/* Área Dinámica de Visualización */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8">
          {seccionActiva === 'inicio' && <Inicio />}
          {seccionActiva === 'instalacion' && <Instalacion />}
          {seccionActiva === 'ad' && <ActiveDirectory />}
          {seccionActiva === 'cliente' && <Cliente />}
          {seccionActiva === 'servicios' && <ServiciosRed />}
          {seccionActiva === 'gpo' && <Gpo />}
        </div>
      </main>

      {/* Pie de Página */}
      <footer className="bg-white text-slate-400 text-xs py-4 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <span>© 2026 Antolín Molina · Todos los derechos reservados.</span>
          <span>Docente: Rubén Schnettler Lucero</span>
        </div>
      </footer>
    </div>
  );
}

export default App;