import { LitElement, html, css } from 'lit';

class AnimatedWeatherCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --card-width: 100%;
        --card-height: 200px;
        --primary-color: #007AFF;
        --day-gradient-start: #87CEEB;
        --day-gradient-end: #E0F6FF;
        --night-gradient-start: #1a1a2e;
        --night-gradient-end: #16213e;
        --sunset-gradient-start: #FF6B6B;
        --sunset-gradient-end: #FFA07A;
        --sunrise-gradient-start: #FFA07A;
        --sunrise-gradient-end: #FFD700;
      }

      ha-card {
        overflow: hidden;
        background: transparent;
        box-shadow: none;
      }

      .weather-card {
        position: relative;
        width: var(--card-width);
        min-height: var(--card-height, 200px);
        border-radius: 16px;
        overflow: visible;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
        transition: background 2s ease-in-out, min-height 0.3s ease;
      }

      .weather-card.night {
        background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
      }

      .weather-card.sunset {
        background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
      }

      .weather-card.sunrise {
        background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
      }

      .canvas-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        pointer-events: none;
      }

      canvas {
        width: 100%;
        height: 100%;
        display: block;
      }

      .content {
        position: relative;
        z-index: 10;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .location {
        font-size: 18px;
        font-weight: 500;
        opacity: 0.9;
      }

      .temperature {
        font-size: 64px;
        font-weight: 100;
        line-height: 1;
        margin: 0;
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 12px;
      }

      .condition {
        font-size: 20px;
        font-weight: 400;
        opacity: 0.9;
      }

      .extra-info-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;
        font-size: 14px;
        opacity: 0.85;
      }

      .extra-info {
        font-size: 14px;
        opacity: 0.8;
        text-align: right;
      }

      .extra-info div {
        margin-top: 4px;
      }

      .feels-like {
        font-size: 16px;
        opacity: 0.85;
        margin-top: 8px;
      }

      .temp-range {
        font-size: 18px;
        opacity: 0.9;
        margin-top: 8px;
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .temp-min {
        font-size: 14px;
        opacity: 0.7;
      }

      .info-row {
        font-size: 14px;
        opacity: 0.85;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
      }

      .details .info-row {
        font-size: 14px;
      }

      .info-icon {
        font-size: 18px;
        line-height: 1;
        display: inline-block;
        flex-shrink: 0;
        opacity: 0.9;
        width: 18px;
        text-align: center;
      }

      .forecast-container {
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        width: 100%;
      }

      .forecast-title {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.8;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .forecast-scroll {
        display: flex;
        gap: 16px;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 8px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .forecast-scroll::-webkit-scrollbar {
        display: none;
      }

      .forecast-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
        min-width: 60px;
      }

      .forecast-time {
        font-size: 12px;
        opacity: 0.7;
        font-weight: 400;
      }

      .forecast-icon {
        font-size: 24px;
        line-height: 1;
      }

      .forecast-temp {
        font-size: 16px;
        font-weight: 500;
        opacity: 0.9;
      }
    `;
  }

  constructor() {
    super();
    this.config = {};
    this.animationFrame = null;
    this.canvas = null;
    this.ctx = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.rainDrops = []; // Храним параметры капель для случайного движения
    this.hailStones = []; // Храним параметры градин
    this.iconCache = {}; // Кеш загруженных SVG иконок
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      // Небольшая задержка для обеспечения рендеринга DOM
      setTimeout(() => {
        this.setupCanvas();
        if (this.canvas && this.ctx) {
          this.startAnimation();
          this.setupResizeObserver();
        }
        // Предзагружаем иконки
        this.preloadIcons();
      }, 100);
    });
  }

  async preloadIcons() {
    // Emoji иконки не требуют предзагрузки
    // Метод оставлен для совместимости, но не выполняет никаких действий
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    // Перерисовываем canvas при изменении размеров или данных
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      if (this.canvas && this.ctx) {
        this.resizeCanvas();
      }
    }
  }

  setupResizeObserver() {
    if (!this.shadowRoot) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(container);
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 2;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    // Пересоздаем контекст после изменения размеров canvas
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(dpr, dpr);

    // Сохраняем логические размеры для использования в draw()
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
  }

  setupCanvas() {
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    // Удаляем старый canvas если есть
    const oldCanvas = container.querySelector('canvas');
    if (oldCanvas) {
      oldCanvas.remove();
    }

    this.canvas = document.createElement('canvas');
    container.appendChild(this.canvas);
    this.resizeCanvas();
  }

  getState(entityId) {
    if (!this.hass || !entityId) return null;
    const entity = this.hass.states[entityId];
    return entity ? entity.state : null;
  }

  getAttributes(entityId) {
    if (!this.hass || !entityId) return {};
    const entity = this.hass.states[entityId];
    return entity ? entity.attributes : {};
  }

  getWeatherData() {
    const entityId = this.config.entity || 'weather.home';
    const attrs = this.getAttributes(entityId);

    return {
      condition: attrs.condition || 'sunny',
      temperature: attrs.temperature || this.getState(entityId) || 20,
      apparentTemperature: attrs.apparent_temperature || attrs.temperature || null,
      humidity: attrs.humidity || 50,
      windSpeed: attrs.wind_speed || 0,
      windGust: attrs.wind_gust_speed || attrs.wind_gust || null,
      windBearing: attrs.wind_bearing || null,
      windDirection: attrs.wind_direction || null,
      pressure: attrs.pressure || 1013,
      forecast: attrs.forecast || [],
      friendlyName: attrs.friendly_name || 'Weather',
      templow: attrs.templow || (attrs.forecast && attrs.forecast[0] ? attrs.forecast[0].templow : null)
    };
  }

  getWindDirectionText(bearing) {
    if (bearing === null || bearing === undefined) return null;
    const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
    const index = Math.round(bearing / 45) % 8;
    return directions[index];
  }

  getWindDirectionIcon(bearing) {
    if (bearing === null || bearing === undefined) return 'wind-icon.svg';
    // Нормализуем bearing к диапазону 0-360
    const normalizedBearing = ((bearing % 360) + 360) % 360;
    // Определяем индекс направления (0-7)
    const index = Math.round(normalizedBearing / 45) % 8;

    const icons = ['wind-n.svg', 'wind-ne.svg', 'wind-e.svg', 'wind-se.svg',
      'wind-s.svg', 'wind-sw.svg', 'wind-w.svg', 'wind-nw.svg'];

    return icons[index] || 'wind-icon.svg';
  }

  getTodayForecast() {
    if (!this.hass || !this.config) return [];
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Фильтруем прогноз на сегодня
    const todayForecast = weather.forecast.filter(item => {
      if (!item.datetime) return false;
      const itemDate = new Date(item.datetime);
      const itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
      return itemDay.getTime() === today.getTime() && itemDate.getTime() > now.getTime();
    });

    // Сортируем по времени и берем ближайшие 6-8 часов
    return todayForecast
      .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
      .slice(0, 8);
  }

  formatForecastTime(datetime) {
    if (!datetime) return '';
    const date = new Date(datetime);
    const hours = date.getHours();
    return `${hours.toString().padStart(2, '0')}:00`;
  }

  getConditionEmoji(condition) {
    if (!condition) return '🌤️';
    const cond = condition.toLowerCase();
    const emojiMap = {
      'sunny': '☀️',
      'clear': '☀️',
      'clear-night': '🌙',
      'partlycloudy': '⛅',
      'cloudy': '☁️',
      'rainy': '🌧️',
      'pouring': '🌧️',
      'lightning': '⚡',
      'lightning-rainy': '⛈️',
      'snowy': '❄️',
      'snowy-rainy': '🌨️',
      'foggy': '🌫️',
      'hail': '🌨️',
      'windy': '💨',
      'windy-variant': '💨'
    };
    return emojiMap[cond] || '🌤️';
  }

  renderTodayForecast() {
    const forecast = this.getTodayForecast();
    if (forecast.length === 0) {
      return html`<div style="opacity: 0.6; font-size: 14px;">Прогноз недоступен</div>`;
    }

    return html`
      <div class="forecast-scroll">
        ${forecast.map(item => html`
          <div class="forecast-item">
            <div class="forecast-time">${this.formatForecastTime(item.datetime)}</div>
            <div class="forecast-icon">${this.getConditionEmoji(item.condition)}</div>
            <div class="forecast-temp">${Math.round(item.temperature || item.temp || 0)}°</div>
          </div>
        `)}
      </div>
    `;
  }

  getIcon(iconName) {
    // Простые emoji/символы вместо SVG
    const iconMap = {
      'humidity-icon.svg': '💧',
      'wind-icon.svg': '💨',
      'wind-gust-icon.svg': '🌪️',
      'wind-n.svg': '⬆️',
      'wind-ne.svg': '↗️',
      'wind-e.svg': '➡️',
      'wind-se.svg': '↘️',
      'wind-s.svg': '⬇️',
      'wind-sw.svg': '↙️',
      'wind-w.svg': '⬅️',
      'wind-nw.svg': '↖️',
    };

    return iconMap[iconName] || '';
  }

  getIconSvgSync(iconName) {
    // Используем простые emoji вместо SVG
    return this.getIcon(iconName);
  }

  getTimeOfDay() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const totalMinutes = hour * 60 + minute;

    // Восход: 6:00 - 8:00 (120 минут)
    if (totalMinutes >= 360 && totalMinutes < 480) {
      const progress = (totalMinutes - 360) / 120; // 0-1
      return { type: 'sunrise', progress };
    }

    // День: 8:00 - 18:00
    if (totalMinutes >= 480 && totalMinutes < 1080) {
      const progress = (totalMinutes - 480) / 600; // 0-1 (10 часов дня)
      return { type: 'day', progress };
    }

    // Закат: 18:00 - 20:00 (120 минут)
    if (totalMinutes >= 1080 && totalMinutes < 1200) {
      const progress = (totalMinutes - 1080) / 120; // 0-1
      return { type: 'sunset', progress };
    }

    // Ночь
    return { type: 'night', progress: 0 };
  }

  getSunPosition(timeOfDay, width, height) {
    if (timeOfDay.type === 'sunrise') {
      // Восход: солнце поднимается от горизонта
      const progress = timeOfDay.progress; // 0 = на горизонте, 1 = высоко в небе
      return {
        x: width * (0.3 + progress * 0.4), // Движется слева направо
        y: height * (0.85 - progress * 0.55) // Поднимается от 85% к 30%
      };
    } else if (timeOfDay.type === 'sunset') {
      // Закат: солнце опускается к горизонту
      const progress = timeOfDay.progress; // 0 = высоко, 1 = на горизонте
      return {
        x: width * (0.5 + progress * 0.3), // Движется вправо
        y: height * (0.3 + progress * 0.55) // Опускается от 30% к 85%
      };
    } else if (timeOfDay.type === 'day') {
      // День: солнце движется по небу
      const progress = timeOfDay.progress; // 0 = утро (8:00), 1 = вечер (18:00)
      // В полдень (progress = 0.5) солнце должно быть выше всего и по центру
      // Используем синус для плавной дуги
      const angle = progress * Math.PI; // 0 до π (от 0 до 180 градусов)
      return {
        x: width * (0.5 + Math.sin(angle) * 0.25), // Движется по дуге: утро слева, полдень центр, вечер справа
        y: height * (0.25 - Math.sin(angle) * 0.1) // Выше в полдень (angle = π/2, sin = 1)
      };
    } else {
      // Ночь: луна/звезды
      return {
        x: width * 0.75,
        y: height * 0.3
      };
    }
  }

  getBackgroundGradient(timeOfDay) {
    if (timeOfDay.type === 'sunrise') {
      const progress = timeOfDay.progress;
      // Плавный переход от ночи к дню
      const nightStart = { r: 26, g: 26, b: 46 };
      const dayStart = { r: 255, g: 160, b: 122 }; // #FFA07A
      const dayEnd = { r: 255, g: 215, b: 0 }; // #FFD700

      return {
        start: {
          r: Math.round(nightStart.r + (dayStart.r - nightStart.r) * progress),
          g: Math.round(nightStart.g + (dayStart.g - nightStart.g) * progress),
          b: Math.round(nightStart.b + (dayStart.b - nightStart.b) * progress)
        },
        end: {
          r: Math.round(nightStart.r + (dayEnd.r - nightStart.r) * progress),
          g: Math.round(nightStart.g + (dayEnd.g - nightStart.g) * progress),
          b: Math.round(nightStart.b + (dayEnd.b - nightStart.b) * progress)
        }
      };
    } else if (timeOfDay.type === 'sunset') {
      const progress = timeOfDay.progress;
      // Плавный переход от дня к ночи
      const dayStart = { r: 255, g: 107, b: 107 }; // #FF6B6B
      const dayEnd = { r: 255, g: 160, b: 122 }; // #FFA07A
      const nightStart = { r: 26, g: 26, b: 46 };

      return {
        start: {
          r: Math.round(dayStart.r + (nightStart.r - dayStart.r) * progress),
          g: Math.round(dayStart.g + (nightStart.g - dayStart.g) * progress),
          b: Math.round(dayStart.b + (nightStart.b - dayStart.b) * progress)
        },
        end: {
          r: Math.round(dayEnd.r + (nightStart.r - dayEnd.r) * progress),
          g: Math.round(dayEnd.g + (nightStart.g - dayEnd.g) * progress),
          b: Math.round(dayEnd.b + (nightStart.b - dayEnd.b) * progress)
        }
      };
    }
    return null;
  }

  startAnimation() {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    if (!this.canvasWidth || !this.canvasHeight) {
      this.resizeCanvas();
      if (!this.canvasWidth || !this.canvasHeight) return;
    }

    const width = this.canvasWidth;
    const height = this.canvasHeight;

    // Очищаем canvas
    this.ctx.clearRect(0, 0, width, height);

    const weather = this.getWeatherData();
    const timeOfDay = this.getTimeOfDay();

    // Draw based on condition and time
    const condition = weather.condition.toLowerCase();
    switch (condition) {
      case 'sunny':
      case 'clear':
        this.drawSunny(timeOfDay, width, height);
        break;
      case 'clear-night':
        // Ясная ночь - принудительно ночной режим
        this.drawSunny({ type: 'night', progress: 0 }, width, height);
        break;
      case 'rainy':
      case 'rain':
        this.drawRainy(timeOfDay, width, height, false);
        break;
      case 'pouring':
        // Сильный дождь
        this.drawRainy(timeOfDay, width, height, true);
        break;
      case 'snowy':
      case 'snow':
        this.drawSnowy(timeOfDay, width, height);
        break;
      case 'snowy-rainy':
        // Мокрый снег - комбинация снега и дождя
        this.drawRainy(timeOfDay, width, height, false);
        this.drawSnowy(timeOfDay, width, height);
        break;
      case 'hail':
        // Град
        this.drawHail(timeOfDay, width, height);
        break;
      case 'foggy':
      case 'fog':
        this.drawFoggy(timeOfDay, width, height);
        break;
      case 'lightning':
        this.drawThunderstorm(timeOfDay, width, height, false);
        break;
      case 'lightning-rainy':
        this.drawThunderstorm(timeOfDay, width, height, true);
        break;
      case 'cloudy':
      case 'partlycloudy':
      default:
        this.drawCloudy(timeOfDay, width, height);
        break;
    }
  }

  drawSunny(timeOfDay, width, height) {
    const time = Date.now() * 0.001;

    // Получаем позицию солнца на основе времени суток
    const sunPos = this.getSunPosition(timeOfDay, width, height);
    const sunX = sunPos.x;
    const sunY = sunPos.y;

    if (timeOfDay.type === 'day' || timeOfDay.type === 'sunrise' || timeOfDay.type === 'sunset') {
      // Солнце в стиле Apple - очень мягкое и плавное
      const sunRadius = 48 + Math.sin(time * 0.15) * 1.5;

      // Внешний ореол - максимально мягкий и большой (стиль Apple)
      const outerHalo = this.ctx.createRadialGradient(
        sunX, sunY, sunRadius * 0.3,
        sunX, sunY, sunRadius * 3.5
      );
      outerHalo.addColorStop(0, 'rgba(255, 248, 230, 0.25)');
      outerHalo.addColorStop(0.15, 'rgba(255, 240, 200, 0.2)');
      outerHalo.addColorStop(0.3, 'rgba(255, 230, 170, 0.15)');
      outerHalo.addColorStop(0.5, 'rgba(255, 220, 140, 0.1)');
      outerHalo.addColorStop(0.7, 'rgba(255, 210, 120, 0.06)');
      outerHalo.addColorStop(0.85, 'rgba(255, 200, 100, 0.03)');
      outerHalo.addColorStop(1, 'rgba(255, 190, 90, 0)');
      this.ctx.fillStyle = outerHalo;
      this.ctx.beginPath();
      this.ctx.arc(sunX, sunY, sunRadius * 3.5, 0, Math.PI * 2);
      this.ctx.fill();

      // Средний ореол - плавный переход
      const midHalo = this.ctx.createRadialGradient(
        sunX, sunY, sunRadius * 0.5,
        sunX, sunY, sunRadius * 2.2
      );
      midHalo.addColorStop(0, 'rgba(255, 250, 220, 0.35)');
      midHalo.addColorStop(0.3, 'rgba(255, 240, 190, 0.25)');
      midHalo.addColorStop(0.6, 'rgba(255, 230, 160, 0.15)');
      midHalo.addColorStop(0.85, 'rgba(255, 220, 140, 0.08)');
      midHalo.addColorStop(1, 'rgba(255, 210, 120, 0)');
      this.ctx.fillStyle = midHalo;
      this.ctx.beginPath();
      this.ctx.arc(sunX, sunY, sunRadius * 2.2, 0, Math.PI * 2);
      this.ctx.fill();

      // Внутренний ореол - мягкое свечение
      const innerHalo = this.ctx.createRadialGradient(
        sunX, sunY, sunRadius * 0.6,
        sunX, sunY, sunRadius * 1.6
      );
      innerHalo.addColorStop(0, 'rgba(255, 252, 240, 0.5)');
      innerHalo.addColorStop(0.4, 'rgba(255, 245, 210, 0.35)');
      innerHalo.addColorStop(0.7, 'rgba(255, 235, 180, 0.2)');
      innerHalo.addColorStop(1, 'rgba(255, 225, 150, 0)');
      this.ctx.fillStyle = innerHalo;
      this.ctx.beginPath();
      this.ctx.arc(sunX, sunY, sunRadius * 1.6, 0, Math.PI * 2);
      this.ctx.fill();

      // Основной диск солнца - очень мягкий градиент (стиль Apple)
      const sunGradient = this.ctx.createRadialGradient(
        sunX - sunRadius * 0.1, sunY - sunRadius * 0.1, 0,
        sunX, sunY, sunRadius
      );
      // Более мягкие цвета без резких переходов
      sunGradient.addColorStop(0, '#FFFEF5');
      sunGradient.addColorStop(0.15, '#FFF9E6');
      sunGradient.addColorStop(0.3, '#FFF4D6');
      sunGradient.addColorStop(0.5, '#FFEDC0');
      sunGradient.addColorStop(0.7, '#FFE4A8');
      sunGradient.addColorStop(0.85, '#FFDC95');
      sunGradient.addColorStop(1, '#FFD37F');

      this.ctx.fillStyle = sunGradient;
      this.ctx.beginPath();
      this.ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // Для восхода/заката: дополнительный эффект горизонта
      if (timeOfDay.type === 'sunrise' || timeOfDay.type === 'sunset') {
        // Отражение солнца на горизонте
        const horizonY = height * 0.85;
        if (sunY >= horizonY - 50) {
          const reflectionAlpha = Math.max(0, (horizonY - sunY) / 50) * 0.3;
          this.ctx.fillStyle = `rgba(255, 140, 0, ${reflectionAlpha})`;
          this.ctx.beginPath();
          this.ctx.ellipse(sunX, horizonY, sunRadius * 1.5, sunRadius * 0.5, 0, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    } else if (timeOfDay.type === 'night') {
      // Stars
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.globalAlpha = 0.8;
      for (let i = 0; i < 20; i++) {
        const x = (width * 0.2 + i * 47) % width;
        const y = (height * 0.2 + i * 23) % (height * 0.6);
        const twinkle = Math.sin(time * 0.8 + i) * 0.5 + 0.5;
        this.ctx.globalAlpha = twinkle * 0.8;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Moon
      const moonX = width * 0.75;
      const moonY = height * 0.3;
      this.ctx.globalAlpha = 0.9;
      this.ctx.fillStyle = '#F0F0F0';
      this.ctx.beginPath();
      this.ctx.arc(moonX, moonY, 25, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.fillStyle = '#1a1a2e';
      this.ctx.beginPath();
      this.ctx.arc(moonX - 8, moonY - 5, 22, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Clouds
    this.drawClouds(time, width, height, 0.3);
  }

  drawClouds(time, width, height, density = 0.5) {
    // Уменьшаем количество облаков для более чистого вида
    const cloudCount = Math.max(2, Math.floor(width / 150 * density));

    for (let i = 0; i < cloudCount; i++) {
      // Увеличиваем расстояние между облаками
      const baseX = ((time * 3 + i * 150) % (width + 200)) - 100;
      const baseY = height * (0.2 + (i % 3) * 0.15) + Math.sin(time * 0.2 + i) * 8;
      const size = 40 + (i % 3) * 15;
      const opacity = 0.6 + (i % 2) * 0.2;

      this.drawCloud(baseX, baseY, size, opacity);
    }
  }

  drawCloud(x, y, size, opacity) {
    // Сохраняем настройки
    const savedShadowBlur = this.ctx.shadowBlur;
    const savedShadowColor = this.ctx.shadowColor;
    const savedGlobalAlpha = this.ctx.globalAlpha;

    // Включаем мягкое размытие для более реалистичного вида
    this.ctx.shadowBlur = size * 0.25;
    this.ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.4})`;

    // Рисуем облако как единую форму с плавными переходами
    // Используем более высокую прозрачность для лучшего смешивания
    this.ctx.globalAlpha = opacity * 0.85;
    this.ctx.fillStyle = `rgba(255, 255, 255, 1)`;

    // Рисуем все части облака с наложением для создания единой формы
    const parts = [
      // Нижний ряд
      { x: x, y: y, r: size * 0.4 },
      { x: x + size * 0.35, y: y, r: size * 0.5 },
      { x: x + size * 0.65, y: y, r: size * 0.48 },
      { x: x + size * 0.92, y: y, r: size * 0.38 },
      // Средний ряд
      { x: x + size * 0.18, y: y - size * 0.28, r: size * 0.38 },
      { x: x + size * 0.52, y: y - size * 0.32, r: size * 0.42 },
      { x: x + size * 0.78, y: y - size * 0.28, r: size * 0.38 },
      // Верхний ряд
      { x: x + size * 0.32, y: y - size * 0.42, r: size * 0.32 },
      { x: x + size * 0.62, y: y - size * 0.48, r: size * 0.36 },
      { x: x + size * 0.82, y: y - size * 0.42, r: size * 0.32 }
    ];

    // Рисуем все части одним циклом для плавного наложения
    parts.forEach(part => {
      this.ctx.beginPath();
      this.ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Восстанавливаем настройки
    this.ctx.shadowBlur = savedShadowBlur;
    this.ctx.shadowColor = savedShadowColor;
    this.ctx.globalAlpha = savedGlobalAlpha;
  }

  drawRainy(timeOfDay, width, height, heavy = false) {
    this.drawClouds(Date.now() * 0.001, width, height, heavy ? 1.0 : 0.8);

    // Количество капель зависит от интенсивности дождя
    const dropCount = heavy ? 130 : 90;

    // Инициализируем капли с случайными параметрами при первом вызове
    if (!this.rainDrops || this.rainDrops.length === 0 || this.rainDrops.length !== dropCount) {
      this.rainDrops = [];
      for (let i = 0; i < dropCount; i++) {
        this.rainDrops.push({
          startX: Math.random() * width, // Случайная начальная позиция X
          startY: Math.random() * (height + 200) - 100, // Случайная начальная позиция Y
          speed: heavy ? (80 + Math.random() * 100) : (60 + Math.random() * 80), // Более быстрый при сильном дожде
          windOffset: (Math.random() - 0.5) * 30, // Случайное боковое смещение (ветер)
          width: heavy ? (1.2 + Math.random() * 1.0) : (0.8 + Math.random() * 0.7), // Более крупные капли при сильном дожде
          length: heavy ? (8 + Math.random() * 10) : (6 + Math.random() * 8), // Более длинные капли
          alpha: heavy ? (0.75 + Math.random() * 0.15) : (0.65 + Math.random() * 0.2), // Более видимые при сильном дожде
          phase: Math.random() * Math.PI * 2 // Случайная фаза для покачивания
        });
      }
    }

    const time = Date.now() * 0.0015;

    for (let i = 0; i < this.rainDrops.length; i++) {
      const drop = this.rainDrops[i];

      // Вычисляем текущую позицию с учетом времени
      const dropY = (drop.startY + time * drop.speed) % (height + 200);

      // Если капля вышла за нижнюю границу, перемещаем её вверх со случайной позицией
      if (dropY > height + 50) {
        drop.startY = -50 - Math.random() * 50;
        drop.startX = Math.random() * width;
      }

      // Боковое смещение (эффект ветра) с небольшим покачиванием
      const wind = drop.windOffset * (1 + Math.sin(time * 0.5 + drop.phase) * 0.2);
      const dropX = (drop.startX + wind + (time * 15) % width) % width;

      // Если капля вышла за боковые границы, корректируем
      if (dropX < -10) {
        drop.startX = width + 10;
      } else if (dropX > width + 10) {
        drop.startX = -10;
      }

      this.ctx.save();
      this.ctx.globalAlpha = drop.alpha;

      // Классическая форма капли дождя: округлая сверху, заостренная снизу
      const topY = dropY - drop.length * 0.5;
      const tipY = dropY + drop.length * 0.5;

      this.ctx.fillStyle = `rgba(220, 240, 255, ${drop.alpha})`;
      this.ctx.strokeStyle = `rgba(240, 250, 255, ${drop.alpha * 0.5})`;
      this.ctx.lineWidth = 0.4;

      // Рисуем каплю как единую форму
      this.ctx.beginPath();

      // Верхняя округлая часть
      const topRadius = drop.width;
      this.ctx.arc(dropX, topY, topRadius, 0, Math.PI * 2, false);

      // Основное тело капли - сужается к заостренному концу
      // Левая сторона
      this.ctx.moveTo(dropX - topRadius, topY);
      this.ctx.quadraticCurveTo(
        dropX - topRadius * 0.5, dropY,
        dropX - topRadius * 0.15, tipY - drop.width * 0.5
      );

      // Заостренный конец
      this.ctx.lineTo(dropX, tipY);

      // Правая сторона
      this.ctx.lineTo(dropX + topRadius * 0.15, tipY - drop.width * 0.5);
      this.ctx.quadraticCurveTo(
        dropX + topRadius * 0.5, dropY,
        dropX + topRadius, topY
      );

      // Замыкаем круг сверху
      this.ctx.closePath();

      // Заливка
      this.ctx.fill();

      // Тонкий контур
      this.ctx.stroke();

      this.ctx.restore();
    }
  }

  drawSnowy(timeOfDay, width, height) {
    this.drawClouds(Date.now() * 0.001, width, height, 0.7);

    // Snowflakes - более плавное падение и вращение
    const time = Date.now() * 0.001;
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    for (let i = 0; i < 40; i++) {
      const x = (width * 0.15 + i * 22 + Math.sin(time * 0.15 + i) * 15) % width;
      const y = ((time * 60 + i * 25) % (height + 60)) - 30;
      const size = 1.5 + (i % 4) * 0.8;
      const alpha = 0.7 + (i % 2) * 0.2;
      const rotation = time * 0.25 + i * 0.3;

      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotation);
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;

      // Более детальная снежинка
      for (let j = 0; j < 6; j++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, size * 2.5);
        this.ctx.stroke();

        // Боковые веточки
        this.ctx.beginPath();
        this.ctx.moveTo(size * 0.5, size * 1.5);
        this.ctx.lineTo(size * 1.2, size * 1.8);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(-size * 0.5, size * 1.5);
        this.ctx.lineTo(-size * 1.2, size * 1.8);
        this.ctx.stroke();

        this.ctx.rotate(Math.PI / 3);
      }

      this.ctx.restore();
    }
  }

  drawFoggy(timeOfDay, width, height) {
    // Fog layers
    const time = Date.now() * 0.0003;
    this.ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';

    for (let i = 0; i < 3; i++) {
      const y = height * (0.4 + i * 0.2);
      const offset = Math.sin(time + i) * 20;

      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      for (let x = 0; x <= width; x += 5) {
        const wave = Math.sin((x / width + time) * Math.PI * 4 + i) * 15;
        this.ctx.lineTo(x, y + wave + offset);
      }
      this.ctx.lineTo(width, height);
      this.ctx.lineTo(0, height);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  drawHail(timeOfDay, width, height) {
    this.drawClouds(Date.now() * 0.001, width, height, 1.0);

    // Инициализируем градины
    if (!this.hailStones || this.hailStones.length === 0 || this.hailStones.length !== 60) {
      this.hailStones = [];
      for (let i = 0; i < 60; i++) {
        this.hailStones.push({
          startX: Math.random() * width,
          startY: Math.random() * (height + 150) - 75,
          speed: 120 + Math.random() * 80, // Град падает быстрее дождя
          windOffset: (Math.random() - 0.5) * 20,
          size: 2 + Math.random() * 3, // Градины крупнее капель
          alpha: 0.8 + Math.random() * 0.15,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const time = Date.now() * 0.002;

    this.ctx.fillStyle = 'rgba(240, 250, 255, 1)';
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.lineWidth = 0.5;

    for (let i = 0; i < this.hailStones.length; i++) {
      const hail = this.hailStones[i];

      const hailY = (hail.startY + time * hail.speed) % (height + 150);

      if (hailY > height + 30) {
        hail.startY = -30 - Math.random() * 30;
        hail.startX = Math.random() * width;
      }

      const wind = hail.windOffset * (1 + Math.sin(time * 0.6 + hail.phase) * 0.15);
      const hailX = (hail.startX + wind + (time * 20) % width) % width;

      if (hailX < -5) {
        hail.startX = width + 5;
      } else if (hailX > width + 5) {
        hail.startX = -5;
      }

      this.ctx.save();
      this.ctx.globalAlpha = hail.alpha;

      // Градины - белые округлые (не идеально круглые, немного угловатые)
      this.ctx.beginPath();
      // Рисуем как слегка приплюснутый круг для реалистичности
      this.ctx.ellipse(hailX, hailY, hail.size, hail.size * 0.9, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();

      // Блик на градине
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      this.ctx.beginPath();
      this.ctx.ellipse(hailX - hail.size * 0.3, hailY - hail.size * 0.3, hail.size * 0.3, hail.size * 0.25, 0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = 'rgba(240, 250, 255, 1)';
      this.ctx.restore();
    }
  }

  drawThunderstorm(timeOfDay, width, height, withRain = true) {
    // Облака для грозы (более темные и плотные)
    this.drawClouds(Date.now() * 0.001, width, height, 1.0);

    // Дождь только если указано
    if (withRain) {
      this.drawRainy(timeOfDay, width, height, false);
    }

    // Плавное белое мерцание карточки (эффект молнии)
    const time = Date.now() * 0.001;

    // Создаем эффект случайных вспышек молнии
    // Используем комбинацию синусов для создания непредсказуемого паттерна
    const flashPattern = Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1);
    const flashIntensity = Math.max(0, flashPattern);

    // Вспышки происходят реже и более резко
    if (flashIntensity > 0.4) {
      // Плавное белое мерцание с быстрым затуханием
      const normalizedIntensity = (flashIntensity - 0.4) / 0.6; // Нормализуем от 0 до 1
      const alpha = normalizedIntensity * 0.6; // Максимальная яркость 60%

      // Плавное затухание для более реалистичного эффекта
      const fadeSpeed = 0.15;
      const fadeAlpha = Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * 0.6);

      this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
      this.ctx.fillRect(0, 0, width, height);
    }
  }

  drawCloudy(timeOfDay, width, height) {
    this.drawClouds(Date.now() * 0.001, width, height, 0.7);
  }

  render() {
    if (!this.hass) {
      return html`<div>No Home Assistant connection</div>`;
    }

    const weather = this.getWeatherData();
    const timeOfDay = this.getTimeOfDay();
    const cardClasses = `weather-card ${timeOfDay.type}`;

    // Вычисляем минимальную высоту на основе конфигурации
    let minHeight = this.config.height ? `${this.config.height}px` : '200px';

    // Получаем динамический градиент для восхода/заката
    const bgGradient = this.getBackgroundGradient(timeOfDay);
    const bgStyle = bgGradient
      ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));`
      : '';

    return html`
      <ha-card>
        <div class="${cardClasses}" style="min-height: ${minHeight}; ${bgStyle}">
          <div class="canvas-container"></div>
          <div class="content">
            <div class="header">
              <div class="location">${this.getConditionName(weather.condition)}</div>
            </div>
            <div>
              <div class="temperature">${Math.round(weather.temperature)}°</div>
              ${this.config.showMinTemp && weather.templow ? html`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(weather.templow)}°</span>
                </div>
              ` : ''}
              ${this.config.showFeelsLike && weather.apparentTemperature ? html`
                <div class="feels-like">Ощущается как ${Math.round(weather.apparentTemperature)}°</div>
              ` : ''}
            </div>
            <div class="details">
              <div class="extra-info-right">
                ${this.config.showHumidity ? html`
                  <div class="info-row">
                    <span class="info-icon">${this.getIconSvgSync('humidity-icon.svg')}</span>
                    <span>${weather.humidity}%</span>
                  </div>
                ` : ''}
                ${this.config.showWind ? html`
                  ${this.config.showWindDirection && weather.windBearing !== null ? html`
                    <div class="info-row">
                      <span class="info-icon">${this.getIconSvgSync(this.getWindDirectionIcon(weather.windBearing))}</span>
                      <span>${this.getWindDirectionText(weather.windBearing)} ${weather.windSpeed} km/h</span>
                    </div>
                  ` : html`
                    <div class="info-row">
                      <span class="info-icon">${this.getIconSvgSync('wind-icon.svg')}</span>
                      <span>${weather.windSpeed} km/h</span>
                    </div>
                  `}
                  ${this.config.showWindGust && weather.windGust ? html`
                    <div class="info-row">
                      <span class="info-icon">${this.getIconSvgSync('wind-gust-icon.svg')}</span>
                      <span>Порывы: ${weather.windGust} km/h</span>
                    </div>
                  ` : ''}
                ` : ''}
              </div>
            </div>
            ${this.config.showForecast ? html`
              <div class="forecast-container">
                <div class="forecast-title">Прогноз на сегодня</div>
                ${this.renderTodayForecast()}
              </div>
            ` : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  getConditionName(condition) {
    const conditions = {
      'sunny': 'Солнечно',
      'clear': 'Ясно',
      'cloudy': 'Облачно',
      'partlycloudy': 'Переменная облачность',
      'rainy': 'Дождь',
      'rain': 'Дождь',
      'snowy': 'Снег',
      'snow': 'Снег',
      'foggy': 'Туман',
      'fog': 'Туман',
      'lightning': 'Гроза',
      'lightning-rainy': 'Гроза с дождем',
      'pouring': 'Сильный дождь',
      'snowy-rainy': 'Мокрый снег',
      'hail': 'Град',
      'clear-night': 'Ясная ночь',
      'partlycloudy': 'Переменная облачность'
    };
    return conditions[condition.toLowerCase()] || condition;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define a weather entity');
    }
    this.config = {
      entity: config.entity,
      icons_path: config.icons_path,
      name: config.name,
      height: config.height || null,
      showFeelsLike: config.show_feels_like !== false, // По умолчанию true
      showWind: config.show_wind !== false, // По умолчанию true
      showWindGust: config.show_wind_gust !== false, // По умолчанию true
      showWindDirection: config.show_wind_direction !== false, // По умолчанию true
      showHumidity: config.show_humidity !== false, // По умолчанию true
      showMinTemp: config.show_min_temp !== false, // По умолчанию true
      showForecast: config.show_forecast === true // По умолчанию false
    };
    // Предзагружаем иконки после установки конфигурации
    this.preloadIcons();
  }

  getCardSize() {
    return 1;
  }

  static getConfigElement() {
    return document.createElement('animated-weather-card-editor');
  }
}

class AnimatedWeatherCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    this.config = config || {};
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }
      .option {
        padding: 4px 0;
      }
      label {
        display: flex;
        align-items: center;
        padding: 4px 0;
      }
      .label {
        flex: 1;
        margin-right: 8px;
      }
      ha-entity-picker,
      ha-textfield {
        width: 100%;
      }
      ha-switch {
        margin-left: auto;
      }
    `;
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="option">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this.config.entity}
            .configValue=${'entity'}
            .label=${'Weather Entity'}
            .includeDomains=${['weather']}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        </div>

        <div class="option">
          <ha-textfield
            .label=${'Name (optional)'}
            .value=${this.config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-textfield
            .label=${'Height in pixels (optional, default: 200)'}
            .value=${this.config.height || ''}
            .configValue=${'height'}
            type="number"
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <label>
            <span class="label">Show "Feels Like" temperature</span>
            <ha-switch
              .checked=${this.config.show_feels_like !== false}
              .configValue=${'show_feels_like'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Minimum Temperature</span>
            <ha-switch
              .checked=${this.config.show_min_temp !== false}
              .configValue=${'show_min_temp'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Humidity</span>
            <ha-switch
              .checked=${this.config.show_humidity !== false}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Speed</span>
            <ha-switch
              .checked=${this.config.show_wind !== false}
              .configValue=${'show_wind'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Direction</span>
            <ha-switch
              .checked=${this.config.show_wind_direction !== false}
              .configValue=${'show_wind_direction'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Wind Gust</span>
            <ha-switch
              .checked=${this.config.show_wind_gust !== false}
              .configValue=${'show_wind_gust'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>

        <div class="option">
          <label>
            <span class="label">Show Today Forecast</span>
            <ha-switch
              .checked=${this.config.show_forecast === true}
              .configValue=${'show_forecast'}
              @change=${this._valueChanged}
            ></ha-switch>
          </label>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config) {
      return;
    }
    const target = ev.target;
    if (target.configValue) {
      const value = target.checked !== undefined ? target.checked : target.value;
      if (value === '' || value === null) {
        delete this.config[target.configValue];
      } else {
        if (target.configValue === 'height') {
          this.config[target.configValue] = parseInt(value) || null;
        } else {
          this.config[target.configValue] = value;
        }
      }
    }
    const event = new CustomEvent('config-changed', {
      detail: { config: this.config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

// Регистрация элементов и информация о версии
try {
  customElements.define('animated-weather-card-editor', AnimatedWeatherCardEditor);
  customElements.define('animated-weather-card', AnimatedWeatherCard);

  // Информация о версии
  const VERSION = '1.0.0';

  // Вывод информации о версии в консоль
  console.log(
    `%cAnimated Weather Card %c${VERSION}`,
    'color: #007AFF; font-weight: bold; font-size: 14px;',
    'color: #666; font-size: 12px;',
    '\nКрасивая анимированная карточка погоды в стиле iOS'
  );

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'animated-weather-card',
    name: 'Animated Weather Card',
    description: 'Красивая анимированная карточка погоды в стиле iOS',
    preview: true,
    documentationURL: 'https://github.com/your-repo/animated-weather-card'
  });

  console.log('✅ Animated Weather Card зарегистрирована успешно!');
} catch (error) {
  console.error('❌ Ошибка при регистрации Animated Weather Card:', error);
}

