// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica que la función L2Dwidget esté disponible (cargada desde el CDN)
    if (typeof L2Dwidget !== 'undefined') {
        try {
            L2Dwidget.init({
                "model": {
                    jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json", // Cambia aquí por la URL de tu modelo
                    "scale": 1
                },
                "display": {
                    "superSample": 2,
                    "width": 150,
                    "height": 220,
                    "position": "right",
                    "hOffset": 0,
                    "vOffset": -20
                },
                "mobile": { "show": false },
                "react": { "opacity": 0.8 }
            });
            console.log("Live2D widget initialized successfully!");
        } catch (error) {
            console.error("Error initializing Live2D widget:", error);
        }
    } else {
        console.warn('L2Dwidget is not defined. Check if the CDN script is loaded correctly.');
    }
});