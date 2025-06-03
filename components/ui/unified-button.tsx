import { ButtonHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500',
        secondary: 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 focus:ring-blue-500',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-lg',
        md: 'h-11 px-6 text-base rounded-xl',
        lg: 'h-14 px-8 text-lg rounded-xl',
        xl: 'h-16 px-10 text-xl rounded-2xl',
      },
      animation: {
        none: '',
        scale: 'hover:scale-105',
        float: 'hover:transform hover:-translate-y-1',
      },
      shadow: {
        none: '',
        sm: 'shadow-md hover:shadow-lg',
        md: 'shadow-lg hover:shadow-xl',
        lg: 'shadow-xl hover:shadow-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      animation: 'scale',
      shadow: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const UnifiedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, shadow, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, animation, shadow, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Se încarcă...
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
)

UnifiedButton.displayName = 'UnifiedButton'

export { UnifiedButton, buttonVariants } 