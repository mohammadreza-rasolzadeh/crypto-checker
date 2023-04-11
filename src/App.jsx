import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import Home from './pages/Home';
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  const [mode,setMode] = useState();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme:dark)');

  useEffect(() => {
    setMode(prefersDarkMode ? "dark":"light");
  },[])

  return ( 
    <MainLayout mode={mode}>
      <Home />
    </MainLayout>
   );
}
 
export default App;