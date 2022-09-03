import styles from './CurrencyConvertor.module.scss';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className={styles.block}>
    <ul className={styles.currencies}>
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? styles.active : ''}
          key={cur}>
          {cur}
        </li>
      ))}
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value || ''}
      type='number'
      placeholder={0}
    />
  </div>
);
