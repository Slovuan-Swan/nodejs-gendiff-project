# Вычислитель отличий (Gendiff)

### Статус проекта и проверки:

[![Actions Status](https://github.com/Slovuan-Swan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Slovuan-Swan/frontend-project-46/actions) | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Slovuan-Swan_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Slovuan-Swan_frontend-project-46) | [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Slovuan-Swan_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Slovuan-Swan_frontend-project-46) |

---

## Описание

**Gendiff** — это консольная утилита (CLI), которая сравнивает два конфигурационных файла и находит в них различия. Программа умеет работать с рекурсивными структурами данных любой глубины вложенности. Она поддерживает форматы **JSON** и **YAML**, а также предоставляет вывод в нескольких стилях.

Проект разработан в рамках обучения на платформе **Hexlet** (Модуль #3). В основе приложения лежит построение абстрактного дерева зависимостей (AST) и иммутабельный функциональный подход.

## Возможности

- Поддержка файлов конфигурации в форматах `.json`, `.yml`, `.yaml`.
- Рекурсивное сравнение вложенных объектов любой глубины.
- Три формата вывода результатов на выбор:
  - `stylish` (по умолчанию) — иерархический вид с отступами и маркерами `+` / `-`.
  - `plain` — плоский текстовый формат, описывающий путь до каждого изменения.
  - `json` — машиночитаемый структурированный формат данных.

## Установка

```bash
# Клонировать репозиторий
git clone https://github.com/Slovuan-Swan/nodejs-gendiff-project.git

# Перейти в папку проекта
cd nodejs-gendiff-project

# Установить зависимости
make install

# Связать пакет с системой для глобального использования команды gendiff
npm link
```

## Использование

```bash
# Вывод справочной информации
gendiff -h

# Сравнение файлов в формате stylish (по умолчанию)
gendiff __fixtures__/file1.json __fixtures__/file2.json

# Сравнение файлов в формате plain
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json

# Сравнение файлов в формате json
gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
```

---

## Демонстрация работы (Asciinema)

### Сравнение плоских JSON файлов

[![asciicast](https://asciinema.org/a/1207728.svg)](https://asciinema.org/a/1207728)

### Поддержка плоских YAML файлов

[![asciicast](https://asciinema.org/a/1214100.svg)](https://asciinema.org/a/1214100)

### Рекурсивное сравнение (stylish)

[![asciicast](https://asciinema.org/a/1214302.svg)](https://asciinema.org/a/1214302)

### Вывод в формате Plain

[![asciicast](https://asciinema.org/a/1214651.svg)](https://asciinema.org/a/1214651)
