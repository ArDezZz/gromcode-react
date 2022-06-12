import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserLIsts from './UserLists.jsx';

const rootElem = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Vlad',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Zina',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Rock',
  },
  {
    id: 'id-4',
    age: 34,
    name: 'Oleg',
  },
  {
    id: 'id-5',
    age: 20,
    name: 'Liza',
  },
  {
    id: 'id-6',
    age: 19,
    name: 'Kate',
  },
];

ReactDOM.render(<UserLIsts users={users} />, rootElem);
