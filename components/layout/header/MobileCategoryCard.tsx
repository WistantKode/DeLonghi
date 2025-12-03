'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileCategoryCardProps {
  title: string;
  img: string;
  to: string;
  isGuide?: boolean;
  onLinkClick: () => void;
}

const MobileCategoryCard = ({ title, img, to, isGuide, onLinkClick }: MobileCategoryCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
        <span className="font-bold text-[#0A2342] text-sm w-2/3">{title}</span>
        {isGuide ? (
             <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                 <Image src={img} alt={title} width={24} height={24} className="w-6 h-6 object-contain" />
             </div>
        ) : (
             <Image src={img} alt={title} width={56} height={56} className="w-14 h-14 object-contain" />
        )}
    </Link>
);

export default MobileCategoryCard;
