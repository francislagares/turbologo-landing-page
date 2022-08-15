import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    slateBlue: Palette['primary'];
  }

  interface PaletteOptions {
    slateBlue: PaletteOptions['primary'];
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    someStyle?: React.CSSProperties;
  }
}
