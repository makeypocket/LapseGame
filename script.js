// Константы
const POLLINATIONS_API_URL = "https://gen.pollinations.ai/v1/chat/completions";
const CARDS_BATCH_SIZE = 4;
const CARDS_PRELOAD_THRESHOLD = 2;
const PERK_OFFER_INTERVAL = 10;

const MODELS = {
    "gemini-fast": "Google Gemini 2.5 Flash Lite (Очень быстрый)",
    "openai-fast": "OpenAI GPT-5 Nano (Долгий и умный)",
    "grok": "xAI Grok 4 Fast (Быстрый и умный)",
    "qwen-coder": "Qwen3 Coder 30B (Средний и умный)"
};

// Переводы
const TRANSLATIONS = {
    en: {
        gameTitle: "LAPSE GAME 2075",
        gameSubtitle: "Test yourself as a president in a crazy world!",
        apiKeyLabel: "Pollinations.ai API Key",
        apiKeyPlaceholder: "Enter your API key",
        apiKeySmall: "Get key at pollinations.ai",
        modelLabel: "AI Model",
        tempLabel: "Temperature (0.0 - 2.0)",
        maxTokensLabel: "Max tokens (empty for auto)",
        maxTokensSmall: "Leave empty to let API decide",
        startBtn: "Start Game",
        readyBtn: "Ready! Click to start",
        newGameBtn: "New Game",
        stats: {
            environment: "Environment",
            population: "People",
            military: "Military",
            economy: "Economy"
        },
        year: "Year:",
        abilitiesTitle: "Your abilities:",
        restartBtn: "Restart, sweetie",
        loadingText: "AI is cooking a new story...",
        retryBtn: "Continue Game",
        gameOverTitle: "Game Over!",
        gameOverSequence: "Ending sequence...",
        startCardText: "Hey president, you awake? The country is in ruins after the global cringe, time to get to work. Our budget is three pennies. Where do we blow it?",
        startChoices: [
            { text: "Lift economy from knees", perkName: "Economic Boost" },
            { text: "Build more tanks", perkName: "Military Reserve" }
        ],
        languageLabel: "Language / Язык",
        models: {
            "gemini-fast": "Google Gemini 2.5 Flash Lite (Very fast)",
            "openai-fast": "OpenAI GPT-5 Nano (Long and smart)",
            "grok": "xAI Grok 4 Fast (Fast and smart)",
            "qwen-coder": "Qwen3 Coder 30B (Medium and smart)"
        },
        perks: {
            "economic_boost": "Saves economy at 0 or 100",
            "reserve_fund": "Saves economy at 0 or 100",
            "military_reserve": "Saves military at 0 or 100",
            "environmental_protection": "Saves environment at 0 or 100",
            "population_support": "Saves people at 0 or 100",
            "fallback": "Passive protection"
        },
        newPerk: "Ooh, new ability: {ability}!",
        errors: {
            apiKey: "API key not set!",
            aiInsane: "AI went insane and gave invalid JSON.",
            aiSchizo: "AI Schizophrenia detected",
            network: "Connection lost",
            storyVoid: "Storyline dissolved into the void...",
            endingFail: "Ending generation failed",
            emptyResponse: "Empty response from API.",
            truncatedResponse: "Response truncated due to token limit. Increase max_tokens.",
            rateLimit: "Rate limit exceeded. Retrying in {seconds}s...",
            unauthorized: "Invalid API key. Check your settings.",
            networkError: "Network error. Check your connection."
        },
        saveMessage: "Ability '{ability}' saved the run for {stat}!",
        gameOverMessages: {
            low: "Parameter '{stat}' hit rock bottom! You lost.",
            high: "Parameter '{stat}' flew to space! That's also a loss, genius."
        },
        characters: {
            advisor: "Chief of Dishes",
            scientist: "Bebra Sniffer",
            general: "Recruiter",
            financier: "Mammoth Scammer",
            people: "Voice of Streets",
            rebel: "Anarcho-Primitivist",
            unknown: "Anonymous",
            minister: "Boring Official",
            diplomat: "Internationalist",
            journalist: "Corrupt Journalist",
            void: "Voice from Void"
        }
    },
    ru: {
        gameTitle: "LAPSE GAME 2075",
        gameSubtitle: "Испытай себя в роли президента в мире шизы!",
        apiKeyLabel: "API Ключ Pollinations.ai",
        apiKeyPlaceholder: "Введите ваш API ключ",
        apiKeySmall: "Получите ключ на pollinations.ai",
        modelLabel: "Модель ИИ",
        tempLabel: "Температура (0.0 - 2.0)",
        maxTokensLabel: "Максимум токенов (оставьте пустым для авто)",
        maxTokensSmall: "Оставьте пустым, чтобы API сам определял длину ответа",
        startBtn: "Начать игру",
        readyBtn: "Готово! Жми для старта",
        newGameBtn: "Новая игра",
        stats: {
            environment: "Экология",
            population: "Народ",
            military: "Армия",
            economy: "Экономика"
        },
        year: "Год:",
        abilitiesTitle: "Твои абилки:",
        restartBtn: "Рестарт, пупсик",
        loadingText: "ИИ шизует новый сюжет...",
        retryBtn: "Продолжить игру",
        gameOverTitle: "Игра окончена!",
        gameOverSequence: "Финальная последовательность...",
        startCardText: "Слыш, президент, очухался? Страна в руинах после глобального кринжа, пора делом заняться. Наш бюджет - три копейки. Куда сливаем?",
        startChoices: [
            { text: "Поднять экономику с колен", perkName: "Эконом. Импульс" },
            { text: "Построить больше танков", perkName: "Военный Резерв" }
        ],
        languageLabel: "Language / Язык",
        models: {
            "gemini-fast": "Google Gemini 2.5 Flash Lite (Очень быстрый)",
            "openai-fast": "OpenAI GPT-5 Nano (Долгий и умный)",
            "grok": "xAI Grok 4 Fast (Быстрый и умный)",
            "qwen-coder": "Qwen3 Coder 30B (Средний и умный)"
        },
        perks: {
            "economic_boost": "Спасает экономику при 0 или 100",
            "reserve_fund": "Спасает экономику при 0 или 100",
            "military_reserve": "Спасает армию при 0 или 100",
            "environmental_protection": "Спасает экологию при 0 или 100",
            "population_support": "Спасает народ при 0 или 100",
            "fallback": "Пассивная защита"
        },
        newPerk: "Опа, новая абилка: {ability}!",
        errors: {
            apiKey: "API ключ не установлен!",
            aiInsane: "ИИ сошел с ума и выдал невалидный JSON.",
            aiSchizo: "Обнаружена ИИ-шиза",
            network: "Связь потеряна",
            storyVoid: "Сюжет растворился в пустоте...",
            endingFail: "Генерация финала провалилась",
            emptyResponse: "Пустой ответ от API.",
            truncatedResponse: "Ответ обрезан из-за лимита токенов. Увеличьте max_tokens.",
            rateLimit: "Превышен лимит запросов. Повтор через {seconds} сек...",
            unauthorized: "Неверный API ключ. Проверьте правильность ключа.",
            networkError: "Ошибка сети. Проверьте подключение к интернету."
        },
        saveMessage: "Абилка '{ability}' затащила катку за {stat}!",
        gameOverMessages: {
            low: "Параметр '{stat}' пробил дно! Ты проиграл.",
            high: "Параметр '{stat}' улетел в космос! Это тоже проигрыш, гений."
        },
        characters: {
            advisor: "Главный по тарелочкам",
            scientist: "Нюхач Бебры",
            general: "Военком",
            financier: "Скаммер Мамонтов",
            people: "Голос Улиц",
            rebel: "Анархо-Примитивист",
            unknown: "Анонимус",
            minister: "Скучный чиновник",
            diplomat: "Международник",
            journalist: "Продажный журналист",
            void: "Голос из Пустоты"
        }
    }
};

const CHAR_ICONS = {
    advisor: "💰",
    scientist: "🌿",
    general: "🛡️",
    financier: "💰",
    people: "👥",
    rebel: "🛡️",
    unknown: "👤",
    minister: "👥",
    diplomat: "👥",
    journalist: "👥",
    void: "👻"
};

// Класс для работы с API
class PollinationsAPI {
    constructor(apiKey, lang = "ru") {
        this.apiKey = apiKey;
        this.lang = lang;
    }

    async generateCards(systemPrompt, userPrompt, model, temperature, maxTokens) {
        const payload = {
            messages: [
                {
                    content: systemPrompt,
                    role: "system"
                },
                {
                    content: userPrompt,
                    role: "user"
                }
            ],
            model: model,
            temperature: parseFloat(temperature) || 0.85,
            stream: false,
            response_format: {
                type: "json_object"
            }
        };
        
        if (maxTokens && parseInt(maxTokens) > 0) {
            payload.max_tokens = parseInt(maxTokens);
        }

        try {
            const response = await fetch(POLLINATIONS_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    const text = await response.text();
                    throw new Error(`HTTP ${response.status}: ${text.substring(0, 200)}`);
                }
                
                const errorMessage = errorData.error?.message || errorData.message || `HTTP ${response.status}`;
                console.error('API Error Details:', errorData);
                
                if (response.status === 429 && errorData.retryAfterSeconds) {
                    const error = new Error(errorMessage);
                    error.retryAfter = errorData.retryAfterSeconds;
                    error.errorData = errorData;
                    throw error;
                }
                
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log('API Response data:', data);
            
            let content = null;
            
            if (data.choices && data.choices[0]) {
                content = data.choices[0].message?.content || data.choices[0].text;
                
                const finishReason = data.choices[0].finish_reason;
                if (finishReason === 'length') {
                    console.warn('Response was truncated due to token limit. Consider increasing max_tokens.');
                    if (!content || content.trim() === '') {
                        console.warn('Content is empty after truncation. This usually means max_tokens is too low.');
                    }
                }
            }
            
            if (!content && data.content) {
                content = data.content;
            }
            
            if (!content && typeof data === 'string') {
                content = data;
            }
            
            if (!content && data.text) {
                content = data.text;
            }
            
            console.log('Extracted content length:', content ? content.length : 0);
            
            if (!content || content.trim() === '') {
                const usage = data.usage || {};
                const finishReason = data.choices?.[0]?.finish_reason;
                const isRu = this.lang === 'ru';
                let errorMsg = isRu ? TRANSLATIONS.ru.errors.emptyResponse : TRANSLATIONS.en.errors.emptyResponse;
                
                if (finishReason === 'length') {
                    errorMsg = isRu
                        ? `Ответ обрезан из-за лимита токенов (использовано: ${usage.completion_tokens || '?'}/${usage.total_tokens || '?'}). Попробуйте увеличить max_tokens.`
                        : `Response truncated due to token limit (used: ${usage.completion_tokens || '?'}/${usage.total_tokens || '?'}). Try increasing max_tokens.`;
                } else if (finishReason) {
                    errorMsg += ` Finish reason: ${finishReason}`;
                }
                
                console.error('No content found in response:', JSON.stringify(data, null, 2));
                throw new Error(errorMsg);
            }

            return { success: true, text: content };
        } catch (error) {
            console.error("API Error:", error);
            let errorMessage = error.message;
            let retryAfter = null;
            
            const isRu = this.lang === 'ru';
            const errors = isRu ? TRANSLATIONS.ru.errors : TRANSLATIONS.en.errors;
            if (error.retryAfter) {
                retryAfter = error.retryAfter;
                errorMessage = errors.rateLimit.replace('{seconds}', Math.ceil(retryAfter));
            } else if (errorMessage.includes('401') || errorMessage.includes('Unauthorized')) {
                errorMessage = errors.unauthorized;
            } else if (errorMessage.includes('429') || errorMessage.includes('Rate limit')) {
                retryAfter = 3;
                errorMessage = errors.rateLimit.replace('{seconds}', Math.ceil(retryAfter));
            } else if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
                errorMessage = errors.networkError;
            }
            
            return { success: false, error: errorMessage, retryAfter: retryAfter };
        }
    }
}

// Класс игры
class LapseGame {
    constructor() {
        this.storyData = { cards: {} };
        this.currentCardId = null;
        this.stats = { environment: 50, population: 50, military: 50, economy: 50 };
        this.isGameOver = false;
        this.gameState = "STOPPED";
        this.year = 2075;
        this.message = "";
        this.aiContext = [];
        this.cardQueue = [];
        this.activePerks = {};
        this.choicesMade = 0;
        this.choicesSinceLastPerkOffer = 0;
        this.apiHandler = null;
        this.lang = "ru";
    }

    t(key) {
        return TRANSLATIONS[this.lang][key] || key;
    }

    startGame(apiKey, lang = "ru") {
        this.lang = lang;
        this.apiHandler = new PollinationsAPI(apiKey, lang);
        this.stats = { environment: 50, population: 50, military: 50, economy: 50 };
        this.isGameOver = false;
        this.gameState = "RUNNING";
        this.year = 2075;
        this.message = "";
        this.aiContext = [];
        this.cardQueue = [];
        this.activePerks = {};
        this.choicesMade = 0;
        this.choicesSinceLastPerkOffer = 0;

        const startCardId = "start";
        const t = k => TRANSLATIONS[this.lang][k];
        this.storyData.cards[startCardId] = {
            character: "advisor",
            text: t('startCardText'),
            choices: [
                {
                    text: t('startChoices')[0].text,
                    effects: { economy: 15, population: -5 },
                    add_perk: { id: "economic_boost", name: t('startChoices')[0].perkName }
                },
                {
                    text: t('startChoices')[1].text,
                    effects: { military: 15, environment: -5 },
                    add_perk: { id: "military_reserve", name: t('startChoices')[1].perkName }
                }
            ]
        };
        this.currentCardId = startCardId;
        return this.getCurrentCard();
    }

    getCurrentCard() {
        if (!this.currentCardId || this.isGameOver) return null;
        return this.storyData.cards[this.currentCardId];
    }

    getCharacter(card) {
        const charId = card?.character;
        const icon = CHAR_ICONS[charId] || CHAR_ICONS['unknown'];
        const name = TRANSLATIONS[this.lang].characters[charId] || charId || TRANSLATIONS[this.lang].characters['unknown'];
        return { name, icon };
    }

    makeChoice(choiceIndex) {
        const card = this.getCurrentCard();
        if (!card || !card.choices || choiceIndex >= card.choices.length) {
            return null;
        }

        const choice = card.choices[choiceIndex];
        const cardText = card.text || "(No card text)";
        const choiceText = choice.text || "(No choice text)";

        if (choice.is_final) {
            this.isGameOver = true;
            this.gameState = "STOPPED";
            return choice;
        }

        const effects = choice.effects || {};
        const historyEntry = `Situation: '${cardText}'. Choice: '${choiceText}'.`;
        this.aiContext.push(historyEntry);
        if (this.aiContext.length > 6) this.aiContext.shift();

        const perkToAdd = choice.add_perk;
        if (perkToAdd && perkToAdd.id && !this.activePerks[perkToAdd.id]) {
            this.activePerks[perkToAdd.id] = {
                name: perkToAdd.name || "Passive",
                uses: 3,
                type: perkToAdd.type || "protection"
            };
            this.choicesSinceLastPerkOffer = 0;
        }

        for (const [stat, value] of Object.entries(effects)) {
            if (this.stats[stat] !== undefined) {
                this.stats[stat] = Math.max(0, Math.min(100, this.stats[stat] + value));
            }
        }

        this.year += Math.floor(Math.random() * 3) + 1;
        this.choicesMade++;
        this.choicesSinceLastPerkOffer++;

        // Проверка на проигрыш
        for (const [stat, value] of Object.entries(this.stats)) {
            if (value <= 0 || value >= 100) {
                let saved = false;
                for (const [perkId, perkData] of Object.entries(this.activePerks)) {
                    if (this.canPerkSave(perkId, stat) && perkData.uses > 0) {
                        this.stats[stat] = (value <= 0) ? 25 : 75;
                        perkData.uses--;
                        if (perkData.uses <= 0) {
                            delete this.activePerks[perkId];
                        }
                        const statName = TRANSLATIONS[this.lang].stats[stat] || stat;
                        this.message = TRANSLATIONS[this.lang].saveMessage.replace('{ability}', perkData.name).replace('{stat}', statName);
                        saved = true;
                        break;
                    }
                }

                if (!saved) {
                    this.isGameOver = true;
                    this.gameState = "STOPPED";
                    const statName = TRANSLATIONS[this.lang].stats[stat] || stat;
                    const msgKey = (value <= 0) ? 'low' : 'high';
                    this.message = TRANSLATIONS[this.lang].gameOverMessages[msgKey].replace('{stat}', statName);
                    break;
                }
            }
        }

        return choice;
    }

    canPerkSave(perkId, stat) {
        const saveMap = {
            "economic_boost": "economy",
            "military_reserve": "military",
            "reserve_fund": "economy",
            "environmental_protection": "environment",
            "population_support": "population"
        };
        return saveMap[perkId] === stat;
    }
}

// UI контроллер
class GameUI {
    constructor() {
        console.log('GameUI constructor called');
        try {
            this.game = new LapseGame();
            console.log('LapseGame created');
            this.currentSettings = {};
            this.isGenerating = false;
            this.isGeneratingAndWaiting = false;
            this.cardElement = null;
            this.touchStartX = 0;
            this.touchStartY = 0;
            this.currentRotation = 0;
            
            this.init();
            console.log('GameUI initialized');
        } catch (error) {
            console.error('Error in GameUI constructor:', error);
            throw error;
        }
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Кнопка начала игры
        const startBtn = document.getElementById('start-game-btn');
        if (!startBtn) {
            console.error('Start button not found!');
            alert('Ошибка: кнопка \"Начать игру\" не найдена на странице!');
            return;
        }
        
        const newStartBtn = startBtn.cloneNode(true);
        startBtn.parentNode.replaceChild(newStartBtn, startBtn);
        
        const handleStart = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Start button clicked');
            
            try {
                newStartBtn.style.opacity = '0.7';
                newStartBtn.disabled = true;
                const originalText = newStartBtn.textContent;
                newStartBtn.textContent = '...';
                
                setTimeout(() => {
                    try {
                        this.startGame();
                    } catch (error) {
                        console.error('Error in startGame:', error);
                        alert('Ошибка при запуске игры: ' + error.message);
                    } finally {
                        newStartBtn.style.opacity = '1';
                        newStartBtn.disabled = false;
                        newStartBtn.textContent = originalText;
                    }
                }, 50);
            } catch (error) {
                console.error('Error in button click handler:', error);
                alert('Ошибка: ' + error.message);
                newStartBtn.style.opacity = '1';
                newStartBtn.disabled = false;
            }
        };
        
        newStartBtn.addEventListener('click', handleStart);
        console.log('Start button event listener attached');
        
        const apiKeyInput = document.getElementById('api-key');
        if (apiKeyInput) {
            apiKeyInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleStart(e);
                }
            });
        }

        // Обработчик переключения языка
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            const saved = localStorage.getItem('lapsegamesettings');
            if (saved) {
                try {
                    const settings = JSON.parse(saved);
                    if (settings.language) {
                        languageSelect.value = settings.language;
                        this.updateLanguage(settings.language);
                    }
                } catch (e) {}
            }
            
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                this.updateLanguage(lang);
                
                this.currentSettings.language = lang;
                try {
                    localStorage.setItem('lapsegamesettings', JSON.stringify(this.currentSettings));
                } catch (e) {}
            });
        }

        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', () => {
                this.showSettings();
            });
        }

        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                this.startGame();
            });
        }

        const retryBtn = document.getElementById('retry-btn');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                this.showLoading(true);
                retryBtn.style.display = 'none';
                const loadingText = document.querySelector('#loading-indicator p');
                if (loadingText) loadingText.textContent = this.game.t('loadingText');
                
                if (this.game.gameState === "ENDING_STORY" || this.game.gameState === "GAME_OVER_SEQUENCE") {
                    this.generateEndingBatch();
                } else {
                    this.generateCardBatch();
                }
            });
        }
    }

    updateLanguage(lang) {
        const t = k => TRANSLATIONS[lang][k];
        
        document.title = t('gameTitle');

        // Обновляем экран настроек
        const languageLabel = document.querySelector('label[for="language-select"]');
        if (languageLabel) languageLabel.textContent = t('languageLabel');

        const gameTitle = document.querySelector('.game-title');
        if (gameTitle) gameTitle.textContent = t('gameTitle');
        
        const gameSubtitle = document.querySelector('.game-subtitle');
        if (gameSubtitle) gameSubtitle.textContent = t('gameSubtitle');
        
        const apiKeyLabel = document.querySelector('label[for="api-key"]');
        if (apiKeyLabel) apiKeyLabel.textContent = t('apiKeyLabel');
        
        const apiKeyInput = document.getElementById('api-key');
        if (apiKeyInput) apiKeyInput.placeholder = t('apiKeyPlaceholder');
        
        const apiKeySmall = apiKeyLabel?.nextElementSibling?.nextElementSibling;
        if (apiKeySmall && apiKeySmall.tagName === 'SMALL') {
            apiKeySmall.textContent = t('apiKeySmall');
        }
        
        const modelLabel = document.querySelector('label[for="model-select"]');
        if (modelLabel) modelLabel.textContent = t('modelLabel');
        
        const tempLabel = document.querySelector('label[for="temperature"]');
        if (tempLabel) tempLabel.textContent = t('tempLabel');
        
        const tokensLabel = document.querySelector('label[for="max-tokens"]');
        if (tokensLabel) tokensLabel.textContent = t('maxTokensLabel');
        
        const tokensSmall = tokensLabel?.nextElementSibling?.nextElementSibling;
        if (tokensSmall && tokensSmall.tagName === 'SMALL') {
            tokensSmall.textContent = t('maxTokensSmall');
        }
        
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) startBtn.textContent = t('startBtn');
        
        // Обновляем список моделей
        const modelSelect = document.getElementById('model-select');
        if (modelSelect) {
            const models = t('models');
            Array.from(modelSelect.options).forEach(option => {
                if (models[option.value]) {
                    option.textContent = models[option.value];
                }
            });
        }

        // Обновляем экран Game Over
        const gameOverTitle = document.querySelector('#game-over-screen h2');
        if (gameOverTitle) gameOverTitle.textContent = t('gameOverTitle');
        
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) newGameBtn.textContent = t('newGameBtn');
    }

    setupCardSwipe() {
        this.cardElement = document.getElementById('game-card');
        if (!this.cardElement) return;

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleStart = (e) => {
            if (this.game.isGameOver || this.isGeneratingAndWaiting) return;
            
            e.preventDefault();
            isDragging = true;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startX = clientX;
            startY = clientY;
            this.cardElement.classList.add('rotating');
        };

        const handleMove = (e) => {
            if (!isDragging || this.game.isGameOver || this.isGeneratingAndWaiting) return;

            e.preventDefault();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            currentX = clientX - startX;
            currentY = clientY - startY;

            const rotation = Math.max(-12, Math.min(12, currentX / 35));
            this.cardElement.style.transform = `rotate(${rotation}deg)`;

            const alpha = Math.min(1, Math.abs(currentX) / (this.cardElement.offsetWidth / 3));
            const leftChoice = document.getElementById('choice-left');
            const rightChoice = document.getElementById('choice-right');

            if (currentX > 0) {
                leftChoice.classList.add('show');
                leftChoice.style.opacity = alpha;
                rightChoice.classList.remove('show');
                this.showStatImpact(1);
            } else if (currentX < 0) {
                rightChoice.classList.add('show');
                rightChoice.style.opacity = alpha;
                leftChoice.classList.remove('show');
                this.showStatImpact(0);
            }
        };

        const handleEnd = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            isDragging = false;

            const threshold = this.cardElement.offsetWidth * 0.25;
            if (currentX > threshold) {
                this.commitChoice(1);
            } else if (currentX < -threshold) {
                this.commitChoice(0);
            } else {
                this.resetCardState();
            }
        };

        this.cardElement.addEventListener('mousedown', handleStart);
        this.cardElement.addEventListener('touchstart', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchend', handleEnd);
    }

    showStatImpact(choiceIndex) {
        const card = this.game.getCurrentCard();
        if (!card || !card.choices || choiceIndex >= card.choices.length) return;

        const effects = card.choices[choiceIndex].effects || {};
        const statItems = document.querySelectorAll('.stat-item');

        statItems.forEach(item => {
            const statKey = item.dataset.stat;
            const impactView = item.querySelector('.stat-impact') || this.createStatImpact(item);
            const value = effects[statKey];

            if (value !== undefined && value !== 0) {
                impactView.textContent = value > 0 ? '▲' : '▼';
                impactView.className = `stat-impact ${value > 0 ? 'positive' : 'negative'}`;
                impactView.classList.add('show');
                setTimeout(() => impactView.classList.remove('show'), 500);
            } else {
                impactView.classList.remove('show');
            }
        });
    }

    createStatImpact(statItem) {
        const impact = document.createElement('div');
        impact.className = 'stat-impact';
        statItem.appendChild(impact);
        return impact;
    }

    resetCardState() {
        if (this.cardElement) {
            this.cardElement.style.transform = 'rotate(0deg)';
            this.cardElement.style.opacity = '1';
            this.cardElement.style.transform = 'scale(1) rotate(0deg)';
        }
        const leftChoice = document.getElementById('choice-left');
        const rightChoice = document.getElementById('choice-right');
        if (leftChoice) {
            leftChoice.classList.remove('show');
            leftChoice.style.opacity = '0';
        }
        if (rightChoice) {
            rightChoice.classList.remove('show');
            rightChoice.style.opacity = '0';
        }
        document.querySelectorAll('.stat-impact').forEach(el => el.classList.remove('show'));
    }

    commitChoice(choiceIndex) {
        if (this.game.isGameOver || this.isGeneratingAndWaiting) return;
        
        if (this.cardElement) {
            this.cardElement.style.opacity = '0.3';
            this.cardElement.style.transform = 'scale(0.9)';
        }

        this.isGeneratingAndWaiting = true;

        setTimeout(() => {
            this.handleChoice(choiceIndex);
        }, 200);
    }

    handleChoice(choiceIndex) {
        const oldStats = { ...this.game.stats };
        const choice = this.game.getCurrentCard()?.choices[choiceIndex];
        
        if (choice?.add_perk && !this.game.activePerks[choice.add_perk.id]) {
            setTimeout(() => {
                const msg = this.game.t('newPerk').replace('{ability}', choice.add_perk.name);
                this.showSuccess(msg);
            }, 100);
        }
        
        this.game.makeChoice(choiceIndex);
        
        if (this.game.message && this.game.message.includes(this.game.t('saveMessage').split('{')[0])) {
            setTimeout(() => {
                this.showSuccess(this.game.message);
            }, 200);
        }

        if (this.game.isGameOver) {
            this.updateUI();
        } else {
            this.animateStatsAndDrawNext(oldStats);
        }
    }

    animateStatsAndDrawNext(oldStats) {
        Object.keys(this.game.stats).forEach(statKey => {
            if (oldStats[statKey] !== this.game.stats[statKey]) {
                this.updateStatIcon(statKey, this.game.stats[statKey]);
            }
        });

        setTimeout(() => {
            this.isGeneratingAndWaiting = false;
            this.drawNextCard();
        }, 300);
    }

    drawNextCard() {
        this.isGeneratingAndWaiting = false;
        this.showLoading(false);

        if (this.game.gameState !== "RUNNING" && this.game.gameState !== "ENDING_STORY") {
            return;
        }

        if (!this.isGenerating && this.game.cardQueue.length <= CARDS_PRELOAD_THRESHOLD) {
            this.isGenerating = true;
            this.generateCardBatch();
        }

        if (this.game.cardQueue.length > 0) {
            this.game.currentCardId = this.game.cardQueue.shift();
            this.updateUI();
        } else {
            this.isGeneratingAndWaiting = true;
            this.showLoading(true);
            if (!this.isGenerating) {
                this.isGenerating = true;
                this.generateCardBatch();
            }
        }
    }

    async generateCardBatch() {
        const apiKey = this.currentSettings.apiKey;
        if (!apiKey) {
            this.showError(this.game.t('errors').apiKey);
            this.game.isGameOver = true;
            this.isGenerating = false;
            this.isGeneratingAndWaiting = false;
            this.updateUI();
            return;
        }

        const model = this.currentSettings.model || "openai";
        const temperature = parseFloat(this.currentSettings.temperature) || 0.85;
        const maxTokens = this.currentSettings.maxTokens && parseInt(this.currentSettings.maxTokens) > 0 
            ? parseInt(this.currentSettings.maxTokens) 
            : null;

        const systemPrompt = `YOU ARE MANDREAI_GAME_MASTER. You are a game master for the card game Lapse.
Your task is to create scenarios with consequences for parameters: environment, population, military, economy.
IMPORTANT: The 'text' field should contain ONLY a description of the situation. WITHOUT year, WITHOUT character name, WITHOUT choice options.
IMPORTANT: The 'choices' field must contain EXACTLY 2 choice options. Not 1, not 3, but exactly 2.
IMPORTANT: Text in 'choices' must be BRIEF (up to 5-7 words).
CRITICALLY IMPORTANT: Each choice MUST have an 'effects' object. Values from -30 to +30.
One of the choices sometimes gives 'add_perk' in format {"id": "perk_id", "name": "Name"}.
Available perks: economic_boost, military_reserve, environmental_protection, population_support, reserve_fund.`;

        const characterList = Object.keys(TRANSLATIONS[this.game.lang].characters).join(", ");
        const languageRequest = this.game.lang === 'ru'
            ? "IMPORTANT: WRITE ALL TEXT IN RUSSIAN LANGUAGE."
            : "IMPORTANT: WRITE ALL TEXT IN ENGLISH LANGUAGE.";

        let userPrompt = `${languageRequest}
Context: ${JSON.stringify(this.game.stats)}, Year: ${this.game.year} (each choice adds 1-3 years). History: ${this.game.aiContext.slice(-3).join(' ')}

Active abilities: ${Object.keys(this.game.activePerks).join(', ')}

Available characters: ${characterList}

Format: {"cards": [{"character": "ID", "text": "Text", "choices": [{"text": "Choice1", "effects": {"stat1": value}}, {"text": "Choice2", "effects": {"stat2": value}}]}]}

Generate exactly ${CARDS_BATCH_SIZE} cards. KEEP TEXT CONCISE to avoid response truncation.
Answer ONLY with valid JSON object, without \`\`\`json, comments or any other text.`;

        if (this.game.choicesSinceLastPerkOffer >= PERK_OFFER_INTERVAL) {
            userPrompt += "\nIMPORTANT: Include in this set at least one card where one of the choices gives a new ability 'add_perk'.";
            this.game.choicesSinceLastPerkOffer = 0;
        }

        const result = await this.game.apiHandler.generateCards(
            systemPrompt,
            userPrompt,
            model,
            temperature,
            maxTokens
        );

        if (!result.success) {
            if (result.retryAfter) {
                console.log(`Rate limit, waiting ${result.retryAfter} seconds before retry...`);
                this.showLoading(true);
                const loadingText = document.querySelector('#loading-indicator p');
                if (loadingText) {
                    loadingText.textContent = this.game.t('errors').rateLimit.replace('{seconds}', Math.ceil(result.retryAfter));
                }
                
                await new Promise(resolve => setTimeout(resolve, result.retryAfter * 1000 + 500));
                
                console.log('Retrying API request...');
                if (loadingText) {
                    loadingText.textContent = this.game.t('loadingText');
                }
                return this.generateCardBatch();
            }
            
            const loadingText = document.querySelector('#loading-indicator p');
            const retryBtn = document.getElementById('retry-btn');
            const spinner = document.querySelector('#loading-indicator .spinner');
            
            if (loadingText) {
                const isRu = this.game.lang === 'ru';
                const errorPrefix = isRu ? 'Ошибка: ' : 'Error: ';
                const fallback = isRu ? 'Связь потеряна' : 'Connection lost';
                loadingText.textContent = `${errorPrefix}${result.error || fallback}`;
            }
            if (retryBtn) retryBtn.style.display = 'block';
            if (spinner) spinner.style.display = 'none';
            
            this.isGenerating = false;
            this.isGeneratingAndWaiting = true;
            return;
        }

        let cleanedResponse = result.text.trim();
        cleanedResponse = cleanedResponse.replace(/```json/g, '').replace(/```/g, '').trim();
        
        try {
            // Fix common AI JSON errors: + sign before numbers
            cleanedResponse = cleanedResponse.replace(/:\s*\+(\d+)/g, ': $1');
            
            let newCardBatch;
            let parsed = null;
            try {
                parsed = JSON.parse(cleanedResponse);
                newCardBatch = parsed.cards;
                if (!Array.isArray(newCardBatch)) throw new Error("Not an array");
            } catch (initialError) {
                console.warn('Strict JSON parse failed, attempting fallback extraction...');
                if (parsed) console.log('Parsed partially:', parsed);
                
                const objects = [];
                let balance = 0;
                let start = -1;
                
                for (let i = 0; i < cleanedResponse.length; i++) {
                    if (cleanedResponse[i] === '{') {
                        if (balance === 0) start = i;
                        balance++;
                    } else if (cleanedResponse[i] === '}') {
                        balance--;
                        if (balance === 0 && start !== -1) {
                            const objStr = cleanedResponse.substring(start, i + 1);
                            try {
                                const obj = JSON.parse(objStr);
                                if (obj.cards && Array.isArray(obj.cards)) {
                                    objects.push(...obj.cards);
                                } else {
                                    objects.push(obj);
                                }
                            } catch (e) {}
                        }
                    }
                }
                
                if (objects.length > 0) {
                    newCardBatch = objects;
                } else {
                    throw initialError;
                }
            }

            let validCardsAdded = 0;

            for (let i = 0; i < newCardBatch.length; i++) {
                const cardData = newCardBatch[i];
                if (!this.validateCardData(cardData)) {
                    console.warn(`Invalid card data at index ${i}:`, cardData);
                    continue;
                }

                const newCardId = `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                this.game.storyData.cards[newCardId] = cardData;
                this.game.cardQueue.push(newCardId);
                validCardsAdded++;
            }

            console.log(`Generated and validated ${validCardsAdded}/${newCardBatch.length} cards. Queue size: ${this.game.cardQueue.length}`);
            this.isGenerating = false;
            this.showLoading(false);

            if (this.isGeneratingAndWaiting) {
                this.isGeneratingAndWaiting = false;
                this.drawNextCard();
            }
        } catch (error) {
            console.error("JSON Parse Error:", error, "Response:", cleanedResponse.substring(0, 200));
            console.warn("JSON error, trying to salvage partial data...");
            if (this.game.cardQueue.length > 0 || (this.game.currentCardId && this.game.storyData.cards[this.game.currentCardId])) {
                console.log("Continuing with existing data.");
                this.isGenerating = false;
                if (this.isGeneratingAndWaiting) {
                    this.isGeneratingAndWaiting = false;
                    this.showLoading(false);
                    this.drawNextCard();
                } else {
                    this.showLoading(false);
                }
                return;
            }
            
            this.game.isGameOver = true;
            this.game.message = this.game.t('errors').aiInsane;
            this.isGenerating = false;
            this.isGeneratingAndWaiting = false;
            this.showLoading(false);
            this.updateUI();
        }
    }

    validateCardData(cardData) {
        if (!cardData || typeof cardData !== 'object') return false;
        if (!cardData.character || !cardData.text || !cardData.choices) return false;
        if (!Array.isArray(cardData.choices) || cardData.choices.length < 2) return false;
        
        for (let i = 0; i < Math.min(cardData.choices.length, 2); i++) {
            const choice = cardData.choices[i];
            if (!choice.text) return false;
            if (!choice.effects || typeof choice.effects !== 'object' || Object.keys(choice.effects).length === 0) {
                console.warn("Invalid card: choice has no/empty effects:", choice);
                return false;
            }
            if (choice.add_perk) {
                const perk = choice.add_perk;
                if (!perk.id || !perk.name) {
                    console.warn("Invalid card: malformed perk:", perk);
                    return false;
                }
            }
        }
        return true;
    }

    async generateEndingBatch() {
        const apiKey = this.currentSettings.apiKey;
        if (!apiKey) {
            this.game.isGameOver = true;
            this.updateUI();
            return;
        }

        const model = this.currentSettings.model || "openai";
        const temperature = parseFloat(this.currentSettings.temperature) || 0.85;
        const maxTokens = parseInt(this.currentSettings.maxTokens) || 1500;

        const systemPrompt = `You are a game master describing the finale of the Lapse game. Make the finale as epic or absurd as possible.
IMPORTANT: The 'text' field should contain ONLY the story text. DON'T write choice options inside the text.
IMPORTANT: Text in 'choices' must be BRIEF (up to 5-8 words).
The last choice in the last card must have "is_final": true.`;

        const languageRequest = this.game.lang === 'ru'
            ? "IMPORTANT: WRITE ALL TEXT IN RUSSIAN LANGUAGE."
            : "IMPORTANT: WRITE ALL TEXT IN ENGLISH LANGUAGE.";

        const userPrompt = `${languageRequest}
Reason for ending: ${this.game.message}.
Current stats: ${JSON.stringify(this.game.stats)}. 
Create 2-3 final cards with a dramatic conclusion. 
Format: {"cards": [...]}. Answer ONLY with JSON object.`;

        const result = await this.game.apiHandler.generateCards(
            systemPrompt,
            userPrompt,
            model,
            temperature,
            maxTokens
        );

        if (!result.success) {
            console.error('Ending batch generation failed:', result.error);
            const loadingText = document.querySelector('#loading-indicator p');
            const retryBtn = document.getElementById('retry-btn');
            const spinner = document.querySelector('#loading-indicator .spinner');
            
            this.showLoading(true);
            if (loadingText) {
                const isRu = this.game.lang === 'ru';
                const fallback = isRu ? 'Связь потеряна' : 'Connection lost';
                loadingText.textContent = `${this.game.t('errors').endingFail}: ${result.error || fallback}`;
            }
            if (retryBtn) retryBtn.style.display = 'block';
            if (spinner) spinner.style.display = 'none';
            
            this.isGenerating = false;
            this.isGeneratingAndWaiting = true;
            return;
        }

        let cleanedResponse = result.text.trim();
        cleanedResponse = cleanedResponse.replace(/```json/g, '').replace(/```/g, '').trim();
        
        try {
            // Fix common AI JSON errors: + sign before numbers
            cleanedResponse = cleanedResponse.replace(/:\s*\+(\d+)/g, ': $1');

            let endingCards;
            let parsed = null;
            try {
                parsed = JSON.parse(cleanedResponse);
                endingCards = parsed.cards;
                if (!Array.isArray(endingCards)) throw new Error("Field 'cards' not found or not an array");
            } catch (initialError) {
                console.warn('Ending JSON fallback extraction...');
                const objects = [];
                let balance = 0;
                let start = -1;
                for (let i = 0; i < cleanedResponse.length; i++) {
                    if (cleanedResponse[i] === '{') {
                        if (balance === 0) start = i;
                        balance++;
                    } else if (cleanedResponse[i] === '}') {
                        balance--;
                        if (balance === 0 && start !== -1) {
                            try {
                                const obj = JSON.parse(cleanedResponse.substring(start, i + 1));
                                if (obj.cards && Array.isArray(obj.cards)) {
                                    objects.push(...obj.cards);
                                } else {
                                    objects.push(obj);
                                }
                            } catch (e) {}
                        }
                    }
                }
                if (objects.length > 0) {
                    endingCards = objects;
                } else {
                    throw initialError;
                }
            }
            if (!Array.isArray(endingCards) || endingCards.length === 0) {
                throw new Error("Empty ending cards array");
            }
            
            this.game.cardQueue = [];
            
            for (const cardData of endingCards) {
                if (!cardData.choices || cardData.choices.length === 0) {
                    cardData.choices = [{ text: this.game.lang === 'ru' ? "Продолжить..." : "Continue..." }];
                }
                for (const choice of cardData.choices) {
                    if (!choice.effects) choice.effects = {};
                }
                const cardId = `ending_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                this.game.storyData.cards[cardId] = cardData;
                this.game.cardQueue.push(cardId);
            }

            this.game.gameState = "ENDING_STORY";
            this.drawNextCard();
        } catch (error) {
            this.game.isGameOver = true;
            this.updateUI();
        }
    }

    updateStatIcon(statKey, value) {
        const statItem = document.querySelector(`[data-stat="${statKey}"]`);
        if (!statItem) return;

        const statFill = statItem.querySelector('.stat-fill');
        const statValue = statItem.querySelector('.stat-value');
        const statLabel = statItem.querySelector('.stat-label');
        
        if (statFill) {
            statFill.style.height = `${value}%`;
        }
        if (statValue) {
            statValue.textContent = value;
        }
        if (statLabel) {
            statLabel.textContent = this.game.t('stats')[statKey] || statKey;
        }
    }

    updateUI() {
        console.log('updateUI called, isGameOver:', this.game.isGameOver);
        const t = k => TRANSLATIONS[this.game.lang][k];
        
        this.showLoading(false);
        
        const restartBtn = document.getElementById('restart-btn');
        const gameCard = document.getElementById('game-card');
        
        if (this.game.isGameOver) {
            this.isGeneratingAndWaiting = false; // Reset lock
            if (restartBtn) {
                restartBtn.style.display = 'block';
                restartBtn.textContent = t('restartBtn');
            }
            if (gameCard) gameCard.style.display = 'none';
            this.showGameOver();
        } else {
            if (restartBtn) restartBtn.style.display = 'none';
            if (gameCard && this.game.getCurrentCard()) {
                gameCard.style.display = 'block';
                gameCard.style.opacity = '1';
            } else if (gameCard) {
                gameCard.style.display = 'none';
                gameCard.style.opacity = '0';
            }
            
            const card = this.game.getCurrentCard();
            const character = this.game.getCharacter(card);
            console.log('Card:', card, 'Character:', character);
            
            if (card) {
                this.setCardData(card, character);
            } else {
                console.error('Card is null!');
                if (!this.game.isGameOver && !this.isGenerating) {
                    this.game.isGameOver = true;
                    this.game.message = t('errors').storyVoid;
                    this.updateUI();
                }
            }
        }

        Object.entries(this.game.stats).forEach(([stat, value]) => {
            this.updateStatIcon(stat, value);
            
            const item = document.querySelector(`[data-stat="${stat}"]`);
            if (item) {
                const label = item.querySelector('.stat-label');
                if (label) {
                    label.textContent = t('stats')[stat];
                }
            }
        });

        const yearValue = document.getElementById('year-value');
        if (yearValue) {
            yearValue.textContent = this.game.year;
        }
        
        const yearSpan = document.querySelector('.year-display span');
        if (yearSpan && yearSpan.firstChild) {
            yearSpan.firstChild.textContent = t('year') + ' ';
        }
        
        const perksTitle = document.querySelector('.perks-title');
        if (perksTitle) {
            perksTitle.textContent = t('abilitiesTitle');
        }

        this.updatePerksBar();
    }

    setCardData(card, character) {
        if (!card || !character) {
            console.error('setCardData: card or character is null', card, character);
            return;
        }
        console.log('Setting card data:', card.text);
        
        const cardEl = document.getElementById('game-card');
        if (!cardEl) {
            console.error('Game card element not found!');
            return;
        }
        
        cardEl.style.display = 'block';
        cardEl.style.opacity = '0';
        cardEl.style.transform = 'scale(0.95)';
        cardEl.classList.add('fade-in');
        
        this.showLoading(false);
        
        setTimeout(() => {
            cardEl.style.opacity = '1';
            cardEl.style.transform = 'scale(1)';
        }, 50);
        
        this.resetCardState();

        const cardTextEl = document.getElementById('card-text');
        const charNameEl = document.getElementById('character-name');
        const charIconEl = document.getElementById('character-icon');
        
        if (cardTextEl) cardTextEl.textContent = card.text;
        if (charNameEl) charNameEl.textContent = character.name;
        if (charIconEl) charIconEl.textContent = character.icon;

        const choices = card.choices;
        const choiceRightText = document.getElementById('choice-right-text');
        const choiceLeftText = document.getElementById('choice-left-text');
        const btnRight = document.getElementById('choice-btn-right');
        const btnLeft = document.getElementById('choice-btn-left');

        if (choices.length > 0) {
            if (choiceRightText) choiceRightText.textContent = choices[0].text;
            if (btnRight) btnRight.textContent = choices[0].text;
        } else {
            if (choiceRightText) choiceRightText.textContent = '';
            if (btnRight) btnRight.textContent = '';
        }
        if (choices.length > 1) {
            if (choiceLeftText) choiceLeftText.textContent = choices[1].text;
            if (btnLeft) btnLeft.textContent = choices[1].text;
        } else {
            if (choiceLeftText) choiceLeftText.textContent = '';
            if (btnLeft) btnLeft.textContent = '';
        }

        if (btnLeft && btnRight) {
            const newBtnLeft = btnLeft.cloneNode(true);
            const newBtnRight = btnRight.cloneNode(true);
            btnLeft.parentNode.replaceChild(newBtnLeft, btnLeft);
            btnRight.parentNode.replaceChild(newBtnRight, btnRight);

            const finalBtnLeft = document.getElementById('choice-btn-left');
            const finalBtnRight = document.getElementById('choice-btn-right');

            finalBtnLeft.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.commitChoice(1);
            });

            finalBtnRight.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.commitChoice(0);
            });
        }
    }

    updatePerksBar() {
        const perksList = document.getElementById('perks-list');
        const perksBar = document.getElementById('perks-bar');
        const perksTitle = perksBar.querySelector('.perks-title');
        
        perksList.innerHTML = '';

        if (Object.keys(this.game.activePerks).length === 0) {
            perksTitle.style.display = 'none';
            return;
        }
        
        perksTitle.style.display = 'block';

        const perkDescriptions = TRANSLATIONS[this.game.lang].perks;

        for (const [perkId, perkData] of Object.entries(this.game.activePerks)) {
            const perkItem = document.createElement('div');
            perkItem.className = 'perk-item';
            
            const desc = perkDescriptions[perkId] || perkDescriptions['fallback'];
            
            perkItem.innerHTML = `
                <div style="font-weight: 700; color: #fff">${perkData.name}</div>
                <div style="font-size: 0.8em; color: var(--text-secondary); margin: 2px 0">${desc}</div>
                ${perkData.uses > 0 ? `<div class="perk-uses">${perkData.uses}</div>` : ''}
            `;
            perksList.appendChild(perkItem);
        }
    }

    showGameOver() {
        console.log('Displaying Game Over screen');
        const msgEl = document.getElementById('game-over-message');
        if (msgEl) {
            msgEl.textContent = this.game.message || '!';
        }
        this.showScreen('game-over-screen');
    }

    showLoading(show) {
        const loadingIndicator = document.getElementById('loading-indicator');
        const retryBtn = document.getElementById('retry-btn');
        const spinner = document.querySelector('#loading-indicator .spinner');
        const loadingText = document.querySelector('#loading-indicator p');

        if (loadingIndicator) {
            loadingIndicator.style.display = show ? 'block' : 'none';
        }
        
        if (show) {
            if (retryBtn) retryBtn.style.display = 'none';
            if (spinner) spinner.style.display = 'block';
            if (loadingText) loadingText.textContent = this.game.t('loadingText');
        }
        
        console.log('Loading indicator:', show ? 'shown' : 'hidden');
    }

    showError(message) {
        alert(message);
        const notification = document.createElement('div');
        notification.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#f44336;color:white;padding:15px 25px;border-radius:10px;box-shadow:0 5px 20px rgba(0,0,0,0.3);z-index:10000;font-weight:bold;animation:slideDown 0.3s ease';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showSuccess(message) {
        const notification = document.createElement('div');
        notification.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#4caf50;color:white;padding:15px 25px;border-radius:10px;box-shadow:0 5px 20px rgba(0,0,0,0.3);z-index:10000;font-weight:bold;animation:slideDown 0.3s ease';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    showScreen(screenId) {
        console.log('Switching to screen:', screenId);
        try {
            const screens = document.querySelectorAll('.screen');
            console.log('Found screens:', screens.length);
            screens.forEach(screen => {
                screen.classList.remove('active');
                screen.style.display = 'none';
            });

            const targetScreen = document.getElementById(screenId);
            if (!targetScreen) {
                console.error('Screen not found:', screenId);
                alert(`Экран ${screenId} не найден!`);
                return;
            }

            targetScreen.classList.add('active');
            targetScreen.style.display = 'flex';
            console.log('Screen switched successfully:', screenId);

            if (screenId === 'game-screen') {
                setTimeout(() => this.setupCardSwipe(), 200);
            }
        } catch (error) {
            console.error('Error switching screen:', error);
            alert('Ошибка: ' + error.message);
        }
    }

    startGame() {
        console.log('startGame called');
        this.isGeneratingAndWaiting = false;
        this.isGenerating = false;
        try {
            const apiKeyInput = document.getElementById('api-key');
            if (!apiKeyInput) {
                console.error('API key input not found!');
                alert('Ошибка: поле для API ключа не найдено!');
                return;
            }

            const apiKey = apiKeyInput.value.trim();
            if (!apiKey) {
                alert('Введите API ключ, чтобы начать игру!');
                return;
            }

            const modelSelect = document.getElementById('model-select');
            const tempInput = document.getElementById('temperature');
            const tokensInput = document.getElementById('max-tokens');
            const languageSelect = document.getElementById('language-select');
            
            const language = languageSelect ? languageSelect.value : 'ru';

            this.currentSettings = {
                apiKey: apiKey,
                model: modelSelect ? modelSelect.value : "openai",
                temperature: tempInput ? tempInput.value : "0.85",
                maxTokens: tokensInput && tokensInput.value ? tokensInput.value : "",
                language: language
            };
            console.log('Settings:', this.currentSettings);

            try {
                localStorage.setItem('lapsegamesettings', JSON.stringify(this.currentSettings));
            } catch (e) {
                console.warn('Could not save to localStorage:', e);
            }

            this.isGenerating = false;
            this.isGeneratingAndWaiting = false;

            this.game.startGame(apiKey, language);
            console.log('Game started, current card:', this.game.getCurrentCard());

            this.showScreen('game-screen');
            this.showLoading(false);
            
            console.log('Screen switched to game-screen');
            
            setTimeout(() => {
                this.updateUI();
                console.log('UI updated');
            }, 100);
        } catch (error) {
            console.error('Error starting game:', error);
            alert('Ошибка при запуске игры: ' + error.message + '\\n\\nОткройте консоль браузера (F12) для деталей.');
        }
    }

    showSettings() {
        const saved = localStorage.getItem('lapsegamesettings');
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                document.getElementById('api-key').value = settings.apiKey || '';
                document.getElementById('model-select').value = settings.model || 'openai';
                document.getElementById('temperature').value = settings.temperature || '0.85';
                document.getElementById('max-tokens').value = settings.maxTokens || '';
                const languageSelect = document.getElementById('language-select');
                if (languageSelect && settings.language) {
                    languageSelect.value = settings.language;
                    this.updateLanguage(settings.language);
                }
            } catch (e) {
                console.error('Error loading settings:', e);
            }
        }
        this.showScreen('settings-screen');
    }
}

// Перехват SES ошибок
window.addEventListener('error', (e) => {
    if (e.message && (e.message.includes('SES') || e.message.includes('lockdown'))) {
        e.preventDefault();
        return false;
    }
});

function initializeGame() {
    try {
        console.log('Initializing game...');
        
        const requiredElements = ['settings-screen', 'game-screen', 'start-game-btn', 'api-key', 'model-select', 'game-card'];
        const missingElements = requiredElements.filter(id => !document.getElementById(id));
        
        if (missingElements.length > 0) {
            console.error('Missing required elements:', missingElements);
            alert(`Ошибка: не найдены элементы: ${missingElements.join(', ')}`);
            return;
        }
        
        console.log('All required elements found');
        
        const saved = localStorage.getItem('lapsegamesettings');
        let initialLang = 'ru';
        
        const langSelect = document.getElementById('language-select');
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                const apiKeyInput = document.getElementById('api-key');
                const modelSelect = document.getElementById('model-select');
                const tempInput = document.getElementById('temperature');
                const tokensInput = document.getElementById('max-tokens');
                
                if (apiKeyInput) apiKeyInput.value = settings.apiKey || '';
                if (modelSelect) modelSelect.value = settings.model || 'openai';
                if (tempInput) tempInput.value = settings.temperature || '0.85';
                if (tokensInput) {
                    if (settings.maxTokens && settings.maxTokens > 2500) {
                        settings.maxTokens = 2500;
                    }
                    tokensInput.value = settings.maxTokens !== undefined ? settings.maxTokens : '';
                }
                if (langSelect && settings.language) {
                    langSelect.value = settings.language;
                    initialLang = settings.language;
                } else if (langSelect) {
                    initialLang = langSelect.value;
                }
                
                console.log('Restored API Key from localStorage:', settings.apiKey ? 'FOUND' : 'NOT FOUND');
            } catch (e) {
                console.error('Error loading settings:', e);
            }
        } else if (langSelect) {
            initialLang = langSelect.value;
        }
        
        const ui = new GameUI();
        window.gameUI = ui;
        
        // Apply initial language immediately
        ui.updateLanguage(initialLang);
        
        // If we are in game, update UI fully
        if (ui.game.gameState !== "STOPPED") {
            ui.updateUI();
        }
        console.log('GameUI initialized successfully');
        
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            const originalText = startBtn.textContent;
            const isRu = (document.getElementById('language-select')?.value || 'ru') === 'ru';
            startBtn.textContent = isRu ? '✓ Готово!' : '✓ Ready!';
            setTimeout(() => {
                startBtn.textContent = originalText;
            }, 2000);
        }
    } catch (error) {
        console.error('Error initializing GameUI:', error);
        alert('Критическая ошибка инициализации: ' + error.message + '\\n\\nОткройте консоль (F12) для деталей.');
    }
}

console.log('script.js loaded, document.readyState:', document.readyState);

if (document.readyState === 'loading') {
    console.log('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired, initializing game...');
        initializeGame();
    });
} else {
    console.log('DOM already ready, initializing game immediately...');
    setTimeout(() => {
        initializeGame();
    }, 100);
}