import { Link } from 'react-router-dom';

import './index.scss';

export const App = () => {
  return (
    <main className='container'>
      <Link className='link' to='/counter'>
        Счетчик
      </Link>
      <Link className='link' to='/modal'>
        Модалка
      </Link>
      <Link className='link' to='/quiz'>
        Опросник
      </Link>
      <Link className='link' to='/users'>
        Список пользователей
      </Link>
      <Link className='link' to='/currencyConvertor'>
        Конвертер валют
      </Link>
      <Link className='link' to='/photos'>
        Коллекция фотографий
      </Link>
    </main>
  );
};
