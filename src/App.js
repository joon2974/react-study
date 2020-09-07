import React from 'react';
import './App.css';
import Customer from './components/Customer'

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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
