"use client"

import HeroSection from "../components/heroSection"
import First from "../components/cards/first"
 
export default function Home() {
  return (

      <main className="w-full flex flex-col gap-8 pt-16 row-start-2 items-center sm:items-start">
        <style jsx global>{`
            html {
            scroll-behavior: smooth;
            }
        `}</style>
        <HeroSection/>
        <div className="w-full flex justify-center items-center py-6">
          <h2 className="text-primary_hauler text-4xl lg:text-5xl font-bold text-gray-900">¿Por qué Hauler?</h2>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center pb-12 pt-0 sm:pt-12 px-4">

          <div className="w-4/12"> 
            <First
              imgPath="/logo.svg" 
              imgH="50px"
              title="Seguridad Primero"
              description="Conductores certificados y vehículos completamente cumplidores que garantizan tu tranquilidad."
            />
          </div>
          

          <div className="w-4/12"> 
            <First
              imgPath="/logo.svg" 
              imgH="50px" 
              title="Confiabilidad"
              description="Puntuales, siempre. Cuenta con nuestro compromiso de puntualidad."
            />
          </div>
          

          <div className="w-4/12"> 
            <First
              imgPath="/logo.svg" 
              imgH="50px"
              title="Soluciones Personalizadas"
              description="Servicios personalizados diseñados para las necesidades de tu industria y negocio."
            />
          </div>
          
        </div>
      </main>

  );
}
