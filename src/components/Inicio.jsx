import React from 'react';
import { Monitor, Server, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Inicio() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Encabezado Principal */}
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

      {/* Grid de Contenido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ficha Técnica */}
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

        {/* Detalles del Objetivo */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-3">Objetivo General</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Desplegar, configurar y administrar de forma íntegra un entorno de red centralizado basado en 
            <strong> Windows Server 2025</strong>. El foco principal está puesto en la correcta administración 
            del servidor y en la claridad procedimental del aprovisionamiento de roles de infraestructura críticos.
          </p>
        </div>
      </div>

      {/* Sección de la Topología */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-6">Esquema de Red Interna Aislada ("redlab")</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 bg-slate-50 p-6 rounded-lg border border-slate-100">
          
          {/* Servidor VM */}
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

          {/* Línea de conexión */}
          <div className="flex items-center justify-center text-slate-400 rotate-90 md:rotate-0">
            <ArrowRight size={20} className="hidden md:block" />
            <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-0.5 rounded md:my-0 my-2">redlab</span>
            <ArrowRight size={20} className="hidden md:block" />
          </div>

          {/* Cliente VM */}
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