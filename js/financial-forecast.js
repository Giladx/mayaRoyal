// Financial Forecast Chart - Revenue Projections with Animated Drawing Effect

// Number Counter Animation Function
function animateNumber(element, start, end, duration, suffix = '', prefix = '') {
    const startTime = performance.now();
    const range = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = start + (range * easeProgress);
        
        // Format number
        let displayValue;
        if (current >= 1000000) {
            displayValue = (current / 1000000).toFixed(1) + 'M';
        } else if (current >= 1000) {
            displayValue = (current / 1000).toFixed(0) + 'K';
        } else if (Number.isInteger(end)) {
            displayValue = Math.round(current).toString();
        } else {
            displayValue = current.toFixed(1);
        }
        
        element.textContent = prefix + displayValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Set final value exactly
            if (end >= 1000000) {
                element.textContent = prefix + (end / 1000000).toFixed(1) + 'M' + suffix;
            } else if (end >= 1000) {
                element.textContent = prefix + (end / 1000).toFixed(0) + 'K' + suffix;
            } else {
                element.textContent = prefix + end + suffix;
            }
        }
    }
    
    requestAnimationFrame(update);
}

// Intersection Observer for scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1, // Reduced from 0.2 to trigger earlier
        rootMargin: '50px 0px 0px 0px' // Added margin to trigger sooner
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                // Animate metric values
                const metricValue = entry.target.querySelector('.metric-value');
                if (metricValue && !metricValue.hasAttribute('data-animated')) {
                    metricValue.setAttribute('data-animated', 'true');
                    const text = metricValue.textContent.trim();
                    
                    // Store original text as fallback
                    if (!metricValue.hasAttribute('data-original')) {
                        metricValue.setAttribute('data-original', text);
                    }
                    
                    // Handle different text patterns
                    if (text === '200') {
                        // Pure number - animate from 0 to 200
                        animateNumber(metricValue, 0, 200, 2000);
                    } else if (text.includes('2028')) {
                        // Date with year - animate the year
                        const year = 2028;
                        const startYear = 2024;
                        let currentYear = startYear;
                        const yearInterval = setInterval(() => {
                            if (currentYear <= year) {
                                metricValue.textContent = 'Dec ' + currentYear;
                                currentYear++;
                            } else {
                                clearInterval(yearInterval);
                                metricValue.textContent = 'Dec 2028';
                            }
                        }, 500); // 500ms per year = 2 seconds total
                    } else if (text.includes('Years') || text.includes('Year')) {
                        // Extract number from "7 Years" and animate
                        const match = text.match(/(\d+)\s*Years?/);
                        if (match) {
                            const targetNum = parseInt(match[1]);
                            let current = 0;
                            const countInterval = setInterval(() => {
                                if (current <= targetNum) {
                                    metricValue.textContent = current + (current === 1 ? ' Year' : ' Years');
                                    current++;
                                } else {
                                    clearInterval(countInterval);
                                }
                            }, 280); // Faster for small numbers (7 * 280ms = ~2 seconds)
                        } else {
                            // Couldn't parse, restore original
                            metricValue.textContent = text;
                        }
                    } else {
                        // Text only (like "Isla Aguada") - try to extract any numbers
                        const number = parseInt(text.replace(/[^0-9]/g, ''));
                        if (!isNaN(number) && number > 0 && text === number.toString()) {
                            animateNumber(metricValue, 0, number, 2000);
                        } else {
                            // Pure text, just ensure it's visible
                            metricValue.textContent = text;
                        }
                    }
                }
                
                // Animate large metric values
                const metricValueLg = entry.target.querySelector('.metric-value-lg');
                if (metricValueLg && !metricValueLg.hasAttribute('data-animated')) {
                    metricValueLg.setAttribute('data-animated', 'true');
                    const text = metricValueLg.textContent.trim();
                    
                    // Store original text as fallback
                    if (!metricValueLg.hasAttribute('data-original')) {
                        metricValueLg.setAttribute('data-original', text);
                    }
                    
                    // Handle ranges like "70-85%" or "$700-$1,050"
                    if (text.includes('-')) {
                        const parts = text.split('-');
                        // Remove all non-numeric characters before parsing
                        const start = parseInt(parts[0].replace(/[^0-9]/g, ''));
                        const end = parseInt(parts[1].replace(/[^0-9]/g, ''));
                        
                        if (!isNaN(start) && !isNaN(end)) {
                            const suffix = text.includes('%') ? '%' : '';
                            const prefix = text.includes('$') ? '$' : '';
                            
                            // For large ranges, show the range instead of middle point
                            if (end - start > 100) {
                                // Animate both numbers in the range
                                let currentStart = 0;
                                let currentEnd = 0;
                                const duration = 2000;
                                const startTime = performance.now();
                                
                                function updateRange(currentTime) {
                                    const elapsed = currentTime - startTime;
                                    const progress = Math.min(elapsed / duration, 1);
                                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                                    
                                    currentStart = Math.round(start * easeProgress);
                                    currentEnd = Math.round(end * easeProgress);
                                    
                                    // Format with commas for large numbers
                                    const formattedStart = currentStart >= 1000 ? currentStart.toLocaleString() : currentStart;
                                    const formattedEnd = currentEnd >= 1000 ? currentEnd.toLocaleString() : currentEnd;
                                    
                                    metricValueLg.textContent = prefix + formattedStart + '-' + prefix + formattedEnd + suffix;
                                    
                                    if (progress < 1) {
                                        requestAnimationFrame(updateRange);
                                    } else {
                                        // Set final formatted value
                                        const finalStart = start >= 1000 ? start.toLocaleString() : start;
                                        const finalEnd = end >= 1000 ? end.toLocaleString() : end;
                                        metricValueLg.textContent = prefix + finalStart + '-' + prefix + finalEnd + suffix;
                                    }
                                }
                                
                                requestAnimationFrame(updateRange);
                            } else {
                                // Small range, animate to middle point
                                const target = Math.round((start + end) / 2);
                                animateNumber(metricValueLg, 0, target, 2000, suffix, prefix);
                            }
                        } else {
                            // Failed to parse, restore original
                            metricValueLg.textContent = text;
                        }
                    } else {
                        // Single number
                        const number = parseInt(text.replace(/[^0-9]/g, ''));
                        if (!isNaN(number) && number > 0) {
                            const suffix = text.includes('%') ? '%' : '';
                            const prefix = text.includes('$') ? '$' : '';
                            animateNumber(metricValueLg, 0, number, 2000, suffix, prefix);
                        } else {
                            // Not a number, restore original
                            metricValueLg.textContent = text;
                        }
                    }
                }
                
                // Animate return values
                const returnValue = entry.target.querySelector('.return-value');
                if (returnValue && !returnValue.hasAttribute('data-animated')) {
                    returnValue.setAttribute('data-animated', 'true');
                    const text = returnValue.textContent.trim();
                    
                    // Handle ranges like "25-35%"
                    if (text.includes('-')) {
                        const parts = text.split('-');
                        const start = parseInt(parts[0]);
                        const end = parseInt(parts[1].replace(/[^0-9]/g, ''));
                        
                        if (!isNaN(start) && !isNaN(end)) {
                            const suffix = text.includes('%') ? '%' : '';
                            const prefix = text.includes('$') ? '$' : '';
                            returnValue.textContent = prefix + start + '-' + end + suffix;
                        }
                    } else {
                        const number = parseInt(text.replace(/[^0-9]/g, ''));
                        if (!isNaN(number) && number > 0) {
                            const suffix = text.includes('%') ? '%' : '';
                            const prefix = text.includes('$') ? '$' : '';
                            animateNumber(returnValue, 0, number, 2000, suffix, prefix);
                        }
                    }
                }
                
                // Animate year metric values
                const yearMetricValues = entry.target.querySelectorAll('.year-metric .metric-value');
                yearMetricValues.forEach(elem => {
                    if (!elem.hasAttribute('data-animated')) {
                        elem.setAttribute('data-animated', 'true');
                        const text = elem.textContent.trim();
                        
                        // Store original text as fallback
                        if (!elem.hasAttribute('data-original')) {
                            elem.setAttribute('data-original', text);
                        }
                        
                        // Handle ranges with percentages (e.g., "60-65%")
                        if (text.includes('-') && text.includes('%')) {
                            const parts = text.split('-');
                            const start = parseInt(parts[0].replace(/[^0-9]/g, ''));
                            const end = parseInt(parts[1].replace(/[^0-9]/g, ''));
                            
                            if (!isNaN(start) && !isNaN(end)) {
                                // Animate to middle of range
                                const target = Math.round((start + end) / 2);
                                animateNumber(elem, 0, target, 2000, '%', '');
                            } else {
                                // Failed to parse, keep original
                                elem.textContent = text;
                            }
                        } else if (text.includes('-') && text.includes('$')) {
                            // Handle dollar ranges (e.g., "$420-$455")
                            const parts = text.split('-');
                            const start = parseInt(parts[0].replace(/[^0-9]/g, ''));
                            const end = parseInt(parts[1].replace(/[^0-9]/g, ''));
                            
                            if (!isNaN(start) && !isNaN(end)) {
                                // For small ranges, animate to middle
                                const target = Math.round((start + end) / 2);
                                animateNumber(elem, 0, target, 2000, '', '$');
                            } else {
                                elem.textContent = text;
                            }
                        } else if (text.includes('$')) {
                            // Handle single dollar amounts (e.g., "$700")
                            const number = parseInt(text.replace(/[^0-9]/g, ''));
                            if (!isNaN(number) && number > 0) {
                                animateNumber(elem, 0, number, 2000, '', '$');
                            } else {
                                elem.textContent = text;
                            }
                        } else {
                            // Other text, keep as is
                            elem.textContent = text;
                        }
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe all metric cards
    document.querySelectorAll('.metric-card, .financial-metric-card, .return-card, .year-card').forEach(card => {
        observer.observe(card);
    });
    
    // Immediately trigger animation for cards already in viewport (above the fold)
    // This ensures top cards animate on page load
    setTimeout(() => {
        document.querySelectorAll('.metric-card, .financial-metric-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
            
            if (isVisible && !card.classList.contains('animated')) {
                // Manually trigger the animation observer callback
                card.classList.add('animated');
                
                // Animate metric values
                const metricValue = card.querySelector('.metric-value');
                if (metricValue && !metricValue.hasAttribute('data-animated')) {
                    metricValue.setAttribute('data-animated', 'true');
                    const text = metricValue.textContent.trim();
                    
                    // Store original text as fallback
                    if (!metricValue.hasAttribute('data-original')) {
                        metricValue.setAttribute('data-original', text);
                    }
                    
                    // Handle different text patterns
                    if (text === '200') {
                        animateNumber(metricValue, 0, 200, 2000);
                    } else if (text.includes('2028')) {
                        const year = 2028;
                        const startYear = 2024;
                        let currentYear = startYear;
                        const yearInterval = setInterval(() => {
                            if (currentYear <= year) {
                                metricValue.textContent = 'Dec ' + currentYear;
                                currentYear++;
                            } else {
                                clearInterval(yearInterval);
                                metricValue.textContent = 'Dec 2028';
                            }
                        }, 500);
                    } else if (text.includes('Years') || text.includes('Year')) {
                        const match = text.match(/(\d+)\s*Years?/);
                        if (match) {
                            const targetNum = parseInt(match[1]);
                            let current = 0;
                            const countInterval = setInterval(() => {
                                if (current <= targetNum) {
                                    metricValue.textContent = current + (current === 1 ? ' Year' : ' Years');
                                    current++;
                                } else {
                                    clearInterval(countInterval);
                                }
                            }, 280);
                        } else {
                            metricValue.textContent = text;
                        }
                    } else {
                        const number = parseInt(text.replace(/[^0-9]/g, ''));
                        if (!isNaN(number) && number > 0 && text === number.toString()) {
                            animateNumber(metricValue, 0, number, 2000);
                        } else {
                            metricValue.textContent = text;
                        }
                    }
                }
            }
        });
    }, 100); // Small delay to ensure DOM is ready
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Revenue Chart - WITH SCROLL TRIGGER
    const ctx = document.getElementById('revenueChart');
    
    if (ctx) {
        // Store original data
        const originalData = {
            revpar: [437, 525, 612, 474, 567, 747, 887],
            occupancy: [62.5, 70, 76.5, 79, 81, 83, 84.5],
            adr: [700, 750, 800, 600, 700, 900, 1050]
        };

        // Create chart with initially empty data
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Year 1 (2029)', 'Year 2 (2030)', 'Year 3 (2031)', 'Year 4 (2032)', 'Year 5 (2033)', 'Year 6 (2034)', 'Year 7 (2035)'],
                datasets: [
                    {
                        label: 'RevPAR (Revenue Per Available Room)',
                        data: [null, null, null, null, null, null, null], // Start empty
                        borderColor: '#B8860B',
                        backgroundColor: 'rgba(184, 134, 11, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#B8860B',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2
                    },
                    {
                        label: 'Occupancy Rate (%)',
                        data: [null, null, null, null, null, null, null], // Start empty
                        borderColor: '#00D4FF',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#00D4FF',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        yAxisID: 'y1'
                    },
                    {
                        label: 'Average Daily Rate (ADR)',
                        data: [null, null, null, null, null, null, null], // Start empty
                        borderColor: '#00C48C',
                        backgroundColor: 'rgba(0, 196, 140, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#00C48C',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2.5,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                animation: {
                    duration: 1200, // Reduced from 3000ms to 1200ms (much faster)
                    easing: 'easeInOutCubic',
                    onProgress: function(animation) {
                        // Visual feedback during animation
                        const progress = animation.currentStep / animation.numSteps;
                    },
                    onComplete: function() {
                        // Animation complete
                    }
                },
                animations: {
                    tension: {
                        duration: 1200, // Reduced from 3000ms
                        easing: 'easeInOutCubic',
                        from: 0,
                        to: 0.4,
                        loop: false
                    },
                    x: {
                        type: 'number',
                        easing: 'easeInOutCubic',
                        duration: 1200, // Reduced from 3000ms
                        from: 0
                    },
                    y: {
                        type: 'number',
                        easing: 'easeInOutCubic',
                        duration: 1200, // Reduced from 3000ms
                        from: (ctx) => {
                            if (ctx.type === 'data') {
                                const chart = ctx.chart;
                                const {chartArea} = chart;
                                if (!chartArea) return 0;
                                return chartArea.bottom;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 20,
                            font: {
                                size: 13,
                                family: 'Inter',
                                weight: '600'
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(10, 10, 10, 0.95)',
                        titleColor: '#FFFFFF',
                        bodyColor: '#FFFFFF',
                        titleFont: {
                            size: 14,
                            family: 'Inter',
                            weight: '700'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        padding: 15,
                        cornerRadius: 12,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    if (context.dataset.label.includes('Occupancy')) {
                                        label += context.parsed.y.toFixed(1) + '%';
                                    } else if (context.dataset.label.includes('ADR') || context.dataset.label.includes('RevPAR')) {
                                        label += '$' + context.parsed.y.toFixed(0);
                                    } else {
                                        label += context.parsed.y;
                                    }
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: 'Inter',
                                weight: '600'
                            },
                            color: '#4A4A4A'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Revenue ($)',
                            font: {
                                size: 13,
                                family: 'Inter',
                                weight: '700'
                            },
                            color: '#0A0A0A'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.06)',
                            lineWidth: 1
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            color: '#6A6A6A',
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Occupancy (%)',
                            font: {
                                size: 13,
                                family: 'Inter',
                                weight: '700'
                            },
                            color: '#0A0A0A'
                        },
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            color: '#6A6A6A',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });

        // Observe chart for scroll-triggered animation
        let chartAnimated = false;
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !chartAnimated) {
                    chartAnimated = true;
                    
                    // START IMMEDIATELY - no delay
                    // Animate data points appearing one by one (left to right)
                    let currentIndex = 0;
                    const animationInterval = setInterval(() => {
                        if (currentIndex < 7) {
                            // Add data point for each dataset
                            chart.data.datasets[0].data[currentIndex] = originalData.revpar[currentIndex];
                            chart.data.datasets[1].data[currentIndex] = originalData.occupancy[currentIndex];
                            chart.data.datasets[2].data[currentIndex] = originalData.adr[currentIndex];
                            
                            // Update chart with faster animation
                            chart.update('active');
                            
                            currentIndex++;
                        } else {
                            clearInterval(animationInterval);
                        }
                    }, 250); // Reduced from 400ms to 250ms (faster: 1.75 seconds total instead of 2.8)
                }
            });
        }, {
            threshold: 0.05, // Reduced from 0.2 to 0.05 (triggers when only 5% visible)
            rootMargin: '100px 0px 0px 0px' // Trigger 100px BEFORE chart enters viewport
        });
        
        // Get the chart container and observe it
        const chartContainer = ctx.closest('.chart-container') || ctx.closest('section');
        if (chartContainer) {
            chartObserver.observe(chartContainer);
        }
    }
});
