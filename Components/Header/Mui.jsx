import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../store/reducer/sampleReducer';
import header from './Header.module.css'

export default function SelectAutoWidth() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const state = useSelector(state=>state.sampleData)
  const handleChange = (event) => {
    return setValue(event.target.value),dispatch(setMode(event.target.value))
  };
  return (
    <div className={header.mode}>
      <FormControl>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select sx={{height:31,maxWidth:85,borderRadius:'4px',boxSizing:'border box',paddingRight:'1px',
        fontSize:'14px',fontWeight:'500'}}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state.mode?state.mode:'month'}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={'day'} ><Link href={`/day/${state.year}/${state.month.id}/${state.day}`}><div style={{height:30,minWidth:100,padding:'3px'}}>Day</div></Link></MenuItem>
          <MenuItem value={"week"}><Link href={`/week/${state.year}/${state.month.id}/${state.day}`}><div style={{height:30,minWidth:100,padding:'3px'}}>Week</div></Link></MenuItem>
          <MenuItem value={'month'}><Link href={`/month/${state.year}/${state.month.id}`}><div style={{height:30,minWidth:100,padding:'3px'}}>Month</div></Link></MenuItem>
          <MenuItem value={'year'} sx={{minWidth:150}}><Link href={`/year/${state.year}/${state.month.id}`}><div style={{height:30,minWidth:100,padding:'3px'}}>Year</div></Link></MenuItem>
          <MenuItem value={'Расписание'}>Расписание</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
