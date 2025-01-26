"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FormData {
  meetingType: string;
  date: string;
  time: string;
  email: string;
}

export default function MeetForm() {
  const [formData, setFormData] = useState<FormData>({
    meetingType: "",
    date: "",
    time: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Meeting Type and Email Section */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold">Tipo de Reunión y Correo Electrónico</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="order-2 md:order-1">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="order-1 md:order-2">
                  <Label htmlFor="meetingType">Tipo de Reunión</Label>
                  <Select
                    value={formData.meetingType}
                    onValueChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        meetingType: value,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona el tipo de reunión" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial (Oficina en Antofagasta)</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold">Selecciona fecha y hora</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Hora</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-primary_hauler text-white text-base py-2 px-6 rounded-lg hover:bg-primary_hauler/90 font-bold transition-colors duration-300"
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