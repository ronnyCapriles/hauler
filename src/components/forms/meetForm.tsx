"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Mapping of regions to their respective comunas
const regionComunas: Record<string, string[]> = {
  "Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
  Tarapacá: [
    "Iquique",
    "Alto Hospicio",
    "Pozo Almonte",
    "Camiña",
    "Colchane",
    "Huara",
    "Pica",
  ],
  Antofagasta: [
    "Antofagasta",
    "Mejillones",
    "Sierra Gorda",
    "Taltal",
    "Calama",
    "Ollagüe",
    "San Pedro de Atacama",
    "Tocopilla",
    "María Elena",
  ],
  Atacama: [
    "Copiapó",
    "Caldera",
    "Tierra Amarilla",
    "Chañaral",
    "Diego de Almagro",
    "Vallenar",
    "Huasco",
    "Freirina",
    "Alto del Carmen",
  ],
  Coquimbo: [
    "La Serena",
    "Coquimbo",
    "Andacollo",
    "La Higuera",
    "Paiguano",
    "Vicuña",
    "Illapel",
    "Canela",
    "Los Vilos",
    "Salamanca",
    "Ovalle",
    "Combarbalá",
    "Monte Patria",
    "Punitaqui",
  ],
  Valparaíso: [
    "Valparaíso",
    "Viña del Mar",
    "Concón",
    "Casablanca",
    "Quilpué",
    "Villa Alemana",
    "San Antonio",
    "Los Andes",
    "Quillota",
    "Calera",
    "La Ligua",
    "Papudo",
    "Petorca",
    "Zapallar",
    "Hijuelas",
    "Cabildo",
  ],
  Metropolitana: [
    "Cerrillos",
    "Cerro Navia",
    "Conchalí",
    "El Bosque",
    "Estación Central",
    "Huechuraba",
    "Independencia",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maipú",
    "Ñuñoa",
    "Pedro Aguirre Cerda",
    "Peñalolén",
    "Providencia",
    "Pudahuel",
    "Quilicura",
    "Recoleta",
    "Renca",
    "San Joaquín",
    "San Miguel",
    "San Ramón",
    "Vitacura",
    "Puente Alto",
    "Pirque",
    "San José de Maipo",
    "Colina",
    "Lampa",
    "Tiltil",
    "San Bernardo",
    "Buin",
    "Calera de Tango",
    "Paine",
    "Melipilla",
    "María Pinto",
    "Curacaví",
    "Alhué",
    "San Pedro",
    "Talagante",
    "El Monte",
    "Isla de Maipo",
    "Padre Hurtado",
    "Peñaflor",
  ],
  "O'Higgins": [
    "Rancagua",
    "Machalí",
    "Graneros",
    "Codegua",
    "Coinco",
    "Coltauco",
    "Doñihue",
    "Malloa",
    "Mostazal",
    "Olivar",
    "Peumo",
    "Pichidegua",
    "Quinta de Tilcoco",
    "Rengo",
    "San Fernando",
    "Chimbarongo",
    "Lolol",
    "Nancagua",
    "Palmilla",
    "Peralillo",
    "Placilla",
    "Santa Cruz",
  ],
  Maule: [
    "Talca",
    "Linares",
    "Curicó",
    "Molina",
    "San Clemente",
    "Teno",
    "Río Claro",
    "Constitución",
    "Empedrado",
    "Pelarco",
    "Pencahue",
    "Rauco",
    "Romeral",
    "Cauquenes",
    "Chanco",
    "Pelluhue",
    "San Javier",
    "Hualañé",
    "Licantén",
    "Maule",
    "Vichuquén",
    "Colbún",
    "San Rafael",
  ],
  "Ñuble": [
    "Chillán",
    "Chillán Viejo",
    "Quillón",
    "San Carlos",
    "Pinto",
    "Yungay",
    "San Ignacio",
    "El Carmen",
    "Coihueco",
    "Ñiquén",
  ],
  Biobío: [
    "Concepción",
    "Talcahuano",
    "Chiguayante",
    "San Pedro de la Paz",
    "Hualpén",
    "Coronel",
    "Lota",
    "Tomé",
    "Penco",
    "Hualqui",
    "Florida",
    "Santa Juana",
    "Lebu",
    "Arauco",
    "Curanilahue",
    "Contulmo",
    "Tirúa",
  ],
  "La Araucanía": [
    "Temuco",
    "Padre Las Casas",
    "Freire",
    "Pitrufquén",
    "Angol",
    "Collipulli",
    "Villarrica",
    "Nueva Imperial",
  ],
  "Los Ríos": [
    "Valdivia",
    "La Unión",
    "Futrono",
    "Corral",
    "Lanco",
    "Mariquina",
    "Máfil",
    "Panguipulli",
    "Río Bueno",
  ],
  "Los Lagos": [
    "Puerto Montt",
    "Ancud",
    "Castro",
    "Chonchi",
    "Curaco de Vélez",
    "Dalcahue",
    "Quellón",
    "Quemchi",
    "Quinchao",
    "Osorno",
    "Puerto Octay",
    "Purranque",
    "Puyehue",
    "Río Negro",
    "San Juan de la Costa",
    "Chaitén",
    "Fresia",
    "Frutillar",
    "Llanquihue",
    "Los Muermos",
    "Maullín",
  ],
  Aysén: [
    "Coyhaique",
    "Lago Verde",
    "Aysén",
    "Puerto Aysén",
    "Chile Chico",
    "Río Ibáñez",
  ],
  Magallanes: [
    "Punta Arenas",
    "Laguna Blanca",
    "Río Verde",
    "San Gregorio",
    "Timaukel",
    "Natales",
    "Torres del Paine",
  ],
};

interface FormData {
  nombreCompleto: string;
  correoElectronico: string;
  telefonoContacto: string;
  tipoServicio: string;
  region: string;
  comuna: string;
  detallesAdicionales: string;
}

export default function CotizacionForm() {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    correoElectronico: "",
    telefonoContacto: "",
    tipoServicio: "Transporte de Pasajeros", // Default value
    region: "",
    comuna: "",
    detallesAdicionales: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your backend)
    console.log("Form Data:", formData);
  };

  // Get the comunas for the selected region (or an empty array if none selected)
  const comunas = formData.region ? regionComunas[formData.region] || [] : [];

  return (
    <div className=" container p-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Card  className="shadow-2xl ">
        <CardContent>
          <form className = " py-12 px-8" onSubmit={handleSubmit}>

            {/* Nombre Completo y Correo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="nombreCompleto">Nombre Completo</Label>
                <Input
                  className="my-2 py-6"
                  id="nombreCompleto"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.nombreCompleto}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="correoElectronico">Correo Electrónico</Label>
                <Input
                  className="my-2 py-6"
                  id="correoElectronico"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.correoElectronico}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Teléfono y Tipo de Servicio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="telefonoContacto">Teléfono de Contacto</Label>
                <Input
                  className="my-2 py-6"
                  id="telefonoContacto"
                  type="text"
                  placeholder="Ingresa tu teléfono"
                  value={formData.telefonoContacto}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="tipoServicio">Tipo de Servicio</Label>
                <Select
                  
                  value={formData.tipoServicio}
                  onValueChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      tipoServicio: value,
                    }))
                  }
                >
                  <SelectTrigger className="w-full my-2 py-6">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Transporte de Pasajeros">
                      Transporte de Pasajeros
                    </SelectItem>
                    <SelectItem value="Transporte de Carga">
                      Transporte de Carga
                    </SelectItem>
                    <SelectItem value="Mudanza">Mudanza</SelectItem>
                    <SelectItem value="Otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Región y Comuna */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="region">Región</Label>
                <Select
                  value={formData.region}
                  onValueChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      region: value,
                      comuna: "", // Reinicia la comuna al cambiar la región
                    }))
                  }
                >
                  <SelectTrigger className="w-full my-2 py-6">
                    <SelectValue placeholder="Selecciona una región" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(regionComunas).map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comuna">Comuna</Label>
                <Select
                  value={formData.comuna}
                  onValueChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      comuna: value,
                    }))
                  }
                >
                  <SelectTrigger className="w-full my-2 py-6">
                    <SelectValue placeholder="Selecciona una comuna" />
                  </SelectTrigger>
                  <SelectContent>
                    {comunas.map((comuna) => (
                      <SelectItem key={comuna} value={comuna}>
                        {comuna}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Detalles Adicionales */}
            <div className="mb-4">
              <Label htmlFor="detallesAdicionales">
                Detalles Adicionales
              </Label>
              <textarea
              
                id="detallesAdicionales"
                placeholder="Ingresa detalles adicionales sobre tu solicitud"
                value={formData.detallesAdicionales}
                onChange={handleInputChange}
                className="w-full h-24 p-2 my-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary_hauler"
              />
            </div>

            {/* Botón de envío */}
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2
                        w-full bg-blue-600 text-white text-base 
                        py-8 px-6 rounded-lg font-bold 
                        hover:bg-blue-700 transition-colors duration-300"
            >
              <span className="text-sm sm:text-base lg:text-lg whitespace-normal text-wrap break-words">Solicitar Cotización</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H5" />
              </svg>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}