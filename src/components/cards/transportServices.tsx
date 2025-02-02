import React from 'react';

const TransportServices = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-8 bg-gray-100">
      {/* Transporte de Pasajeros Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Transporte de Pasajeros</h2>
        <p className="text-gray-700 mb-4">
          Ofrecemos una amplia gama de vehículos adaptados a las necesidades de nuestros clientes, desde taxis hasta buses de gran capacidad, garantizando comodidad y seguridad en cada viaje.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-600">Comodidad: Vehículos equipados con asientos ergonómicos y aire acondicionado</li>
          <li className="text-gray-600">Puntualidad: Compromiso con horarios establecidos para cada servicio</li>
          <li className="text-gray-600">Seguridad: Conductores capacitados y vehículos mantenidos en óptimas condiciones</li>
        </ul>
      </div>

      {/* Transporte de Carga Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Transporte de Carga</h2>
        <p className="text-gray-700 mb-4">
          Contamos con una flota de vehículos de carga que cubren desde pequeñas encomiendas hasta grandes volúmenes, adaptándonos a las necesidades logísticas de cada cliente.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-600">Variedad de Vehículos: Desde furgones hasta camiones de gran tonelaje</li>
          <li className="text-gray-600">Flexibilidad: Servicios personalizados según requerimientos específicos</li>
          <li className="text-gray-600">Seguimiento: Sistema de monitoreo en tiempo real para mayor transparencia</li>
        </ul>
      </div>
    </div>
  );
};

export default TransportServices;