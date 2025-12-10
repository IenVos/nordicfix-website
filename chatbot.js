// ====================================
// AI Chatbot Widget
// ====================================

/*
 * Dit is een placeholder voor de AI chatbot integratie.
 * 
 * OPTIES VOOR IMPLEMENTATIE:
 * 
 * 1. VOICEFLOW (Aanbevolen voor starten)
 *    - No-code chatbot builder
 *    - Makkelijk te integreren
 *    - Website: https://www.voiceflow.com/
 * 
 * 2. TIDIO met AI
 *    - Chat widget met AI functionaliteit
 *    - Makkelijke setup
 *    - Website: https://www.tidio.com/
 * 
 * 3. CLAUDE API (Advanced)
 *    - Volledige controle
 *    - Beste AI kwaliteit
 *    - Vereist meer technische kennis
 * 
 * 4. OPENAI API (Advanced)
 *    - ChatGPT integratie
 *    - Flexibel en krachtig
 * 
 * IMPLEMENTATIE STAPPEN:
 * 
 * Voor Voiceflow:
 * 1. Maak account op voiceflow.com
 * 2. Importeer de site-content.json data
 * 3. Configureer intents en responses
 * 4. Voeg embed code toe aan deze file
 * 
 * Voor Claude/OpenAI API:
 * 1. Verkrijg API key
 * 2. Implementeer onderstaande code
 * 3. Test grondig
 */

// Chatbot configuratie
const chatbotConfig = {
    // Laad site content voor de chatbot
    knowledgeBase: '/data/site-content.json',
    
    // UI instellingen
    theme: {
        primaryColor: '#f39c5a',
        secondaryColor: '#6eb5d1',
        darkColor: '#1e3a4f'
    },
    
    // Chatbot gedrag
    greetingMessage: 'Hallo! Ik ben de digitale assistent van NordicFix. Hoe kan ik u helpen?',
    placeholder: 'Type uw vraag...',
    position: 'bottom-right' // of 'bottom-left'
};

// Voorbeeld implementatie met eenvoudige chatbot
class SimpleChatbot {
    constructor(config) {
        this.config = config;
        this.isOpen = false;
        this.knowledgeBase = null;
        this.init();
    }
    
    async init() {
        // Laad knowledge base
        await this.loadKnowledgeBase();
        
        // Maak chatbot UI
        this.createChatbotUI();
        
        // Event listeners
        this.setupEventListeners();
    }
    
    async loadKnowledgeBase() {
        try {
            const response = await fetch(this.config.knowledgeBase);
            this.knowledgeBase = await response.json();
        } catch (error) {
            console.error('Failed to load knowledge base:', error);
        }
    }
    
    createChatbotUI() {
        const widget = document.getElementById('chatbot-widget');
        if (!widget) return;
        
        widget.innerHTML = `
            <div class="chatbot-container ${this.isOpen ? 'open' : ''}">
                <div class="chatbot-header">
                    <h3>NordicFix Assistent</h3>
                    <button class="chatbot-close">×</button>
                </div>
                <div class="chatbot-messages">
                    <div class="chatbot-message bot-message">
                        ${this.config.greetingMessage}
                    </div>
                </div>
                <div class="chatbot-input-container">
                    <input type="text" class="chatbot-input" placeholder="${this.config.placeholder}">
                    <button class="chatbot-send">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
            
            <button class="chatbot-toggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </button>
        `;
        
        // Add styles
        this.addStyles();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-toggle {
                position: fixed;
                bottom: 24px;
                ${this.config.position === 'bottom-right' ? 'right: 24px;' : 'left: 24px;'}
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, ${this.config.theme.primaryColor}, ${this.config.theme.secondaryColor});
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transition: transform 0.3s ease;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            
            .chatbot-toggle:hover {
                transform: scale(1.1);
            }
            
            .chatbot-toggle svg {
                width: 28px;
                height: 28px;
            }
            
            .chatbot-container {
                position: fixed;
                bottom: 100px;
                ${this.config.position === 'bottom-right' ? 'right: 24px;' : 'left: 24px;'}
                width: 380px;
                height: 500px;
                background: rgba(30, 58, 79, 0.98);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                border: 1px solid rgba(110, 181, 209, 0.3);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                display: none;
                flex-direction: column;
                z-index: 999;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .chatbot-container.open {
                display: flex;
                opacity: 1;
                transform: translateY(0);
            }
            
            .chatbot-header {
                padding: 20px;
                background: ${this.config.theme.darkColor};
                border-radius: 16px 16px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(110, 181, 209, 0.2);
            }
            
            .chatbot-header h3 {
                margin: 0;
                color: white;
                font-size: 18px;
                font-weight: 600;
            }
            
            .chatbot-close {
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
                padding: 0;
                line-height: 1;
                transition: color 0.3s ease;
            }
            
            .chatbot-close:hover {
                color: ${this.config.theme.primaryColor};
            }
            
            .chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .chatbot-message {
                padding: 12px 16px;
                border-radius: 12px;
                max-width: 80%;
                line-height: 1.5;
            }
            
            .bot-message {
                background: rgba(110, 181, 209, 0.2);
                color: white;
                align-self: flex-start;
            }
            
            .user-message {
                background: linear-gradient(135deg, ${this.config.theme.primaryColor}, ${this.config.theme.secondaryColor});
                color: white;
                align-self: flex-end;
            }
            
            .chatbot-input-container {
                padding: 20px;
                border-top: 1px solid rgba(110, 181, 209, 0.2);
                display: flex;
                gap: 12px;
            }
            
            .chatbot-input {
                flex: 1;
                padding: 12px 16px;
                border-radius: 8px;
                border: 1px solid rgba(110, 181, 209, 0.3);
                background: rgba(15, 30, 41, 0.5);
                color: white;
                font-size: 14px;
                outline: none;
            }
            
            .chatbot-input:focus {
                border-color: ${this.config.theme.secondaryColor};
            }
            
            .chatbot-send {
                padding: 12px;
                border-radius: 8px;
                border: none;
                background: linear-gradient(135deg, ${this.config.theme.primaryColor}, ${this.config.theme.secondaryColor});
                color: white;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            
            .chatbot-send:hover {
                transform: scale(1.05);
            }
            
            .chatbot-send svg {
                width: 20px;
                height: 20px;
            }
            
            @media (max-width: 480px) {
                .chatbot-container {
                    width: calc(100vw - 32px);
                    right: 16px;
                    left: 16px;
                    bottom: 90px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupEventListeners() {
        const toggle = document.querySelector('.chatbot-toggle');
        const close = document.querySelector('.chatbot-close');
        const container = document.querySelector('.chatbot-container');
        const input = document.querySelector('.chatbot-input');
        const send = document.querySelector('.chatbot-send');
        
        toggle?.addEventListener('click', () => this.toggleChatbot());
        close?.addEventListener('click', () => this.toggleChatbot());
        send?.addEventListener('click', () => this.handleSend());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });
    }
    
    toggleChatbot() {
        this.isOpen = !this.isOpen;
        const container = document.querySelector('.chatbot-container');
        container?.classList.toggle('open');
    }
    
    handleSend() {
        const input = document.querySelector('.chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Voeg user message toe
        this.addMessage(message, 'user');
        
        // Clear input
        input.value = '';
        
        // Process message
        setTimeout(() => {
            this.processMessage(message);
        }, 500);
    }
    
    addMessage(text, type) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${type}-message`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check redirect rules
        if (this.knowledgeBase?.redirect_rules) {
            for (const [keyword, url] of Object.entries(this.knowledgeBase.redirect_rules)) {
                if (lowerMessage.includes(keyword)) {
                    this.addMessage(
                        `Ik heb informatie gevonden over "${keyword}". Klik hier om meer te lezen.`,
                        'bot'
                    );
                    
                    // Add link message
                    setTimeout(() => {
                        const messagesContainer = document.querySelector('.chatbot-messages');
                        const linkDiv = document.createElement('div');
                        linkDiv.className = 'chatbot-message bot-message';
                        linkDiv.innerHTML = `<a href="${url}" style="color: ${this.config.theme.primaryColor}; text-decoration: underline;">Ga naar de pagina →</a>`;
                        messagesContainer.appendChild(linkDiv);
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    }, 300);
                    
                    return;
                }
            }
        }
        
        // Default response
        this.addMessage(
            'Bedankt voor uw vraag! Voor specifieke informatie kunt u contact met ons opnemen via info@nordicfix.nl',
            'bot'
        );
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Uncomment onderstaande regel om de chatbot te activeren:
    // new SimpleChatbot(chatbotConfig);
    
    console.log('Chatbot ready to be initialized. Remove comment to activate.');
});

// VOOR VOICEFLOW INTEGRATIE:
// Vervang bovenstaande code met de Voiceflow embed code
// Voorbeeld:
/*
<script type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: 'YOUR_PROJECT_ID' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
      v.type = "text/javascript"; 
      s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>
*/
