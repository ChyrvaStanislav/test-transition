import styles from './App.module.scss';
import Button from "./components/Button";
import Block from "./components/Block";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={ styles.app }>
      <Button showPopup={ () => setIsShow(prev => !prev) } />
      <Block isShow={ isShow } hidePopup={ () => setIsShow(false) } />
    </div>
  );
}

export default App;
