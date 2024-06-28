export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary:{
                main:"#D7C7F4",
                light:"#F9FAFA",
                dark:"#AF9FCD",
                bg:"#D7C7F4",
                back:"white",
                back1:'purple'
            },
            text: {
                primary: '#000000',
                secondary: 'rgba(0,0,0,0.5)',
              },
            
          }
        : {
            // palette values for dark mode
            primary:{
                main: '#34303d',
                light: '#3d3b41',
                dark: '#2a2730',
                bg: '#34303d',
                back:"#3d3b41",
                back1:"white"
            },
            text: {
                primary: '#ffff',
                secondary: "#F9FAFA",
              },
           
          }),
    },
    typography:{
        fontFamily:'Ubuntu, Open Sans',
        h1:{
            fontFamily: 'Ubuntu, sans-serif',
            color: mode === 'light' ? '#9785BA' : '#D7C7F4',
            fontSize: 28,
            fontWeight: 700,
        },
        h2:{
            fontFamily: 'Ubuntu, sans-serif',
            color: 'text.primary',
            fontSize: 28,
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: 22,
            },
        }
    }
  });