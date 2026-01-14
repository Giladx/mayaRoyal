// Investment Calculator - MayaRoyale
// Calculates token allocation, equity stake, and 7-year projections

// Investment Series Data
const SERIES_DATA = {
    a: {
        name: 'Series A',
        tokenPrice: 800,
        totalRound: 10000000,
        equityPercent: 10,
        benefits: [
            '✅ Land Appreciation (15% annually)',
            '✅ Resort Profit Share (18-20% annually)',
            '✅ MAYA Tokens at $800',
            '✅ 10% Equity Position',
            '✅ Land + PropCo + OpCo + Tokens'
        ],
        landAppreciation: 0.15, // 15% annually
        resortProfit: 0.19, // Average 19%
    },
    b: {
        name: 'Series B',
        tokenPrice: 2000,
        totalRound: 20000000,
        equityPercent: 15,
        benefits: [
            '✅ Resort Profit Share (18-20% annually)',
            '✅ MAYA Tokens at $2,000',
            '✅ 15% Equity Position',
            '✅ OpCo + Tokens',
            '✅ Secondary Market Trading'
        ],
        landAppreciation: 0, // No land appreciation
        resortProfit: 0.19, // Average 19%
    }
};

// State
let currentSeries = 'a';
let investmentAmount = 100000;
let projectionChart = null;

// DOM Elements - will be initialized after DOM loads
let seriesButtons;
let investmentInput;
let presetButtons;
let tokensReceivedEl;
let percentOfRoundEl;
let equityStakeEl;
let benefitsItemsEl;
let year7ValueEl;
let totalReturnEl;
let annualizedReturnEl;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Chart.js to be available
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded!');
        return;
    }
    
    // Initialize DOM elements NOW
    seriesButtons = document.querySelectorAll('.series-btn');
    investmentInput = document.getElementById('investmentAmount');
    presetButtons = document.querySelectorAll('.preset-btn');
    tokensReceivedEl = document.getElementById('tokensReceived');
    percentOfRoundEl = document.getElementById('percentOfRound');
    equityStakeEl = document.getElementById('equityStake');
    benefitsItemsEl = document.getElementById('benefitsItems');
    year7ValueEl = document.getElementById('year7Value');
    totalReturnEl = document.getElementById('totalReturn');
    annualizedReturnEl = document.getElementById('annualizedReturn');
    
    initializeCalculator();
    attachEventListeners();
    
    // Run initial calculation after a small delay to ensure DOM is fully ready
    setTimeout(() => {
        calculate();
    }, 100);
});

function initializeCalculator() {
    // Set initial values
    investmentInput.value = investmentAmount;
    
    // Initialize Chart
    initializeChart();
}

function attachEventListeners() {
    // Series Selection
    seriesButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const series = btn.dataset.series;
            selectSeries(series);
        });
    });

    // Investment Amount Input
    investmentInput.addEventListener('input', (e) => {
        let value = parseFloat(investmentInput.value) || 0;
        
        // Cap at $100M to prevent overflow
        if (value > 100000000) {
            value = 100000000;
            investmentInput.value = value;
        }
        
        investmentAmount = value;
        calculate();
    });

    // Preset Buttons
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = parseFloat(btn.dataset.amount);
            investmentAmount = amount;
            investmentInput.value = amount;
            calculate();
        });
    });
}

function selectSeries(series) {
    currentSeries = series;
    
    // Update UI
    seriesButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.series === series) {
            btn.classList.add('active');
        }
    });
    
    // Update minimum investment
    const minInvestment = SERIES_DATA[series].tokenPrice;
    investmentInput.min = minInvestment;
    
    // If current investment is below minimum, set to minimum
    if (investmentAmount < minInvestment) {
        investmentAmount = minInvestment;
        investmentInput.value = minInvestment;
    }
    
    // Recalculate
    calculate();
}

function calculate() {
    const series = SERIES_DATA[currentSeries];
    
    // Calculate tokens received
    const tokensReceived = investmentAmount / series.tokenPrice;
    
    // Calculate percentage of round
    const percentOfRound = (investmentAmount / series.totalRound) * 100;
    
    // Calculate equity stake
    const equityStake = percentOfRound * (series.equityPercent / 100);
    
    // Update Summary
    updateSummary(tokensReceived, percentOfRound, equityStake);
    
    // Update Benefits
    updateBenefits(series.benefits);
    
    // Calculate 7-Year Projection
    const projection = calculate7YearProjection(investmentAmount, series);
    
    // Update Metrics
    updateMetrics(projection);
    
    // Update Chart
    updateChart(projection);
}

function updateSummary(tokens, percent, equity) {
    if (!tokensReceivedEl || !percentOfRoundEl || !equityStakeEl) {
        console.error('Calculator elements not found');
        return;
    }
    
    // IMMEDIATELY set the values (no animation delay)
    tokensReceivedEl.textContent = tokens.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    percentOfRoundEl.textContent = percent.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + '%';
    
    equityStakeEl.textContent = equity.toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) + '%';
}

function updateBenefits(benefits) {
    benefitsItemsEl.innerHTML = benefits.map(benefit => `<li>${benefit}</li>`).join('');
}

function calculate7YearProjection(initialInvestment, series) {
    const projection = [{
        year: 0,
        value: initialInvestment,
        landValue: initialInvestment,
        resortValue: 0,
    }];
    
    // Track actual land value for compound growth (not adjusted for display)
    let actualLandValue = initialInvestment;
    
    for (let year = 1; year <= 7; year++) {
        const prevYear = projection[year - 1];
        
        // Land appreciation (Series A only) - compound from actual land value
        actualLandValue = actualLandValue * (1 + series.landAppreciation);
        
        // Resort profit (cumulative)
        const annualResortProfit = initialInvestment * series.resortProfit;
        const resortValue = prevYear.resortValue + annualResortProfit;
        
        // Total value
        const totalValue = actualLandValue + resortValue;
        
        projection.push({
            year,
            value: totalValue,
            landValue: actualLandValue, // Store actual land value
            resortValue,
        });
    }
    
    return projection;
}

function updateMetrics(projection) {
    const year7Data = projection[7];
    const initialInvestment = projection[0].value;
    
    // Year 7 Value
    const year7Value = year7Data.value;
    
    // Total Return
    const totalReturn = ((year7Value - initialInvestment) / initialInvestment) * 100;
    
    // Annualized Return (CAGR)
    const annualizedReturn = (Math.pow(year7Value / initialInvestment, 1/7) - 1) * 100;
    
    // Animate updates (using $ formatting from formatNumber)
    const currentYear7 = parseFloat(year7ValueEl.textContent.replace(/[$,MK]/g, '')) * getMultiplier(year7ValueEl.textContent) || 0;
    animateValue(year7ValueEl, currentYear7, year7Value, 800, 0);
    
    animateValueSimple(totalReturnEl, parseFloat(totalReturnEl.textContent.replace('%', '')) || 0, totalReturn, 800, 1, '%');
    animateValueSimple(annualizedReturnEl, parseFloat(annualizedReturnEl.textContent.replace('%', '')) || 0, annualizedReturn, 800, 1, '%');
}

function getMultiplier(text) {
    if (text.includes('M')) return 1000000;
    if (text.includes('K')) return 1000;
    return 1;
}

function initializeChart() {
    const canvas = document.getElementById('projectionChart');
    if (!canvas) {
        console.error('Chart canvas not found!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    try {
        projectionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7'],
            datasets: [{
                label: 'Total Value',
                data: [100000, 119000, 141610, 168444, 200448, 238532, 283352, 337029],
                borderColor: '#B8860B',
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#B8860B',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: '#0A0A0A',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#B8860B',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString('en-US', { maximumFractionDigits: 0 });
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            if (value >= 1000000) {
                                return '$' + (value / 1000000).toFixed(1) + 'M';
                            }
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        },
                        color: '#6A6A6A',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false,
                    }
                },
                x: {
                    ticks: {
                        color: '#6A6A6A',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    grid: {
                        display: false,
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeInOutCubic',
                onProgress: function(animation) {
                    // Visual feedback during animation
                },
                onComplete: function() {
                    // Animation complete
                },
                // Animate each element type
                animateRotate: true,
                animateScale: true,
                // Line will draw from left to right
                x: {
                    type: 'number',
                    easing: 'easeInOutCubic',
                    duration: 1200,
                    from: 0,
                    delay: 0
                },
                y: {
                    type: 'number', 
                    easing: 'easeInOutCubic',
                    duration: 1200,
                    from: 0,
                    delay: 0
                }
            },
            transitions: {
                active: {
                    animation: {
                        duration: 1200
                    }
                },
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                }
            }
        }
    });
    } catch (error) {
        console.error('Failed to initialize chart:', error);
    }
}

function updateChart(projection) {
    if (!projectionChart) return;
    
    const labels = projection.map(p => p.year === 0 ? 'Year 0' : `Year ${p.year}`);
    const values = projection.map(p => p.value);
    
    projectionChart.data.labels = labels;
    projectionChart.data.datasets[0].data = values;
    
    // Update y-axis range
    const maxValue = Math.max(...values);
    projectionChart.options.scales.y.max = maxValue * 1.15;
    projectionChart.options.scales.y.min = 0;
    
    // Reset animation - this makes the line draw from scratch
    projectionChart.reset();
    
    // Animate the chart with line drawing effect
    projectionChart.update({
        duration: 1200,
        easing: 'easeInOutCubic',
        lazy: false
    });
}

// Utility: Animate number changes
function animateValue(element, start, end, duration, decimals = 0, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        element.textContent = formatNumber(current, decimals) + suffix;
    }, 16);
}

// Simple animation for non-dollar values (tokens, percentages)
function animateValueSimple(element, start, end, duration, decimals = 0, suffix = '') {
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        // Format number with commas and decimals
        element.textContent = current.toLocaleString('en-US', {
            minimumFractionDigits: decimals, 
            maximumFractionDigits: decimals
        }) + suffix;
    }, 16);
}

function formatNumber(num, decimals = 0) {
    if (num >= 1000000) {
        return '$' + (num / 1000000).toFixed(decimals) + 'M';
    } else if (num >= 1000) {
        return '$' + (num / 1000).toFixed(decimals) + 'K';
    } else {
        return '$' + num.toFixed(decimals);
    }
}

// Export for use in other scripts if needed
window.MayaCalculator = {
    calculate,
    selectSeries,
    SERIES_DATA
};
