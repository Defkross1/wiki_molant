import React, { useState } from 'react';
import { Server, BookOpen, Layers } from 'lucide-react';
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';

function App() {
  // Estado para controlar qué sección ve el usuario en la wiki
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
              seccionActiva === 'inicio'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={14} />
            Portada
          </button>
          
          <button
            onClick={() => setSeccionActiva('instalacion')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              seccionActiva === 'instalacion'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers size={14} />
            2.1.1 Config. Básica
          </button>
        </div>
      </nav>

      {/* Área Dinámica de Visualización */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8">
          {seccionActiva === 'inicio' && <Inicio />}
          {seccionActiva === 'instalacion' && <Instalacion />}
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