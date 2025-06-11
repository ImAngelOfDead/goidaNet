'use client'

import { useState, useEffect } from 'react'
import { Shield, Globe, Zap, Eye, MapPin, Users, Star, Check, Languages } from 'lucide-react'

export default function SecureNetLanding() {
    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)
    const [showLanguageModal, setShowLanguageModal] = useState(false)
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [language, setLanguage] = useState('en')

    // Проверяем, выбирал ли пользователь язык ранее
    useEffect(() => {
        // Note: localStorage is not available in Claude.ai artifacts
        // Using default language instead
        const savedLanguage = 'en' // localStorage.getItem('securenet-language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        } else {
            // Показываем модал выбора языка после загрузки
            setTimeout(() => {
                setShowLanguageModal(true)
            }, 3000)
        }
    }, [])

    // Симуляция загрузки
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
                setShowContent(true)
            }, 100)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    // Переводы
    const translations = {
        en: {
            nav: {
                features: "Features",
                pricing: "Pricing",
                about: "About",
                getStarted: "Get Started"
            },
            hero: {
                title: "Your Privacy,",
                titleSpan: " Protected",
                subtitle: "Browse anonymously, access global content, and secure your connection with military-grade encryption",
                startTrial: "Start Free Trial",
                viewPricing: "View Pricing"
            },
            stats: [
                { number: "2M+", label: "Active Users" },
                { number: "75+", label: "Countries" },
                { number: "500+", label: "Servers" },
                { number: "99.9%", label: "Uptime" }
            ],
            features: {
                title: "Why Choose GoidaNet?",
                subtitle: "Advanced features to keep you safe and connected",
                items: [
                    {
                        title: "Military-Grade Encryption",
                        description: "AES-256 encryption protects your data from hackers and surveillance"
                    },
                    {
                        title: "Global Server Network",
                        description: "75+ countries with 500+ high-speed servers for optimal performance"
                    },
                    {
                        title: "Lightning Fast",
                        description: "Optimized servers ensure you never compromise speed for security"
                    },
                    {
                        title: "No-Logs Policy",
                        description: "We don't track, collect, or share your private data. Ever."
                    },
                    {
                        title: "Kill Switch",
                        description: "Automatic protection if your VPN connection drops unexpectedly"
                    },
                    {
                        title: "Multi-Device Support",
                        description: "Protect all your devices with a single goidaNet account"
                    }
                ]
            },
            pricing: {
                title: "Choose Your Plan",
                subtitle: "Start with our free plan or upgrade for premium features",
                plans: [
                    {
                        name: "Free",
                        price: 0,
                        period: "month",
                        features: ["1 device", "3 server locations", "Basic support", "Limited bandwidth"],
                        limitations: ["Ads supported", "5GB monthly limit"],
                        buttonText: "Start Free"
                    },
                    {
                        name: "Premium",
                        price: 9.99,
                        period: "month",
                        features: ["5 devices", "50+ locations", "24/7 support", "No logs", "Unlimited bandwidth", "Kill switch"],
                        buttonText: "Get Started",
                        popular: "Most Popular"
                    },
                    {
                        name: "Family",
                        price: 14.99,
                        period: "month",
                        features: ["10 devices", "All locations", "Priority support", "Family sharing", "Advanced security", "Dedicated IP"],
                        buttonText: "Get Started"
                    }
                ]
            },
            testimonials: {
                title: "Trusted by Millions",
                subtitle: "See what our users say about goidaNet",
                items: [
                    {
                        name: "Sarah Johnson",
                        avatar: "SJ",
                        rating: 5,
                        text: "goidaNet changed how I browse online. Lightning fast speeds and rock-solid security!",
                        location: "New York, USA"
                    },
                    {
                        name: "Marcus Chen",
                        avatar: "MC",
                        rating: 5,
                        text: "Finally found a VPN that actually works in China. Excellent service and support.",
                        location: "Shanghai, China"
                    },
                    {
                        name: "Elena Rodriguez",
                        avatar: "ER",
                        rating: 5,
                        text: "Love the family plan! Protecting all our devices has never been easier.",
                        location: "Madrid, Spain"
                    }
                ]
            },
            cta: {
                title: "Ready to Secure Your Privacy?",
                subtitle: "Join millions of users who trust goidaNet with their online security",
                button: "Start Free Trial",
                link: "View All Features →"
            },
            footer: {
                description: "Your trusted partner for online privacy and security.",
                product: "Product",
                support: "Support",
                company: "Company",
                copyright: "© 2025 goidaNet. All rights reserved.",
                links: {
                    features: "Features",
                    pricing: "Pricing",
                    download: "Download",
                    helpCenter: "Help Center",
                    contact: "Contact Us",
                    status: "Status",
                    about: "About",
                    privacy: "Privacy",
                    terms: "Terms"
                }
            },
            languageModal: {
                title: "Choose Your Language",
                subtitle: "Select your preferred language to continue"
            },
            loading: {
                text: "Securing your connection..."
            }
        },
        ru: {
            nav: {
                features: "Что Умеет",
                pricing: "Сколько стоит (и стоит ли)",
                about: "Кто Мы Такие",
                getStarted: "Ну, Поехали"
            },
            hero: {
                title: "Ваш Интернет,",
                titleSpan: " Под Надзором (как надо)",
                subtitle: "Хрен кто подглядит! Всё зашифровано по-военному, цены в стопках — по-нашему!",
                startTrial: "Дать Попробовать",
                viewPricing: "Глянуть Цены (не в баксах!)"
            },
            stats: [
                { number: "2М+", label: "Нормальных Людей" },
                { number: "75+", label: "Стран (всё гейропа, конечно...)" },
                { number: "500+", label: "Серверов (а не халявы, как у них!)" },
                { number: "99.9%", label: "Работает, не как ЖЭК" }
            ],
            features: {
                title: "Почему Это Работает, А Не Как Обычно",
                subtitle: "Безопасность — дело серьёзное, не то что у них",
                items: [
                    {
                        title: "Армейское Шифрование",
                        description: "Такое шифрование, что сам Сноуден обзавидуется. Всё под ключом, не для геев."
                    },
                    {
                        title: "Серверы По Всей Планете",
                        description: "И в Гондурасе, и в Чебоксарах. Работает везде, где есть розетка."
                    },
                    {
                        title: "Шустро, как молодость прошла",
                        description: "Летает, не как интернет у соседей, которые всё торренты качают."
                    },
                    {
                        title: "Никаких Логов, клянусь партбилетом",
                        description: "Мы за вами не следим. Пусть этим ФСБ занимается, если надо."
                    },
                    {
                        title: "Kill Switch (глушилка)",
                        description: "Если что, сразу обрывает — как в 90-х свет рубили, только с пользой."
                    },
                    {
                        title: "Работает на всём",
                        description: "Хоть на айфоне, хоть на калькуляторе. Всё подключим, всё защитим."
                    }
                ]
            },
            pricing: {
                title: "Выбирай, но с умом",
                subtitle: "Цены честные, как в деревне у бабки. Считаем в стопках — так понятнее",
                plans: [
                    {
                        name: "Дармовой",
                        price: 0,
                        period: "в месяц",
                        features: ["Одно устройство (бабушкин смартфон)", "3 точки доступа", "Техподдержка по талонам", "Интернет по капельке"],
                        limitations: ["Будет реклама! Как в ящике", "5ГБ — не хватит на сериалы про Великую Отечественную"],
                        buttonText: "Бери Пока Дают"
                    },
                    {
                        name: "По-Людски",
                        price: 9.99,
                        period: "в месяц",
                        features: ["5 устройств (включая холодильник)", "50+ стран (и не только гейропа)", "Поддержка круглосуточная", "Вообще без логов", "Интернет без тормозов", "Kill Switch (в случае ЧП)"],
                        buttonText: "20 стопок — дёшево!",
                        popular: "Народный Выбор"
                    },
                    {
                        name: "Семейный",
                        price: 14.99,
                        period: "в месяц",
                        features: ["10 устройств (на всю коммуналку)", "Все сервера", "Особая забота", "Доступ родне", "Антивирус как у внука", "Свой айпишник (прямо как паспорт)", "потому что главное это семья"],
                        buttonText: "30 стопок за всех родных"
                    }
                ]
            },
            testimonials: {
                title: "Люди Довольны — и слава Богу",
                subtitle: "Вот что говорят нормальные, не испорченные Западом, пользователи:",
                items: [
                    {
                        name: "Анна Петрова",
                        avatar: "АП",
                        rating: 5,
                        text: "Да это ж мечта! Теперь никакие их штучки-шпионские не проходят.",
                        location: "Москва, Россия"
                    },
                    {
                        name: "Дмитрий Козлов",
                        avatar: "ДК",
                        rating: 5,
                        text: "Работает как танк, не то что их там Wi-Fi через попу.",
                        location: "Санкт-Петербург, Россия"
                    },
                    {
                        name: "Екатерина Смирнова",
                        avatar: "ЕС",
                        rating: 5,
                        text: "Вся семья в безопасности. Даже кот через VPN сидит теперь!",
                        location: "Казань, Россия"
                    }
                ]
            },
            cta: {
                title: "Ну что, Защитишь Свой Интернет?",
                subtitle: "Пора перестать быть наивным, как эти за границей. Думай головой!",
                button: "Пробуй, Пока Не Поздно",
                link: "Показать Все Фишки →"
            },
            footer: {
                description: "Всё серьёзно. Без шуток. Надёжно как дедовская шинель.",
                product: "Чего Умеет",
                support: "Если Чего — Пиши",
                company: "Кто За Этим Стоит (не ЦРУ!)",
                copyright: "© 2025 goidaNet. Все права защищены, как Крым.",
                links: {
                    features: "Что Умеет",
                    pricing: "Сколько Стоит",
                    download: "Скачать (не вирус!)",
                    helpCenter: "Центр Помощи (ответим, не бойся)",
                    contact: "Связаться (живые люди отвечают)",
                    status: "Работает/Не Работает",
                    about: "О нас",
                    privacy: "Приватность — наше всё",
                    terms: "Правила (не как у них)"
                }
            },
            languageModal: {
                title: "Язык Должен Быть Родной!",
                subtitle: "Выбери язык, но помни, русский — для умных."
            },
            loading: {
                text: "Держитесь, шифруем по полной программе..."
            }
        }
    }

    const t = translations[language]

    // Функция конвертации цен в стопки водки для русской локализации
    const formatPrice = (price, lang) => {
        if (lang === 'ru') {
            if (price === 0) return 'Даром'
            const vodkaShots = Math.round(price * 2) // примерно 1 доллар = 2 стопки
            return `${vodkaShots} стопок`
        }
        return `$${price}`
    }

    // Функция смены языка
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
        // Note: localStorage is not available in Claude.ai artifacts
        // localStorage.setItem('securenet-language', newLanguage)
        setShowLanguageModal(false)
        // Сбрасываем активный отзыв при смене языка
        setActiveTestimonial(0)
    }

    // Автопрокрутка отзывов
    useEffect(() => {
        if (showContent && t.testimonials.items.length > 0) {
            const interval = setInterval(() => {
                setActiveTestimonial((prev) => (prev + 1) % t.testimonials.items.length)
            }, 4000)
            return () => clearInterval(interval)
        }
    }, [showContent, language, t.testimonials.items.length])

    // Loading screen
    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 transition-opacity duration-1000">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-8">
                        <Shield className="w-16 h-16 text-indigo-500 animate-pulse" />
                        <div className="absolute inset-0 border-2 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>

                    <div className="text-white text-2xl font-bold mb-4 animate-pulse">SecureNet</div>
                    <div className="text-indigo-400 text-sm mb-6">{t.loading.text}</div>

                    <div className="w-48 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full loading-bar"></div>
                    </div>
                </div>

                <style jsx>{`
                    .loading-bar {
                        animation: loading 2.5s ease-in-out forwards;
                    }

                    @keyframes loading {
                        0% { width: 1%; }
                        70% { width: 85%; }
                        100% { width: 100%; }
                    }
                `}</style>
            </div>
        )
    }

    return (
        <div className="min-h-screen relative">
            {/* Фиксированный анимированный фон */}
            <div className="fixed inset-0 bg-slate-900">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full opacity-15 blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full opacity-10 blur-3xl animate-ping" style={{animationDuration: '4s'}}></div>
                <div className="absolute top-1/4 left-1/2 w-60 h-60 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDuration: '2s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-bounce" style={{animationDuration: '5s'}}></div>
            </div>

            {/* Дополнительные медленно вращающиеся элементы */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute animate-spin top-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-2xl" style={{animationDuration: '20s'}}></div>
                <div className="absolute animate-spin bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 blur-2xl" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            </div>

            {/* Fade-in overlay */}
            <div className={`fixed inset-0 bg-slate-900 z-40 transition-opacity duration-1000 ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}></div>

            {/* Language Modal */}
            {showLanguageModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                        <div className="text-center mb-8">
                            <Languages className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-white text-2xl font-bold mb-2">{translations.en.languageModal.title}</h3>
                            <p className="text-slate-400">{translations.en.languageModal.subtitle}</p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => changeLanguage('en')}
                                className="w-full flex items-center gap-4 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-indigo-500/50"
                            >
                                <div className="text-2xl">🇺🇸</div>
                                <div className="text-left">
                                    <div className="text-white font-semibold">English</div>
                                    <div className="text-slate-400 text-sm">English</div>
                                </div>
                            </button>

                            <button
                                onClick={() => changeLanguage('ru')}
                                className="w-full flex items-center gap-4 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-indigo-500/50"
                            >
                                <div className="text-2xl">🇷🇺</div>
                                <div className="text-left">
                                    <div className="text-white font-semibold">Русский</div>
                                    <div className="text-slate-400 text-sm">Russian</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating navbar */}
            <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                <nav className="bg-slate-800/80 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-slate-700/50">
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-indigo-500" />
                            <span className="text-white font-bold text-lg">SecureNet</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t.nav.features}</a>
                            <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t.nav.pricing}</a>
                            <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t.nav.about}</a>
                            <button
                                onClick={() => setShowLanguageModal(true)}
                                className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700/50"
                                title="Change Language"
                            >
                                <Languages className="w-4 h-4" />
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                {t.nav.getStarted}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Контент с относительным позиционированием */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-8 text-center">
                    <div className={`transition-all duration-1000 delay-200 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-white text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            {t.hero.title}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{t.hero.titleSpan}</span>
                        </h1>
                        <p className="text-slate-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 font-semibold">
                                {t.hero.startTrial}
                            </button>
                            <button className="bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 border border-slate-600 backdrop-blur-sm font-semibold">
                                {t.hero.viewPricing}
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {t.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{transitionDelay: showContent ? `${600 + index * 100}ms` : '0ms'}}
                                >
                                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h2 className="text-4xl font-bold text-white mb-4">{t.features.title}</h2>
                            <p className="text-slate-400 text-lg">{t.features.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {t.features.items.map((feature, index) => {
                                const icons = [Shield, Globe, Zap, Eye, MapPin, Users]
                                const IconComponent = icons[index]
                                return (
                                    <div
                                        key={index}
                                        className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                        style={{transitionDelay: showContent ? `${800 + index * 100}ms` : '0ms'}}
                                    >
                                        <IconComponent className="w-12 h-12 text-indigo-400 mb-4" />
                                        <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-16 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h2 className="text-4xl font-bold text-white mb-4">{t.pricing.title}</h2>
                            <p className="text-slate-400 text-lg">{t.pricing.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {t.pricing.plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                                        plan.popular
                                            ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                                            : 'border-slate-700/50 hover:border-slate-600'
                                    } ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{transitionDelay: showContent ? `${1000 + index * 100}ms` : '0ms'}}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                {plan.popular}
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-white">
                                                {formatPrice(plan.price, language)}
                                            </span>
                                            <span className="text-slate-400">
                                                /{language === 'ru' ? 'в месяц' : plan.period}
                                                {language === 'ru' && plan.price > 0 && (
                                                    <span className="block text-xs mt-1 text-slate-500">
                                                        (или ${plan.price} для буржуев)
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-slate-300">
                                                <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                        {plan.limitations?.map((limitation, limitIndex) => (
                                            <li key={limitIndex} className="flex items-center text-slate-500">
                                                <div className="w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
                                                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                                                </div>
                                                {limitation}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                                        plan.popular
                                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                            : 'bg-slate-700 hover:bg-slate-600 text-white'
                                    }`}>
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h2 className="text-4xl font-bold text-white mb-4">{t.testimonials.title}</h2>
                            <p className="text-slate-400 text-lg">{t.testimonials.subtitle}</p>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                                <div className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(t.testimonials.items[activeTestimonial]?.rating || 5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                                        ))}
                                    </div>
                                    <blockquote className="text-white text-xl mb-6 italic">
                                        &ldquo;{t.testimonials.items[activeTestimonial]?.text || ''}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                                            {t.testimonials.items[activeTestimonial]?.avatar || '?'}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-semibold">{t.testimonials.items[activeTestimonial]?.name || ''}</div>
                                            <div className="text-slate-400 text-sm">{t.testimonials.items[activeTestimonial]?.location || ''}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-6 gap-2">
                                {t.testimonials.items.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === activeTestimonial ? 'bg-indigo-500' : 'bg-slate-600'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className={`bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-500/30 transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h2 className="text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
                            <p className="text-slate-300 text-lg mb-8">{t.cta.subtitle}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 font-semibold">
                                    {t.cta.button}
                                </button>
                                <button className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">
                                    {t.cta.link}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-8 border-t border-slate-800">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Shield className="w-6 h-6 text-indigo-500" />
                                    <span className="text-white font-bold text-lg">GoidaNet</span>
                                </div>
                                <p className="text-slate-400 text-sm">
                                    {t.footer.description}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.features}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.pricing}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.download}</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.helpCenter}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.contact}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.status}</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.about}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
                            {t.footer.copyright}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}