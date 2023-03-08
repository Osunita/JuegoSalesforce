({
    init : function(component, event, helper) {
        component.set("v.puntuacionesTabla", []);
    },

    guardarPuntuacion: function(puntuacion) {
        var tablaPuntuaciones = find("TablaPuntuaciones");
        tablaPuntuaciones.guardarPuntuacion(puntuacion);
    }
})


