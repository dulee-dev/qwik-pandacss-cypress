import { css } from '~/styled-system/css';
import { buttonRecipe } from '~/styles/button.recipe';

export const s = {
  h1: css({
    color: 'secondry',
    // color: {
    // _dark: {
    // _disabled: 'secondry',
    // },

    // },
  }),
  button: buttonRecipe({ visual: 'test' }),
};
