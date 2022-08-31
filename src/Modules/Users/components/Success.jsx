import success from '../assets/success.svg';
import styles from '../Users.module.scss';

export const Success = ({ count, onClickSendInvites }) => {
  return (
    <div className={styles.successBlock}>
      <img src={success} alt='Success' />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={onClickSendInvites} className={styles.sendInviteBtn}>
        Назад
      </button>
    </div>
  );
};
