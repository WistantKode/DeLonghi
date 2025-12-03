'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobilePromoCardProps {
  title: string;
  text: string;
  img: string;
  isDark?: boolean;
  to: string;
  onLinkClick: () => void;
}

const MobilePromoCard = ({ title, text, img, isDark, to, onLinkClick  }: MobilePromoCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="block relative rounded-xl overflow-hidden h-28 w-full shadow-md">
        <Image src={img} alt={title} layout="fill" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 flex flex-col justify-center p-4 ${isDark ? 'bg-black/50' : 'bg-black/30'}`}>
            <span className="text-white font-extrabold text-lg leading-none mb-1">{title}</span>
            <span className="text-white text-xs font-medium">{text}</span>
        </div>
    </Link>
);

export default MobilePromoCard;
