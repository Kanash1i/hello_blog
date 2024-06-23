'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypeIntro = () => {
  return (
    <TypeAnimation
      className="text-3xl md:text-5xl tracking-widest text-pink-300 font-bold "
      sequence={[
        500,
        '🌸欢迎光临🌸',
      ]}
      speed={10}
      // repeat={Infinity}
    />
  );
};
