# NordicFix Website

Professionele website voor NordicFix - Uw Digitale Handyman

## 📁 Bestandsstructuur

```
nordicfix.nl/
├── index.html                          # Homepage
├── diensten.html                       # Overzicht diensten (nog maken)
├── blog.html                           # Blog overzicht (nog maken)
├── over.html                           # Over pagina (nog maken)
├── contact.html                        # Contact pagina (nog maken)
├── css/
│   ├── style.css                       # Hoofdstijlen + aurora achtergrond
│   └── diensten.css                    # Extra stijlen voor diensten pagina's
├── js/
│   ├── main.js                         # Hoofdfunctionaliteit (navigatie, scroll)
│   └── chatbot.js                      # AI Chatbot (nog te implementeren)
├── diensten/
│   ├── TEMPLATE-dienst.html            # Template voor diensten pagina's
│   ├── customer-service.html           # (dupliceer template en pas aan)
│   ├── website-development.html        # (dupliceer template en pas aan)
│   ├── seo-optimalisatie.html          # (dupliceer template en pas aan)
│   └── tool-integraties.html           # (dupliceer template en pas aan)
├── images/
│   ├── nordicfix_logo.png             # Logo (geüpload)
│   └── nordicfix_favicon.png          # Favicon (geüpload)
└── data/
    └── site-content.json              # Content voor AI chatbot
```

## 🎨 Design Features

### Kleuren (uit logo)
- **Primair:** #1e3a4f (Donkerblauw)
- **Secundair:** #6eb5d1 (Lichtblauw)
- **Accent:** #f39c5a (Oranje)
- **Achtergrond:** #0f1e29 (Zeer donker blauw)

### Noorderlicht Achtergrond
- Geanimeerde aurora borealis effect
- Subtiele, professionele uitstraling
- Automatisch responsive

### Typography
- **Hoofdfont:** Manrope (modern, clean)
- **Mono font:** Space Mono (voor cijfers/accenten)

## 🚀 Hoe te gebruiken

### 1. Diensten Pagina's Maken

**Stap 1:** Kopieer de template
```bash
cp diensten/TEMPLATE-dienst.html diensten/customer-service.html
```

**Stap 2:** Open het bestand en vervang alle placeholders:
- `[DIENST NAAM]` → De naam van je dienst
- `[KEYWORDS HIER]` → SEO keywords
- `[KORTE BESCHRIJVING]` → Samenvatting van dienst
- `[Feature 1-4]` → Wat de klant krijgt
- `[Stap 1-3]` → Het proces
- `[Type klant 1-3]` → Voor wie is deze dienst

**Stap 3:** Herhaal voor elke dienst:
- customer-service.html
- website-development.html
- seo-optimalisatie.html
- tool-integraties.html

### 2. Overige Pagina's Maken

Maak nog:
- `diensten.html` - Overzichtspagina van alle diensten
- `blog.html` - Blog overzicht
- `over.html` - Over jou/bedrijf
- `contact.html` - Contactformulier

Gebruik dezelfde structuur als index.html voor consistentie.

### 3. AI Chatbot Implementeren

**Optie A: Voiceflow (Aanbevolen voor beginners)**
1. Maak account op https://www.voiceflow.com/
2. Importeer data uit `data/site-content.json`
3. Configureer intents voor veel voorkomende vragen
4. Kopieer de embed code naar `js/chatbot.js`

**Optie B: Tidio**
1. Maak account op https://www.tidio.com/
2. Activeer AI features
3. Train op basis van site-content.json
4. Voeg widget code toe

**Optie C: Custom met Claude/OpenAI API**
- Voor gevorderde gebruikers
- Volledige controle
- Zie `js/chatbot.js` voor basis implementatie

### 4. SEO Optimalisatie

**Per Pagina:**
- [ ] Unieke `<title>` tag
- [ ] Meta description (150-160 karakters)
- [ ] Meta keywords
- [ ] Schema.org markup (al in template)
- [ ] Alt teksten voor afbeeldingen
- [ ] H1 tag (slechts 1 per pagina)

**Technisch:**
- [ ] Maak `sitemap.xml`
- [ ] Maak `robots.txt`
- [ ] Voeg Google Analytics toe
- [ ] Voeg Google Search Console toe
- [ ] Test met PageSpeed Insights

### 5. Testen voor Lancering

**Functionaliteit:**
- [ ] Alle links werken
- [ ] Navigatie werkt op mobiel
- [ ] Formulieren werken (als toegevoegd)
- [ ] Chatbot werkt
- [ ] Afbeeldingen laden

**Cross-browser:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobiele browsers

**Responsive:**
- [ ] Desktop (1920px+)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobiel (375px)

## 🌐 Deployment

### GitHub Pages (Gratis)
```bash
# In je repository
git add .
git commit -m "Initial commit"
git push origin main

# Ga naar Settings → Pages
# Select branch: main
# Save
```

### Netlify (Aanbevolen - Gratis)
1. Maak account op https://www.netlify.com/
2. Connect je GitHub repository
3. Deploy automatisch bij elke push
4. Configureer custom domain (nordicfix.nl)

### Vercel (Ook goed - Gratis)
1. Maak account op https://vercel.com/
2. Import je GitHub repository
3. Deploy

## 📝 Content Checklist

### Homepage
- [x] Hero sectie
- [x] Diensten preview
- [x] USP's
- [x] CTA
- [x] Footer

### Diensten Template
- [x] Breadcrumb navigatie
- [x] Hero sectie
- [x] Features lijst
- [x] Process stappen
- [x] Voor wie sectie
- [x] Sidebar met CTA
- [x] Related services

### Te Maken
- [ ] Diensten overzichtspagina
- [ ] Blog pagina
- [ ] Over pagina
- [ ] Contact pagina
- [ ] 4 specifieke diensten pagina's

## 🤖 AI-Vriendelijke Structuur

De website is geoptimaliseerd voor AI crawlers:

1. **Semantische HTML:** Correcte heading structuur
2. **Schema.org markup:** Structured data voor beter begrip
3. **Clean URLs:** Beschrijvende URL's
4. **JSON data:** Machine-readable content in `data/site-content.json`
5. **Meta tags:** Uitgebreide metadata

## 🎯 SEO Tips

1. **Keyword Research:**
   - Gebruik tools zoals Google Keyword Planner
   - Focus op long-tail keywords
   - Lokaliseer voor Nederland/Zweden

2. **Content Strategie:**
   - Blog regelmatig (1-2x per week)
   - Gebruik keywords natuurlijk
   - Schrijf voor mensen, niet voor robots

3. **Technische SEO:**
   - Snelle laadtijd (<3 seconden)
   - HTTPS (SSL certificaat)
   - Mobile-first
   - Clean code

4. **Link Building:**
   - Gastblogs
   - Social media
   - Directory listings

## 📧 Contact & Support

Voor vragen over de website:
- Email: info@nordicfix.nl

## 🔄 Updates

### Versie 1.0 (Huidig)
- ✅ Homepage met noorderlicht achtergrond
- ✅ Responsive navigatie
- ✅ Diensten template
- ✅ AI-vriendelijke structuur
- ✅ SEO optimalisatie basis
- 🔄 Chatbot (nog implementeren)
- 🔄 Overige pagina's (nog maken)

### Toekomstige Updates
- [ ] Blog functionaliteit
- [ ] Portfolio sectie
- [ ] Testimonials
- [ ] Newsletter signup
- [ ] Meertalig (EN/SE)

## 💡 Tips

1. **Consistentie:** Gebruik overal dezelfde structuur en styling
2. **Content First:** Schrijf goede content voordat je gaat stylen
3. **Test Vaak:** Check regelmatig op verschillende apparaten
4. **Backup:** Commit regelmatig naar GitHub
5. **Analytics:** Installeer tracking vanaf dag 1

## 🚨 Belangrijke Notities

- Logo en favicon zijn al toegevoegd in `/images/`
- Alle kleuren komen uit het logo voor consistentie
- Aurora animatie is performance-geoptimaliseerd
- Template is volledig responsive
- Code is gecommentarieerd voor makkelijk aanpassen

---

**Veel succes met je NordicFix website! 🎉**
