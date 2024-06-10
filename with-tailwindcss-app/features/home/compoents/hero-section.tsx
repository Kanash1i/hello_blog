import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from '../../../components/ui/tooltip';

import { NICKNAME, PATHS } from '@/constants';
import { TypeIntro } from './';
import { cn } from '@/lib/utils';

// import { socialMediaList } from './social-media';

export const HeroSection = () => {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="max-w-screen-md 2xl:max-w-7xl  gap-5 flex flex-col justify-center min-h-full px-6 md:px-10">
      <p
        className="text-2xl md:text-5xl tracking-widest animate-fade-right animate-ease-in-out"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
       这里
      </p>
      <strong
        className={cn(
          `text-5xl md:text-6xl tracking-widest font-black  bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500`,
          'animate-fade-left animate-ease-in-out',
        )}
        style={{
          WebkitTextFillColor: 'transparent',
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {NICKNAME}
      </strong>
      <p
        className="text-2xl md:text-5xl tracking-widest animate-fade-right animate-ease-in-out"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        の储物仓
      </p>
      
      <div
        className={cn('animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <TypeIntro />
      </div>
      <p
        className={cn(
          'text-2xl md:text-5xl tracking-widest',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        储藏一些
        <span className={`font-semibold text-[#ddacf5]`}>技术备忘</span>、
        <span className={`font-semibold text-[#64379f]`}>日常心得</span>和
        <span className={`font-semibold text-[#ddacf5]`}>Gal评测(？</span>
      </p>

      <p
        className={cn(
          'text-2xl md:text-5xl tracking-widest',
          'animate-fade-down animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <span className="ml-4"> Ciallo, World!&#12316;&#40;&#8745;&#12539;&#969;&#60;&#41;&#65342;&#9733;</span>
      </p>

      <p
        className={cn(
          'text-base md:text-2xl text-muted-foreground tracking-widest',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        我在这个网站记录我的成长，努力 💪 成为一个更好的程序员。
      </p>
      <div
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <Link
          href={PATHS.SITE_BLOG}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          我的博客
        </Link>
        <Link
          href={PATHS.SITE_ABOUT}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          关于我
        </Link>
      </div>

      <ul
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {/* {socialMediaList.map((el) => (
          <li key={el.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{el.label}</TooltipContent>
            </Tooltip>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
