import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

//mode: dark - light - system
function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
       //MODE: DARK-LIGHT-SYSTEM
        <MenuItem value='light'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LightModeIcon fontSize='small'/> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px'  }}>
          <DarkModeOutlinedIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px'  }}>
          <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

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
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ModeSelect />
    <hr />
    <ModeToggle />
    <hr />
    
      <div>Dan Le</div>
      <Typography variant='body2' color='text.secondary'>Test Typography</Typography>
      
        
    </>
  )
}

export default App
