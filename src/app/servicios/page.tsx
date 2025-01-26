"use client"

import ServicesHeroSection from "../../components/servicesHeroSection"
import EquipmentForm from "../../components/forms/equipmentForm"
import MeetForm from "../../components/forms/meetForm"
import FAQSection from "../../components/accordions/faqSection"
import TransportationServices from "../../components/cards/transportationServices"
import FleetSection from "../../components/cards/fleetSection"
import SupplierBenefits from "../../components/cards/supplierBenefits"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (

      <main className="w-full flex flex-col gap-8 pt-16 row-start-2 items-center sm:items-start">

        <style jsx global>{`
            html {
            scroll-behavior: smooth;
            }
        `}</style>
        
        <ServicesHeroSection />
        <SupplierBenefits />

        <div className="flex w-full bg-white_hauler py-6 pb-12">
            <FleetSection />
        </div>

       
        {/* Únete a nuestra red de proveedores Section */}
        <div className="container mx-auto p-4">
            <div className="mt-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Únete a nuestra red de proveedores
                </h2>
                <p className="text-gray-700 mb-8">
                    Forma parte de nuestra red de proveedores y accede a oportunidades exclusivas. Ofrecemos condiciones competitivas.
                </p>
                <a href="#equipos">
                    <Button className="bg-primary_hauler text-white hover:bg-primary_hauler/90">
                        Únete Ahora
                    </Button>
                </a>
                
            </div>
        </div>
        

        <div className="flex w-full bg-white_hauler py-6 pb-6">
            <TransportationServices />
        </div>

        <section id="equipos" />

        <div className="container mx-auto p-4">
            <div className="mt-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Registra tu Equipo
                </h2>
            </div>
        </div>

        <EquipmentForm />

        <section id="cita" />
        <div className="flex flex-col w-full bg-white_hauler py-6 pb-12">
            <div className="container mx-auto p-4">
                <div className="mt-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Agenda una Cita
                    </h2>
                    <p className="text-gray-600">
                        ¿Prefieres discutir detalles antes de registrar tu vehículo? Agenda una reunión con uno de nuestros ejecutivos, y resolveremos todas tus dudas.
                    </p>
                </div>
            </div>
            <MeetForm />
        </div>

        <div className="container mx-auto p-4">
            <div className="mt-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Preguntas Frecuentes
                </h2>
            </div>
        </div>
        
        <FAQSection />
      </main>

  );
}
