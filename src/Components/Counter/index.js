import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.counter}>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className={styles.minus} onClick={onClickMinus}>
          - Минус
        </button>
        <button className={styles.plus} onClick={onClickPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
};
