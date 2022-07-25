(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/save/save-done" ], {
    1206: function(a, t, e) {
        var n = e("3ab4");
        e.n(n).a;
    },
    2963: function(a, t, e) {
        e.r(t);
        var n = e("46d7"), o = e.n(n);
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        t.default = o.a;
    },
    "3ab4": function(a, t, e) {},
    "46d7": function(a, t, e) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                components: {},
                data: function() {
                    return {
                        statusBarHeight: 0,
                        windowHeight: 0,
                        isAndroid: getApp().globalData.IS_ANDROID,
                        modalName: null,
                        avatarImage: getApp().globalData.avatarSavedTempPath
                    };
                },
                computed: {},
                onLoad: function(a) {
                    this.windowHeight = getApp().globalData.windowHeight, console.log("Save Done onLoad");
                },
                onReady: function() {},
                onShow: function() {
                    console.log("onShow"), getApp().globalData.rapaintAfterCrop && (getApp().globalData.rapaintAfterCrop = !1, 
                    this.avatarPath = getApp().globalData.cropImageFilePath, this.paint());
                },
                onShareAppMessage: function() {
                    return {
                        title: "我刚刚换上了国庆头像，你也来领取一个吧",
                        desc: "领取你的国庆头像，为祖国加油",
                        imageUrl: "/static/image/share_img.png",
                        path: "/pages/editor/editor",
                        success: function(a) {
                            console.log(a);
                        }
                    };
                },
                methods: {
                    paint: function() {},
                    adLoad: function() {
                        this.$uma.trackEvent("avatar-save-videoAd-load");
                    },
                    adError: function() {
                        this.$uma.trackEvent("avatar-save-videoAd-error");
                    },
                    showTips: function() {
                        console.log("tips"), this.modalName = "tips";
                    },
                    makeAgain: function(t) {
                        a.navigateBack(), this.$uma.trackEvent("avatar-save-make-again");
                    },
                    share: function(t) {
                        this.$uma.trackEvent("avatar-save-share"), a.showShareMenu({
                            withShareTicket: !0,
                            menus: [ "shareAppMessage", "shareTimeline" ]
                        });
                    },
                    showModal: function(a) {
                        this.modalName = a.currentTarget.dataset.target;
                    },
                    hideModal: function(a) {
                        this.modalName = null;
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    "53be": function(a, t, e) {
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var n = function() {
            var a = this;
            a.$createElement;
            a._self._c;
        }, o = [];
    },
    9575: function(a, t, e) {
        e.r(t);
        var n = e("53be"), o = e("2963");
        for (var i in o) "default" !== i && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(i);
        e("1206");
        var r = e("f0c5"), u = Object(r.a)(o.default, n.b, n.c, !1, null, "19ecd09c", null, !1, n.a, void 0);
        t.default = u.exports;
    },
    aae2: function(a, t, e) {
        (function(a) {
            function t(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            e("aadd"), t(e("66fd")), a(t(e("9575")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "aae2", "common/runtime", "common/vendor" ] ] ]);