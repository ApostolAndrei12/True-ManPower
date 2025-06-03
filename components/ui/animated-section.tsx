import { HTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const sectionVariants = cva(
  'relative transition-all duration-500',
  {
    variants: {
      variant: {
        default: 'bg-white',
        primary: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        secondary: 'bg-gradient-to-br from-gray-50 to-blue-50',
        dark: 'bg-gradient-to-br from-gray-900 to-blue-900 text-white',
      },
      padding: {
        none: 'py-0',
        sm: 'py-12',
        md: 'py-24',
        lg: 'py-32',
        xl: 'py-40',
      },
      animation: {
        none: '',
        fadeIn: 'opacity-0 translate-y-8',
        slideIn: 'opacity-0 -translate-x-8',
        scaleIn: 'opacity-0 scale-95',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      animation: 'fadeIn',
    },
  }
)

export interface AnimatedSectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: keyof JSX.IntrinsicElements
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ className, variant, padding, animation, as = 'section', children, ...props }, ref) => {
    const { elementRef, isVisible } = useScrollAnimation()
    const Component = as

    return (
      <Component
        ref={(node) => {
          // Forward the ref while also using it for the scroll animation
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
          elementRef.current = node
        }}
        className={cn(
          sectionVariants({ variant, padding, animation, className }),
          isVisible && 'animate-fade-in opacity-100 transform-none'
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export { AnimatedSection, sectionVariants } 