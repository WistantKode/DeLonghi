import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#0A2342] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page introuvable
          </h2>
          <p className="text-gray-600">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <Link href="/">
          <button className="w-full bg-[#0A2342] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#266BBF] transition-colors mb-6">
            Retour à l&apos;accueil
          </button>
        </Link>

        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-4">Pages populaires :</p>
          <div className="flex flex-col space-y-2">
            <Link href="/cafe" className="text-[#266BBF] hover:underline">
              Machines à café
            </Link>
            <Link href="/accessoires" className="text-[#266BBF] hover:underline">
              Accessoires
            </Link>
            <Link href="/promo_hallo" className="text-[#266BBF] hover:underline">
              Promotions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
