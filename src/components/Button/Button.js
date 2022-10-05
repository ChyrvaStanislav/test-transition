import React from 'react';
import styles from './Button.module.scss';

const Button = ({showPopup}) => <button onClick={ showPopup } className={ styles.button }>?</button>;

export default Button;