import { useState, useEffect } from 'react'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Context/Theme'


function App() {
  const [currentTheme, setCurrentTheme] = useState('light')

  const lightTheme = () => {
    setCurrentTheme('light');
  }
  const darkTheme = () => {
    setCurrentTheme('dark')
  }

  //Actual change in the Theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(currentTheme);
  }, [currentTheme])

  return (
    <ThemeProvider value={{ currentTheme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className='w-full'>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
