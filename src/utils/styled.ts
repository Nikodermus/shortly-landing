import { css, FlattenSimpleInterpolation } from 'styled-components';
import { BREAKPOINTS } from '../constants/styled';

type VariableMutation = (value: [string, number | string]) => string;

const forVariables = (
  obj: Record<string, string | number>,
  fn: VariableMutation
) => Object.entries(obj).map(fn).join('\n');

export const createSizeVariables = (
  sizes: Record<string, number>,
  varName: string
): string =>
  forVariables(
    sizes,
    ([name, percentage]) => `--${varName}-${name}: ${percentage}rem;`
  );

export const createPlainVariables = (
  variables: Record<string, string | number>,
  varName: string
): string =>
  forVariables(variables, ([name, value]) => `--${varName}-${name}: ${value};`);

const withMedia = (
  size: 'tablet' | 'desktop' | 'desktop-XL',
  rules: FlattenSimpleInterpolation
) => css`
  @media (min-width: ${BREAKPOINTS[size] || BREAKPOINTS.desktop}rem) {
    ${rules}
  }
`;

export const mediaDesktop = (
  rules: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => withMedia('desktop', rules);

export const mediaDesktopXl = (
  rules: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => withMedia('desktop-XL', rules);

export const mediaTablet = (
  rules: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => withMedia('tablet', rules);

export const toREM = (size: number): string =>
  `calc(${size} / var(--font-size-px) * 1rem)`;
