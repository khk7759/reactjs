//entry 파일 (진입 파일)
// ※  npm run build 빌드 명령어
// 1) 개발할 때는 npm run start --> 이것저것 기능들이 많이 들어있어서 엄청 용량이 크다.
// 2) 개발하다가 어플리케이션을 완성한 후에는 npm run build --> 용량을 엄청 줄여준다.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
// index.js에서 보면 App 컴포넌트를 실행하는 코드가 있는데, 
// 이 코드를 보고 있는 우리 입장에서는 이 코드가 내부적으로 state에 subject 값이 있는 지 없는지 모른다.
// → 외부에서 알 필요가 없는 코드를 철저하게 은닉하는 것이 좋은 사용성을 만드는 핵심이 된다.
// ex) 전선이 삐져나온 핸드폰?? 노....
// 즉 App 이 내부적으로 사용할 상태는 state라는 형태를 통해 사용한다.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
