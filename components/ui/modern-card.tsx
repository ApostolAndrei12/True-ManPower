import { HTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border border-gray-100',
        gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100',
        transparent: 'bg-white/80 backdrop-blur-lg border border-white/20',
        dark: 'bg-gray-900 border border-gray-800 text-white',
      },
      hover: {
        none: '',
        scale: 'hover:scale-105',
        lift: 'hover:transform hover:-translate-y-2',
        glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      },
      shadow: {
        none: '',
        sm: 'shadow-md hover:shadow-lg',
        md: 'shadow-lg hover:shadow-xl',
        lg: 'shadow-xl hover:shadow-2xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-3xl',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'scale',
      shadow: 'md',
      rounded: 'lg',
      padding: 'md',
    },
  }
)

export interface ModernCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const ModernCard = forwardRef<HTMLDivElement, ModernCardProps>(
  ({ className, variant, hover, shadow, rounded, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, shadow, rounded, padding, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModernCard.displayName = 'ModernCard'

export { ModernCard, cardVariants } 