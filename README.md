# Шаблон для верстки HTML/CSS/JS для vs-code

## Инструкция:
<details>
## Возможности и принцип работы:

* Разработка отслеживается (в расширении для vs-code) - Live Server -
  https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

* CSS компилируются из SCSS (с помощью расширения для vs-code) - Live Sass Compiler -
  https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass


### Настройки Live Sass Compiler:
```bash
{
    // .css и min.css файлы в отдельную директорию
    "liveSassCompile.settings.formats": [
        {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/css/"
        },
        {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/css/"
        }
    ],

    // исключения
    "liveSassCompile.settings.excludeList": [
        "/**/node_modules/**",
        "/.vscode/**",
        "/libs/**"
    ],

    // отключение .map файлов
    "liveSassCompile.settings.generateMap": false,

    "liveSassCompile.settings.includeItems": [
        {
        "input": "~/scss/main.scss"
        }
    ],

    //автопрефиксы, -webkit- -moz-..
    "liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"],
}
```

## Про lazyload:

Работает с помощью vanilla-lazyload,
ссылка - https://github.com/verlok/vanilla-lazyload

Примеры подключение:

```bash
<img alt="A lazy image" class="lazy" src="lazy-lowQuality.jpg" data-src="lazy.jpg" />
```

```bash
<picture>
  <source
    type="image/webp"
    data-srcset="lazy_400.webp 400w,
      lazy_800.webp 800w"
    data-sizes="100w"
  />
  <img
    alt="A lazy image"
    class="lazy"
    data-src="lazy.jpg"
    data-srcset="lazy_400.jpg 400w,
      lazy_800.jpg 800w"
    data-sizes="100w"
  />
</picture>
```

```bash
<video class="lazy" controls width="620" data-src="lazy.mp4" data-poster="lazy.jpg">
  <source type="video/mp4" data-src="lazy.mp4" />
  <source type="video/ogg" data-src="lazy.ogg" />
  <source type="video/avi" data-src="lazy.avi" />
</video>
```

## Про js:

* JavaScript разбит на модули './js/modules', которые подключаются в './js/main.js'
</details>

# Ссылки на верстку
# - общие:
## Страница - [Карточка сделки.](https://eduardoalparov.github.io/headlights/)
## Страница - [Список мастеров.](https://eduardoalparov.github.io/headlights/masters.html)
## Страница - [Список заказы.](https://eduardoalparov.github.io/headlights/master-list.html)
