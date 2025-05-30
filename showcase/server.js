#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3005;

// Serve static files
app.use(express.static(__dirname));

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Analytics endpoint (for demo)
app.get('/api/stats', (req, res) => {
    res.json({
        builders: 1234,
        patterns: 1000000,
        timesSaved: "50x",
        projectsCreated: 5678
    });
});

app.listen(PORT, () => {
    console.log(`
🚀 DaVinci Showcase Running!
    
📍 Local: http://localhost:${PORT}
🌐 Network: http://${getLocalIP()}:${PORT}

Press Ctrl+C to stop
    `);
});

function getLocalIP() {
    const interfaces = require('os').networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}