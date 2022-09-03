import { useState, useEffect, useRef } from 'react';
import { Block } from './Block';
import styles from './CurrencyConvertor.module.scss';

export const СurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef({});

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setFromPrice(value);
    setToPrice(result.toFixed(2));
  };

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setToPrice(value);
    setFromPrice(result.toFixed(2));
  };

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        ratesRef.current = json.rates;
        onChangeToPrice(1);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при загрузке данных');
      });
  }, []);

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className={styles.container}>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};
