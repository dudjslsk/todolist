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
      startTime: null,
      endDate: null,
      endTime: null 
    } 
  }

  onChangetext = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  //시작날짜
  onChangeStartDate = (event) => {
    this.setState({
      startDate : event._d
    })
  }
  //시작시간
  onChangeStartTime = (event) => {
    this.setState({
      StartTime : event._d
    })
  }
  //끝난날짜
  onChangeEndDate = (event) => {
    this.setState({
      endDate : event._d
    })
  }
  //끝난시간
  onChangeEndTime = (event) => {
    this.setState({
      endTime : event._d
    })
  }



render() {
  

  
  console.log(this.state.title);
  console.log(this.state.content);
  console.log(this.state.startDate)
  console.log(this.state.startTime)
  console.log(this.state.endDate)
  console.log(this.state.endTime)



  return (
    <div className="App">
      <div className="header"> TODO LIST</div>
      <Paper className="input_area" variant="outline" style={{padding: '10px'}}>
      
        <TextField label="제목" placeholder="제목을 입력해 주세요" size="normal" margin="normal" fullWidth required 
         onChange={this.onChangetext} value={this.state.title} name="title"/>
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline 
         onChange={this.onChangetext} value={this.state.content} name="content"/>

        <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="시작 예정일"
            onChange={this.onChangeStartDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            onChange={this.onChangeStartTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

          <KeyboardDatePicker
            disable="inline"
            format="yyyy/MM/DD/dd"
            margin="normal"
            label="끝난 날짜"
            onChange={this.onChangeEndDate}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="끝날 예정일"
            variant="inline"
            onChange={this.onChangeEndTime}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

      </Paper>
      <div className="list_area"> 리스트 영역</div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright ⓒ 김종현' +new Date().getFullYear()+'.'}
      </Typography>
    </div>
  );
}
}

export default App;