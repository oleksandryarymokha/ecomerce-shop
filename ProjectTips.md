# Project tips

# Структура
## Сущности
* [x] Products
* [x] User
* [x] Cart
* [x] Position

## Модули
* [x] Products
* [x] User
* [x] Cart
* [x] Position

## Контроллеры
* [ ] Products
  * [ ] create
  * [ ] update
  * [ ] delete
  * [ ] getAll
  * [ ] getById
* [ ] User
  * [ ] create
  * [ ] update
  * [ ] delete
  * [ ] getAll
  * [ ] getById
* [ ] Cart
  * [ ] create
  * [ ] update
  * [ ] delete
  * [ ] getById
* [ ] Position
  * [ ] create
  * [ ] update
  * [ ] delete
  * [ ] getAll
  * [ ] getById

## Сервисы
* [ ] Products
* [ ] User
* [ ] Cart
* [ ] Position

## репозитории
* [ ] Products
* [ ] User
* [ ] Cart
* [ ] Position

## База данных Postgres
### docker контейнер
* [x] скачать образ **'docker pull postgres:trixie'**
* [x] создать и запустить контейнер **'docker run -d   --name my-postgres   -e POSTGRES_USER=postgres\  -e POSTGRES_PASSWORD=qwerty123   -e POSTGRES_DB=mydb   -p 5432:5432   -v pgdata:/var/lib/postgresql   postgres:trixie'**

#### Создать БД для приложения
(таблицы и наполнение создает приложение)

## Mappers
* [ ] Products
* [ ] User
* [ ] Cart
* [ ] Position

## DTO
* [ ] Products
* [ ] User
* [ ] Cart
* [ ] Position

## Validators
* [ ] Products
* [ ] User
* [ ] Cart
* [ ] Position

## Операции над сущностями

### Операции с клиентом
* [ ] создать
* [ ] обновить
  * [ ] изменть пароль
  * [ ] изменить имя
* [ ] удалить

###  Операции с товаром
* [ ] создать
* [ ] обновить
* [ ] удалить
* [ ] изменить цену


### Операции с корзиной
* [ ] Добавить в корзину
* [ ] Закрыть заказ(покупка)
* [ ] 

# Процессы в приложении

- [ ] Процесс регистрация пользователя
- [ ] Процесс авторизация пользователя
- [ ] Процесс (soft) удаления пользователя
- [ ] Процесс покупки
- [ ] Процесс (soft) удаления товара





