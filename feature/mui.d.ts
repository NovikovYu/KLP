// import { Theme } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface Theme {
//     breakpoints: {
//       containers: {
//         md: number;
//         lg: number;
//       };
//     };
//   }
// }
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointsOptions {
    up?: (key: keyof Theme['breakpoints']['values']) => string;
    down?: (key: keyof Theme['breakpoints']['values']) => string;
    only?: (key: keyof Theme['breakpoints']['values']) => string;
  }
}