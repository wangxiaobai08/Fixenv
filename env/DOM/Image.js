Image = function Image() {
    return new HTMLImageElement(myVm.memory.$createObj_key);
}; myVm.safefunction(Image);

; (function () {
    Image.prototype = HTMLImageElement.prototype;
})();
