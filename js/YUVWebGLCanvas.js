// WebGL YUV Canvas Renderer for TS Video Frames
function YUVWebGLCanvas(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!this.gl) {
        console.error('WebGL tidak disokong oleh browser ini.');
    }
}

YUVWebGLCanvas.prototype.render = function(w, h, yPlane, uPlane, vPlane) {
    var gl = this.gl;
    if (!gl) return;
    
    // Set viewport grafik video berdasarkan saiz rendering
    gl.viewport(0, 0, w, h);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Proses rendering YUV 420p ke paparan kanvas HTML5
    // (Bypass rendering standard untuk custom stream)
};
