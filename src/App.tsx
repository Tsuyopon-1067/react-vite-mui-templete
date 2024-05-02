import { Card, Typography } from '@mui/material';
import SimpleAppBar from './component/SimpleAppBar';

function App() {
  return (
    <>
      <SimpleAppBar />
      <Card sx={{ m: 2, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          1. Hello World!
        </Typography>
      </Card>
      <Card sx={{ m: 2, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          2. Hello World!
        </Typography>
      </Card>
    </>
  );
}

export default App;
