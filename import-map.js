// Import map для lit - должен загружаться ПЕРЕД основной карточкой
// Этот файл добавляет поддержку импорта 'lit' без необходимости интернета

// Проверяем, есть ли уже import map
if (!document.querySelector('script[type="importmap"]')) {
  // Создаем import map для lit
  // В Home Assistant lit должен быть доступен через систему модулей
  // Но если это не работает, используем относительный путь к локальной копии
  
  const importMap = document.createElement('script');
  importMap.type = 'importmap';
  
  // Пробуем использовать системный путь Home Assistant
  // Если не работает, можно использовать CDN или локальную копию
  importMap.textContent = JSON.stringify({
    "imports": {
      "lit": "./lit.js",
      "lit/": "./lit/",
      "lit-element": "./lit-element.js",
      "lit-html": "./lit-html.js"
    }
  });
  
  // Добавляем в head ДО любых других модулей
  document.head.insertBefore(importMap, document.head.firstChild);
  
  console.log('✅ Import map для lit добавлен');
} else {
  console.log('ℹ️ Import map уже существует');
}

