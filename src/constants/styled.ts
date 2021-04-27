export const FONT_SIZE_BASE_PX = 18;

export const FONT_SIZES = {
  XS: 0.6875,
  SM: 0.8125,
  MD: 0.9375,
  LG: 1,
  XL: 1.25,
  '2XL': 1.5,
  '3XL': 2,
  '4XL': 2.5,
  '5XL': 3,
  '6XL': 3.5,
} as const;

export const SIZINGS = {
  '2XS': 0.125,
  XS: 0.25,
  SM: 0.5,
  MD: 0.75,
  LG: 1,
  XL: 1.5,
  '2XL': 2,
  '3XL': 2.5,
  '4XL': 3,
  '5XL': 3.5,
  '6XL': 4,
} as const;

export const BORDER_RADIUS = {
  XS: '0.125rem',
  SM: '0.1875rem',
  MD: '0.375rem',
  LG: '0.75rem',
  XL: '4rem',
  round: '50%',
} as const;

export const BREAKPOINTS = {
  tablet: 768 / FONT_SIZE_BASE_PX,
  desktop: 1024 / FONT_SIZE_BASE_PX,
  'desktop-XL': 1440 / FONT_SIZE_BASE_PX,
} as const;

export const FONT_WEIGHTS = {
  reg: 400,
  med: 500,
  bld: 700,
  blk: 900,
} as const;

export const LINE_HEIGHT = {
  XS: 1,
  SM: 1.125,
  MD: 1.25,
  LG: 1.5,
  XL: 2,
} as const;

export const TRANSITION = {
  1: '200ms ease-in-out',
  2: '300ms ease-in-out',
  3: '500ms ease-in-out',
  4: '750ms ease-in-out',
} as const;

export const Z_INDEX = {
  backtap: -1,
  fab: 1000,
  tooltip: 2000,
  toast: 3000,
  dropdown: 4000,
  backdrop: 5000,
  banner: 5050,
  nav: 6000,
  modal: 7000,
  spinner: 8000,
} as const;
