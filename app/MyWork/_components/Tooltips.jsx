'use client';
import React, { useId, useState } from 'react';

const placementMap = {
  top: {
    container: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    arrow: 'absolute bottom-[-6px] left-1/2 -translate-x-1/2 rotate-45',
  },
  bottom: {
    container: 'top-full mt-2 left-1/2 -translate-x-1/2',
    arrow: 'absolute top-[-6px] left-1/2 -translate-x-1/2 rotate-45',
  },
  left: {
    container: 'right-full mr-2 top-1/2 -translate-y-1/2',
    arrow: 'absolute right-[-6px] top-1/2 -translate-y-1/2 rotate-45',
  },
  right: {
    container: 'left-full ml-2 top-1/2 -translate-y-1/2',
    arrow: 'absolute left-[-6px] top-1/2 -translate-y-1/2 rotate-45',
  },
};

export const Tooltip = ({
  children,
  content,
  placement = 'top',
  className = '',
}) => {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const pos = placementMap[placement] || placementMap.top;

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {/* Trigger */}
      <span
        aria-describedby={id}
        tabIndex={0}
        className="
          inline-flex
          transform-gpu
          transition-all duration-200
          hover:-translate-y-1 hover:scale-105
          focus:-translate-y-1 focus:scale-105
          focus:outline-none
        "
      >
        {children}
      </span>

      {/* Tooltip */}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute z-50 ${pos.container}`}
        style={{ willChange: 'transform, opacity' }}
      >
        <span
          className={`
            inline-block w-60
            rounded-md px-3 py-2 text-sm
            bg-background
            text-foreground
            border border-border
            shadow-xl
            backdrop-blur
            transform transition-all duration-200
            ${visible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-2 scale-95'}
          `}
        >
          {content}
        </span>

        {/* Arrow */}
        <span
          aria-hidden
          className={`
            absolute h-3 w-3
            bg-background
            border border-border
            ${pos.arrow}
            transition-opacity duration-200
            ${visible ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </span>
    </span>
  );
};

const TooltipShowcase = () => {
  return (
    <div className="flex items-center justify-center">
      

        <div className="flex flex-col gap-6 items-center text-center">
          {['top', 'bottom', 'right', 'left'].map((pos) => (
            <p
              key={pos}
              className="max-w-lg text-muted-foreground leading-relaxed"
            >
              There was a problem with the server.{' '}
              <Tooltip
                placement={pos}
                content="Once AWS went down. AWS is generally reliable, but outages can still happen."
              >
                <button className="font-bold cursor-pointer">
                  Once AWS went down
                </button>
              </Tooltip>{' '}
              we had to quickly migrate to a new provider.
            </p>
          ))}
        </div>
    </div>
  );
};

export default TooltipShowcase;
