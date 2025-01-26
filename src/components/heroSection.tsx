"use client"

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-primary_hauler w-full flex items-center justify-start h-screen p-4 md:p-16 lg:p-24">
      {/* Text Container (Full width on small screens, 40% on medium and larger screens) */}
      <div className="w-full md:w-[40%] text-left space-y-4 md:space-y-6">
        {/* Heading */}
        <h1 className="text-white_hauler text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Impulsando el Progreso: Transporte Confiable de Trabajadores y Carga en Chile
        </h1>
        {/* Paragraph */}
        <p className="text-white_hauler text-base sm:text-lg md:text-xl lg:text-xl">
          Soluciones de transporte seguras, eficientes y profesionales para las necesidades de su negocio
        </p>
        {/* Buttons (Stacked on small screens, side by side on medium and larger screens) */}
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-4">
          <Button className="w-full py-8 rounded-full bg-secondary_hauler font-black text-xl px-8 sm:w-auto hover:bg-primary_strong_hauler">
            Transporte de Trabajadores
          </Button>
          <Button className="text-primary_strong_hauler w-full py-8 rounded-full bg-white_hauler font-black text-xl px-8 sm:w-auto hover:bg-white_hauler">
            Transporte de Carga
          </Button>
        </div>
      </div>
    </div>
  );
}