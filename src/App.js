import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField, Typography, Paper } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      content: "",
      startDate: null,
      StarTime: null,
      endDate: null,
      endTime: null
    }
  }

render() {
  return (
    <div className="App">
      <div className="header"> TODO LIST</div>
      <Paper className="input_area" variant="outline" style={{padding: '10px'}}>
      <div className="input_area"> 
        <TextField label="제목" placeholder="제목을 입력해 주세요" size="normal" margin="normal" fullWidth required />
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline />
        <KeyboardDatePicker
          disableTooldar
          variant="inline"
          format="yyyy/MM/DD/dd"
          margin="normal"
          label="시작 예정일"
          onChange={(value)=>console.log(value)}
          style={{widht:'100%'}}
          KeyboardButtonProps={{
            'aria-label' : 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          label="시작시간"
          variant="inline"
          onChange={(value)=>console.log(value)}
          style={{widht:'50%'}}
          KeyboardButtonProps={{
            'aria-label' : 'change time',
          }}
        />
      </div>

      </Paper>
      <div className="list_area"> 리스트 영역</div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright ⓒ 홍길동' +new Date().getFullYear()+'.'}
      </Typography>
    </div>
  );
}
}

export default App;
