import { Skeleton } from './Skeleton';
import { User } from './User';

import styles from '../../Users.module.scss';

export const UsersModule = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  onclickInvite,
  invites,
  onClickSendInvites,
}) => {
  return (
    <>
      <div className={styles.search}>
        <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
        </svg>
        <input
          onChange={onChangeSearchValue}
          type='text'
          value={searchValue}
          placeholder='Найти пользователя...'
        />
      </div>
      {isLoading ? (
        <div className={styles.skeletonList}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={styles.usersList}>
          {items
            .filter((item) => {
              const fullname = `${item.first_name} ${item.last_name}`.toLowerCase();

              return (
                fullname.includes(searchValue.toLowerCase()) ||
                item.email.includes(searchValue.toLowerCase())
              );
            })
            .map((item) => (
              <User
                isInvited={invites.includes(item.id)}
                onclickInvite={onclickInvite}
                key={item.id}
                {...item}
              />
            ))}
        </ul>
      )}
      <button
        disabled={!invites.length}
        onClick={onClickSendInvites}
        className={styles.sendInviteBtn}>
        Отправить приглашение
      </button>
    </>
  );
};
