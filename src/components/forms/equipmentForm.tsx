"use client";

import { useState, ChangeEvent, FormEvent } from "react";
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

interface VehiculoFormData {
  nombreCompleto: string;
  correoElectronico: string;
  tipoVehiculo: string;
  marcaModeloAnio: string;
  placaVehiculo: string;
  capacidad: string;
}

export default function RegistrarVehiculoForm() {
  const [formData, setFormData] = useState<VehiculoFormData>({
    nombreCompleto: "",
    correoElectronico: "",
    tipoVehiculo: "",
    marcaModeloAnio: "",
    placaVehiculo: "",
    capacidad: "",
  });

  // Maneja el cambio de texto
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Maneja el cambio del Select de “Tipo de Vehículo”
  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoVehiculo: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías hacer la lógica de envío al backend,
    // por ejemplo, usando un formData con fetch o axios.
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="container p-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Card className="shadow-2xl">
        <CardContent>
          <form className="py-12 px-8" onSubmit={handleSubmit}>

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

            {/* Tipo de Vehículo */}
            <div className="mb-4">
              <Label htmlFor="tipoVehiculo">Tipo de Vehículo</Label>
              <Select
                value={formData.tipoVehiculo}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full my-2 py-6">
                  <SelectValue placeholder="Selecciona el tipo de vehículo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Automóvil">Automóvil</SelectItem>
                  <SelectItem value="Camioneta">Camioneta</SelectItem>
                  <SelectItem value="Moto">Moto</SelectItem>
                  <SelectItem value="Camión">Camión</SelectItem>
                  <SelectItem value="Bus">Bus</SelectItem>
                  <SelectItem value="Otros">Otros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Marca, Modelo, Año / Placa / Capacidad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="marcaModeloAnio">Marca, Modelo, Año</Label>
                <Input
                  className="my-2 py-6"
                  id="marcaModeloAnio"
                  type="text"
                  placeholder="Ej. Toyota Yaris 2020"
                  value={formData.marcaModeloAnio}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="placaVehiculo">Placa del Vehículo</Label>
                <Input
                  className="my-2 py-6"
                  id="placaVehiculo"
                  type="text"
                  placeholder="ABC-123"
                  value={formData.placaVehiculo}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="capacidad">Capacidad</Label>
                <Input
                  className="my-2 py-6"
                  id="capacidad"
                  type="text"
                  placeholder="N° de asientos o kg de carga"
                  value={formData.capacidad}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Botón de Envío */}
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2
                         w-full bg-orange-600 text-white text-base 
                         py-8 px-6 rounded-lg font-bold 
                         hover:bg-orange-700 transition-colors duration-300"
            >
              <span className=" text-sm sm:text-base lg:text-lg whitespace-normal text-wrap break-words">Registrar Vehículo y Esperar Inspección</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}