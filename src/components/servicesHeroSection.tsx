"use client"

import { Button } from "@/components/ui/button";

export default function ServicesHeroSection() {
  return (
    <div className="bg-primary_hauler w-full flex items-center justify-start h-screen bg-gray-100 p-4 md:p-16 lg:p-24">
      {/* Text Container (Full width on small screens, 40% on medium and larger screens) */}
      <div className="w-full md:w-[40%] text-left space-y-4 md:space-y-6">
        {/* Heading */}
        <h1 className="text-white_hauler text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Unete a Hauler: Pon tu equipo en movimiento y genera ingresos.
        </h1>
        {/* Paragraph */}
        <p className="text-white_hauler text-base sm:text-lg md:text-xl lg:text-xl text-gray-700">
          Tienes buses, minibuses o camiones? En Hauler te ofrecemos una oportunidad de negocio: 
          arrendamos tus equipos y los conectamos con empresas que necesitan soluciones de transporte confiables y eficientes
        </p>
        {/* Buttons (Stacked on small screens, side by side on medium and larger screens) */}
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-4">
            <a href="#equipos">
                <Button className="w-full py-8 rounded-full bg-secondary_hauler font-black text-xl px-8 sm:w-auto hover:bg-primary_strong_hauler">
                    Registra tus equipos
                </Button>
            </a>

            <a href="#cita">
                <Button className="text-primary_strong_hauler w-full py-8 rounded-full bg-white_hauler font-black text-xl px-8 sm:w-auto hover:bg-white_hauler">
                    Agendar una cita
                </Button>
            </a>
        </div>
      </div>
    </div>
  );
}