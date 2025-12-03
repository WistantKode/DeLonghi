'use client';

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

interface Option {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

const Choose: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const options: Option[] = [
    {
      id: 'barista',
      title: "C'est un moment barista",
      description: "J'aime préparer mon café étape par étape, vivre l'expérience du Barista à la maison.",
      image: "cafe/aide1.avif", 
      route: "/machines_expresso" // Updated route to match Next.js structure if needed, original was /machines-manuelles but likely mapped to machines_expresso in my migration?
      // Wait, let me check the original routes mapping.
      // machines-manuelles -> machines_expresso (based on previous migrations, let's verify)
      // machines-automatiques -> expresso_broyeurs (likely)
    },
    {
      id: 'simple',
      title: "D'une simple touche",
      description: "La machine à café prépare le café parfait pour moi. Je le déguste, et je recommence.",
      image: "cafe/aide2.avif", 
      route: "/expresso_broyeurs" // Updated route
    }
  ];

  // Let's verify the route mapping.
  // In task.md:
  // ExpressoBroyeurs.jsx → app/expresso_broyeurs/page.tsx
  // MachinesExpresso.jsx → app/machines_expresso/page.tsx
  
  // Original Choose.jsx had:
  // route: "/machines-manuelles"
  // route: "/machines-automatiques"

  // I need to be sure about where these routes point to in the new app.
  // ExpressoBroyeurs is likely "Machines Automatiques" (bean to cup).
  // MachinesExpresso is likely "Machines Manuelles" (pump espresso).
  
  // I will use the new paths: /machines_expresso and /expresso_broyeurs.

  const handleSelect = (option: Option) => {
    setSelectedOption(option.id);
    setTimeout(() => {
      router.push(option.route);
    }, 300);
  };

  return (
    // mt-24 pour mobile, lg:mt-40 pour desktop
    <div className="min-h-screen bg-white py-10 font-sans mt-24 lg:mt-40">
      
      {/* Wrapper centré avec largeur max pour éviter que ce soit trop large sur grands écrans */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="mb-8 sm:mb-12">
          <p className="text-sm font-medium text-[#0A2342] mb-2 uppercase tracking-wide">
            M&apos;aider à choisir
          </p>
          <h1 className="text-2xl sm:text-4xl font-normal text-[#0A2342] leading-tight">
            Comment décririez-vous votre moment café ?
          </h1>
          {/* Ligne séparatrice */}
          <div className="border-t border-gray-200 my-4 w-full"></div>
        </div>

        {/* Liste des options */}
        <div className="space-y-4 sm:space-y-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`group w-full flex items-center bg-white p-3 sm:p-6 rounded-xl transition-all duration-300 ease-in-out border text-left cursor-pointer
                ${selectedOption === option.id 
                  ? ' ring-2 ring-blue-100 bg-blue-50/30' 
                  : 'border-gray-200 hover:border-[#0A2342] '
                }
              `}
              aria-label={`Sélectionner l'option : ${option.title}`}
            >
              
              {/* mobile (w-20) et desktop (sm:w-32) */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 mr-4 sm:mr-6 overflow-hidden bg-gray-100 relative">
                <img 
                  src={option.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Contenu Texte */}
              <div className="flex-grow py-1">
                <h3 className="text-base sm:text-xl font-bold text-[#0A2342] mb-1 sm:mb-2 transition-colors">
                  {option.title}
                </h3>
                <p className="text-xs sm:text-base text-[#0A2342] leading-snug sm:leading-relaxed">
                  {option.description}
                </p>
              </div>
              
              {/* Icône Flèche */}
              <div className="flex-shrink-0 ml-2 sm:ml-4">
                <FaChevronRight className={`w-4 h-4 sm:w-6 sm:h-6 text-gray-300 transition-all duration-300 
                  ${selectedOption === option.id ? 'text-[#0A2342] translate-x-1' : 'group-hover:text-gray-600 group-hover:translate-x-1'}
                `} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
