import { type RecipeVariantProps, cva } from '~/styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      test: { color: 'primary' },
    },
  },
  defaultVariants: {
    visual: 'test',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
