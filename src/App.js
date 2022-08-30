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
    </main>
  );
};
