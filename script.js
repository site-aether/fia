        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize particles
            initParticles();
            
            // Initialize keyboard shortcuts
            initKeyboardNavigation();
            
            // Initialize section observers
            initSectionTransitions();
            
            // Initialize console filters
            initConsoleFilters();
            
            // Start enhanced loading sequence
            startEnhancedLoading();
        });

        // ==================== ENHANCED LOADING SCREEN ====================
        function startEnhancedLoading() {
            const steps = document.querySelectorAll('.loader-step');
            let currentStep = 0;
            
            const stepInterval = setInterval(() => {
                if (currentStep > 0) {
                    steps[currentStep - 1].classList.add('complete');
                }
                
                if (currentStep < steps.length) {
                    steps[currentStep].classList.add('active');
                    currentStep++;
                } else {
                    clearInterval(stepInterval);
                    
                    // Hide loader after all steps complete
                    setTimeout(() => {
                        document.getElementById('loader').style.opacity = '0';
                        setTimeout(() => {
                            document.getElementById('loader').style.display = 'none';
                            logToConsole('System fully initialized. Welcome, Director.', 'success');
                            
                            // Make all sections visible
                            document.querySelectorAll('section').forEach(section => {
                                section.classList.add('visible');
                            });
                        }, 500);
                    }, 500);
                }
            }, 300);
        }

        // ==================== PARTICLE BACKGROUND ====================
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                
                // Random size
                const size = Math.random() * 3 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                particlesContainer.appendChild(particle);
            }
        }

        // ==================== SECTION TRANSITIONS ====================
        function initSectionTransitions() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            // Make hero section immediately visible
            document.querySelector('.hero').classList.add('visible');
            
            // Intersection Observer for section animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // Update nav links
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        // Log section visit
                        logToConsole(`User accessed ${getSectionName(id)} section`, 'user');
                    }
                });
            }, { threshold: 0.2 });
            
            sections.forEach(section => {
                observer.observe(section);
            });
        }
        
        function getSectionName(id) {
            const names = {
                'home': 'Home',
                'about': 'Mission Profile',
                'divisions': 'Agency Divisions',
                'guidelines': 'Guidelines & Conduct'
            };
            return names[id] || id;
        }

        // ==================== CONSOLE FUNCTIONS ====================
        const logsContainer = document.getElementById('console-logs');
        const consoleWidget = document.getElementById('console-widget');
        let logFilter = 'all';
        
        // Extended log messages
        const logMessages = [
            { text: "Initializing Site-wide diagnostic sweep...", type: "normal" },
            { text: "Scanning Sector 4 for bio-signatures...", type: "normal" },
            { text: "Encrypted packet received from O5 Command.", type: "success" },
            { text: "Authenticating O5 encryption keys...", type: "normal" },
            { text: "WARNING: Memetic anomaly detected in Sub-level 3.", type: "err" },
            { text: "Activating counter-memetic filters.", type: "warn" },
            { text: "Rerouting power to containment cells.", type: "warn" },
            { text: "Containment Cell A-17 stabilized.", type: "success" },
            { text: "User 'Dr. [REDACTED]' accessed file SCP-███.", type: "normal" },
            { text: "Access logged under Clearance Level 4.", type: "normal" },
            { text: "Firewall intrusion attempt blocked.", type: "success" },
            { text: "Tracing hostile IP to extradimensional relay.", type: "warn" },
            { text: "Updating clearance protocols...", type: "normal" },
            { text: "Clearance hierarchy synced with O5 registry.", type: "success" },
            { text: "Syncing with RAISA database...", type: "normal" },
            { text: "RAISA sync complete. No discrepancies found.", type: "success" },
            { text: "Ping: 4ms. Uplink stable.", type: "success" },
            { text: "Satellite relay aligned over Site-19.", type: "normal" },
            { text: "Audio surveillance active in Cafeteria B.", type: "normal" },
            { text: "Video surveillance active in Hallway C-12.", type: "normal" },
            { text: "Flagged communication: anomalous keywords detected.", type: "err" },
            { text: "Initiating automated linguistic scrub.", type: "warn" },
            { text: "Linguistic scrub successful.", type: "success" },
            { text: "MTF Epsilon-11 ('Nine-Tailed Fox') on standby.", type: "normal" },
            { text: "MTF Lambda-5 ('White Rabbits') deployed.", type: "warn" },
            { text: "Containment breach drill initiated.", type: "warn" },
            { text: "Drill status: non-hostile.", type: "success" },
            { text: "Reality anchor output within normal parameters.", type: "success" },
            { text: "Hume levels fluctuating in Wing D.", type: "warn" },
            { text: "Stabilizing local reality field.", type: "normal" },
            { text: "SCP-173 containment cameras refreshed.", type: "normal" },
            { text: "Blink synchronization protocol enforced.", type: "success" },
            { text: "SCP-096 acoustic sensors recalibrated.", type: "normal" },
            { text: "Cognitohazard filter applied to visual feeds.", type: "success" },
            { text: "Automated amnestic dispenser refilled.", type: "normal" },
            { text: "Class-B amnestics inventory verified.", type: "success" },
            { text: "Unauthorized Level 2 access attempt detected.", type: "err" },
            { text: "Security lockdown enacted in Research Wing.", type: "warn" },
            { text: "Intruder detained by on-site security.", type: "success" },
            { text: "Incident report generated: IR-███-A.", type: "normal" },
            { text: "Cross-testing proposal uploaded for review.", type: "normal" },
            { text: "Ethics Committee approval pending.", type: "warn" },
            { text: "Ethics Committee decision received: APPROVED.", type: "success" },
            { text: "Anomalous energy spike detected underground.", type: "err" },
            { text: "Deploying seismic dampeners.", type: "warn" },
            { text: "Seismic activity normalized.", type: "success" },
            { text: "Thaumaturgic sensors reporting low activity.", type: "normal" },
            { text: "Scranton Reality Anchors online.", type: "success" },
            { text: "Backup generators switched to idle mode.", type: "normal" },
            { text: "Containment cell atmospheric mix optimized.", type: "success" },
            { text: "D-Class personnel transfer scheduled.", type: "normal" },
            { text: "D-Class termination records archived.", type: "normal" },
            { text: "Psych evaluation uploaded for Researcher K.", type: "normal" },
            { text: "AIAD compliance check initiated.", type: "normal" },
            { text: "AIAD status: compliant.", type: "success" },
            { text: "Temporal distortion detected (±0.3s).", type: "warn" },
            { text: "Temporal stabilization protocols active.", type: "success" },
            { text: "Inter-site data tunnel established.", type: "normal" },
            { text: "Site-17 confirms receipt of anomaly logs.", type: "success" },
            { text: "O5 Command acknowledgment received.", type: "success" },
            { text: "System audit complete. No active containment failures.", type: "success" },
            { text: "Foundation database integrity: 100%.", type: "success" },
            { text: "Returning system to passive monitoring mode.", type: "normal" }
        ];
        
        // User action logs
        const userActions = [
            "User clicked on navigation element",
            "User hovered over classified information",
            "User accessed secure terminal",
            "User viewed restricted division data",
            "User interacted with console widget",
            "User scrolled through confidential protocols",
            "User attempted to access redacted information",
            "User triggered security protocol review"
        ];

        function logToConsole(message, type = 'normal') {
            const now = new Date();
            const timeString = `[${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}]`;
            
            const div = document.createElement('div');
            div.className = 'log-line';
            div.setAttribute('data-type', type);
            
            let colorClass = '';
            if (type === 'success') colorClass = 'log-success';
            if (type === 'err') colorClass = 'log-err';
            if (type === 'warn') colorClass = 'log-warn';
            if (type === 'user') colorClass = 'log-success';
            
            const messageSpan = document.createElement('span');
            if (colorClass) {
                messageSpan.className = colorClass;
            }
            messageSpan.textContent = message;
            
            div.innerHTML = `<span class="log-time">${timeString}</span> `;
            div.appendChild(messageSpan);
            
            // Apply filter
            if (logFilter === 'all' || logFilter === type) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
            
            logsContainer.appendChild(div);
            logsContainer.scrollTop = logsContainer.scrollHeight;

            // Limit logs to 50 entries
            if(logsContainer.childElementCount > 50) {
                logsContainer.removeChild(logsContainer.firstChild);
            }
        }

        // Auto-add logs
        setInterval(() => {
            const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
            logToConsole(randomMsg.text, randomMsg.type);
        }, 3000);

        // GLITCH NUMBER GENERATOR
        const glitchElement = document.getElementById('glitch-num');
        setInterval(() => {
            if(Math.random() > 0.1) {
                glitchElement.innerText = Math.floor(Math.random() * (130 - 115) + 115);
                glitchElement.style.color = "var(--text-primary)";
            } else {
                glitchElement.innerText = Math.floor(Math.random() * 999);
                glitchElement.style.color = "var(--accent-red-bright)";
            }
        }, 1950);

        // Console Controls
        function toggleConsole() {
            consoleWidget.classList.toggle('minimized');
            logToConsole(`Console ${consoleWidget.classList.contains('minimized') ? 'minimized' : 'maximized'}`, 'user');
        }
        
        function hideConsole(e) {
            e.stopPropagation();
            consoleWidget.classList.add('hidden');
            logToConsole('Console hidden', 'user');
        }
        
        function showConsole() {
            consoleWidget.classList.remove('hidden');
        }
        
        // Initialize console filters
        function initConsoleFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active button
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Set filter
                    logFilter = this.getAttribute('data-filter');
                    
                    // Apply filter to existing logs
                    const logs = document.querySelectorAll('.log-line');
                    logs.forEach(log => {
                        const type = log.getAttribute('data-type');
                        if (logFilter === 'all' || logFilter === type) {
                            log.style.display = 'block';
                        } else {
                            log.style.display = 'none';
                        }
                    });
                    
                    logToConsole(`Console filter set to: ${logFilter}`, 'user');
                });
            });
        }

        // ==================== KEYBOARD NAVIGATION ====================
        function initKeyboardNavigation() {
            document.addEventListener('keydown', function(e) {
                // Don't trigger if user is typing in an input
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
                
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        document.querySelector('a[href="#home"]').click();
                        scrollToSection('home');
                        break;
                    case '2':
                        e.preventDefault();
                        document.querySelector('a[href="#about"]').click();
                        scrollToSection('about');
                        break;
                    case '3':
                        e.preventDefault();
                        document.querySelector('a[href="#divisions"]').click();
                        scrollToSection('divisions');
                        break;
                    case '4':
                        e.preventDefault();
                        document.querySelector('a[href="#guidelines"]').click();
                        scrollToSection('guidelines');
                        break;
                    case 'n':
                    case 'N':
                        e.preventDefault();
                        toggleNavigation();
                        break;
                    case 'c':
                    case 'C':
                        e.preventDefault();
                        toggleConsole();
                        break;
                    case '?':
                        e.preventDefault();
                        toggleShortcuts();
                        break;
                    case 'Escape':
                        e.preventDefault();
                        hideShortcuts();
                        break;
                    case 'l':
                    case 'L':
                        e.preventDefault();
                        logUserAction();
                        break;
                    case 'a':
                    case 'A':
                        e.preventDefault();
                        toggleAnimations();
                        break;
                    case 'e':
                    case 'E':
                        e.preventDefault();
                        emergencyShutdown();
                        break;
                    case 'l':
                        if (e.ctrlKey) {
                            e.preventDefault();
                            clearLogs();
                        }
                        break;
                }
            });
            
            // Shortcuts button
            document.getElementById('shortcuts-btn').addEventListener('click', function(e) {
                e.preventDefault();
                toggleShortcuts();
            });
            
            // Close shortcuts button
            document.getElementById('close-shortcuts').addEventListener('click', hideShortcuts);
            
            // Log action button
            document.getElementById('log-action-btn').addEventListener('click', logUserAction);
        }
        
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                logToConsole(`Keyboard navigation to ${getSectionName(sectionId)}`, 'user');
            }
        }
        
        function toggleNavigation() {
            const nav = document.getElementById('main-nav');
            nav.classList.toggle('hidden');
            logToConsole(`Navigation ${nav.classList.contains('hidden') ? 'hidden' : 'shown'}`, 'user');
        }
        
        function toggleShortcuts() {
            const overlay = document.getElementById('shortcuts-overlay');
            overlay.classList.toggle('visible');
            logToConsole('Shortcuts panel toggled', 'user');
        }
        
        function hideShortcuts() {
            document.getElementById('shortcuts-overlay').classList.remove('visible');
        }
        
        function logUserAction() {
            const randomAction = userActions[Math.floor(Math.random() * userActions.length)];
            logToConsole(randomAction, 'user');
        }
        
        function toggleAnimations() {
            document.body.classList.toggle('no-animations');
            const state = document.body.classList.contains('no-animations') ? 'disabled' : 'enabled';
            logToConsole(`Animations ${state}`, 'user');
        }
        
        function emergencyShutdown() {
            logToConsole('EMERGENCY SHUTDOWN PROTOCOL INITIATED', 'err');
            logToConsole('Terminating all non-essential systems...', 'warn');
            logToConsole('Alerting MTF units...', 'warn');
            logToConsole('Sealing containment chambers...', 'warn');
            
            // Visual effect
            document.body.style.animation = 'none';
            document.querySelector('.scanline').style.animation = 'none';
            document.body.style.backgroundColor = '#300000';
            
            setTimeout(() => {
                document.body.style.animation = '';
                document.querySelector('.scanline').style.animation = '';
                document.body.style.backgroundColor = '';
                logToConsole('Emergency protocol simulation complete', 'success');
            }, 3000);
        }
        
        function clearLogs() {
            logsContainer.innerHTML = '';
            logToConsole('Console logs cleared', 'user');
        }

        // Add CSS for no-animations class
        const style = document.createElement('style');
        style.textContent = `
            .no-animations * {
                animation: none !important;
                transition: none !important;
            }
        `;
        document.head.appendChild(style);
