import React from 'react';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root : {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
}

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍영준',
  'birthday': '960131',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이짓',
    'birthday': '990524',
    'gender': '여자',
    'job': '간호사'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '딸기',
    'birthday': '300531',
    'gender': '여자',
    'job': '아가'
  }
]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(v => {
              return (
                <Customer 
                  key={v.id}
                  id={v.id}
                  image={v.image}
                  name={v.name}
                  birthday={v.birthday}
                  gender={v.gender}
                  job={v.job}
                />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
}

export default withStyles(styles)(App);
