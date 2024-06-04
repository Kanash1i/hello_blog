import Link from 'next/link';

import { cn } from '../../lib/utils';

import { buttonVariants } from '../ui/button';

export type NextLinkProps = React.ComponentProps<typeof Link>;

// 定义 NextLinkProps 类型，这是 TypeScript 语法，继承了 Link 组件的属性。
export const NextLink = ({ className, children, ...props }: NextLinkProps) => {
  return (
    <Link
      {...props}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'text-muted-foreground hover:text-primary',
        className,
      )}
    >
      {children}
    </Link>
  );
};
