import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //component -> 파일이름 순으로 작성
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// root 라는 id 를 가진 태그안에 app.js 파일을 렌더링 해줌

reportWebVitals();
