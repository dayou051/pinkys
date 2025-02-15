import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const reviews = [
  { cliente: "Karina Sánchez Gúzman", comentario: "Excelente servicio.", calificacion: "⭐⭐⭐⭐⭐" },
  { cliente: "Juan Pérez", comentario: "Muy recomendable", calificacion: "⭐⭐⭐⭐⭐" },
  { cliente: "Ana López", comentario: "Buen trato y calidad.", calificacion: "⭐⭐⭐⭐⭐" },
  { cliente: "Luis Martínez", comentario: "Volveré a usarlo.", calificacion: "⭐⭐⭐⭐⭐" },
  { cliente: "María Fernández", comentario: "Súper fácil y rápido.", calificacion: "⭐⭐⭐⭐⭐" },
];

const duplicatedReviews = [...reviews, ...reviews];

const Testimonials = () => {
  return (
    <div className="overflow-hidden p-5">
      <motion.div
        className="flex space-x-4 w-[100%] flex-nowrap"
        animate={{ x: ["-20%", "-100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity}} 
      >
        {duplicatedReviews.map((review, index) => (
          <TestimonialCard
            key={index}
            cliente={review.cliente}
            comentario={review.comentario}
            calificacion={review.calificacion}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
