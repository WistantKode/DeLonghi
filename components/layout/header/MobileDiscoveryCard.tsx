'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileDiscoveryCardProps {
  title: string;
  img: string;
  to: string;
  onLinkClick: () => void;
}

const MobileDiscoveryCard = ({ title, img, to, onLinkClick  }: MobileDiscoveryCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="block relative rounded-xl overflow-hidden h-32 w-full shadow-md group">
        <Image src={img} alt={title} layout="fill" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
            <span className="text-white font-bold text-sm text-center drop-shadow-md">{title}</span>
        </div>
    </Link>
);

export default MobileDiscoveryCard;
