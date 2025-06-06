// A/B Test Toggle for DDV Landing Page
// Version A: Current copy (power/chaos messaging)
// Version B: New copy (builder-audience focused, constraints philosophy)

// Add toggle UI
function addToggleUI() {
    const toggleHTML = `
        <div class="ab-toggle-container" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #161B22;
            border: 1px solid #30363D;
            border-radius: 12px;
            padding: 1rem;
            z-index: 9999;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        ">
            <div style="
                display: block;
                margin-bottom: 0.5rem;
                font-size: 0.875rem;
                color: #8B949E;
            ">Copy Version Test</div>
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="setVersion('a')" id="versionA" style="
                    padding: 0.5rem 1rem;
                    border: 1px solid #30363D;
                    background: #0D1117;
                    color: #8B949E;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.875rem;
                ">Version A (Current)</button>
                <button onclick="setVersion('b')" id="versionB" style="
                    padding: 0.5rem 1rem;
                    border: 1px solid #30363D;
                    background: #0D1117;
                    color: #8B949E;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.875rem;
                ">Version B (New)</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toggleHTML);
}

// Version B content replacements
const versionB = {
    // Hero Section
    heroBadge: '🛠️ Built for Builders',
    heroTitle: 'Built for Builders Who<br>Build for <span class="gradient-text">Others</span>',
    heroDescription: 'While everyone rushes to ship generic AI code, you\'re crafting solutions your audience actually needs. DDV learns how YOU build, so you can focus on WHO you build for.',
    
    // Vision Section (becomes Philosophy)
    visionBadge: 'Our Philosophy',
    visionTitle: 'We Build for You. <span class="gradient-text">You Build for Them.</span>',
    visionDescription: 'Every builder serves an audience. Your users don\'t care about your tools - they care about their problems being solved.',
    
    visionCard1Title: 'The Homogenization Trap',
    visionCard1Text: 'When everyone builds the same way, unique value disappears. Your audience deserves better than generic solutions.',
    
    visionCard2Title: 'Your Constraints, Your Signature',
    visionCard2Text: 'Develop patterns that serve YOUR specific audience. Your constraints become your competitive advantage.',
    
    visionCard3Title: 'Builder-to-Builder Evolution',
    visionCard3Text: 'Your patterns help others serve similar users. Knowledge compounds across the builder community.',
    
    // Web3 Section
    web3Card1Title: 'Your Competition Has The Same Code',
    web3Card1Text: 'Same patterns. Same outputs. Zero differentiation. When everyone uses the same AI, your audience can\'t tell you apart.',
    
    web3Card2Title: 'Build for Your Audience\'s Needs',
    web3Card2Text: 'Patterns that match how your users actually work. Solutions that feel native to their workflow. Code that serves, not impresses.',
    
    // Value Props
    valueTitle: 'Built for <span class="gradient-text">How You Serve</span>',
    valueDescription: 'Benefits that matter to builders and their audiences.',
    
    // CTA
    ctaTitle: 'Build Better for <span class="gradient-text">Your Audience</span>',
    ctaDescription: 'Join builders who understand: the best tools adapt to how you serve your users.',
    
    // Why This Matters
    whyTitle: 'A New Way to <span class="gradient-text">Build</span>',
    whyDescription: 'Traditional tools create generic outputs. DDV creates audience-specific solutions.',
    
    problem1Title: '🎯 The Real Challenge',
    problem1Text: 'It\'s not about AI vs Human code. It\'s about Generic vs Audience-Specific solutions. When every builder has the same tools, how do you serve YOUR specific users?',
    
    problem2Title: '✨ The DDV Approach',
    problem2Text: 'DDV preserves your audience understanding in code. It learns not just HOW you build, but WHO you build for. Your patterns reflect your users\' needs.',
    
    problem3Title: '🚀 The Builder\'s Edge',
    problem3Text: 'While others ship generic features, you ship audience-specific solutions. Your code evolves with your users. This is sustainable differentiation.'
};

// Store original content
let versionA = {};

// Set version function
window.setVersion = function(version) {
    const body = document.body;
    
    // Update button states
    document.getElementById('versionA').style.background = version === 'a' ? '#512FC9' : '#0D1117';
    document.getElementById('versionA').style.color = version === 'a' ? 'white' : '#8B949E';
    document.getElementById('versionA').style.borderColor = version === 'a' ? '#512FC9' : '#30363D';
    
    document.getElementById('versionB').style.background = version === 'b' ? '#512FC9' : '#0D1117';
    document.getElementById('versionB').style.color = version === 'b' ? 'white' : '#8B949E';
    document.getElementById('versionB').style.borderColor = version === 'b' ? '#512FC9' : '#30363D';
    
    if (version === 'b') {
        // Store original content if not already stored
        if (Object.keys(versionA).length === 0) {
            storeOriginalContent();
        }
        applyVersionB();
    } else {
        restoreVersionA();
    }
    
    // Store preference
    localStorage.setItem('ddv-ab-version', version);
}

// Store original content
function storeOriginalContent() {
    // Hero
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) versionA.heroBadge = heroBadge.innerHTML;
    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) versionA.heroTitle = heroTitle.innerHTML;
    
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) versionA.heroDescription = heroDesc.innerHTML;
    
    // Vision section
    const visionBadge = document.querySelector('.section-badge');
    if (visionBadge) versionA.visionBadge = visionBadge.innerHTML;
    
    const visionTitle = document.querySelector('.section h2');
    if (visionTitle) versionA.visionTitle = visionTitle.innerHTML;
    
    const visionDesc = document.querySelector('.section-description');
    if (visionDesc) versionA.visionDescription = visionDesc.innerHTML;
    
    // Vision cards
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        if (title) versionA[`visionCard${index + 1}Title`] = title.innerHTML;
        if (text) versionA[`visionCard${index + 1}Text`] = text.innerHTML;
    });
    
    // Web3 cards
    const web3Cards = document.querySelectorAll('.web3-card');
    web3Cards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        if (title) versionA[`web3Card${index + 1}Title`] = title.innerHTML;
        if (text) versionA[`web3Card${index + 1}Text`] = text.innerHTML;
    });
    
    // Value section
    const valueSection = document.querySelector('section[style*="background: var(--dark-secondary)"]');
    if (valueSection) {
        const valueTitle = valueSection.querySelector('h2');
        const valueDesc = valueSection.querySelector('.section-description');
        if (valueTitle) versionA.valueTitle = valueTitle.innerHTML;
        if (valueDesc) versionA.valueDescription = valueDesc.innerHTML;
    }
    
    // CTA
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDesc = document.querySelector('.cta-description');
    if (ctaTitle) versionA.ctaTitle = ctaTitle.innerHTML;
    if (ctaDesc) versionA.ctaDescription = ctaDesc.innerHTML;
    
    // Why This Matters
    const whySection = Array.from(document.querySelectorAll('.section')).find(s => 
        s.querySelector('h2')?.textContent.includes('Future of Building')
    );
    if (whySection) {
        const whyTitle = whySection.querySelector('h2');
        const whyDesc = whySection.querySelector('.section-description');
        if (whyTitle) versionA.whyTitle = whyTitle.innerHTML;
        if (whyDesc) versionA.whyDescription = whyDesc.innerHTML;
        
        const problemBoxes = whySection.querySelectorAll('h3');
        const problemTexts = whySection.querySelectorAll('h3 + p');
        problemBoxes.forEach((box, index) => {
            if (box) versionA[`problem${index + 1}Title`] = box.innerHTML;
            if (problemTexts[index]) versionA[`problem${index + 1}Text`] = problemTexts[index].innerHTML;
        });
    }
}

// Apply Version B
function applyVersionB() {
    // Hide testimonials section in Version B
    const testimonialsSection = Array.from(document.querySelectorAll('.section')).find(s => 
        s.querySelector('h2')?.textContent.includes('Idea to Launch')
    );
    if (testimonialsSection) {
        testimonialsSection.style.display = 'none';
    }
    
    // Hero
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.innerHTML = versionB.heroBadge;
    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.innerHTML = versionB.heroTitle;
    
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.innerHTML = versionB.heroDescription;
    
    // Vision section
    const visionBadge = document.querySelector('.section-badge');
    if (visionBadge) visionBadge.innerHTML = versionB.visionBadge;
    
    const visionTitle = document.querySelector('.section h2');
    if (visionTitle) visionTitle.innerHTML = versionB.visionTitle;
    
    const visionDesc = document.querySelector('.section-description');
    if (visionDesc) visionDesc.innerHTML = versionB.visionDescription;
    
    // Vision cards
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        if (title && versionB[`visionCard${index + 1}Title`]) {
            title.innerHTML = versionB[`visionCard${index + 1}Title`];
        }
        if (text && versionB[`visionCard${index + 1}Text`]) {
            text.innerHTML = versionB[`visionCard${index + 1}Text`];
        }
    });
    
    // Web3 cards
    const web3Cards = document.querySelectorAll('.web3-card');
    web3Cards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        if (title && versionB[`web3Card${index + 1}Title`]) {
            title.innerHTML = versionB[`web3Card${index + 1}Title`];
        }
        if (text && versionB[`web3Card${index + 1}Text`]) {
            text.innerHTML = versionB[`web3Card${index + 1}Text`];
        }
    });
    
    // Value section
    const valueSection = document.querySelector('section[style*="background: var(--dark-secondary)"]');
    if (valueSection) {
        const valueTitle = valueSection.querySelector('h2');
        const valueDesc = valueSection.querySelector('.section-description');
        if (valueTitle) valueTitle.innerHTML = versionB.valueTitle;
        if (valueDesc) valueDesc.innerHTML = versionB.valueDescription;
    }
    
    // CTA
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDesc = document.querySelector('.cta-description');
    if (ctaTitle) ctaTitle.innerHTML = versionB.ctaTitle;
    if (ctaDesc) ctaDescription.innerHTML = versionB.ctaDescription;
    
    // Why This Matters
    const whySection = Array.from(document.querySelectorAll('.section')).find(s => 
        s.querySelector('h2')?.textContent.includes('Future')
    );
    if (whySection) {
        const whyTitle = whySection.querySelector('h2');
        const whyDesc = whySection.querySelector('.section-description');
        if (whyTitle) whyTitle.innerHTML = versionB.whyTitle;
        if (whyDesc) whyDesc.innerHTML = versionB.whyDescription;
        
        const problemBoxes = whySection.querySelectorAll('h3');
        const problemTexts = whySection.querySelectorAll('h3 + p');
        problemBoxes.forEach((box, index) => {
            if (box && versionB[`problem${index + 1}Title`]) {
                box.innerHTML = versionB[`problem${index + 1}Title`];
            }
            if (problemTexts[index] && versionB[`problem${index + 1}Text`]) {
                problemTexts[index].innerHTML = versionB[`problem${index + 1}Text`];
            }
        });
    }
}

// Restore Version A
function restoreVersionA() {
    // Show testimonials section again
    const testimonialsSection = Array.from(document.querySelectorAll('.section')).find(s => 
        s.querySelector('h2')?.textContent.includes('Idea to Launch')
    );
    if (testimonialsSection) {
        testimonialsSection.style.display = 'block';
    }
    
    Object.keys(versionA).forEach(key => {
        // Find and restore each element
        if (key === 'heroBadge') {
            const el = document.querySelector('.hero-badge');
            if (el) el.innerHTML = versionA[key];
        } else if (key === 'heroTitle') {
            const el = document.querySelector('.hero h1');
            if (el) el.innerHTML = versionA[key];
        } else if (key === 'heroDescription') {
            const el = document.querySelector('.hero-description');
            if (el) el.innerHTML = versionA[key];
        }
        // Continue for other elements...
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    addToggleUI();
    
    // Check for saved preference
    const savedVersion = localStorage.getItem('ddv-ab-version') || 'a';
    setVersion(savedVersion);
});