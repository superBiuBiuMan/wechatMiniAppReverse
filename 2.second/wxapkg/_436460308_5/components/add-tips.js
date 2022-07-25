(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/add-tips" ], {
    "07e8": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "add-tips",
                data: function() {
                    return {
                        SHOW_TOP: !0,
                        SHOW_MODAL: !1
                    };
                },
                props: {
                    text: {
                        type: String,
                        default: "点击「添加小程序」，下次访问更便捷"
                    },
                    duration: {
                        type: Number,
                        default: 5
                    },
                    statusBarHeight: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    showModal: function() {
                        this.SHOW_MODAL = !0, this.SHOW_TOP = !1;
                    },
                    okHandler: function() {
                        this.SHOW_MODAL = !1, t.setStorage({
                            key: "PLUG-ADD-MYAPP-KEY",
                            data: +new Date()
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    "8e20": function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "8f3f": function(t, n, e) {
        e.r(n);
        var a = e("8e20"), o = e("a9e5");
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        e("ec62");
        var u = e("f0c5"), r = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = r.exports;
    },
    a9e5: function(t, n, e) {
        e.r(n);
        var a = e("07e8"), o = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = o.a;
    },
    c176: function(t, n, e) {},
    ec62: function(t, n, e) {
        var a = e("c176");
        e.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/add-tips-create-component", {
    "components/add-tips-create-component": function(t, n, e) {
        e("543d").createComponent(e("8f3f"));
    }
}, [ [ "components/add-tips-create-component" ] ] ]);