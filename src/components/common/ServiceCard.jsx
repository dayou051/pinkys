const ServiceCard = ({ title, description, tag = "‎" }) => {
    return (
      <div className="bg-[#FFEFE5] shadow-[0_4px_4px_0px_#FFD5CA] text-left px-6 py-4">
        {tag && <span className="text-xs font-extralight italic text-pink-600">{tag}</span>}
        <div className="flex flex-col gap-2">
          <h3 className="text-pink-600 font-bold text-lg">{title}</h3>
          <p className="text-pink-600 font-light text-sm">{description}</p>
        </div>
      </div>
    );
  };

export default ServiceCard;