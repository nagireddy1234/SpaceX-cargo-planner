import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'CircularXXWeb',
    },
    overrides: {
        MuiCircularProgress: {
            colorPrimary: {
                color: 'black',
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
});

export default theme;
