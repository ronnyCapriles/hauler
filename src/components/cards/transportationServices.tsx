import Image from 'next/image';

const TransportServices = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Passenger Transport Card */}
        <div className="shadow-xl bg-white rounded-lg p-6 sm:p-8 lg:p-12">
          {/* Icon */}
          <div className="mb-4">
            <Image
              src={"/passengersIcon.svg"}
              alt="Ícono pasajeros"
              width={48}
              height={48}
            />
          </div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Transporte de Pasajeros
          </h2>
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Ofrecemos una amplia gama de vehículos adaptados a las necesidades de nuestros clientes,
            desde taxis hasta buses de gran capacidad, garantizando comodidad y seguridad en cada viaje.
          </p>
          {/* Bullet points */}
          <ul className="space-y-4">
            <li className="flex items-start">
              {/* Green check icon */}
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {/* Text content */}
              <div className="ml-2">
                <strong className="text-gray-900">Comodidad:</strong>{" "}
                <span className="text-gray-600">
                  Vehículos equipados con asientos ergonómicos y aire acondicionado
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-2">
                <strong className="text-gray-900">Puntualidad:</strong>{" "}
                <span className="text-gray-600">
                  Compromiso con horarios establecidos para cada servicio
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-2">
                <strong className="text-gray-900">Seguridad:</strong>{" "}
                <span className="text-gray-600">
                  Conductores capacitados y vehículos mantenidos en óptimas condiciones
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Cargo Transport Card */}
        <div className="shadow-xl bg-white rounded-lg p-6 sm:p-8 lg:p-12">
          {/* Icon */}
          <div className="mb-4">
            <Image
              src={"/cargoIcon.svg"}
              alt="Ícono carga"
              width={48}
              height={48}
            />
          </div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Transporte de Carga
          </h2>
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Contamos con una flota de vehículos de carga que cubren desde pequeñas encomiendas hasta
            grandes volúmenes, adaptándonos a las necesidades logísticas de cada cliente.
          </p>
          {/* Bullet points */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-2">
                <strong className="text-gray-900">Variedad de Vehículos:</strong>{" "}
                <span className="text-gray-600">
                  Desde furgones hasta camiones de gran tonelaje
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-2">
                <strong className="text-gray-900">Flexibilidad:</strong>{" "}
                <span className="text-gray-600">
                  Servicios personalizados según requerimientos específicos
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-2">
                <strong className="text-gray-900">Seguimiento:</strong>{" "}
                <span className="text-gray-600">
                  Sistema de monitoreo en tiempo real para mayor transparencia
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransportServices;