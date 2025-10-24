'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { cn } from "../../lib/utils"
import { GlobeDemo } from './GridGlobe'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-5 lg:grid-rows-7 gap-4 lg:gap-8 mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mennahesham253@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.1] bg-white transition duration-200 hover:shadow-xl dark:shadow-none space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className='h-full'>
        {/* Main Image */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Gradient overlay for item 1 */}
        {id === 1 && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80" />
        )}

        {/* Title + Description */}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative h-full min-h-40 flex flex-col justify-start items-start text-left p-4 sm:p-5 md:p-5 lg:p-10'
          )}
        >
          {/* Special UI for id=1 */}
          {id === 1 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 mt-6 uppercase tracking-wider">
                {description}
              </p>
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug max-w-lg drop-shadow-lg">
                {title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base mb-3 text-gray-300 max-w-md leading-tight">
              Building a strong foundation in electronics gave me a logical and
              analytical mindset — skills that fuel my approach to software
              development.
            </p>
            </div>
          ) : (
            <>
              <div className="font-sans font-extralight text-[#c1c2d3] text-xs sm:text-sm md:text-xs lg:text-base z-10 mb-2">
                {description}
              </div>
              <div className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl max-w-96 z-10 leading-tight">
                {title}
              </div>
            </>
          )}

          {/* Globe Section */}
          {id === 2 && <GlobeDemo />}

          {/* Tech Stack Tags */}
          {id === 3 && (
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
              {['React.js', 'Next.js', 'TailwindCSS', 'TypeScript', 'React Native', 'CSS', 'JavaScript', 'HTML', 'MySQL','Three.js','Shell Scripting'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-[0.6rem] sm:text-xs rounded-full border border-neutral-700 text-white bg-white/30 backdrop-blur-lg"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
