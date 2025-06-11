# SecureNet VPN - Landing Website

[English](#english) | [Русский](#русский) | [MacOS app readme](https://github.com/ImAngelOfDead/goidaNetSite/blob/main/appREADME.md)

---

## English

### 🌐 SecureNet VPN Landing Page

A stunning, modern landing page for SecureNet VPN service built with Next.js, React 18, and Tailwind CSS. Features beautiful animations, dark theme, and full internationalization support.

### ✨ Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Stunning Design**: Dark theme with animated gradient backgrounds
- **Full Internationalization**: English and Russian language support with elegant language selector
- **Beautiful Animations**: 
  - Animated loading screen with progress bar
  - Fixed animated background that stays in place during scroll
  - Smooth fade-in animations for all content sections
  - Hover effects and micro-interactions
- **Complete Landing Page**:
  - Hero section with call-to-action
  - Features showcase with icons
  - Pricing plans with popular plan highlight
  - Auto-rotating testimonials
  - Call-to-action section
  - Comprehensive footer

### 🚀 Getting Started

#### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/securenet-website.git
   cd securenet-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 🏗️ Project Structure

```
securenet-website/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── Pricing.tsx          # Pricing plans
│   ├── Testimonials.tsx     # Customer testimonials
│   └── Footer.tsx           # Site footer
├── lib/
│   ├── translations.ts      # Language translations
│   └── utils.ts            # Utility functions
├── public/
│   ├── icons/              # VPN and UI icons
│   └── images/             # Images and assets
└── package.json
```

### 🌍 Internationalization

The website supports both English and Russian languages:

- **Language Detection**: Checks localStorage for saved preference
- **Elegant Language Selector**: Beautiful modal popup on first visit
- **Complete Translation**: All content, buttons, and UI elements
- **Language Switcher**: Quick language toggle in navigation
- **Persistent Storage**: Remembers user's language choice

#### Supported Languages:
- **English** 🇺🇸: Full localization
- **Russian** 🇷🇺: Complete translation with localized testimonials and content

### 🎨 Design System

- **Color Palette**:
  - Primary: Indigo (#6366F1)
  - Secondary: Purple (#8B5CF6)  
  - Accent: Emerald (#10B981)
  - Background: Slate-900 (#0F172A)
- **Typography**: Inter font family with multiple weights
- **Animations**: Smooth transitions with easing functions
- **Layout**: Responsive design with mobile-first approach
- **Icons**: Lucide React icons for consistency

### 📱 Sections

#### 1. Hero Section
- Compelling headline with gradient text
- Two call-to-action buttons
- Real-time statistics (2M+ users, 75+ countries, 500+ servers)
- Animated background effects

#### 2. Features Section
- Six key VPN features with icons:
  - Military-Grade Encryption
  - Global Server Network
  - Lightning Fast Speed
  - No-Logs Policy
  - Kill Switch
  - Multi-Device Support

#### 3. Pricing Section
- Three pricing tiers: Free, Premium ($9.99), Family ($14.99)
- Feature comparison with checkmarks
- Popular plan highlighting
- Hover animations and effects

#### 4. Testimonials Section
- Auto-rotating customer testimonials
- Star ratings and customer avatars
- Localized testimonials for each language
- Interactive pagination dots

#### 5. Call-to-Action Section
- Final conversion section
- Gradient background with premium feel
- Two action buttons with different priorities

#### 6. Footer
- Four-column layout with organized links
- Product, Support, and Company sections
- Social media integration ready
- Copyright information

### ⚡ Performance Features

- **Fixed Animated Background**: Beautiful gradients that stay in place while scrolling
- **Optimized Animations**: Smooth 60fps animations with proper timing
- **Lazy Loading**: Content appears with staggered animations
- **Responsive Images**: Optimized for all screen sizes
- **Fast Loading**: Optimized bundle size and loading times

### 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind utilities
- **State Management**: React hooks (useState, useEffect)
- **Storage**: localStorage for language preferences
- **Deployment**: Vercel (recommended)

### 🚀 Deployment

#### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

#### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

### 🔧 Configuration

#### Adding New Languages

1. Add translations to `lib/translations.ts`
2. Update language selector in the modal
3. Add flag emoji and language name

#### Customizing Colors

Update the color palette in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

### 📊 Analytics Ready

The site is prepared for analytics integration:
- Event tracking on CTA buttons
- Language selection tracking
- Scroll depth tracking
- Conversion funnel tracking

### 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Русский

### 🌐 Лендинг SecureNet VPN

Потрясающий, современный лендинг для VPN сервиса SecureNet, созданный на Next.js, React 18 и Tailwind CSS. Включает красивые анимации, темную тему и полную поддержку интернационализации.

### ✨ Возможности

- **Современный Технический Стек**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Потрясающий Дизайн**: Темная тема с анимированными градиентными фонами
- **Полная Интернационализация**: Поддержка английского и русского языков с элегантным селектором языка
- **Красивые Анимации**:
  - Анимированный экран загрузки с прогресс-баром
  - Фиксированный анимированный фон, который остается на месте при скролле
  - Плавные fade-in анимации для всех секций контента
  - Hover эффекты и микроинтеракции
- **Полноценный Лендинг**:
  - Hero секция с призывом к действию
  - Демонстрация возможностей с иконками
  - Тарифные планы с выделением популярного плана
  - Автопрокручивающиеся отзывы
  - Секция призыва к действию
  - Комплексный футер

### 🚀 Начало Работы

#### Требования
- Node.js 18.0 или новее
- npm или yarn менеджер пакетов

#### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/yourusername/securenet-website.git
   cd securenet-website
   ```

2. Установите зависимости:
   ```bash
   npm install
   # или
   yarn install
   ```

3. Запустите сервер разработки:
   ```bash
   npm run dev
   # или
   yarn dev
   ```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере

### 🏗️ Структура Проекта

```
securenet-website/
├── app/
│   ├── globals.css           # Глобальные стили
│   ├── layout.tsx           # Корневой макет
│   └── page.tsx             # Главная страница лендинга
├── components/
│   ├── ui/                  # Переиспользуемые UI компоненты
│   ├── Hero.tsx             # Hero секция
│   ├── Features.tsx         # Демонстрация возможностей
│   ├── Pricing.tsx          # Тарифные планы
│   ├── Testimonials.tsx     # Отзывы клиентов
│   └── Footer.tsx           # Футер сайта
├── lib/
│   ├── translations.ts      # Переводы языков
│   └── utils.ts            # Вспомогательные функции
├── public/
│   ├── icons/              # VPN и UI иконки
│   └── images/             # Изображения и ассеты
└── package.json
```

### 🌍 Интернационализация

Веб-сайт поддерживает английский и русский языки:

- **Определение Языка**: Проверяет localStorage на сохраненные предпочтения
- **Элегантный Селектор Языка**: Красивый модальный попап при первом посещении
- **Полный Перевод**: Весь контент, кнопки и UI элементы
- **Переключатель Языка**: Быстрое переключение языка в навигации
- **Постоянное Хранение**: Запоминает выбор языка пользователя

#### Поддерживаемые Языки:
- **Английский** 🇺🇸: Полная локализация
- **Русский** 🇷🇺: Полный перевод с локализованными отзывами и контентом

### 🎨 Дизайн Система

- **Цветовая Палитра**:
  - Основной: Индиго (#6366F1)
  - Вторичный: Фиолетовый (#8B5CF6)
  - Акцент: Изумрудный (#10B981)
  - Фон: Slate-900 (#0F172A)
- **Типографика**: Семейство шрифтов Inter с множественными весами
- **Анимации**: Плавные переходы с функциями easing
- **Макет**: Отзывчивый дизайн с mobile-first подходом
- **Иконки**: Lucide React иконки для консистентности

### 📱 Секции

#### 1. Hero Секция
- Убедительный заголовок с градиентным текстом
- Две кнопки призыва к действию
- Статистика в реальном времени (2M+ пользователей, 75+ стран, 500+ серверов)
- Анимированные фоновые эффекты

#### 2. Секция Возможностей
- Шесть ключевых возможностей VPN с иконками:
  - Военное Шифрование
  - Глобальная Сеть Серверов
  - Молниеносная Скорость
  - Политика Нулевых Логов
  - Kill Switch
  - Поддержка Нескольких Устройств

#### 3. Секция Тарифов
- Три тарифных плана: Бесплатный, Премиум ($9.99), Семейный ($14.99)
- Сравнение возможностей с галочками
- Выделение популярного плана
- Hover анимации и эффекты

#### 4. Секция Отзывов
- Автопрокручивающиеся отзывы клиентов
- Звездные рейтинги и аватары клиентов
- Локализованные отзывы для каждого языка
- Интерактивные точки пагинации

#### 5. Секция Призыва к Действию
- Финальная секция конверсии
- Градиентный фон с премиум ощущением
- Две кнопки действия с разными приоритетами

#### 6. Футер
- Четырехколоночный макет с организованными ссылками
- Секции Продукт, Поддержка и Компания
- Готова интеграция социальных сетей
- Информация об авторских правах

### ⚡ Особенности Производительности

- **Фиксированный Анимированный Фон**: Красивые градиенты, которые остаются на месте во время прокрутки
- **Оптимизированные Анимации**: Плавные 60fps анимации с правильным тайммингом
- **Ленивая Загрузка**: Контент появляется с поэтапными анимациями
- **Отзывчивые Изображения**: Оптимизированы для всех размеров экрана
- **Быстрая Загрузка**: Оптимизированный размер пакета и время загрузки

### 🛠️ Технологический Стек

- **Frontend**: Next.js 14, React 18, TypeScript
- **Стилизация**: Tailwind CSS с кастомными компонентами
- **Иконки**: Lucide React
- **Анимации**: CSS анимации с утилитами Tailwind
- **Управление Состоянием**: React хуки (useState, useEffect)
- **Хранение**: localStorage для языковых предпочтений
- **Деплой**: Vercel (рекомендуется)

### 🚀 Деплой

#### Деплой на Vercel (Рекомендуется)

1. Загрузите код на GitHub
2. Подключите репозиторий к Vercel
3. Деплойте одним кликом

#### Ручной Деплой

1. Соберите проект:
   ```bash
   npm run build
   ```

2. Запустите продакшн сервер:
   ```bash
   npm start
   ```

### 🔧 Конфигурация

#### Добавление Новых Языков

1. Добавьте переводы в `lib/translations.ts`
2. Обновите селектор языка в модале
3. Добавьте флаг эмодзи и название языка

#### Кастомизация Цветов

Обновите цветовую палитру в `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Ваши кастомные цвета
      }
    }
  }
}
```

### 📊 Готово для Аналитики

Сайт подготовлен для интеграции аналитики:
- Отслеживание событий на CTA кнопках
- Отслеживание выбора языка
- Отслеживание глубины прокрутки
- Отслеживание воронки конверсии

### 🤝 Участие в Разработке

1. Форкните проект
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

### 📄 Лицензия

Этот проект лицензирован под MIT License - смотрите файл [LICENSE](LICENSE) для деталей.
