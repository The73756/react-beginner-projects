import { useState, useEffect } from 'react';

import { Collection } from './Collection';

import styles from './Photos.module.scss';

const categories = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

export const Photos = () => {
  const [collections, setCollections] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value !== '') {
      setCategoryId(0);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('./photos-data.json')
      .then((res) => res.json())
      .then((res) => {
        if (categoryId) {
          setCollections(res.filter((collection) => collection.category === categoryId));
        } else {
          setCollections(res);
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при загрузке данных');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  const elements = collections.filter((obj) =>
    obj.name.toLowerCase().includes(searchValue.toLowerCase().trim()),
  );

  return (
    <div className={styles.photos}>
      <h1>Моя коллекция фотографий</h1>
      <div className={styles.top}>
        <ul className={styles.tags}>
          {categories.map((category, index) => (
            <li id={index} key={index}>
              <button
                disabled={!searchValue ? false : true}
                onClick={() => setCategoryId(index)}
                className={categoryId === index ? styles.active : ''}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={onChangeInput}
          className={styles.searchInput}
          placeholder='Поиск по названию'
        />
      </div>
      <div className={styles.content}>
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : elements.length ? (
          elements.map((collection, index) => <Collection key={index} {...collection} />)
        ) : (
          <h2>Ничего не найдено</h2>
        )}
      </div>
      {/* Пагиниации не будет - у меня нет денег на mockApi, а искать аналог лень */}
    </div>
  );
};
