"use client"; // Required for client-side interactivity

export default function SupplierBenefits() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Beneficios para Proveedores</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Ingresos Constantes Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          {/* Dollar Sign SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary_hauler mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <h2 className="text-xl font-bold text-primary_hauler mb-2">
            Ingresos constantes
          </h2>
          <p className="text-gray-700">
            Garantizamos contratos de arriendo con empresas establecidas.
          </p>
        </div>

        {/* Transparencia Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          {/* Eye SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary_hauler mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <h2 className="text-xl font-bold text-primary_hauler mb-2">
            Transparencia
          </h2>
          <p className="text-gray-700">
            Procesos claros y justos en la evaluación y pago.
          </p>
        </div>

        {/* Soporte Técnico Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          {/* Wrench SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary_hauler mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
          <h2 className="text-xl font-bold text-primary_hauler mb-2">
            Soporte técnico
          </h2>
          <p className="text-gray-700">
            Asistencia para cumplir con estándares y certificaciones.
          </p>
        </div>

        {/* Expansión Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          {/* Network SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary_hauler mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6" y2="6"></line>
            <line x1="6" y1="18" x2="6" y2="18"></line>
          </svg>
          <h2 className="text-xl font-bold text-primary_hauler mb-2">
            Expansión
          </h2>
          <p className="text-gray-700">
            Accede a una red de clientes en minería, construcción y logística.
          </p>
        </div>
      </div>
    </div>
  );
}