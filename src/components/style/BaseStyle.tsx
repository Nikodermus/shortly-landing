import { createGlobalStyle } from 'styled-components';

import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZE_BASE_PX,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHT,
  SIZINGS,
  TRANSITION,
  Z_INDEX,
} from '../../constants/styled';
import { createPlainVariables, createSizeVariables } from '../../utils/styled';

const BaseStyle = createGlobalStyle`
  :root {
    --color-cyan:hsl(180, 66%, 49%);
    --color-red: hsl(0, 87%, 67%);

    --color-violet:hsl(257, 27%, 26%);
    --color-violet-dark:hsl(255, 11%, 22%);
    --color-violet-darkest:hsl(260, 8%, 14%);

    --color-gray:hsl(0, 0%, 75%);
    --color-gray-voilet:hsl(257, 7%, 63%);

    ${createSizeVariables(BREAKPOINTS, 'breakpoint')}
    ${createSizeVariables(FONT_SIZES, 'font-size')}
    ${createSizeVariables(SIZINGS, 'sizing')}

    ${createPlainVariables(BORDER_RADIUS, 'border-radius')}
    ${createPlainVariables(FONT_WEIGHTS, 'font-weight')}
    ${createPlainVariables(LINE_HEIGHT, 'line-height')}
    ${createPlainVariables(TRANSITION, 'transition')}
    ${createPlainVariables(Z_INDEX, 'z-index')}

    --font-size-px: ${FONT_SIZE_BASE_PX};
  }

  * {
    &::after,
    &::before,
    & {
      transition: all 0.3s ease-in-out;
    }
  }

  html {
    font-size: ${FONT_SIZE_BASE_PX}px;
  }

  body {
    font-size: var(--font-size-LG);
  }

  html, body {
    color: var(--color-violet-darkest);
    font-family: 'Poppins', sans-serif;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }


  img,
  picture,
  svg,
  video {
    max-width: 100%;
    object-fit: contain;
  }

  button,
  input,
  a,
  textarea {
    background: transparent;
    border-radius: 0;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    &:visited,
    &:focus,
    & {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default BaseStyle;