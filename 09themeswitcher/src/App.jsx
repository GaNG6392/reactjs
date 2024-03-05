import './App.css';
import { ThemeProvider } from './context/themecontext';
import Card from './components/card';
import ThemeBtn from './components/themebtn';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => {
    setThemeMode('light');
  };
  const darkTheme = () => {
    setThemeMode('dark');
  };
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <h1 className=' m-4 p-4 bg-pink-600 text-3xl'> React with hook</h1>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className='flex flex-wrap min-h-screen items-center'>
          <div className='w-full'>
            <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
              <ThemeBtn />
            </div>

            <div className='w-full max-w-sm mx-auto'>
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
