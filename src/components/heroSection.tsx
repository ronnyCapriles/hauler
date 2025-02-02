"use client"

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full flex items-center justify-start h-screen p-4 md:p-16 lg:p-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url(/trucks.png)] bg-cover bg-center z-0"></div>
      <div className="absolute inset-0 bg-blue-900/50 z-10"></div> {/* Transparent overlay */}

      {/* Text Container (Full width on small screens, 40% on medium and larger screens) */}
      <div className="relative z-20 w-full md:w-[40%] text-left space-y-4 md:space-y-6">
        {/* Heading */}
        <h1 className="text-white_hauler text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
          Soluciones de Transporte Eficientes en Todo Chile
        </h1>
        {/* Paragraph */}
        <p className="text-white_hauler text-base sm:text-lg md:text-xl lg:text-2xl">
          Movemos personas, productos y negocios con seguridad, rapidez y fiabilidad.
        </p>
        {/* Buttons (Stacked on small screens, side by side on medium and larger screens) */}
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-4">
          <Button className="w-full py-8 rounded-lg bg-secondary_hauler text-lg px-12 sm:w-auto hover:bg-orange-500">
            Solicitar Cotización
          </Button>
          <Button className="text-primary_strong_hauler w-full py-8 rounded-lg bg-white_hauler text-lg px-12 sm:w-auto hover:bg-white_hauler">
            Proveedores: Registrate Aquí
          </Button>
        </div>
      </div>
    </div>
  );
}
