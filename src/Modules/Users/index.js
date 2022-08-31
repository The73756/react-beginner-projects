import { useState, useEffect } from 'react';
import styles from './Users.module.scss';
import { Success } from './components/Success';
import { UsersModule } from './components/UsersModule';

// Тут список пользователей: https://reqres.in/api/users

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при загрузке данных');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onclickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setIsSuccess(!isSuccess);
  };

  return (
    <div className={styles.users}>
      {isSuccess ? (
        <Success onClickSendInvites={onClickSendInvites} count={invites.length} />
      ) : (
        <UsersModule
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          isLoading={isLoading}
          items={users}
          onclickInvite={onclickInvite}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};
