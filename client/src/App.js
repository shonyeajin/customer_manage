import './App.css';
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


const customers=[{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'324',
  'gender':'남자',
  'job':'프로그래머'
},{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name':'김또또',
  'birthday':'323244',
  'gender':'중성화',
  'job':'강아지'
},{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name':'손예진',
  'birthday':'324222',
  'gender':'남자',
  'job':'학생'
}];

function App(props) {
  const {classes}=props;
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
          {customers.map(c=><Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>)}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
