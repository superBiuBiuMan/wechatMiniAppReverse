(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/crop/crop" ], {
    "2c89": function(t, e, c) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            c("aadd"), e(c("66fd")), t(e(c("e0b6")).default);
        }).call(this, c("543d").createPage);
    },
    "62aa": function(t, e, c) {},
    "7a79": function(t, e, c) {
        c.d(e, "b", function() {
            return o;
        }), c.d(e, "c", function() {
            return a;
        }), c.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    a1ad: function(t, e, c) {
        c.r(e);
        var o = c("a96b"), a = c.n(o);
        for (var r in o) "default" !== r && function(t) {
            c.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    },
    a951: function(t, e, c) {
        var o = c("62aa");
        c.n(o).a;
    },
    a96b: function(t, e, c) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var c = t.getSystemInfoSync(), o = c.screenWidth, a = c.screenHeight - 80;
            console.log("SCREEN_HEIGHT", a);
            var r = o.toFixed(3) / a.toFixed(3);
            console.log("SCREEN_RATIO", r), c.pixelRatio;
            var i, n, s, u, p, h, d, l, g, f, m, v = 100, W = c.screenWidth, I = {
                data: function() {
                    return {
                        windowHeight: 0,
                        name: "薛大宝",
                        imageSrc: "https://img-cdn-qiniu.dcloud.net.cn/demo_crop.jpg",
                        isShowImg: !1,
                        cropperInitW: o,
                        cropperInitH: o,
                        cropperW: o,
                        cropperH: o,
                        cropperL: 0,
                        cropperT: 0,
                        transL: 0,
                        transT: 0,
                        scaleP: 0,
                        imageW: 0,
                        imageH: 0,
                        cropBoxW: o,
                        cutL: 0,
                        cutT: 0,
                        cutB: o,
                        cutR: "100%",
                        qualityWidth: W,
                        innerAspectRadio: 1
                    };
                },
                onLoad: function(t) {
                    console.log("onLoad"), console.log("option.tempFilePath", t.tempFilePath), this.getImageFromFront(t.tempFilePath);
                },
                onReady: function() {},
                onShow: function() {
                    this.windowHeight = getApp().globalData.WINDOW_HEIGHT;
                },
                methods: {
                    setData: function(t) {
                        var e = this;
                        Object.keys(t).forEach(function(c) {
                            e.$set(e.$data, c, t[c]);
                        });
                    },
                    getImageFromFront: function(e) {
                        var c = this;
                        t.getImageInfo({
                            src: e,
                            success: function(t) {
                                c._adjustParameters(t, c);
                            }
                        }), c.loadAndShowImage(e);
                    },
                    cancel: function() {
                        t.navigateBack({
                            delta: 1
                        });
                    },
                    chooseImage: function() {
                        var e = this;
                        t.chooseImage({
                            success: function(c) {
                                t.getImageInfo({
                                    src: c.tempFilePaths[0],
                                    success: function(t) {
                                        e._adjustParameters(t, e);
                                    }
                                });
                            }
                        });
                    },
                    loadAndShowImage: function(t) {
                        this.setData({
                            imageSrc: t
                        }), this.loadImage(t);
                    },
                    _adjustParameters: function(t, e) {
                        var c = t.width, a = t.height;
                        c < a ? (e.cropperW = o, e.cropperH = a.toFixed(3) / c.toFixed(3) * o) : (e.cropperH = o, 
                        e.cropperW = c.toFixed(3) / a.toFixed(3) * o), e.cropperH > o ? (e.cropperH = o, 
                        e.cropperW = c.toFixed(3) / a.toFixed(3) * o, e.cropBoxW = e.cropperW, e.cropperInitW = e.cropperW, 
                        e.cropperInitH = e.cropperH) : e.cropperW > o && (e.cropperW = o, e.cropperH = a.toFixed(3) / c.toFixed(3) * o, 
                        e.cropBoxW = e.cropperH, e.cropperInitW = e.cropperW, e.cropperInitH = e.cropperH), 
                        console.log(t.width), console.log(t.height);
                    },
                    loadImage: function(e) {
                        var c = this;
                        t.showLoading({
                            title: "加载中..."
                        }), t.getImageInfo({
                            src: e,
                            success: function(e) {
                                g = e.width / e.height, console.log("IMG_RATIO", g), g >= 1 ? (f = o, m = o / g) : (f = o * g, 
                                m = o);
                                var a = f > m ? f : m;
                                if (v = a > v ? v : a, g >= 1) {
                                    var r = Math.ceil((o - c.cropBoxW) / 2), i = r;
                                    c.setData({
                                        cropperW: o,
                                        cropperH: o / g,
                                        cropperL: Math.ceil((o - o) / 2),
                                        cropperT: Math.ceil((o - o / g) / 2),
                                        cutL: r,
                                        cutT: 0,
                                        cutR: i,
                                        cutB: 0,
                                        imageW: f,
                                        imageH: m,
                                        scaleP: f / o,
                                        qualityWidth: W,
                                        innerAspectRadio: g
                                    });
                                } else {
                                    var n = Math.ceil((o * g - o * g) / 2), s = n, u = Math.ceil((o - c.cropBoxW) / 2), p = u;
                                    c.setData({
                                        cropperW: o * g,
                                        cropperH: o,
                                        cropperL: Math.ceil((o - o * g) / 2),
                                        cropperT: Math.ceil((o - o) / 2),
                                        cutL: n,
                                        cutT: u,
                                        cutR: s,
                                        cutB: p,
                                        imageW: f,
                                        imageH: m,
                                        scaleP: f / o,
                                        qualityWidth: W,
                                        innerAspectRadio: g
                                    });
                                }
                                c.setData({
                                    isShowImg: !0
                                }), t.hideLoading();
                            }
                        });
                    },
                    contentStartMove: function(t) {
                        console.log("contentStartMove"), i = t.touches[0].pageX, n = t.touches[0].pageY;
                    },
                    contentMoveing: function(t) {
                        console.log("contentMoveing");
                        var e = 1 * (i - t.touches[0].pageX), c = 1 * (n - t.touches[0].pageY);
                        e > 0 ? this.cutL - e < 0 && (e = this.cutL) : this.cutR + e < 0 && (e = -this.cutR), 
                        c > 0 ? this.cutT - c < 0 && (c = this.cutT) : this.cutB + c < 0 && (c = -this.cutB), 
                        this.setData({
                            cutL: this.cutL - e,
                            cutT: this.cutT - c,
                            cutR: this.cutR + e,
                            cutB: this.cutB + c
                        }), i = t.touches[0].pageX, n = t.touches[0].pageY;
                    },
                    contentTouchEnd: function() {
                        console.log("contentTouchEnd");
                    },
                    cropImage: function() {
                        var e = this;
                        t.showLoading({
                            title: "图片生成中..."
                        });
                        var c = t.createCanvasContext("myCanvas");
                        c.drawImage(e.imageSrc, 0, 0, f, m), c.draw(!0, function() {
                            var c = (e.cropperW - e.cutL - e.cutR) / e.cropperW * f, o = (e.cropperH - e.cutT - e.cutB) / e.cropperH * m;
                            g > 1 ? c = o : o = c;
                            var a = e.cutL / e.cropperW * f, r = e.cutT / e.cropperH * m;
                            console.log("IMG_REAL_H", m), t.canvasToTempFilePath({
                                x: a,
                                y: r,
                                width: c,
                                height: o,
                                destWidth: 3 * c,
                                destHeight: 3 * o,
                                quality: .5,
                                canvasId: "myCanvas",
                                success: function(e) {
                                    t.hideLoading(), getApp().globalData.cropImageFilePath = e.tempFilePath, getApp().globalData.rapaintAfterCrop = !0, 
                                    t.navigateBack({
                                        delta: 1
                                    });
                                }
                            });
                        });
                    },
                    dragStart: function(t) {
                        s = t.touches[0].pageX, u = t.touches[0].pageY, p = this.cutL, d = this.cutR, l = this.cutB, 
                        h = this.cutT;
                    },
                    dragMove: function(t) {
                        switch (t.target.dataset.drag) {
                          case "right":
                            var e = 1 * (s - t.touches[0].pageX);
                            d + e < 0 && (e = -d), this.setData({
                                cutR: d + e
                            });
                            break;

                          case "left":
                            e = 1 * (s - t.touches[0].pageX), p - e < 0 && (e = p), p - e > this.cropperW - this.cutR && (e = p - (this.cropperW - this.cutR)), 
                            this.setData({
                                cutL: p - e
                            });
                            break;

                          case "top":
                            e = 1 * (u - t.touches[0].pageY), h - e < 0 && (e = h), h - e > this.cropperH - this.cutB && (e = h - (this.cropperH - this.cutB)), 
                            this.setData({
                                cutT: h - e
                            });
                            break;

                          case "bottom":
                            e = 1 * (u - t.touches[0].pageY), l + e < 0 && (e = -l), this.setData({
                                cutB: l + e
                            });
                            break;

                          case "rightBottom":
                            var c = 1 * (s - t.touches[0].pageX), o = 1 * (u - t.touches[0].pageY);
                            l + o < 0 && (o = -l), d + c < 0 && (c = -d);
                            var a = l + o, r = d + c;
                            this.setData({
                                cutB: a,
                                cutR: r
                            });
                        }
                    }
                }
            };
            e.default = I;
        }).call(this, c("543d").default);
    },
    e0b6: function(t, e, c) {
        c.r(e);
        var o = c("7a79"), a = c("a1ad");
        for (var r in a) "default" !== r && function(t) {
            c.d(e, t, function() {
                return a[t];
            });
        }(r);
        c("a951");
        var i = c("f0c5"), n = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = n.exports;
    }
}, [ [ "2c89", "common/runtime", "common/vendor" ] ] ]);