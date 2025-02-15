import { useState } from "react";

const textItems = [
  { title: "¿Cómo puedo hacer un pedido?", text: "Puedes hacer un pedido directamente a través de nuestro catálogo en línea. Solo selecciona el producto y sigue los pasos para completar tu compra." },
  { title: "¿Cuáles son los métodos de pago?", text: "Aceptamos pagos con tarjetas de crédito, débito y transferencias bancarias. También puedes pagar a través de PayPal." },
  { title: "¿Puedo cambiar mi pedido?", text: "Si necesitas cambiar un pedido, por favor contáctanos dentro de las 24 horas después de realizarlo para que podamos asistirte." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full shadow-[0_4px_4px_0px_#FFD5CA]">
        {textItems.map((item, index) => (
          <div
            key={index}
            className="bg-pink-40 text-orange-50 cursor-pointer transition-all duration-300 hover:bg-pink-700"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center py-4">
              <span className="px-5 text-left">{item.title}</span>
              <span className={`transform transition-transform duration-500 px-5 text-2xl ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-700 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="py-4 px-5 bg-orange-50 text-pink-600 text-left">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FAQ;