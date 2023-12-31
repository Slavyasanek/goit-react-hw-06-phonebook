# goit-react-hw-06-phonebook

Цей репозиторій - рефакторинг [goit-react-hw-04-phonebook](https://github.com/Slavyasanek/goit-react-hw-04-phonebook) за допомогою `react-redux`

## Критерії приймання

- Створений репозиторій goit-react-hw-06-phonebook
- При здачі домашньої роботи є посилання: на вихідні файли та робочу сторінку проекту на GitHub Pages
- В Redux-стані зберігається мінімально необхідний набір даних
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів
- Для компонентів описані propTypes
- Використана бібліотека Redux Toolkit

## Книга контактів

Виконай рефакторинг коду застосунку «Книга контактів», додавши управління станом за допомогою бібліотеки [Redux Toolkit](https://redux-toolkit.js.org/). Нехай Redux-стан виглядає наступним чином.

```html 
{
  contacts: [],
  filter: ""
}
```

- Створи сховище з configureStore()
- Використовуй функцію createSlice()
- Створи дії збереження та видалення контакту, а також оновлення фільтра
- Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.
- Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі