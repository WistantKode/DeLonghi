'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Formulaire from '@/components/Formulaire'; 

const CommanderContent = () => {
    const searchParams = useSearchParams();
    
    // Fonction pour extraire le paramètre 'name' de l'URL (?name=NomDuProduit)
    const productName = searchParams.get('name') || 'Produit non spécifié';

    return (
        <div className="pt-20 pb-20">
            {/* Le composant Formulaire reçoit maintenant le nom du produit 
              lu directement depuis l'URL, même si c'est une page différente.
            */}
            <Formulaire productName={productName} />
        </div>
    );
};

export default function CommanderPage() {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <CommanderContent />
        </Suspense>
    );
}
