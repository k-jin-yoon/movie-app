import {useState} from 'react';
import Button from './Button';
import styles from './App.module.css';

function App() {
  const [count, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={styles.title}>Welcom back!</h1>
      </header>
      <div>{count}</div>
      <Button text={"continue"} onClick={onClick}/>
    </div>
  );
}

export default App;
