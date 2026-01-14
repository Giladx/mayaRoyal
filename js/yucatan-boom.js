// Yucatan Boom Page - Animated Counter and Chart Functionality

// Animated Counter Function
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    // Handle ZERO case
    if (target === 0 && suffix === '') {
        element.textContent = 'ZERO';
        return;
    }
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas
        const formatted = Math.floor(current).toLocaleString();
        element.textContent = prefix + formatted + suffix;
    }, 16);
}

// Intersection Observer for triggering animations when in view
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

let tourismChart = null;
let investmentChart = null;
let gdpChart = null;

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            // Trigger counter animations
            if (entry.target.classList.contains('hero-stat-value') || 
                entry.target.classList.contains('metric-value') ||
                entry.target.classList.contains('investment-amount')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const prefix = entry.target.getAttribute('data-prefix') || '';
                const suffix = entry.target.getAttribute('data-suffix') || '';
                animateCounter(entry.target, target, 2000, prefix, suffix);
            }
            
            // NEW: Handle investment-stat counter class
            if (entry.target.classList.contains('investment-stat')) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                const prefix = entry.target.getAttribute('data-prefix') || '';
                const suffix = entry.target.getAttribute('data-suffix') || '';
                animateCounter(entry.target, target, 2000, prefix, suffix);
            }
            
            // NEW: Handle forecast-stat counter class
            if (entry.target.classList.contains('forecast-stat')) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                const prefix = entry.target.getAttribute('data-prefix') || '';
                const suffix = entry.target.getAttribute('data-suffix') || '';
                animateCounter(entry.target, target, 2000, prefix, suffix);
            }
            
            // Initialize charts when they come into view
            if (entry.target.id === 'tourismGrowthChart' && !tourismChart) {
                initTourismChart();
            }
            if (entry.target.id === 'investmentChart' && !investmentChart) {
                initInvestmentChart();
            }
            if (entry.target.id === 'gdpChart' && !gdpChart) {
                initGDPChart();
            }
            // NEW: Initialize sector charts
            if (entry.target.id === 'sectorBarChart' && !sectorBarChart) {
                initSectorBarChart();
            }
            if (entry.target.id === 'sectorPieChart' && !sectorPieChart) {
                initSectorPieChart();
            }
            // NEW: Initialize forecast charts
            if (entry.target.id === 'tourismRevenueForecastChart' && !tourismRevenueForecastChart) {
                initTourismRevenueForecastChart();
            }
            if (entry.target.id === 'hotelDemandForecastChart' && !hotelDemandForecastChart) {
                initHotelDemandForecastChart();
            }
        }
    });
}, observerOptions);

// Tourism Growth Chart Initialization Function
function initTourismChart() {
    const tourismCtx = document.getElementById('tourismGrowthChart');
    if (!tourismCtx) return;
    
    tourismChart = new Chart(tourismCtx, {
        type: 'line',
        data: {
            labels: ['1980', '1990', '2000', '2010', '2015', '2020', '2024'],
            datasets: [{
                label: 'Annual Tourists (Millions)',
                data: [1, 3, 8, 15, 20, 25, 32],
                borderColor: '#22D3EE',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                borderWidth: 4,
                tension: 0.4,
                fill: true,
                pointRadius: 6,
                pointBackgroundColor: '#22D3EE',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2500,
                easing: 'easeInOutCubic',
                delay: function(context) {
                    return context.dataIndex * 150;
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: '600',
                            family: "'Inter', sans-serif"
                        },
                        color: '#0A0A0A',
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: '#0A0A0A',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        size: 14,
                        weight: '700'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + 'M Annual Tourists';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        color: '#6A6A6A',
                        callback: function(value) {
                            return value + 'M';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        color: '#6A6A6A'
                    }
                }
            }
        }
    });
}

// Investment Growth Chart Initialization Function
function initInvestmentChart() {
    const investmentCtx = document.getElementById('investmentChart');
    if (!investmentCtx) return;
    
    investmentChart = new Chart(investmentCtx, {
        type: 'bar',
        data: {
            labels: ['Government', 'Hotels & Resorts', 'Real Estate', 'Infrastructure', 'Tourism Attractions'],
            datasets: [{
                label: 'Investment (USD Billions)',
                data: [30, 20, 25, 15, 10],
                backgroundColor: [
                    'rgba(34, 211, 238, 0.8)',
                    'rgba(6, 182, 212, 0.8)',
                    'rgba(8, 145, 178, 0.8)',
                    'rgba(14, 116, 144, 0.8)',
                    'rgba(22, 78, 99, 0.8)'
                ],
                borderColor: [
                    '#22D3EE',
                    '#06B6D4',
                    '#0891B2',
                    '#0E7490',
                    '#164E63'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                delay: (context) => {
                    return context.dataIndex * 150;
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#0A0A0A',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        size: 14,
                        weight: '700'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y + 'B+ invested';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        color: '#6A6A6A',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif",
                            weight: '600'
                        },
                        color: '#0A0A0A'
                    }
                }
            }
        }
    });
}

// GDP Growth Chart Initialization Function
function initGDPChart() {
    const gdpCtx = document.getElementById('gdpChart');
    if (!gdpCtx) return;
    
    gdpChart = new Chart(gdpCtx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2024'],
            datasets: [{
                label: 'Tourism GDP Contribution (USD Billions)',
                data: [5, 12, 22, 35, 45, 52],
                borderColor: '#06B6D4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderWidth: 4,
                tension: 0.4,
                fill: true,
                pointRadius: 6,
                pointBackgroundColor: '#06B6D4',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2500,
                easing: 'easeInOutCubic',
                delay: function(context) {
                    return context.dataIndex * 180;
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: '600',
                            family: "'Inter', sans-serif"
                        },
                        color: '#0A0A0A',
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: '#0A0A0A',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y + 'B GDP Contribution';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6A6A6A',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6A6A6A'
                    }
                }
            }
        }
    });
}

// NEW: Sector Bar Chart (Investment by Sector)
let sectorBarChart = null;
function initSectorBarChart() {
    const ctx = document.getElementById('sectorBarChart');
    if (!ctx) return;
    
    sectorBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Manufacturing', 'Real Estate', 'Tourism', 'Logistics', 'Energy', 'Technology'],
            datasets: [{
                label: 'Investment (USD Billions)',
                data: [3.5, 3.0, 2.6, 1.1, 0.6, 0.6],
                backgroundColor: [
                    '#B8860B',
                    '#D4A017',
                    '#22D3EE',
                    '#06B6D4',
                    '#10B981',
                    '#8B5CF6'
                ],
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                delay: function(context) {
                    return context.dataIndex * 150;
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#B8860B',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toFixed(1) + 'B USD';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif"
                        },
                        color: 'rgba(255, 255, 255, 0.6)',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif",
                            weight: '600'
                        },
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            }
        }
    });
}

// NEW: Sector Pie Chart (Investment Distribution)
let sectorPieChart = null;
function initSectorPieChart() {
    const ctx = document.getElementById('sectorPieChart');
    if (!ctx) return;
    
    sectorPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Manufacturing', 'Real Estate', 'Tourism', 'Logistics', 'Energy', 'Technology'],
            datasets: [{
                data: [3.5, 3.0, 2.6, 1.1, 0.6, 0.6],
                backgroundColor: [
                    '#B8860B',
                    '#D4A017',
                    '#22D3EE',
                    '#06B6D4',
                    '#10B981',
                    '#8B5CF6'
                ],
                borderColor: 'rgba(10, 15, 30, 1)',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2500,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif",
                            weight: '600'
                        },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#B8860B',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': $' + value.toFixed(1) + 'B (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// NEW: Tourism Revenue Forecast Chart (2025-2035)
let tourismRevenueForecastChart = null;
function initTourismRevenueForecastChart() {
    const ctx = document.getElementById('tourismRevenueForecastChart');
    if (!ctx) return;
    
    tourismRevenueForecastChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'],
            datasets: [{
                label: 'Tourism Revenue (USD Billions)',
                data: [52, 58, 64, 71, 78, 85, 91, 96, 100, 103, 105],
                borderColor: '#B8860B',
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#B8860B',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2500,
                easing: 'easeInOutQuart',
                delay: function(context) {
                    return context.dataIndex * 150;
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#B8860B',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y + 'B USD';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 40,
                    max: 110,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif"
                        },
                        color: 'rgba(255, 255, 255, 0.6)',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif",
                            weight: '600'
                        },
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            }
        }
    });
}

// NEW: Hotel Room Demand Forecast Chart (2025-2035)
let hotelDemandForecastChart = null;
function initHotelDemandForecastChart() {
    const ctx = document.getElementById('hotelDemandForecastChart');
    if (!ctx) return;
    
    hotelDemandForecastChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'],
            datasets: [{
                label: 'Hotel Rooms Required (Thousands)',
                data: [150, 165, 180, 195, 205, 215, 225, 235, 242, 248, 250],
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    // Gradient from cyan to gold as values increase
                    if (value < 180) return '#22D3EE';
                    if (value < 210) return '#06B6D4';
                    if (value < 230) return '#0891B2';
                    return '#B8860B';
                },
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                delay: function(context) {
                    return context.dataIndex * 120;
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#22D3EE',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString() + 'K rooms (' + (context.parsed.y * 1000).toLocaleString() + ' total)';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 140,
                    max: 260,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif"
                        },
                        color: 'rgba(255, 255, 255, 0.6)',
                        callback: function(value) {
                            return value + 'K';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif",
                            weight: '600'
                        },
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Observe all counter elements (including new forecast-stat class)
    document.querySelectorAll('.hero-stat-value, .metric-value, .investment-amount, .investment-stat, .forecast-stat').forEach(el => {
        animateOnScroll.observe(el);
    });
    
    // Observe chart canvases (but don't initialize yet - wait until they're in view)
    const tourismCtx = document.getElementById('tourismGrowthChart');
    if (tourismCtx) {
        animateOnScroll.observe(tourismCtx);
    }
    
    const investmentCtx = document.getElementById('investmentChart');
    if (investmentCtx) {
        animateOnScroll.observe(investmentCtx);
    }
    
    const gdpCtx = document.getElementById('gdpChart');
    if (gdpCtx) {
        animateOnScroll.observe(gdpCtx);
    }
    
    // NEW: Observe new sector charts
    const sectorBarCtx = document.getElementById('sectorBarChart');
    if (sectorBarCtx) {
        animateOnScroll.observe(sectorBarCtx);
    }
    
    const sectorPieCtx = document.getElementById('sectorPieChart');
    if (sectorPieCtx) {
        animateOnScroll.observe(sectorPieCtx);
    }
    
    // NEW: Observe forecast charts
    const tourismRevenueCtx = document.getElementById('tourismRevenueForecastChart');
    if (tourismRevenueCtx) {
        animateOnScroll.observe(tourismRevenueCtx);
    }
    
    const hotelDemandCtx = document.getElementById('hotelDemandForecastChart');
    if (hotelDemandCtx) {
        animateOnScroll.observe(hotelDemandCtx);
    }
    
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('navPremiumMobileToggle');
    const navMenu = document.getElementById('navPremiumMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
});
