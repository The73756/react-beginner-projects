import { useState } from 'react';

import styles from './Quiz.module.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct, resetSteps }) {
  return (
    <div className={styles.result}>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt='' />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button onClick={resetSteps}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className={styles.progress}>
        <div style={{ width: persentage + '%' }} className={styles.progressInner}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li
            key={index}
            onClick={() => {
              onClickVariant(index);
            }}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const resetSteps = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className={styles.container}>
      {step === questions.length ? (
        <Result correct={correct} resetSteps={resetSteps} />
      ) : (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      )}
    </div>
  );
};
