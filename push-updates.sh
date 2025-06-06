#!/bin/bash

# Push landing page updates to GitHub

cd "/Users/digitaldavinci/Cline Projects/davinci-dev-system"

# Add files
git add showcase/index.html showcase/ab-toggle.js

# Commit with message
git commit -m "Update landing page copy: Builder-focused messaging with constraints philosophy

- Changed hero to 'Built for Builders Who Build for Others'
- Updated philosophy section to focus on audience-centric building
- Removed competitor tool mentions (ChatGPT, Cline, Replit)
- Emphasized constraints as creative superpowers
- Reframed problems around homogenization vs differentiation
- Updated value props to focus on serving audiences
- Removed testimonials section
- Overall messaging: We build for you, you build for them"

# Push to GitHub
git push origin main

echo "✅ Updates pushed to GitHub. Vercel will automatically deploy."