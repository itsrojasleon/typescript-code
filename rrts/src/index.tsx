import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

ReactDOM.render(<App color="red" />, document.getElementById('root'));
