"use client";

import HeroSection from "../components/heroSection";
import TransportServices from "../components/cards/transportationServices";
import MeetForm from "../components/forms/meetForm";
import EquipmentForm from "../components/forms/equipmentForm";

export default function Home() {
  return (
    <main>
      {/* Smooth scrolling for anchor links */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section */}
      <HeroSection />

      {/* Solicita Cotización */}
      <section className="container mx-auto px-4 py-8 mt-8">
        <h2 className="text-center text-black text-2xl lg:text-4xl font-bold ">
          Solicita una cotización personalizada en minutos
        </h2>
        <div className="max-w-4xl mx-auto">
          <MeetForm />
        </div>
      </section>

      {/* Servicios (Transporte de Pasajeros / Carga) */}
      <section className="container mx-auto px-4 py-8">
        <TransportServices />
      </section>

      {/* Ofrecer Vehículo */}
      <section className="bg-primary_hauler py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-2xl text-center lg:text-4xl font-bold mb-2">
            ¿Tienes un Vehículo para ofrecer?
          </h2>
          <p className="text-white text-base text-center lg:text-2xl">
            Únete a nuestra red de proveedores y genera ingresos
          </p>
          <div className="max-w-4xl mx-auto">
            <EquipmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}