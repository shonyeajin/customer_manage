import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';//css사용하기 위해서

const styles=theme=>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit*3,
    overflow:"auto"
  },
  table:{
    minWidth:1080
  }
})


class App extends Component{
  state={
    customers:""
  }
  
  componentDidMount(){
    this.callApi()
    .then(res=>this.setState({customers:res}))
    .catch(err=>console.log(err));
  }

  callApi=async()=>{
    //res는 callApi함수에서 리턴한 body
    const response=await fetch('/api/customers');//해당 에이피아에서 응답 받아옴
    const body=await response.json();
    return body;
  }

  render(){
    const {classes}=this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.customers?
          this.state.customers.map(c=><Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>):
          ''
          }
        </TableBody>
      </Table>
    </Paper>
    )

  }
}

export default withStyles(styles)(App);
