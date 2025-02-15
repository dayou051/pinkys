const TestimonialCard = ({ cliente, comentario, calificacion, key }) => {
  return (
    <div className="bg-[#FFEFE5] shadow-[0_4px_4px_0px_#FFD5CA] text-center px-4 py-4 h-fit">
      <h3 className="text-pink-600 font-bold text-lg">{cliente}</h3>
      <p className="text-pink-600 font-light text-s mb-2 w-72">{comentario}</p>
      <div className="text-pink-600 font-light text-sm">{calificacion}</div>
    </div>
  );
};

export default TestimonialCard;
