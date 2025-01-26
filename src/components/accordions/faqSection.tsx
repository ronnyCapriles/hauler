"use client"; // Required for client-side interactivity

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="container mx-auto p-4 mb-12">
      <Accordion type="single" collapsible className="w-full">
        {/* FAQ Item 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl lg:text-2xl">¿Qué tipos de vehículos aceptan?</AccordionTrigger>
          <AccordionContent className="text-base">
            Aceptamos buses, minibuses y camiones que cumplan con nuestros estándares de calidad y seguridad.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ Item 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl lg:text-2xl" >¿Qué certificaciones son obligatorias?</AccordionTrigger>
          <AccordionContent className="text-base">
            Todas las certificaciones de seguridad y mantenimiento son obligatorias. Consulte nuestra lista completa de requisitos.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ Item 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl lg:text-2xl">¿Cómo funcionan los pagos por arriendo?</AccordionTrigger>
          <AccordionContent className="text-base">
            Los pagos se realizan mensualmente y pueden ser efectuados a través de transferencia bancaria o tarjeta de crédito.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}