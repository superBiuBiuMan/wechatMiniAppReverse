(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "0e34": function(e, t, a) {
        var o = a("caa9");
        a.n(o).a;
    },
    "4a33": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), a.push.apply(a, o);
                }
                return a;
            }
            function n(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            a("aadd");
            var r = t(a("e9c0")), l = t(a("66fd")), c = t(a("4f6d"));
            r.default.init({
                appKey: "5f6f2aa580455950e497f5d2",
                useOpenid: !1,
                autoGetOpenid: !1,
                debug: !0
            }), r.default.install = function(e) {
                e.prototype.$uma = r.default;
            }, l.default.config.productionTip = !1, l.default.use(r.default), c.default.mpType = "app", 
            e(new l.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach(function(t) {
                        n(e, t, a[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return e;
            }({}, c.default))).$mount();
        }).call(this, a("543d").createApp);
    },
    "4f6d": function(e, t, a) {
        a.r(t);
        var o = a("fdde");
        for (var n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        a("0e34");
        var r = a("f0c5"), l = Object(r.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = l.exports;
    },
    caa9: function(e, t, a) {},
    e082: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, function(e) {
                e && e.__esModule;
            }(a("66fd"));
            var o = e.getSystemInfoSync(), n = o.windowHeight, r = o.statusBarHeight, l = {
                globalData: {
                    IS_ANDROID: "android" == o.platform,
                    windowHeight: n,
                    statusBarHeight: r,
                    SHOW_TIP: !1,
                    duration: 20,
                    cropImageFilePath: "",
                    rapaintAfterCrop: !1,
                    PAGE_BG_COLOR: "#C12928",
                    enableSecurityCheck: !0,
                    userAvatarUrl: null,
                    userAvatarFilePath: null,
                    avatarSavedTempPath: null,
                    rewardedVideoAdShowAll: !1
                },
                onLaunch: function() {
                    console.log("App Launch"), wx.cloud ? wx.cloud.init({
                        traceUser: !0
                    }) : console.error("请使用 2.2.3 或以上的基础库以使用云能力"), wx.cloud.database({
                        env: "avatar-editor-ilci5",
                        traceUser: !0
                    }).collection("app_config").doc("mp_launch_config_doc").get().then(function(e) {
                        getApp().globalData.enableSecurityCheck = e.data.enableSecurityCheck, getApp().globalData.rewardedVideoAdShowAll = e.data.rewardedVideoAdShowAll, 
                        console.log("get app config enableSecurityCheck", getApp().globalData.enableSecurityCheck), 
                        console.log("get app config rewardedVideoAdShowAll", getApp().globalData.rewardedVideoAdShowAll);
                    });
                },
                onShow: function() {
                    console.log("App Show");
                    var t = e.getStorageSync("PLUG-ADD-MYAPP-KEY");
                    if (console.log("cache", t), !t) {
                        this.globalData.SHOW_TIP = !0;
                        var a = this;
                        console.log("SHOW_TIP", a.globalData.SHOW_TIP), setTimeout(function() {
                            a.globalData.SHOW_TIP = !1;
                        }, 1e3 * a.globalData.duration);
                    }
                },
                onHide: function() {
                    console.log("App Hide");
                }
            };
            t.default = l;
        }).call(this, a("543d").default);
    },
    fdde: function(e, t, a) {
        a.r(t);
        var o = a("e082"), n = a.n(o);
        for (var r in o) "default" !== r && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = n.a;
    }
}, [ [ "4a33", "common/runtime", "common/vendor" ] ] ]);