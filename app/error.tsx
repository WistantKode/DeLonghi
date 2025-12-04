'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#0A2342] mb-4">Oups!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Une erreur est survenue
          </h2>
          <p className="text-gray-600">
            Nous sommes désolés, quelque chose s&apos;est mal passé.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full bg-[#0A2342] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#266BBF] transition-colors"
          >
            Réessayer
          </button>
          
          <Link href="/">
            <button className="w-full border-2 border-[#0A2342] text-[#0A2342] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Retour à l&apos;accueil
            </button>
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.digest && (
          <div className="mt-8 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 font-mono">
              Error Digest: {error.digest}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
