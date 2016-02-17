;(function(){
    var agent = window.navigator.userAgent.toLowerCase();
    var doc = window.document;
    var dpr = window.devicePixelRatio;
    var width = doc.documentElement.getBoundingClientRect().width;
    var dpr = /iphone/g.test(agent) || /ipad/g.test(agent) ? "dpr"+dpr : "dpr1";
    var meta = doc.createElement("meta");

    doc.documentElement.classList.add(dpr)
    doc.documentElement.classList.add(/android/g.test(agent) ? "and" : "ios")
    doc.documentElement.style.fontSize = width/10 + "px";
})(window)
