import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from 'next/link'

export default function SelectAutoWidth() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{position:'absolute',right:'60px',top:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select sx={{height:30,minWidth:100}}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
        >

          <Link href={'/day'}><MenuItem value={'Day'}>Day</MenuItem></Link>
          <Link href={'/week'}><MenuItem value={"Weak"}>Week</MenuItem></Link>
          <Link href={'/month'}><MenuItem value={'Month'}>Month</MenuItem></Link>
          <Link href={'/year'}><MenuItem value={'Year'} sx={{minWidth:150}}>Year</MenuItem></Link>
          <MenuItem value={'Расписание'}>Расписание</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
