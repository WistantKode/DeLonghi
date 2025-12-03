'use client';

import React, { useState } from 'react';

interface FormulaireProps {
    productName?: string;
}

interface FormData {
    productName: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    message: string;
}

const initialFormData: FormData = {
    productName: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
};

const Formulaire: React.FC<FormulaireProps> = ({ productName }) => {
    const [formData, setFormData] = useState<FormData>({ ...initialFormData, productName: productName || '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        if (!formData.fullName || !formData.email || !formData.phone || !formData.productName) {
            setStatus('error|Veuillez remplir les champs obligatoires (Nom, Email, Téléphone, Produit).');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/send_email', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success|Commande envoyée avec succès ! Un administrateur vous recontactera bientôt.');
                setFormData({ ...initialFormData, productName: productName || '' }); 
            } else {
                setStatus('error|Une erreur est survenue lors de l\'envoi de la commande. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
            setStatus('error|Erreur de connexion au serveur. Veuillez vérifier votre réseau.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-60 max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-xl my-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4 text-center">
                Commander {formData.productName}
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                Veuillez remplir les informations ci-dessous. Un administrateur vous contactera pour finaliser la commande.
            </p>

            <div className="space-y-4">
                {/* Nom du Produit (Champ masqué ou non modifiable si passé par props) */}
                <div className="hidden">
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Produit</label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-gray-50 cursor-not-allowed"
                    />
                </div>

                {/* Nom Complet */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nom Complet *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#266BBF] focus:border-[#266BBF]"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#266BBF] focus:border-[#266BBF]"
                    />
                </div>

                {/* Téléphone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#266BBF] focus:border-[#266BBF]"
                    />
                </div>

                {/* Adresse */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse de livraison</label>
                    <textarea
                        name="address"
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#266BBF] focus:border-[#266BBF]"
                    />
                </div>

                {/* Message / Notes */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Notes / Requêtes spéciales</label>
                    <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#266BBF] focus:border-[#266BBF]"
                    />
                </div>

                {/* Bouton de Soumission */}
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 cursor-pointer border border-transparent rounded-full font-bold text-white transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#266BBF] hover:bg-[#1a4b88]'}`}>
                
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Commande'}
                </button>
            </div>

            {/* Statut de l'envoi */}
            {status && (
                <p className={`mt-4 p-3 rounded-md text-center ${status.startsWith('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status.split('|')[1]}
                </p>
            )}
        </div>
    );
};

export default Formulaire;
