import {
  AnchorHTMLAttributes,
  forwardRef,
  HTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

const InfoCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 w-full p-6',
        className
      )}
      {...props}
      ref={ref}
    />
  )
);

InfoCard.displayName = "InfoCard"

const InfoCardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 className={cn('text-4xl font-bold text-center', className)} {...props} ref={ref} />
));

InfoCardTitle.displayName = 'InfoCardTitle'

const InfoCardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn('lg:w-3/4', className)}
    {...props}
    ref={ref}
  />
));

InfoCardDescription.displayName = 'InfoCardDescription'

const InfoCardButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      'border px-4 py-2 rounded-3xl bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 text-sm font-medium',
      className
    )}
    {...props}
    ref={ref}
  />
));

InfoCardButton.displayName = 'InfoCardButton'

const InfoCardLink = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    className={cn(
      'border px-4 py-2 rounded-3xl bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 text-sm font-medium',
      className
    )}
    {...props}
    ref={ref}
  />
));

InfoCardLink.displayName = 'InfoCardLink'

export {
  InfoCard,
  InfoCardButton,
  InfoCardDescription,
  InfoCardLink,
  InfoCardTitle,
};
