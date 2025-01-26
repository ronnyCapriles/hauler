"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
  fullName: string;
  rut: string;
  phone: string;
  email: string;
  vehicleType: string;
  brandModel: string;
  year: string;
  capacity: string;
}

export default function EquipmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    rut: "",
    phone: "",
    email: "",
    vehicleType: "",
    brandModel: "",
    year: "",
    capacity: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'year' ? value.toString() : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Owner Information Section */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold">Información del Propietario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nombre completo</Label>
                  <Input
                    id="fullName"
                    placeholder="Ingresa tu nombre completo"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="rut">RUT/Identificación tributaria</Label>
                  <Input
                    id="rut"
                    placeholder="Ingresa tu RUT"
                    value={formData.rut}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono de contacto</Label>
                  <Input
                    id="phone"
                    placeholder="Ingresa tu teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold">Información del Vehículo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="vehicleType">Tipo de vehículo</Label>
                  <Input
                    id="vehicleType"
                    placeholder="Ingresa el tipo de vehículo"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="brandModel">Marca y modelo</Label>
                  <Input
                    id="brandModel"
                    placeholder="Ingresa la marca y modelo"
                    value={formData.brandModel}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="year">Año de fabricación</Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="Ingresa el año"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="capacity">Capacidad</Label>
                  <Input
                    id="capacity"
                    placeholder="Ingresa la capacidad"
                    value={formData.capacity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-primary_hauler text-white text-base py-2 px-6 rounded-lg hover:bg-primary_hauler/90 cursor-pointer font-bold transition-colors duration-300"
              >
                Confirmar Cita
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}