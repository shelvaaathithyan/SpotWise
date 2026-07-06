import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spot-dark disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-spot-dark text-spot-white hover:bg-spot-dark/90': variant === 'primary',
            'bg-gray-100 text-spot-dark hover:bg-gray-200': variant === 'secondary',
            'border border-gray-200 bg-transparent hover:bg-gray-50 text-spot-dark': variant === 'outline',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
