// Tokenomics JavaScript
// Token distribution chart and interactive elements

// Initialize tokenomics page
document.addEventListener('DOMContentLoaded', function() {
    initializeDistributionChart();
});

// Initialize distribution pie chart
function initializeDistributionChart() {
    const ctx = document.getElementById('distributionChart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Public Offering (11.2%)', 'Reserve (88.8%)'],
            datasets: [{
                data: [11.2, 88.8],
                backgroundColor: [
                    '#40E0D0', // Turquoise for public offering
                    '#B8860B'  // Gold for reserve
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#0a1628',
                    titleColor: '#B8860B',
                    bodyColor: '#fff',
                    borderColor: '#40E0D0',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const tokens = value === 11.2 ? '112,000' : '888,000';
                            return [label, `${tokens} tokens (${value}%)`];
                        }
                    }
                }
            }
        }
    });
}

// Copy token address (placeholder - actual contract address would go here)
function copyTokenAddress() {
    const contractAddress = '0x0000000000000000000000000000000000000000'; // Placeholder
    copyToClipboard(contractAddress);
}
