// Dashboard JavaScript
// Portfolio tracking and performance visualization for MayaRoyale

// Sample portfolio data (in production, this would come from blockchain/API)
const portfolioData = {
    totalValue: 125000,
    tokenBalance: 62.5,
    tokenPrice: 2000,
    change24h: 3250,
    changePercent: 2.6
};

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check wallet connection
    const isConnected = localStorage.getItem('walletConnected');
    
    if (!isConnected) {
        // Redirect to connect wallet page if not connected
        // Commenting out for demo purposes
        // window.location.href = 'connect-wallet.html';
    }
    
    // Update portfolio values
    updatePortfolioDisplay();
    
    // Initialize performance chart
    initializePerformanceChart();
    
    // Setup action buttons
    setupActionButtons();
});

// Update portfolio display
function updatePortfolioDisplay() {
    const portfolioValue = document.getElementById('portfolio-value');
    const portfolioChange = document.getElementById('portfolio-change');
    const tokenAmount = document.getElementById('token-amount');
    
    if (portfolioValue) {
        portfolioValue.textContent = formatCurrency(portfolioData.totalValue);
    }
    
    if (portfolioChange) {
        const changeSign = portfolioData.change24h >= 0 ? '+' : '';
        portfolioChange.textContent = `${changeSign}${formatCurrency(portfolioData.change24h)} (${portfolioData.changePercent}%) 24h`;
        portfolioChange.className = portfolioData.change24h >= 0 ? 'portfolio-change positive' : 'portfolio-change negative';
    }
    
    if (tokenAmount) {
        tokenAmount.textContent = portfolioData.tokenBalance.toFixed(1);
    }
}

// Initialize Chart.js performance chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    
    if (!ctx) return;
    
    // Generate sample data (last 30 days)
    const labels = [];
    const data = [];
    const baseValue = 100000;
    
    for (let i = 30; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        
        // Generate realistic growth with some volatility
        const growth = (30 - i) * 800;
        const volatility = Math.random() * 2000 - 1000;
        data.push(baseValue + growth + volatility);
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Portfolio Value (USD)',
                data: data,
                borderColor: '#40E0D0',
                backgroundColor: 'rgba(64, 224, 208, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#40E0D0',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            family: "'Inter', sans-serif",
                            size: 13,
                            weight: '600'
                        },
                        color: '#0a1628',
                        usePointStyle: true,
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: '#0a1628',
                    titleColor: '#B8860B',
                    bodyColor: '#fff',
                    borderColor: '#40E0D0',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Value: $' + context.parsed.y.toLocaleString();
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
                            family: "'Inter', sans-serif"
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: {
                            family: "'Inter', sans-serif"
                        },
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'k';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Setup action buttons
function setupActionButtons() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const actionText = this.querySelector('span:last-child').textContent;
            
            switch(actionText.trim()) {
                case 'Buy More Tokens':
                    showToast('Buy functionality coming soon!', 'success');
                    break;
                case 'Stake Tokens':
                    showToast('Staking functionality coming soon!', 'success');
                    break;
                case 'Transfer':
                    showToast('Transfer functionality coming soon!', 'success');
                    break;
                case 'Trade':
                    showToast('Trading functionality coming soon!', 'success');
                    break;
                default:
                    showToast('Feature coming soon!', 'success');
            }
        });
    });
}

// Refresh portfolio data (placeholder for future API integration)
function refreshPortfolioData() {
    showToast('Refreshing portfolio data...', 'success');
    
    // In production, this would fetch real data from blockchain/API
    setTimeout(() => {
        updatePortfolioDisplay();
        showToast('Portfolio data updated!', 'success');
    }, 1000);
}

// Auto-refresh every 30 seconds (commented out for demo)
// setInterval(refreshPortfolioData, 30000);
