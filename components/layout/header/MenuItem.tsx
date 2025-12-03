'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  image: string;
  to: string;
  onLinkClick: () => void;
}

const MenuItem = ({ title, image, to, onLinkClick  }: MenuItemProps) => {
  return (
      <Link href={to} onClick={onLinkClick} className="border shadow-md border-gray-100 rounded-lg pt-2 hover:shadow-lg transition flex flex-col justify-between h-32 hover:cursor-pointer">
          <p className="text-base font-medium px-4">{title}</p>
          <Image src={image} alt={title} width={64} height={64} className="mt-2 w-16 h-16 object-contain self-end mr-4" />
      </Link>
  );
};

export default MenuItem;
