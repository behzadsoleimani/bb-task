import { Paper, styled } from '@mui/material';

export const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  display: 'flex',
  '& .container': {
    flexBasis: '50%',
    margin: 0,
    padding: '20px',
    overflow: 'auto',
    height: '100vh',
    '& .list': {
      gap: '10px',
      display: 'flex',
      flexDirection: 'column',
    },
    '& .pagination': {
      justifyContent: 'center',
      marginTop: '5px',
      display: 'flex',
      position: 'sticky',
      bottom: '-10px',
      background: theme.palette.secondary.main,
      borderRadius: '10px',
    },
    '& .loading': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  },
}));

export const Filter = styled('div')(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 10,
}));
