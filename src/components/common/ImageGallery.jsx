import { useState } from "react";
import { ChevronDown } from "lucide-react";

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 220 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 180 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 180 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 250 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 300 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 190 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 160 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 300 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 190 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 160 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 300 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 190 },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF-tZuLhFkcwkQGQuiAywGf6AkB66PgQHwg&s", height: 160 }
];

export default function ImageGallery() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 w-full">
        {images.slice(0, showAll ? images.length : 6).map((image, index) => (
          <div key={index} className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden w-full">
            <img 
              src={image.src} 
              alt="Galería" 
              className="w-full object-cover" 
              style={{ height: `${image.height}px` }}
            />
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 flex items-center justify-center gap-1 text-blue-600 font-medium hover:underline w-full"
        >
          Mostrar todo <ChevronDown size={16} />
        </button>
      )}
    </div>
  );
}
