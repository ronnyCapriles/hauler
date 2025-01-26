"use client"; // Required for client-side interactivity

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function MeetForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    meetingType: "",
    date: "",
    time: "",
    email: "", // Added email field
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
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
                {/* Email Field (First on mobile, second on desktop) */}
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

                {/* Meeting Type Field (Second on mobile, first on desktop) */}
                <div className="order-1 md:order-2">
                  <Label htmlFor="meetingType">Tipo de Reunión</Label>
                  <Select
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
              <input
                type="submit"
                value="Confirmar Cita"
                className="w-full bg-primary_hauler text-white text-base py-2 px-6 rounded-lg hover:bg-primary_hauler/90 cursor-pointer font-bold transition-colors duration-300"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}