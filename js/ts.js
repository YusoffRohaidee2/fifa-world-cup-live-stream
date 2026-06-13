// TS Stream Reader Core
function Stream(url) {
    this.url = url;
    this.buffer = null;
    this.position = 0;
}

Stream.prototype.load = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, true);
    xhr.responseType = 'arraybuffer';
    
    var self = this;
    xhr.onload = function() {
        if (xhr.status === 200) {
            self.buffer = new Uint8Array(xhr.response);
            callback(true);
        } else {
            callback(false);
        }
    };
    xhr.onerror = function() {
        callback(false);
    };
    xhr.send();
};

Stream.prototype.readByte = function() {
    if (this.position >= this.buffer.length) return -1;
    return this.buffer[this.position++];
};
