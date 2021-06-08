export type Greys = '25' | '50' | '75' | '200' | '400' | '600' | '800' | '900'
export type ThemeTypes =
  | 'primary'
  | 'dark'
  | 'light'
  | 'darkmode'
  | 'background'
export type Base =
  | 'base-white'
  | 'base-black'
  | 'base-grey'
  | `base-grey-${Greys}`
export type Themes =
  | `themed-${ThemeTypes}`
  | `info-${ThemeTypes}`
  | `success-${ThemeTypes}`
  | `warning-${ThemeTypes}`
  | `error-${ThemeTypes}`
  | `hydra-${ThemeTypes}`
  | `kratos-${ThemeTypes}`
  | `keto-${ThemeTypes}`
  | `dockertest-${ThemeTypes}`
  | `oathkeeper-${ThemeTypes}`
  | Base
