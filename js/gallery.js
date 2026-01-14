// Gallery JavaScript
// Image filtering and interactive gallery functionality

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    setupGalleryFilters();
});

// Setup gallery filter functionality
function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    const categories = item.getAttribute('data-category');
                    if (categories && categories.includes(filterValue)) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 10);
                    } else {
                        item.style.display = 'none';
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                }
            });
        });
    });
}

// Image lightbox functionality (placeholder for future enhancement)
function openLightbox(imageSrc) {
    console.log('Lightbox for:', imageSrc);
    showToast('Lightbox feature coming soon!', 'success');
}

// ========================================
// INTERACTIVE PROPERTY MAP
// ========================================

// Initialize Interactive Map with Leaflet.js
function initPropertyMap() {
    // Check if map container exists
    const mapContainer = document.getElementById('propertyMap');
    if (!mapContainer) {
        console.log('Map container not found');
        return;
    }

    // Property coordinates: Isla Aguada, Campeche, Mexico
    const propertyCoords = [18.804718, -91.481058];
    
    // Initialize map
    const map = L.map('propertyMap', {
        center: propertyCoords,
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        dragging: true,
        touchZoom: true
    });

    // Add satellite tile layer (ESRI World Imagery)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; ESRI',
        maxZoom: 18
    }).addTo(map);

    // Add street labels overlay
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap, &copy; CartoDB',
        maxZoom: 18,
        opacity: 0.8
    }).addTo(map);

    // Custom icon for property marker
    const propertyIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
            <div class="marker-pin">
                <div class="marker-icon">🏖️</div>
            </div>
            <div class="marker-label">MayaRoyale<br>15 Acres</div>
        `,
        iconSize: [60, 80],
        iconAnchor: [30, 70]
    });

    // Add main property marker
    const propertyMarker = L.marker(propertyCoords, { icon: propertyIcon })
        .addTo(map)
        .bindPopup(`
            <div class="map-popup">
                <h3>🏖️ MayaRoyale Resort</h3>
                <p><strong>15 Acres</strong> of pristine beachfront</p>
                <p>📍 Isla Aguada, Campeche</p>
                <p>🎖️ Pueblos Mágicos Status</p>
                <p>💎 $100M+ Trophy Asset</p>
                <hr style="margin: 10px 0; border: none; border-top: 1px solid #E5E7EB;">
                <p style="font-size: 0.85rem; color: #6B7280;">One of only 177 towns in Mexico with official Pueblos Mágicos designation. Near UNESCO World Heritage Site Calakmul.</p>
            </div>
        `);

    // Conceptual development area (approximate circle - not exact boundaries)
    const developmentArea = L.circle(propertyCoords, {
        color: '#B8860B',
        fillColor: '#B8860B',
        fillOpacity: 0.15,
        radius: 350, // ~15 acres approximate visualization
        weight: 2,
        dashArray: '10, 10'
    }).addTo(map).bindPopup(`
        <div class="map-popup">
            <h4>Development Area</h4>
            <p>Conceptual 15-acre footprint</p>
            <p style="font-size: 0.8rem; color: #6B7280; margin-top: 8px;"><em>Subject to final development plans</em></p>
        </div>
    `);

    // Airport markers
    const airports = [
        {
            name: 'Campeche International Airport',
            coords: [19.8168, -90.5003],
            distance: '~90 min drive',
            icon: '✈️'
        },
        {
            name: 'Ciudad Del Carmen International Airport',
            coords: [18.6537, -91.7990],
            distance: '~45 min drive',
            icon: '✈️'
        }
    ];

    airports.forEach(airport => {
        const airportIcon = L.divIcon({
            className: 'airport-marker',
            html: `<div class="airport-icon">${airport.icon}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker(airport.coords, { icon: airportIcon })
            .addTo(map)
            .bindPopup(`
                <div class="map-popup">
                    <h4>${airport.icon} ${airport.name}</h4>
                    <p>${airport.distance}</p>
                </div>
            `);
    });

    // Phase markers (conceptual positions around the property)
    const phases = [
        {
            phase: 1,
            title: 'Beach Club & Villas',
            position: [18.804718, -91.480],
            icon: '🏖️',
            status: 'Planning'
        },
        {
            phase: 2,
            title: 'Resort Core',
            position: [18.805, -91.481058],
            icon: '🏨',
            status: '2027'
        },
        {
            phase: 3,
            title: 'Marina & Expansion',
            position: [18.804718, -91.482],
            icon: '⚓',
            status: '2028+'
        }
    ];

    phases.forEach(phase => {
        const phaseIcon = L.divIcon({
            className: 'phase-marker',
            html: `
                <div class="phase-marker-content">
                    <span class="phase-icon">${phase.icon}</span>
                    <span class="phase-number">P${phase.phase}</span>
                </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        L.marker(phase.position, { icon: phaseIcon })
            .addTo(map)
            .bindPopup(`
                <div class="map-popup">
                    <h4>Phase ${phase.phase}</h4>
                    <p><strong>${phase.title}</strong></p>
                    <p>Status: ${phase.status}</p>
                </div>
            `);
    });

    // Add scale control
    L.control.scale({ imperial: true, metric: true }).addTo(map);

    // Fit bounds to show property and nearby airports
    const bounds = L.latLngBounds([
        propertyCoords,
        airports[0].coords,
        airports[1].coords
    ]);
    
    // Adjust map view to show all markers with padding
    setTimeout(() => {
        map.fitBounds(bounds, { padding: [50, 50] });
        // Then zoom in a bit to focus on property
        setTimeout(() => {
            map.setView(propertyCoords, 13);
        }, 500);
    }, 500);

    // Add interactive phase cards click handlers
    const phaseCards = document.querySelectorAll('.phase-card');
    phaseCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Highlight clicked card
            phaseCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Zoom to corresponding phase on map
            if (phases[index]) {
                map.setView(phases[index].position, 15);
                // Open popup for that phase
                const markers = [];
                map.eachLayer(layer => {
                    if (layer instanceof L.Marker && layer.getPopup) {
                        markers.push(layer);
                    }
                });
            }
        });
    });

    console.log('✅ Interactive Property Map initialized');
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupGalleryFilters();
    
    // Initialize map after a short delay to ensure DOM is fully loaded
    setTimeout(() => {
        initPropertyMap();
    }, 100);
});
