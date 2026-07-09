# Пересоздание проекта на Hosted Weblate

Прошлый проект (`dynamic-weaher-card` — со slug-опечаткой) был удалён Hosted
Weblate: после окончания 14-дневного триала не была подана заявка на
бесплатный Libre-план. Этот документ — чек-лист, чтобы в этот раз довести
процесс до конца.

## 1. Создать проект

На https://hosted.weblate.org → «Add new translation project»:

- **Project name:** Dynamic Weather Card
- **URL slug:** `dynamic-weather-card` (без опечатки!)
- **Project website:** https://github.com/teuchezh/dynamic-weather-card

## 2. Создать компонент

В проекте → «Add new translation component»:

- **Component name:** main
- **Source code repository:** `https://github.com/teuchezh/dynamic-weather-card`
- **Repository branch:** `dev`
- **File format:** JSON nested structure file
- **File mask:** `src/internationalization/locales/*/translation.json`
- **Monolingual base language file:** `src/internationalization/locales/en/translation.json`
- **Edit base file:** выключить (source-строки меняются только через PR)

## 3. Настроить вывод JSON (обязательно)

Component → Settings → Files:

- **JSON indentation:** 2 (иначе Weblate переформатирует файлы 4 пробелами —
  именно так появился шумный дифф ru в старом PR #88)
- **Sort JSON keys:** выключено

## 4. Подать заявку на Libre-план — сразу же

Project → Billing (или https://hosted.weblate.org/billing/) → выбрать
**Libre plan** и отправить заявку. Требования (все выполнены):
лицензия MIT, публичный репозиторий, ссылка на Weblate в README.

**Это шаг, который был пропущен в прошлый раз. Без одобренной заявки проект
удалят после окончания триала.** Одобрение занимает обычно несколько дней;
статус виден на странице биллинга.

## 5. Обновить репозиторий

- Новый API-токен: Weblate → Settings → API access → добавить в секреты
  GitHub-репозитория как `WEBLATE_API_TOKEN`
  (slug в `.github/workflows/weblate-notify.yml` уже исправлен).
- Вернуть в README бейдж и ссылки (уже с новым slug):

  ```markdown
  [![Translation status](https://hosted.weblate.org/widget/dynamic-weather-card/-/svg-badge.svg)](https://hosted.weblate.org/engage/dynamic-weather-card/)
  ```

- В секции переводов README заменить GitHub-инструкцию обратно на ссылку:
  `Contribute via [Weblate](https://hosted.weblate.org/engage/dynamic-weather-card/) — no coding required!`

## 6. Как это работает дальше

- Weblate сам открывает PR в `dev` с изменениями переводов.
- Новый язык из Weblate — это просто новый `translation.json`; код подхватит
  его автоматически (`bun run locales:generate` выполняется при сборке).
  Единственная ручная строка — `editor.language_<code>` в `en/translation.json`
  (до её перевода подпись в селекторе даёт `Intl.DisplayNames`).
- Перед мержем Weblate-PR CI проверит локали (`locales:check`).
- Примечание: для совершенно нового языка CI дополнительно потребует перегенерированный индекс локалей — мейнтейнер запускает `bun run locales:generate` и пушит его в ветку PR.
- `.github/workflows/weblate-notify.yml` при пуше в `dev`, трогающем
  `en/translation.json`, сам блокирует (Lock) компонент в Weblate, тянет
  изменения (`operation=pull`), проверяет результат мержа
  (`merge_failure`/`needs_merge`) и снимает блокировку только при чистом
  мерже. Если мерж конфликтует, компонент остаётся заблокированным и
  workflow падает — это сигнал разобраться вручную (см. Repository
  maintenance → Reset), а не полагаться на автоматический ребейз при
  открытом окне правок от переводчиков.

## 7. Блокировка компонента при крупных структурных PR

Если PR меняет структуру `editor.*`/`demo.*` в `en/translation.json` не
точечно (переименования ключей, массовые перестановки, а не просто
добавление новой строки в конец) — **заблокируйте компонент в Weblate
вручную** (Component → значок замка) перед мержем такого PR, даже если
`weblate-notify.yml` отработает автоматически. Так возник инцидент
2026-07-08/09: PR #100/#102 крупно переструктурировали `editor.*`, пока в
Weblate висел неотправленный перевод (`language_da/sr/pl`), и
автоматический rebase не смог его домержить (см. PR #103 — перевод
пришлось руками добавлять после `Reset and discard`).
