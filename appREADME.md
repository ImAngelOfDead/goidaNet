# SecureNet VPN - macOS App

[English](#english) | [Русский](#русский)

---

## English

### 🛡️ SecureNet VPN for macOS

A beautiful, modern VPN application for macOS built with SwiftUI. Features a stunning dark theme with animated backgrounds and smooth interactions.

### ✨ Features

- **Modern SwiftUI Interface**: Native macOS design with beautiful animations
- **Dark Theme**: Elegant dark interface with animated gradient backgrounds  
- **Three Main Sections**:
  - **Connect**: Large connection button with pulse animations
  - **Servers**: Browse and select from 10+ global server locations
  - **Settings**: Comprehensive privacy and connection settings
- **Real-time Status**: Visual connection status with protected/unprotected indicators
- **Server Information**: Ping times, server load indicators, and country flags
- **Advanced Security Settings**: Kill Switch, DNS protection, Auto-connect
- **Smooth Animations**: Pulse effects, transitions, and interactive feedback

### 🚀 Getting Started

#### Prerequisites
- macOS 14.0 or later
- Xcode 15.0 or later
- Swift 5.9 or later

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/securenet-macos.git
   cd securenet-macos
   ```

2. Open the project in Xcode:
   ```bash
   open SecureNet.xcodeproj
   ```

3. Build and run the project:
   - Select your target device/simulator
   - Press `Cmd + R` to build and run

### 🏗️ Project Structure

```
SecureNet/
├── ContentView.swift          # Main app entry point
├── Views/
│   ├── SplashView.swift      # Loading screen
│   ├── MainVPNView.swift     # Connection interface
│   ├── ServerListView.swift  # Server selection
│   └── SettingsView.swift    # App settings
├── Components/
│   ├── AnimatedBackground.swift
│   ├── CustomTabBar.swift
│   └── ServerRow.swift
├── Models/
│   ├── VPNManager.swift      # App state management
│   └── VPNServer.swift       # Server data model
└── Assets.xcassets           # App icons and images
```

### 🎨 Design System

- **Colors**: Dark theme with indigo/purple accents
- **Typography**: SF Pro (system font) with various weights
- **Animations**: Smooth 0.3-0.5s easing transitions
- **Layout**: Responsive design with proper spacing
- **Icons**: SF Symbols for consistent iconography

### 🔧 Configuration

The app includes realistic mock data for demonstration:

- **10 Server Locations**: US, UK, Germany, Japan, Australia, Canada, Netherlands, Singapore, Sweden, Switzerland
- **Connection States**: Connected/Disconnected with visual feedback
- **Settings**: Auto-connect, Kill Switch, DNS Protection, IPv6 Protection
- **User Profile**: Premium plan with expiration date

### 📱 Screenshots

| Main Screen | Server List | Settings |
|-------------|-------------|----------|
| Connection status and controls | Global server selection | Privacy and security options |

### 🛠️ Technical Details

- **Architecture**: MVVM pattern with ObservableObject
- **State Management**: Combine framework with @Published properties
- **UI Framework**: SwiftUI with custom components
- **Animations**: Built-in SwiftUI animations with custom timing
- **Data**: Local mock data (no actual VPN functionality)

### 🎯 Demo Features

This is a **UI demonstration app** with the following mock features:
- Visual connection states (no actual VPN connection)
- Server selection with realistic ping/load data
- Settings toggles (stored locally)
- Smooth animations and transitions

### 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- Built with SwiftUI and love ❤️
- Inspired by modern VPN application designs
- Uses SF Symbols for consistent iconography

---

## Русский

### 🛡️ SecureNet VPN для macOS

Красивое, современное VPN приложение для macOS, созданное с помощью SwiftUI. Включает потрясающую темную тему с анимированными фонами и плавными взаимодействиями.

### ✨ Возможности

- **Современный SwiftUI Интерфейс**: Нативный дизайн macOS с красивыми анимациями
- **Темная Тема**: Элегантный темный интерфейс с анимированными градиентными фонами
- **Три Основные Секции**:
  - **Подключение**: Большая кнопка подключения с пульсирующими анимациями
  - **Серверы**: Просмотр и выбор из 10+ глобальных серверных локаций
  - **Настройки**: Комплексные настройки приватности и подключения
- **Статус в Реальном Времени**: Визуальный статус подключения с индикаторами защищено/не защищено
- **Информация о Серверах**: Время пинга, индикаторы нагрузки сервера и флаги стран
- **Продвинутые Настройки Безопасности**: Kill Switch, DNS защита, Автоподключение
- **Плавные Анимации**: Пульсирующие эффекты, переходы и интерактивная обратная связь

### 🚀 Начало Работы

#### Требования
- macOS 14.0 или новее
- Xcode 15.0 или новее
- Swift 5.9 или новее

#### Установка
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/yourusername/securenet-macos.git
   cd securenet-macos
   ```

2. Откройте проект в Xcode:
   ```bash
   open SecureNet.xcodeproj
   ```

3. Соберите и запустите проект:
   - Выберите целевое устройство/симулятор
   - Нажмите `Cmd + R` для сборки и запуска

### 🏗️ Структура Проекта

```
SecureNet/
├── ContentView.swift          # Главная точка входа приложения
├── Views/
│   ├── SplashView.swift      # Экран загрузки
│   ├── MainVPNView.swift     # Интерфейс подключения
│   ├── ServerListView.swift  # Выбор сервера
│   └── SettingsView.swift    # Настройки приложения
├── Components/
│   ├── AnimatedBackground.swift
│   ├── CustomTabBar.swift
│   └── ServerRow.swift
├── Models/
│   ├── VPNManager.swift      # Управление состоянием приложения
│   └── VPNServer.swift       # Модель данных сервера
└── Assets.xcassets           # Иконки и изображения приложения
```

### 🎨 Дизайн Система

- **Цвета**: Темная тема с индиго/фиолетовыми акцентами
- **Типографика**: SF Pro (системный шрифт) с различными весами
- **Анимации**: Плавные переходы 0.3-0.5с с easing
- **Макет**: Отзывчивый дизайн с правильными отступами
- **Иконки**: SF Symbols для консистентной иконографии

### 🔧 Конфигурация

Приложение включает реалистичные mock данные для демонстрации:

- **10 Серверных Локаций**: США, Великобритания, Германия, Япония, Австралия, Канада, Нидерланды, Сингапур, Швеция, Швейцария
- **Состояния Подключения**: Подключено/Отключено с визуальной обратной связью
- **Настройки**: Автоподключение, Kill Switch, DNS Защита, IPv6 Защита
- **Профиль Пользователя**: Премиум план с датой истечения

### 🛠️ Технические Детали

- **Архитектура**: MVVM паттерн с ObservableObject
- **Управление Состоянием**: Combine фреймворк с @Published свойствами
- **UI Фреймворк**: SwiftUI с кастомными компонентами
- **Анимации**: Встроенные SwiftUI анимации с кастомным тайммингом
- **Данные**: Локальные mock данные (без реальной VPN функциональности)

### 🎯 Демо Возможности

Это **демонстрационное UI приложение** со следующими mock возможностями:
- Визуальные состояния подключения (без реального VPN подключения)
- Выбор сервера с реалистичными данными пинга/нагрузки
- Переключатели настроек (сохраняются локально)
- Плавные анимации и переходы

### 🤝 Участие в Разработке

1. Форкните проект
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

### 📄 Лицензия

Этот проект лицензирован под MIT License - смотрите файл [LICENSE](LICENSE) для деталей.

### 🙏 Благодарности

- Создано с SwiftUI и любовью ❤️
- Вдохновлено современными дизайнами VPN приложений
- Использует SF Symbols для консистентной иконографии
