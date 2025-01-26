"use client"; // Required for client-side interactivity

import { Button } from "@/components/ui/button";

export default function FleetSection() {
  return (
    <div className="container mx-auto p-4">
      {/* Nuestra Flota Section */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Nuestra Flota</h1>

      <div className=" bg-white_hauler grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bus Ejecutivo Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/logo.svg" // Replace with your image path
            alt="Bus Ejecutivo"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary_hauler mb-4">
              Bus Ejecutivo
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>Capacidad: 45 pasajeros</li>
              <li>Aire acondicionado</li>
              <li>GPS tracking</li>
            </ul>
          </div>
        </div>

        {/* Camión de Carga Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/logo.svg" // Replace with your image path
            alt="Camión de Carga"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary_hauler mb-4">
              Camión de Carga
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>Capacidad: 20 toneladas</li>
              <li>Sistema de refrigeración</li>
              <li>Seguimiento en tiempo real</li>
            </ul>
          </div>
        </div>

        {/* Minibus Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/logo.svg" // Replace with your image path
            alt="Minibus"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary_hauler mb-4">
              Minibus
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>Capacidad: 18 pasajeros</li>
              <li>WiFi a bordo</li>
              <li>Sistema de seguridad avanzado</li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
}