import React from 'react';
import Editing from './components/Editing';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Redux»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Редактирование и Фильтрация</h3>
          </header>
          <div className={'task__body task__body_task1'}>
            <Editing />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
