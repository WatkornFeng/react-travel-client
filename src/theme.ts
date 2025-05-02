import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#142B2Fff",
      dark: "#2A474Cff",
      light: "#A9B9B7ff",
    },
    secondary: {
      main: "#3A2C24ff",
      dark: " #BAB7ACff",
      light: "#D0D1C6ff",
    },
  },

  breakpoints: {
    values: {
      xs: 0, // default
      sm: 600, // default
      md: 1000, // default 900
      lg: 1200, // default
      xl: 1536, // default
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "#2A474Cff",
        },
      },
    },
  },
});

// /* CSS HEX */
// --gunmetal:            #142B2Fff
// --dark-slate-gray:     #355154ff
// --ash-gray:            #A9B9B7ff
// --silver:              #BAB7ACff
// --timberwolf:          #D0D1C6ff

// /* SCSS RGB */
// $gunmetal:             rgba(20, 43, 47, 1)
// $dark-slate-gray:      rgba(53, 81, 84, 1)
// $ash-gray:             rgba(169, 185, 183, 1)
// $silver:               rgba(186, 183, 172, 1)
// $timberwolf:           rgba(208, 209, 198, 1)

// /* CSS HEX */
// --midnight-green:      #1F3C40ff
// --dark-slate-gray:     #355154ff
// --dark-slate-gray-2:   #405B5Eff
// --silver:              #BAB7ACff
// --timberwolf:          #D0D1C6ff

// /* SCSS RGB */
// $midnight-green:     rgba(31, 60, 64, 1)
// $dark-slate-gray:    rgba(53, 81, 84, 1)
// $dark-slate-gray-2:  rgba(64, 91, 94, 1)
// $silver:             rgba(186, 183, 172, 1)
// $timberwolf:         rgba(208, 209, 198, 1)

// /* CSS HEX */
// --gunmetal:          #142B2Fff
// --dark-slate-gray:   #2A474Cff
// --paynes-gray:       #627477ff
// --bistre:            #3A2C24ff
// --battleship-gray:   #9B9B94ff

// /* SCSS RGB */
// $gunmetal:           rgba(20, 43, 47, 1)
// $dark-slate-gray:    rgba(42, 71, 76, 1)
// $paynes-gray:        rgba(98, 116, 119, 1)
// $bistre:             rgba(58, 44, 36, 1)
// $battleship-gray:    rgba(155, 155, 148, 1)
