// Main Player Controller
function TSPlayer(stream, isLive, path, loop, width, height, callback, audioId) {
    this.stream = stream;
    this.isLive = isLive;
    this.callback = callback;
    this.audioElement = document.getElementById(audioId);
    
    // Cipta element kanvas secara dinamik untuk paparan video TS
    this.canvas = document.createElement('canvas');
    this.canvas.width = width || 854;
    this.canvas.height = height || 480;
    
    this.canvasContext = new YUVWebGLCanvas(this.canvas);
    this.decoder = new Decoder();
}

TSPlayer.prototype.play = function() {
    var self = this;
    this.stream.load(function(success) {
        if (success) {
            if (self.callback) self.callback(true);
            console.log("TS Core Engine: Berjaya memuat naik strim.");
            // Jalankan loop pembacaan paket video di sini
        } else {
            if (self.callback) self.callback(false);
            console.error("TS Core Engine: Gagal membaca punca strim.");
        }
    });
};

TSPlayer.prototype.stop = function() {
    console.log("TS Player dihentikan.");
    if (this.audioElement) {
        this.audioElement.pause();
    }
};
