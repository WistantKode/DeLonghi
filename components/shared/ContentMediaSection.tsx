import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ContentMediaSectionProps {
  title: React.ReactNode;
  content: React.ReactNode; // Can be string or React.ReactNode for richer content
  mediaSrc: string;
  mediaAlt: string;
  mediaPosition?: 'left' | 'right'; // Default 'right' (text left, media right)
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  isReversedOnMobile?: boolean; // To control flex-col-reverse on mobile
  videoType?: string; // e.g., "video/webm" if mediaSrc is a video
  bgColor?: string; // Optional background color for the section
  paddingX?: string; // Optional horizontal padding class
  paddingY?: string; // Optional vertical padding class
}

const ContentMediaSection: React.FC<ContentMediaSectionProps> = ({
  title,
  content,
  mediaSrc,
  mediaAlt,
  mediaPosition = 'right',
  tagline,
  ctaText,
  ctaLink,
  isReversedOnMobile = false,
  videoType,
  bgColor = 'bg-white',
  paddingX = 'px-4 lg:px-24',
  paddingY = 'py-10 lg:py-20',
}) => {
  const isMediaLeft = mediaPosition === 'left';
  const flexDirectionClass = isMediaLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';
  const mobileFlexDirectionClass = isReversedOnMobile ? 'flex-col-reverse' : 'flex-col';

  return (
    <section className={`w-full flex ${mobileFlexDirectionClass} ${flexDirectionClass} gap-10 lg:gap-20 ${paddingX} ${paddingY} ${bgColor}`}>
      {/* Media Block */}
      <div className="w-full lg:w-1/2">
        {videoType ? (
          <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
            <source src={mediaSrc} type={videoType} />
          </video>
        ) : (
          <Image src={mediaSrc} alt={mediaAlt} width={800} height={600} className="w-full h-auto object-cover" />
        )}
      </div>

      {/* Content Block */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 text-center lg:text-left">
        {tagline && (
          <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
            {tagline}
          </span>
        )}
        <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
          {title}
        </h2>
        <div className="text-base lg:text-lg text-gray-600">
          {content}
        </div>
        {ctaText && ctaLink && (
          <div className="mt-4">
            <Link href={ctaLink}>
              <button className="border border-[#0A2342] font-bold rounded-full px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition duration-300 w-fit mx-auto lg:mx-0">
                {ctaText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentMediaSection;
