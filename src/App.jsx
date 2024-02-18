import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ModeToggle />
      <div>Dan Le</div>
      <Typography variant='body2' color='text.secondary'>Test Typography</Typography>
      
        
    </>
  )
}

export default App
