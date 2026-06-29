import React from 'react';
import { Server, Shield, Layers, HelpCircle } from 'lucide-react';

export default function Instalacion() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Título de la Sección */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Server className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.1 Instalación y Configuración Básica</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Preparación inicial del entorno e inmunización del sistema base.</p>
      </div>

      {/* Contenedor de Información Técnica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Bloque Izquierdo: Identidad y Red */}
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
              El <strong>Firewall de Windows</strong> se mantiene habilitado en todos sus perfiles (Dominio, Privado y Público) durante la fase de despliegue. Se justifican los parámetros estáticos de red para impedir colisiones con servicios de asignación dinámica externos en el laboratorio de simulación.
            </p>
          </div>
        </div>

        {/* Bloque Derecho: Zona de Evidencia (Captura) */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <HelpCircle className="text-slate-500" size={16} />
              Validación Visual del Criterio
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              A continuación se muestra el estado técnico del servidor local como evidencia física exigida en la evaluación sumativa:
            </p>
          </div>

          {/* Caja Simuladora de Imagen */}
          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-44 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
            <Server size={32} className="mb-2 text-slate-300" />
            <span className="text-xs font-semibold text-slate-500">`img_molant/02_ip_fija.png`</span>
            <span className="text-[10px] text-slate-400 mt-1">(Copia tu captura física en la carpeta pública del proyecto para visualizarla en producción)</span>
          </div>
        </div>

      </div>
    </div>
  );
}