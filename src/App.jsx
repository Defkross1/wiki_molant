import React, { useState } from 'react';
import { Server, Shield, Network, Users, Monitor, HelpCircle, FileText, CheckCircle2, AlertTriangle, Image } from 'lucide-react';
import imgEvidencia02 from '../docs_molant/img_molant/02_ip_fija.png';
import imgEvidencia03 from '../docs_molant/img_molant/03_usuarios_ou.png';

// SOLUCIÓN: Declaramos la variable vacía para que no tire error "undefined" y la pantalla no se vaya a negro
const imgEvidencia06 = "";

export default function App() {
  const [activeTab, setActiveTab] = useState('01_inicio');

  const menuItems = [
    { id: '01_inicio', label: 'Portada y Topología', icon: Server },
    { id: '02_instalacion', label: '2.1.1 Config. Básica', icon: Shield },
    { id: '03_active_directory', label: '2.1.2 Active Directory', icon: Users },
    { id: '04_cliente_dominio', label: '2.1.3 Cliente Dominio', icon: Monitor },
    { id: '05_servicios_red', label: '2.1.4 Servicios Red', icon: Network },
    { id: '06_gpo', label: '2.1.5 Políticas GPO', icon: Shield },
    { id: '07_prompts', label: 'Bitácora Prompts', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Encabezado */}
      <header className="bg-gray-900 border-b border-gray-800 p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-400 tracking-tight flex items-center gap-2">
              <Server className="w-7 h-7" /> WIKI WINDOWS SERVER — INACAP
            </h1>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Proyecto ID: wiki_molant</p>
          </div>
          <div className="bg-gray-800/80 border border-gray-750 px-4 py-2 rounded-lg text-right">
            <p className="text-sm font-semibold text-gray-200">Estudiante: Antolín Molina</p>
            <p className="text-xs text-blue-400 font-mono">Código identificador: molant</p>
          </div>
        </div>
      </header>

      {/* Barra de Navegación por Pestañas */}
      <nav className="bg-gray-900/50 border-b border-gray-850 sticky top-0 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-1 py-2 scrollbar-thin">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Contenedor de Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 shadow-xl">
          
          {/* SECCIÓN 1: INICIO / PORTADA */}
          {activeTab === '01_inicio' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <FileText className="text-blue-500" /> Portada y Topología de Red
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-5 bg-gray-850 border border-gray-800 rounded-xl">
                  <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Servidor Primario</h3>
                  <p className="text-lg font-bold text-gray-200">DC-WINDOWS-2022</p>
                  <p className="text-sm font-mono text-gray-400 mt-1">IP: 192.168.10.2 /24</p>
                  <p className="text-xs text-gray-500 mt-0.5">Dominio: inacap.local</p>
                </div>
                <div className="p-5 bg-gray-850 border border-gray-800 rounded-xl">
                  <h3 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Estación Cliente</h3>
                  <p className="text-lg font-bold text-gray-200">CL-WINDOWS-10</p>
                  <p className="text-sm font-mono text-gray-400 mt-1">IP: Asignada por DHCP</p>
                  <p className="text-xs text-gray-500 mt-0.5">Segmento: Red_Corporativa_molant</p>
                </div>
                <div className="p-5 bg-gray-850 border border-gray-800 rounded-xl">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Segmentación de Red</h3>
                  <p className="text-lg font-bold text-gray-200">Subred Interna Lan</p>
                  <p className="text-sm font-mono text-gray-400 mt-1">Red: 192.168.10.0 /24</p>
                  <p className="text-xs text-gray-500 mt-0.5">Gateway: 192.168.10.1</p>
                </div>
              </div>
              <div className="p-6 bg-gray-950 border border-gray-850 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Esquema Lógico de la Infraestructura</h3>
                <div className="border border-dashed border-gray-800 rounded-lg p-8 text-center text-gray-400 font-mono text-sm bg-gray-900/40 whitespace-pre overflow-x-auto">
{`[ INTERNET ] ─── [ Router/GW: 192.168.10.1 ] ─── [ Switch LAN ]
                                                      │
     ┌────────────────────────────────────────────────┴────────────────────────────────┐
     ▼                                                                                 ▼
[ Servidor DC: 192.168.10.2 ]                                     [ Cliente Win10: DHCP IP ]
- DNS / Active Directory / DHCP                                   - Miembro del Dominio`}
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 2: CONFIGURACIÓN BÁSICA */}
          {activeTab === '02_instalacion' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <Shield className="text-blue-500" /> 2.1.1 Configuración Básica del Servidor
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Pasos fundamentales ejecutados inmediatamente después del despliegue del sistema operativo en el servidor base:</p>
                <ul className="list-disc list-inside space-y-2 bg-gray-950 p-5 border border-gray-850 rounded-xl font-mono text-sm mb-6">
                  <li><span className="text-blue-400">Asignación IP Estática:</span> IPv4: 192.168.10.2, Máscara: 255.255.255.0, DNS: 127.0.0.1</li>
                  <li><span className="text-blue-400">Cambio de Nombre del Host:</span> Configurado formalmente como <span className="text-white">DC-WINDOWS-2022</span>.</li>
                  <li><span className="text-blue-400">Actualización y Parches:</span> Execution completa de Windows Update para mitigar vulnerabilidades críticas de día cero.</li>
                </ul>

                {/* CONTENEDOR PARA CAPTURA 02 */}
                <div className="mt-6 bg-gray-950 border border-gray-850 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-400 flex items-center gap-2 mb-3">
                    <Image className="w-4 h-4 text-blue-400" /> Evidencia Visual: Nombre de Equipo e IP Estática
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 flex justify-center p-2">
                    <img 
                      src={imgEvidencia02} 
                      alt="Evidencia IP Fija y Nombre de Host" 
                      className="max-w-full h-auto rounded object-contain border border-gray-800 shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 3: ACTIVE DIRECTORY */}
          {activeTab === '03_active_directory' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <Users className="text-blue-500" /> 2.1.2 Active Directory y Estructura Organizativa
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300">Promoción del servidor a Controlador de Dominio de un nuevo bosque llamado <span className="text-blue-400 font-semibold">inacap.local</span>.</p>
      
                <div className="p-6 bg-gray-950 border border-gray-850 rounded-xl">
                  <h3 className="text-md font-bold text-gray-200 mb-3">Jerarquía de Unidades Organizativas (OUs) y Cuentas</h3>
                  <div className="font-mono text-sm space-y-1 text-gray-400 mb-6">
                    <p className="text-blue-400">└── inacap.local (Raíz del Dominio)</p>
                    <p className="pl-6 text-yellow-500">└── 📁 OU_Corporativa_molant</p>
                    <p className="pl-12 text-green-400">├── 📁 Usuarios_Soporte</p>
                    <p className="pl-18 text-gray-300">└── 👤 Antolín Molina (Cuenta de Administrador Técnico)</p>
                    <p className="pl-12 text-green-400">└── 📁 Equipos_Corporativos</p>
                  </div>

                  {/* Muestra Directa de la Captura 03 */}
                  <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 flex justify-center p-2">
                    <img 
                      src={imgEvidencia03} 
                      alt="Evidencia Active Directory" 
                      className="max-w-full h-auto rounded object-contain border border-gray-800 shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 4: CLIENTE DOMINIO */}
          {activeTab === '04_cliente_dominio' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <Monitor className="text-blue-500" /> 2.1.3 Vinculación del Cliente al Dominio
              </h2>
              <p className="text-gray-300 mb-4">Procedimiento técnico para añadir de forma segura la estación de trabajo al entorno centralizado:</p>
              
              <div className="p-5 bg-gray-950 border border-gray-850 rounded-xl space-y-3 text-sm font-mono mb-6">
                <p><span className="text-blue-400 font-bold">Paso 1:</span> Configurar el DNS de la máquina Windows 10 apuntando a la IP del Servidor (192.168.10.2).</p>
                <p><span className="text-blue-400 font-bold">Paso 2:</span> Acceder a Propiedades del Sistema - Cambiar Configuración - Miembro del Dominio: <span className="text-white">inacap.local</span>.</p>
                <p><span className="text-blue-400 font-bold">Paso 3:</span> Autenticar la operación con las credenciales de administración del dominio creadas en la fase previa.</p>
              </div>

              {/* Muestra de la Captura Integrada del Cliente (Ya no tira pantalla negra) */}
              {imgEvidencia06 && (
                <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 flex justify-center p-2">
                  <img 
                    src={imgEvidencia06} 
                    alt="Evidencia Estación Cliente en el Dominio" 
                    className="max-w-full h-auto rounded object-contain border border-gray-800 shadow-md"
                  />
                </div>
              )}
            </div>
          )}

          {/* SECCIÓN 5: SERVICIOS DE RED */}
          {activeTab === '05_servicios_red' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <Network className="text-blue-500" /> 2.1.4 Configuración del Ámbito DHCP y Servicios DNS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-950 p-6 border border-gray-850 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">Ámbito DHCP Activo</h3>
                  <table className="w-full text-sm font-mono text-left">
                    <tbody>
                      <tr className="border-b border-gray-850"><td className="py-2 text-gray-400">Nombre Ámbito</td><td className="py-2 text-gray-200">Red_Corporativa_molant</td></tr>
                      <tr className="border-b border-gray-850"><td className="py-2 text-gray-400">Rango Inicial IP</td><td className="py-2 text-green-400">192.168.10.50</td></tr>
                      <tr className="border-b border-gray-850"><td className="py-2 text-gray-400">Rango Final IP</td><td className="py-2 text-green-400">192.168.10.100</td></tr>
                      <tr><td className="py-2 text-gray-400">Gateway</td><td className="py-2 text-gray-200">192.168.10.1</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-950 p-6 border border-gray-850 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">Resolución de Nombres DNS</h3>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> <span className="font-mono">Zona Directa:</span> Resuelve de forma nativa nombres de host a direcciones IPv4 internas.</p>
                    <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> <span className="font-mono">Zona Inversa (10.168.192.in-addr.arpa):</span> Esencial para herramientas de diagnóstico de red y auditoría.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 6: GPO */}
          {activeTab === '06_gpo' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <Shield className="text-blue-500" /> 2.1.5 Despliegue de Políticas de Grupo (GPO)
              </h2>
              <div className="p-5 bg-gray-950 border border-gray-850 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" /> Restricciones de Entorno Aplicadas
                </h3>
                <p className="text-sm text-gray-400 mb-4">Las políticas se enlazaron de manera exitosa a nivel de Unidad Organizativa para asegurar el cumplimiento normativo:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono mb-6">
                  <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                    <p className="text-blue-400 font-bold">GPO_Bloqueo_Panel</p>
                    <p className="text-gray-400 mt-1 text-xs">Inhabilita el acceso al Panel de Control y Configuración del sistema a los usuarios estándar.</p>
                  </div>
                  <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                    <p className="text-blue-400 font-bold">GPO_Fondo_Corporativo</p>
                    <p className="text-gray-400 mt-1 text-xs">Establece por defecto un papel tapiz corporativo inmodificable mediante rutas de red UNC.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 7: BITÁCORA DE PROMPTS */}
          {activeTab === '07_prompts' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                <HelpCircle className="text-blue-500" /> Bitácora Transversal de Interacciones con la IA
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-950 border border-gray-850 rounded-xl">
                  <p className="text-xs text-blue-400 font-mono uppercase font-bold">Fase de Ajuste de Diseño (Falla Técnica Solucionada)</p>
                  <p className="text-sm text-gray-200 mt-1 italic">"Tengo un error de renderizado donde las clases de Tailwind CSS se muestran como texto plano y Vite arroja un fallo de resolución de importaciones de lucide-react. Bríndame un archivo unificado y la configuración del CSS global."</p>
                </div>
                <div className="p-4 bg-gray-950 border border-gray-850 rounded-xl">
                  <p className="text-xs text-green-400 font-mono uppercase font-bold">Fase Inicial del Proyecto</p>
                  <p className="text-sm text-gray-200 mt-1 italic">"Actúa como un tutor de desarrollo web y explícame paso a paso cómo iniciar un proyecto con React, Vite y Tailwind CSS en la raíz del disco C de forma manual."</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-900 border-t border-gray-850 p-4 text-center text-xs text-gray-500 mt-auto">
        Desarrollado bajo las directrices de la asignatura. Docente evaluador: Rubén Schnettler.
      </footer>
    </div>
  );
}