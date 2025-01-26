"use client"; // Required for client-side interactivity

export default function TransportationServices() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Worker Transport Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-primary_hauler mb-4">
            Transporte de Trabajadores
          </h3>
          <p className="text-gray-700">
            Soluciones de transporte confiables adaptadas a industrias como minería,
            construcción y manufactura, asegurando desplazamientos seguros y
            puntuales.
          </p>
        </div>

        {/* Cargo Transport Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-primary_hauler mb-4">
            Transporte de Carga
          </h3>
          <p className="text-gray-700">
            Servicios de carga flexibles y seguros para empresas, capaces de manejar
            diversos tipos de carga.
          </p>
        </div>
      </div>
    </div>
  );
}