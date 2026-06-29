import React from 'react';
import { Network, Users, ShieldAlert, Image } from 'lucide-react';

export default function ActiveDirectory() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Título de la Sección */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Network className="text-red-500" size={24} />
          <h2 className="text-xl font-bold tracking-tight">2.1.2 Active Directory y Gestión de Objetos</h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">Promoción del controlador de dominio "inacap.local" y diseño de la estructura lógica.</p>
      </div>

      {/* Grid Técnico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bloque Izquierdo: Configuración del Bosque */}
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

        {/* Bloque Central: Gestión de Cuentas */}
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

        {/* Bloque Derecho: Evidencia */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm md:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
              <ShieldAlert size={16} className="text-slate-500" />
              Prueba de Logro
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              La verificación formal de este criterio requiere comprobar la anidación correcta de los usuarios dentro de sus respectivos grupos locales del dominio.
            </p>
          </div>

          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center text-slate-400 p-2 text-center">
            <Image size={24} className="mb-1 text-slate-300" />
            <span className="text-[11px] font-mono font-semibold text-slate-500">`img_molant/03_usuarios_ou.png`</span>
          </div>
        </div>

      </div>
    </div>
  );
}