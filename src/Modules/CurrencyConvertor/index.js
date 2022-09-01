import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Block } from './Block';
import styles from './CurrencyConvertor.module.scss';

export const СurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef({});
  const rates = ratesRef.current;

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToPrice(result);
    setFromPrice(value);
    console.log(rates[toCurrency]);
  };

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
    console.log(value);
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
  }, [fromPrice]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toPrice]);

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
