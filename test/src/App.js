import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg'
import Customer from './components/Customer'
//import 할 내용 꼭 써주기

const customers =[
{
	'id':1,
	'image':'https://placeimg.com/64/64/1',
	'name': '안요한',
	'birthday':'980324',
	'gender':'남자',
	'job':'대학생,군인'
},
{
	'id':2,
	'image':'https://placeimg.com/64/64/2',
	'name': '이제일',
	'birthday':'990916',
	'gender':'남자',
	'job':'헬창'
},
{
	'id':3,
	'image':'https://placeimg.com/64/64/3',
	'name': '문홍진',
	'birthday':'010203',
	'gender':'남자',
	'job':'입시생'
}
]

class App extends Component{
	render(){
		return(
			<div>
				{
					customers.map(c => {
						return(
						<Customer
						key={c.id}
						id={c.id}
						image={c.image}
						name={c.name}
						birthday={c.birthday}
						gender={c.gender}
						job={c.job}	
						/>
						)
					})
				} 
			</div>
			
		); // 서로 다른 key 값을 설정 해주어야 오류 출력 안됨 
	}
}

export default App;
