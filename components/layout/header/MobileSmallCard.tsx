'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileSmallCardProps {
  title: string;
  img: string;
  to: string;
  onLinkClick: () => void;
}

const MobileSmallCard = ({ title, img, to, onLinkClick  }: MobileSmallCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-center h-28">
        <Image src={img} alt={title} width={48} height={48} className="w-12 h-12 object-contain mb-2" />
        <span className="font-medium text-[#0A2342] text-xs leading-tight">{title}</span>
    </Link>
);

export default MobileSmallCard;
