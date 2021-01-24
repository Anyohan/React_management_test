import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Tablebody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
//import 할 내용 꼭 써주기

const styles = theme => ({
	root:{
		width:'100%',
		marginTop:theme.spacing.unit*3,
		overflowX:"auto"
	},
	table:{
		minWidth:1080
	}
})

const customers =[
{
	'id':1,
	'image':'../yohan.jpeg',
	'name': '안요한',
	'birthday':'980324',
	'gender':'남자',
	'job':'대학생,군인'
},
{
	'id':2,
	'image':'../jail.jpeg',
	'name': '이제일',
	'birthday':'990916',
	'gender':'남자',
	'job':'헬창'
},
{
	'id':3,
	'image':'../samuel.jpeg',
	'name': '전주원',
	'birthday':'981234',
	'gender':'남자',
	'job':'브라질태생 은평구 농부'
}
]

class App extends Component{
	render(){
		const {classes} = this.props;
		return(
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>번호</TableCell>
							<TableCell>사진</TableCell>
							<TableCell>이름</TableCell>
							<TableCell>생년월일</TableCell>
							<TableCell>성별</TableCell>
							<TableCell>직업</TableCell>
						</TableRow>
					</TableHead>
					<Tablebody>
					{customers.map(c => {return(<Customer key={c.id}id={c.id}image={c.image}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}/>)})}
					</Tablebody>
				</Table>
			</Paper>
			
		); // 서로 다른 key 값을 설정 해주어야 오류 출력 안됨 
	}
}

export default withStyles(styles)(App);
