import { Variants } from 'framer-motion';

/**
 * Standard easing curves
 */
export const smoothEase = [0.22, 1, 0.36, 1] as const;
export const smoothExitEase = [0.32, 0, 0.67, 0] as const;

/**
 * Page level transition variants
 * Exiting page fades out & drifts slightly upward (y: -14)
 * Entering page fades in & glides smoothly upward (y: 16 -> 0)
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
      when: 'beforeChildren',
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: {
      duration: 0.24,
      ease: smoothExitEase,
    },
  },
};

/**
 * Reduced motion page variants (respects prefers-reduced-motion)
 */
export const reducedPageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

/**
 * Staggered container for grouping child elements
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

/**
 * Subtle fadeInUp variant for headings, subtitles, cards, and buttons
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 14,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

/**
 * Subtle image / portrait variant
 */
export const subtleImageFade: Variants = {
  initial: {
    opacity: 0,
    scale: 0.985,
    y: 12,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
};
