var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "473e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.mockAssetsList = e.mockCategoryList = void 0;
        var r = [ {
            id: "hot",
            name: "热门"
        }, {
            id: "guoqing",
            name: "国庆"
        }, {
            id: "zhongqiu",
            name: "中秋"
        } ];
        e.mockCategoryList = r;
        var o = {
            hot: [ {
                name: "",
                src: "frame/guoqing/2.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/3.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/5.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/4.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/6.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/1.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/2.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/4.png",
                type: "frame"
            } ],
            guoqing: [ {
                name: "",
                src: "frame/guoqing/1.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/2.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/3.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/4.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/5.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/6.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/7.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/8.png",
                type: "frame"
            } ],
            zhongqiu: [ {
                name: "",
                src: "frame/zhongqiu/1.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/2.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/3.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/zhongqiu/4.png",
                type: "frame"
            } ]
        };
        e.mockAssetsList = o;
    },
    "543d": function(e, n, r) {
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    f(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function a(t, e) {
            return u(t) || c(t, e) || y(t, e) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function c(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    o = !0, i = t;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function u(t) {
            if (Array.isArray(t)) return t;
        }
        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function p(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function d(t, e, n) {
            return e && l(t.prototype, e), n && l(t, n), t;
        }
        function h(t) {
            return g(t) || _(t) || y(t) || v();
        }
        function v() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function y(t, e) {
            if (t) {
                if ("string" == typeof t) return m(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0;
            }
        }
        function _(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function g(t) {
            if (Array.isArray(t)) return m(t);
        }
        function m(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function b(t) {
            return "function" == typeof t;
        }
        function O(t) {
            return "string" == typeof t;
        }
        function S(t) {
            return "[object Object]" === Mt.call(t);
        }
        function A(t, e) {
            return Vt.call(t, e);
        }
        function w() {}
        function E(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n));
            };
        }
        function k(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
            return n ? $(n) : n;
        }
        function $(t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e;
        }
        function I(t, e) {
            var n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
        }
        function x(t, e) {
            Object.keys(e).forEach(function(n) {
                -1 !== Bt.indexOf(n) && b(e[n]) && (t[n] = k(t[n], e[n]));
            });
        }
        function T(t, e) {
            t && e && Object.keys(e).forEach(function(n) {
                -1 !== Bt.indexOf(n) && b(e[n]) && I(t[n], e[n]);
            });
        }
        function P(t) {
            return function(e) {
                return t(e) || e;
            };
        }
        function j(e) {
            return !!e && ("object" === (void 0 === e ? "undefined" : t(e)) || "function" == typeof e) && "function" == typeof e.then;
        }
        function C(t, e) {
            for (var n = !1, r = 0; r < t.length; r++) {
                var o = t[r];
                if (n) n = Promise.resolve(P(o)); else {
                    var i = o(e);
                    if (j(i) && (n = Promise.resolve(i)), !1 === i) return {
                        then: function() {}
                    };
                }
            }
            return n || {
                then: function(t) {
                    return t(e);
                }
            };
        }
        function N(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(n) {
                if (Array.isArray(t[n])) {
                    var r = e[n];
                    e[n] = function(e) {
                        C(t[n], e).then(function(t) {
                            return b(r) && r(t) || t;
                        });
                    };
                }
            }), e;
        }
        function R(t, e) {
            var n = [];
            Array.isArray(Kt.returnValue) && n.push.apply(n, h(Kt.returnValue));
            var r = Gt[t];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, h(r.returnValue)), n.forEach(function(t) {
                e = t(e) || e;
            }), e;
        }
        function D(t) {
            var e = Object.create(null);
            Object.keys(Kt).forEach(function(t) {
                "returnValue" !== t && (e[t] = Kt[t].slice());
            });
            var n = Gt[t];
            return n && Object.keys(n).forEach(function(t) {
                "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]));
            }), e;
        }
        function U(t, e, n) {
            for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
            var a = D(t);
            return a && Object.keys(a).length ? Array.isArray(a.invoke) ? C(a.invoke, n).then(function(t) {
                return e.apply(void 0, [ N(a, t) ].concat(o));
            }) : e.apply(void 0, [ N(a, n) ].concat(o)) : e.apply(void 0, [ n ].concat(o));
        }
        function L(t) {
            return Wt.test(t) && -1 === Jt.indexOf(t);
        }
        function M(t) {
            return zt.test(t) && -1 === Yt.indexOf(t);
        }
        function V(t) {
            return Xt.test(t) && "onPush" !== t;
        }
        function F(t) {
            return t.then(function(t) {
                return [ null, t ];
            }).catch(function(t) {
                return [ t ];
            });
        }
        function q(t) {
            return !(L(t) || M(t) || V(t));
        }
        function B(t, e) {
            return q(t) ? function() {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return b(n.success) || b(n.fail) || b(n.complete) ? R(t, U.apply(void 0, [ t, e, n ].concat(o))) : R(t, F(new Promise(function(r, i) {
                    U.apply(void 0, [ t, e, Object.assign({}, n, {
                        success: r,
                        fail: i
                    }) ].concat(o));
                })));
            } : e;
        }
        function K() {
            var t = wx.getSystemInfoSync(), e = t.platform, n = t.pixelRatio, r = t.windowWidth;
            ee = r, ne = n, te = "ios" === e;
        }
        function G(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = new ie(++ce, t);
            return e && (ae[ce] = n, se.push(n)), n;
        }
        function H(t) {
            if (t) {
                var e = ae[t];
                return delete ae[t], e;
            }
            return se.shift();
        }
        function z(t) {
            for (var e = getCurrentPages(), n = e.length; n--; ) {
                var r = e[n];
                if (r.$page && r.$page.fullPath === t) return n;
            }
            return -1;
        }
        function W(t) {
            if (t.safeArea) {
                var e = t.safeArea;
                t.safeAreaInsets = {
                    top: e.top,
                    left: e.left,
                    right: t.windowWidth - e.right,
                    bottom: t.windowHeight - e.bottom
                };
            }
        }
        function J(t, e, n) {
            return function(r) {
                return e(X(t, r, n));
            };
        }
        function Y(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (S(e)) {
                var i = !0 === o ? e : {};
                for (var a in b(n) && (n = n(e, i) || {}), e) if (A(n, a)) {
                    var s = n[a];
                    b(s) && (s = s(e[a], e, i)), s ? O(s) ? i[s] = e[a] : S(s) && (i[s.name ? s.name : a] = s.value) : console.warn("微信小程序 ".concat(t, "暂不支持").concat(a));
                } else -1 !== le.indexOf(a) ? b(e[a]) && (i[a] = J(t, e[a], r)) : o || (i[a] = e[a]);
                return i;
            }
            return b(e) && (e = J(t, e, r)), e;
        }
        function X(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return b(ue.returnValue) && (e = ue.returnValue(t, e)), Y(t, e, n, {}, r);
        }
        function Q(t, e) {
            if (A(ue, t)) {
                var n = ue[t];
                return n ? function(e, r) {
                    var o = n;
                    b(n) && (o = n(e));
                    var i = [ e = Y(t, e, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r), b(o.name) ? t = o.name(e) : O(o.name) && (t = o.name);
                    var a = wx[t].apply(wx, i);
                    return M(t) ? X(t, a, o.returnValue, L(t)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(t));
                };
            }
            return e;
        }
        function Z(t) {
            return function(e) {
                var n = e.fail, r = e.complete, o = {
                    errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
                };
                b(n) && n(o), b(r) && r(o);
            };
        }
        function tt(t, e, n) {
            return t[e].apply(t, n);
        }
        function et(t) {
            if (wx.canIUse("nextTick")) {
                var e = t.triggerEvent;
                t.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return e.apply(t, [ Se(n) ].concat(o));
                };
            }
        }
        function nt(t, e) {
            var n = e[t];
            e[t] = n ? function() {
                et(this);
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return n.apply(this, e);
            } : function() {
                et(this);
            };
        }
        function rt(t, e) {
            var n = t.$mp[t.mpType];
            e.forEach(function(e) {
                A(n, e) && (t[e] = n[e]);
            });
        }
        function ot(t, e) {
            if (!e) return !0;
            if (Lt.default.options && Array.isArray(Lt.default.options[t])) return !0;
            if (e = e.default || e, b(e)) return !!b(e.extendOptions[t]) || !!(e.super && e.super.options && Array.isArray(e.super.options[t]));
            if (b(e[t])) return !0;
            var n = e.mixins;
            return Array.isArray(n) ? !!n.find(function(e) {
                return ot(t, e);
            }) : void 0;
        }
        function it(t, e, n) {
            e.forEach(function(e) {
                ot(e, n) && (t[e] = function(t) {
                    return this.$vm && this.$vm.__call_hook(e, t);
                });
            });
        }
        function at(t, e) {
            var n;
            return e = e.default || e, n = b(e) ? e : t.extend(e), e = n.options, [ n, e ];
        }
        function st(t, e) {
            if (Array.isArray(e) && e.length) {
                var n = Object.create(null);
                e.forEach(function(t) {
                    n[t] = !0;
                }), t.$scopedSlots = t.$slots = n;
            }
        }
        function ct(t, e) {
            var n = (t = (t || "").split(",")).length;
            1 === n ? e._$vueId = t[0] : 2 === n && (e._$vueId = t[0], e._$vuePid = t[1]);
        }
        function ut(t, e) {
            var n = t.data || {}, r = t.methods || {};
            if ("function" == typeof n) try {
                n = n.call(e);
            } catch (t) {
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (t) {}
            return S(n) || (n = {}), Object.keys(r).forEach(function(t) {
                -1 !== e.__lifecycle_hooks__.indexOf(t) || A(n, t) || (n[t] = r[t]);
            }), n;
        }
        function ft(t) {
            return function(e, n) {
                this.$vm && (this.$vm[t] = e);
            };
        }
        function pt(t, e) {
            var n = t.behaviors, r = t.extends, o = t.mixins, i = t.props;
            i || (t.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(t) {
                a.push(t.replace("uni://", "wx".concat("://"))), "uni://form-field" === t && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), S(r) && r.props && a.push(e({
                properties: dt(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(t) {
                S(t) && t.props && a.push(e({
                    properties: dt(t.props, !0)
                }));
            }), a;
        }
        function lt(t, e, n, r) {
            return Array.isArray(e) && 1 === e.length ? e[0] : e;
        }
        function dt(t) {
            var e = {};
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (e.vueId = {
                type: String,
                value: ""
            }, e.generic = {
                type: Object,
                value: null
            }, e.vueSlots = {
                type: null,
                value: [],
                observer: function(t, e) {
                    var n = Object.create(null);
                    t.forEach(function(t) {
                        n[t] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(t) ? t.forEach(function(t) {
                e[t] = {
                    type: null,
                    observer: ft(t)
                };
            }) : S(t) && Object.keys(t).forEach(function(n) {
                var r = t[n];
                if (S(r)) {
                    var o = r.default;
                    b(o) && (o = o()), r.type = lt(n, r.type), e[n] = {
                        type: -1 !== we.indexOf(r.type) ? r.type : null,
                        value: o,
                        observer: ft(n)
                    };
                } else {
                    var i = lt(n, r);
                    e[n] = {
                        type: -1 !== we.indexOf(i) ? i : null,
                        observer: ft(n)
                    };
                }
            }), e;
        }
        function ht(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (t) {}
            return e.stopPropagation = w, e.preventDefault = w, e.target = e.target || {}, A(e, "detail") || (e.detail = {}), 
            A(e, "markerId") && (e.detail = "object" === t(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId), 
            S(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
        }
        function vt(t, e) {
            var n = t;
            return e.forEach(function(e) {
                var r = e[0], o = e[2];
                if (r || void 0 !== o) {
                    var i, a = e[1], s = e[3];
                    Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : t.__get_value(r, n)) : i = n, 
                    Number.isInteger(i) ? n = o : a ? Array.isArray(i) ? n = i.find(function(e) {
                        return t.__get_value(a, e) === o;
                    }) : S(i) ? n = Object.keys(i).find(function(e) {
                        return t.__get_value(a, i[e]) === o;
                    }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], s && (n = t.__get_value(s, n));
                }
            }), n;
        }
        function yt(t, e, n) {
            var r = {};
            return Array.isArray(e) && e.length && e.forEach(function(e, o) {
                "string" == typeof e ? e ? "$event" === e ? r["$" + o] = n : "arguments" === e ? n.detail && n.detail.__args__ ? r["$" + o] = n.detail.__args__ : r["$" + o] = [ n ] : 0 === e.indexOf("$event.") ? r["$" + o] = t.__get_value(e.replace("$event.", ""), n) : r["$" + o] = t.__get_value(e) : r["$" + o] = t : r["$" + o] = vt(t, e);
            }), r;
        }
        function _t(t) {
            for (var e = {}, n = 1; n < t.length; n++) {
                var r = t[n];
                e[r[0]] = r[1];
            }
            return e;
        }
        function gt(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = e.currentTarget && e.currentTarget.dataset && "wx" === e.currentTarget.dataset.comType, 
            !n.length)) return a ? [ e ] : e.detail.__args__ || e.detail;
            var s = yt(t, r, e), c = [];
            return n.forEach(function(t) {
                "$event" === t ? "__set_model" !== i || o ? o && !a ? c.push(e.detail.__args__[0]) : c.push(e) : c.push(e.target.value) : Array.isArray(t) && "o" === t[0] ? c.push(_t(t)) : "string" == typeof t && A(s, t) ? c.push(s[t]) : c.push(t);
            }), c;
        }
        function mt(t, e) {
            return t === e || "regionchange" === e && ("begin" === t || "end" === t);
        }
        function bt(t) {
            for (var e = t.$parent; e && e.$parent && (e.$options.generic || e.$parent.$options.generic || e.$scope._$vuePid); ) e = e.$parent;
            return e && e.$parent;
        }
        function Ot(t) {
            var e = this, n = ((t = ht(t)).currentTarget || t.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = t.type, i = [];
            return r.forEach(function(n) {
                var r = n[0], a = n[1], s = r.charAt(0) === ke, c = (r = s ? r.slice(1) : r).charAt(0) === Ee;
                r = c ? r.slice(1) : r, a && mt(o, r) && a.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = e.$vm;
                        if (o.$options.generic && (o = bt(o) || o), "$emit" === r) return void o.$emit.apply(o, gt(e.$vm, t, n[1], n[2], s, r));
                        var a = o[r];
                        if (!b(a)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (a.once) return;
                            a.once = !0;
                        }
                        var u = gt(e.$vm, t, n[1], n[2], s, r);
                        i.push(a.apply(o, (Array.isArray(u) ? u : []).concat([ , , , , , , , , , , t ])));
                    }
                });
            }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
        }
        function St(t, e) {
            var n = e.mocks, r = e.initRefs;
            t.$options.store && (Lt.default.prototype.$store = t.$options.store), Lt.default.prototype.mpHost = "mp-weixin", 
            Lt.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = f({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    rt(this, n)));
                }
            });
            var o = {
                onLaunch: function(e) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = t, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", e), this.$vm.__call_hook("onLaunch", e));
                }
            };
            o.globalData = t.$options.globalData || {};
            var i = t.$options.methods;
            return i && Object.keys(i).forEach(function(t) {
                o[t] = i[t];
            }), it(o, $e), o;
        }
        function At(t, e) {
            for (var n, r = t.$children, o = r.length - 1; o >= 0; o--) {
                var i = r[o];
                if (i.$scope._$vueId === e) return i;
            }
            for (var a = r.length - 1; a >= 0; a--) if (n = At(r[a], e)) return n;
        }
        function wt(t) {
            return Behavior(t);
        }
        function Et() {
            return !!this.route;
        }
        function kt(t) {
            this.triggerEvent("__l", t);
        }
        function $t(t) {
            var e = t.$scope;
            Object.defineProperty(t, "$refs", {
                get: function() {
                    var t = {};
                    return e.selectAllComponents(".vue-ref").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] = e.$vm || e;
                    }), e.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] || (t[n] = []), t[n].push(e.$vm || e);
                    }), t;
                }
            });
        }
        function It(t) {
            var e, n = t.detail || t.value, r = n.vuePid, o = n.vueOptions;
            r && (e = At(this.$vm, r)), e || (e = this.$vm), o.parent = e;
        }
        function xt(t) {
            return St(t, {
                mocks: Ie,
                initRefs: $t
            });
        }
        function Tt(t) {
            Lt.default.prototype.getOpenerEventChannel = function() {
                return this.__eventChannel__ || (this.__eventChannel__ = new ie()), this.__eventChannel__;
            };
            var e = Lt.default.prototype.__call_hook;
            return Lt.default.prototype.__call_hook = function(t, n) {
                return "onLoad" === t && n && n.__id__ && (this.__eventChannel__ = H(n.__id__), 
                delete n.__id__), e.call(this, t, n);
            }, App(xt(t)), t;
        }
        function Pt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : je, n = t ? Object.keys(t).map(function(n) {
                var r = t[n];
                if (void 0 === r) return "";
                if (null === r) return e(n);
                if (Array.isArray(r)) {
                    var o = [];
                    return r.forEach(function(t) {
                        void 0 !== t && (null === t ? o.push(e(n)) : o.push(e(n) + "=" + e(t)));
                    }), o.join("&");
                }
                return e(n) + "=" + e(r);
            }).filter(function(t) {
                return t.length > 0;
            }).join("&") : null;
            return n ? "?".concat(n) : "";
        }
        function jt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.isPage, r = e.initRelation, o = a(at(Lt.default, t), 2), s = o[0], c = o[1], u = i({
                multipleSlots: !0,
                addGlobalClass: !0
            }, c.options || {});
            c["mp-weixin"] && c["mp-weixin"].options && Object.assign(u, c["mp-weixin"].options);
            var f = {
                options: u,
                data: ut(c, Lt.default.prototype),
                behaviors: pt(c, wt),
                properties: dt(c.props, !1, c.__file),
                lifetimes: {
                    attached: function() {
                        var t = this.properties, e = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: t
                        };
                        ct(t.vueId, this), r.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: e
                        }), this.$vm = new s(e), st(this.$vm, t.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageShow", t);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageResize", t);
                    }
                },
                methods: {
                    __l: It,
                    __e: Ot
                }
            };
            return c.externalClasses && (f.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(t) {
                f.methods[t] = function(e) {
                    return this.$vm[t](e);
                };
            }), n ? f : [ f, s ];
        }
        function Ct(t) {
            return jt(t, {
                isPage: Et,
                initRelation: kt
            });
        }
        function Nt(t, e) {
            e.isPage, e.initRelation;
            var n = Ct(t);
            return it(n.methods, Ce, t), n.methods.onLoad = function(t) {
                this.options = t;
                var e = Object.assign({}, t);
                delete e.__id__, this.$page = {
                    fullPath: "/" + (this.route || this.is) + Pt(e)
                }, this.$vm.$mp.query = t, this.$vm.__call_hook("onLoad", t);
            }, n;
        }
        function Rt(t) {
            return Nt(t, {
                isPage: Et,
                initRelation: kt
            });
        }
        function Dt(t) {
            return Component(Rt(t));
        }
        function Ut(t) {
            return Component(Ct(t));
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.createApp = Tt, n.createComponent = Ut, n.createPage = Dt, n.default = void 0;
        var Lt = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r("66fd")), Mt = Object.prototype.toString, Vt = Object.prototype.hasOwnProperty, Ft = /-(\w)/g, qt = E(function(t) {
            return t.replace(Ft, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }), Bt = [ "invoke", "success", "fail", "complete", "returnValue" ], Kt = {}, Gt = {}, Ht = {
            returnValue: function(t) {
                return j(t) ? t.then(function(t) {
                    return t[1];
                }).catch(function(t) {
                    return t[0];
                }) : t;
            }
        }, zt = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, Wt = /^create|Manager$/, Jt = [ "createBLEConnection" ], Yt = [ "createBLEConnection" ], Xt = /^on|^off/;
        Promise.prototype.finally || (Promise.prototype.finally = function(t) {
            var e = this.constructor;
            return this.then(function(n) {
                return e.resolve(t()).then(function() {
                    return n;
                });
            }, function(n) {
                return e.resolve(t()).then(function() {
                    throw n;
                });
            });
        });
        var Qt = 1e-4, Zt = 750, te = !1, ee = 0, ne = 0, re = {
            promiseInterceptor: Ht
        }, oe = Object.freeze({
            __proto__: null,
            upx2px: function(t, e) {
                if (0 === ee && K(), 0 === (t = Number(t))) return 0;
                var n = t / Zt * (e || ee);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + Qt)) && (n = 1 !== ne && te ? .5 : 1), 
                t < 0 ? -n : n;
            },
            addInterceptor: function(t, e) {
                "string" == typeof t && S(e) ? x(Gt[t] || (Gt[t] = {}), e) : S(t) && x(Kt, t);
            },
            removeInterceptor: function(t, e) {
                "string" == typeof t ? S(e) ? T(Gt[t], e) : delete Gt[t] : S(t) && T(Kt, t);
            },
            interceptors: re
        }), ie = function() {
            function t(e, n) {
                var r = this;
                p(this, t), this.id = e, this.listener = {}, this.emitCache = {}, n && Object.keys(n).forEach(function(t) {
                    r.on(t, n[t]);
                });
            }
            return d(t, [ {
                key: "emit",
                value: function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    var o = this.listener[t];
                    if (!o) return (this.emitCache[t] || (this.emitCache[t] = [])).push(n);
                    o.forEach(function(t) {
                        t.fn.apply(t.fn, n);
                    }), this.listener[t] = o.filter(function(t) {
                        return "once" !== t.type;
                    });
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this._addListener(t, "on", e), this._clearCache(t);
                }
            }, {
                key: "once",
                value: function(t, e) {
                    this._addListener(t, "once", e), this._clearCache(t);
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var n = this.listener[t];
                    if (n) if (e) for (var r = 0; r < n.length; ) n[r].fn === e && (n.splice(r, 1), 
                    r--), r++; else delete this.listener[t];
                }
            }, {
                key: "_clearCache",
                value: function(t) {
                    var e = this.emitCache[t];
                    if (e) for (;e.length > 0; ) this.emit.apply(this, [ t ].concat(e.shift()));
                }
            }, {
                key: "_addListener",
                value: function(t, e, n) {
                    (this.listener[t] || (this.listener[t] = [])).push({
                        fn: n,
                        type: e
                    });
                }
            } ]), t;
        }(), ae = {}, se = [], ce = 0, ue = {
            redirectTo: {
                name: function(t) {
                    return "back" === t.exists && t.delta ? "navigateBack" : "redirectTo";
                },
                args: function(t) {
                    if ("back" === t.exists && t.url) {
                        var e = z(t.url);
                        if (-1 !== e) {
                            var n = getCurrentPages().length - 1 - e;
                            n > 0 && (t.delta = n);
                        }
                    }
                }
            },
            navigateTo: {
                args: function(t, e) {
                    var n = G(t.events).id;
                    t.url && (t.url = t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + "__id__=" + n);
                },
                returnValue: function(t, e) {
                    t.eventChannel = H();
                }
            },
            previewImage: {
                args: function(t) {
                    var e = parseInt(t.current);
                    if (!isNaN(e)) {
                        var n = t.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return e < 0 ? e = 0 : e >= r && (e = r - 1), e > 0 ? (t.current = n[e], 
                            t.urls = n.filter(function(t, r) {
                                return !(r < e) || t !== n[e];
                            })) : t.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: {
                returnValue: W
            },
            getSystemInfoSync: {
                returnValue: W
            }
        }, fe = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ], pe = [], le = [ "success", "fail", "cancel", "complete" ], de = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(t) {
            de[t] = Z(t);
        });
        var he = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, ve = Object.freeze({
            __proto__: null,
            getProvider: function(t) {
                var e = t.service, n = t.success, r = t.fail, o = t.complete, i = !1;
                he[e] ? (i = {
                    errMsg: "getProvider:ok",
                    service: e,
                    provider: he[e]
                }, b(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + e + "]不存在"
                }, b(r) && r(i)), b(o) && o(i);
            }
        }), ye = function() {
            var t;
            return function() {
                return t || (t = new Lt.default()), t;
            };
        }(), _e = Object.freeze({
            __proto__: null,
            $on: function() {
                return tt(ye(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return tt(ye(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return tt(ye(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return tt(ye(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), ge = Object.freeze({
            __proto__: null
        }), me = Page, be = Component, Oe = /:/g, Se = E(function(t) {
            return qt(t.replace(Oe, "-"));
        });
        Page = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return nt("onLoad", t), me(t);
        }, Component = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return nt("created", t), be(t);
        };
        var Ae = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], we = [ String, Number, Boolean, Object, Array, null ], Ee = "~", ke = "^", $e = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], Ie = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], xe = /[!'()*]/g, Te = function(t) {
            return "%" + t.charCodeAt(0).toString(16);
        }, Pe = /%2C/g, je = function(t) {
            return encodeURIComponent(t).replace(xe, Te).replace(Pe, ",");
        }, Ce = [ "onShow", "onHide", "onUnload" ];
        Ce.push.apply(Ce, Ae), fe.forEach(function(t) {
            ue[t] = !1;
        }), pe.forEach(function(t) {
            var e = ue[t] && ue[t].name ? ue[t].name : t;
            wx.canIUse(e) || (ue[t] = !1);
        });
        var Ne = {};
        "undefined" != typeof Proxy ? Ne = new Proxy({}, {
            get: function(t, e) {
                return A(t, e) ? t[e] : oe[e] ? oe[e] : ge[e] ? B(e, ge[e]) : ve[e] ? B(e, ve[e]) : de[e] ? B(e, de[e]) : _e[e] ? _e[e] : A(wx, e) || A(ue, e) ? B(e, Q(e, wx[e])) : void 0;
            },
            set: function(t, e, n) {
                return t[e] = n, !0;
            }
        }) : (Object.keys(oe).forEach(function(t) {
            Ne[t] = oe[t];
        }), Object.keys(de).forEach(function(t) {
            Ne[t] = B(t, de[t]);
        }), Object.keys(ve).forEach(function(t) {
            Ne[t] = B(t, de[t]);
        }), Object.keys(_e).forEach(function(t) {
            Ne[t] = _e[t];
        }), Object.keys(ge).forEach(function(t) {
            Ne[t] = B(t, ge[t]);
        }), Object.keys(wx).forEach(function(t) {
            (A(wx, t) || A(ue, t)) && (Ne[t] = B(t, Q(t, wx[t])));
        })), wx.createApp = Tt, wx.createPage = Dt, wx.createComponent = Ut;
        var Re = Ne;
        n.default = Re;
    },
    "66fd": function(e, n, r) {
        r.r(n), function(e) {
            function r(t) {
                return void 0 === t || null === t;
            }
            function o(t) {
                return void 0 !== t && null !== t;
            }
            function i(t) {
                return !0 === t;
            }
            function a(t) {
                return !1 === t;
            }
            function s(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : t(e)) || "boolean" == typeof e;
            }
            function c(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : t(e));
            }
            function u(t) {
                return "[object Object]" === gn.call(t);
            }
            function f(t) {
                return "[object RegExp]" === gn.call(t);
            }
            function p(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t);
            }
            function l(t) {
                return o(t) && "function" == typeof t.then && "function" == typeof t.catch;
            }
            function d(t) {
                return null == t ? "" : Array.isArray(t) || u(t) && t.toString === gn ? JSON.stringify(t, null, 2) : String(t);
            }
            function h(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e;
            }
            function v(t, e) {
                for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()];
                } : function(t) {
                    return n[t];
                };
            }
            function y(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1);
                }
            }
            function _(t, e) {
                return On.call(t, e);
            }
            function g(t) {
                var e = Object.create(null);
                return function(n) {
                    return e[n] || (e[n] = t(n));
                };
            }
            function m(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
                return r;
            }
            function b(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function O(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && b(e, t[n]);
                return e;
            }
            function S(t, e, n) {}
            function A(t, e) {
                if (t === e) return !0;
                var n = c(t), r = c(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var o = Array.isArray(t), i = Array.isArray(e);
                    if (o && i) return t.length === e.length && t.every(function(t, n) {
                        return A(t, e[n]);
                    });
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(t), s = Object.keys(e);
                    return a.length === s.length && a.every(function(n) {
                        return A(t[n], e[n]);
                    });
                } catch (t) {
                    return !1;
                }
            }
            function w(t, e) {
                for (var n = 0; n < t.length; n++) if (A(t[n], e)) return n;
                return -1;
            }
            function E(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments));
                };
            }
            function k(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e;
            }
            function $(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function I(t) {
                if (!Nn.test(t)) {
                    var e = t.split(".");
                    return function(t) {
                        for (var n = 0; n < e.length; n++) {
                            if (!t) return;
                            t = t[e[n]];
                        }
                        return t;
                    };
                }
            }
            function x(t) {
                return "function" == typeof t && /native code/.test(t.toString());
            }
            function T(t) {
                Yn.SharedObject.targetStack.push(t), Yn.SharedObject.target = t;
            }
            function P() {
                Yn.SharedObject.targetStack.pop(), Yn.SharedObject.target = Yn.SharedObject.targetStack[Yn.SharedObject.targetStack.length - 1];
            }
            function j(t) {
                return new Xn(void 0, void 0, void 0, String(t));
            }
            function C(t) {
                var e = new Xn(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
                e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
                e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
            }
            function N(t) {
                rr = t;
            }
            function R(t, e) {
                t.__proto__ = e;
            }
            function D(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    $(t, i, e[i]);
                }
            }
            function U(t, e) {
                var n;
                if (c(t) && !(t instanceof Xn)) return _(t, "__ob__") && t.__ob__ instanceof or ? n = t.__ob__ : rr && !Gn() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new or(t)), 
                e && n && n.vmCount++, n;
            }
            function L(t, e, n, r, o) {
                var i = new Yn(), a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get, c = a && a.set;
                    s && !c || 2 !== arguments.length || (n = t[e]);
                    var u = !o && U(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = s ? s.call(t) : n;
                            return Yn.SharedObject.target && (i.depend(), u && (u.dep.depend(), Array.isArray(e) && F(e))), 
                            e;
                        },
                        set: function(e) {
                            var r = s ? s.call(t) : n;
                            e === r || e !== e && r !== r || s && !c || (c ? c.call(t, e) : n = e, u = !o && U(e), 
                            i.notify());
                        }
                    });
                }
            }
            function M(t, e, n) {
                if (Array.isArray(t) && p(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
                n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (L(r.value, e, n), r.dep.notify(), n) : (t[e] = n, 
                n);
            }
            function V(t, e) {
                if (Array.isArray(t) && p(e)) t.splice(e, 1); else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || _(t, e) && (delete t[e], n && n.dep.notify());
                }
            }
            function F(t) {
                for (var e = void 0, n = 0, r = t.length; n < r; n++) (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), 
                Array.isArray(e) && F(e);
            }
            function q(t, e) {
                if (!e) return t;
                for (var n, r, o, i = zn ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = t[n], 
                o = e[n], _(t, n) ? r !== o && u(r) && u(o) && q(r, o) : M(t, n, o));
                return t;
            }
            function B(t, e, n) {
                return n ? function() {
                    var r = "function" == typeof e ? e.call(n, n) : e, o = "function" == typeof t ? t.call(n, n) : t;
                    return r ? q(r, o) : o;
                } : e ? t ? function() {
                    return q("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
                } : e : t;
            }
            function K(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                return n ? G(n) : n;
            }
            function G(t) {
                for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                return e;
            }
            function H(t, e, n, r) {
                var o = Object.create(t || null);
                return e ? b(o, e) : o;
            }
            function z(t, e) {
                var n = t.props;
                if (n) {
                    var r, o, i, a = {};
                    if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i = An(o), 
                    a[i] = {
                        type: null
                    }); else if (u(n)) for (var s in n) o = n[s], a[i = An(s)] = u(o) ? o : {
                        type: o
                    };
                    t.props = a;
                }
            }
            function W(t, e) {
                var n = t.inject;
                if (n) {
                    var r = t.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (u(n)) for (var i in n) {
                        var a = n[i];
                        r[i] = u(a) ? b({
                            from: i
                        }, a) : {
                            from: a
                        };
                    }
                }
            }
            function J(t) {
                var e = t.directives;
                if (e) for (var n in e) {
                    var r = e[n];
                    "function" == typeof r && (e[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function Y(t, e, n) {
                function r(r) {
                    var o = ir[r] || sr;
                    s[r] = o(t[r], e[r], n, r);
                }
                if ("function" == typeof e && (e = e.options), z(e, n), W(e, n), J(e), !e._base && (e.extends && (t = Y(t, e.extends, n)), 
                e.mixins)) for (var o = 0, i = e.mixins.length; o < i; o++) t = Y(t, e.mixins[o], n);
                var a, s = {};
                for (a in t) r(a);
                for (a in e) _(t, a) || r(a);
                return s;
            }
            function X(t, e, n, r) {
                if ("string" == typeof n) {
                    var o = t[e];
                    if (_(o, n)) return o[n];
                    var i = An(n);
                    if (_(o, i)) return o[i];
                    var a = wn(i);
                    return _(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function Q(t, e, n, r) {
                var o = e[t], i = !_(n, t), a = n[t], s = nt(Boolean, o.type);
                if (s > -1) if (i && !_(o, "default")) a = !1; else if ("" === a || a === kn(t)) {
                    var c = nt(String, o.type);
                    (c < 0 || s < c) && (a = !0);
                }
                if (void 0 === a) {
                    a = Z(r, o, t);
                    var u = rr;
                    N(!0), U(a), N(u);
                }
                return a;
            }
            function Z(t, e, n) {
                if (_(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== tt(e.type) ? r.call(t) : r;
                }
            }
            function tt(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : "";
            }
            function et(t, e) {
                return tt(t) === tt(e);
            }
            function nt(t, e) {
                if (!Array.isArray(e)) return et(e, t) ? 0 : -1;
                for (var n = 0, r = e.length; n < r; n++) if (et(e[n], t)) return n;
                return -1;
            }
            function rt(t, e, n) {
                T();
                try {
                    if (e) for (var r = e; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, t, e, n)) return;
                        } catch (t) {
                            it(t, r, "errorCaptured hook");
                        }
                    }
                    it(t, e, n);
                } finally {
                    P();
                }
            }
            function ot(t, e, n, r, o) {
                var i;
                try {
                    (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && l(i) && !i._handled && (i.catch(function(t) {
                        return rt(t, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (t) {
                    rt(t, r, o);
                }
                return i;
            }
            function it(t, e, n) {
                if (jn.errorHandler) try {
                    return jn.errorHandler.call(null, t, e, n);
                } catch (e) {
                    e !== t && at(e, null, "config.errorHandler");
                }
                at(t, e, n);
            }
            function at(t, e, n) {
                if (!Dn && !Un || "undefined" == typeof console) throw t;
                console.error(t);
            }
            function st() {
                ur = !1;
                var t = cr.slice(0);
                cr.length = 0;
                for (var e = 0; e < t.length; e++) t[e]();
            }
            function ct(t, e) {
                var n;
                if (cr.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        rt(t, e, "nextTick");
                    } else n && n(e);
                }), ur || (ur = !0, ar()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    n = t;
                });
            }
            function ut(t) {
                ft(t, hr), hr.clear();
            }
            function ft(t, e) {
                var n, r, o = Array.isArray(t);
                if (!(!o && !c(t) || Object.isFrozen(t) || t instanceof Xn)) {
                    if (t.__ob__) {
                        var i = t.__ob__.dep.id;
                        if (e.has(i)) return;
                        e.add(i);
                    }
                    if (o) for (n = t.length; n--; ) ft(t[n], e); else for (n = (r = Object.keys(t)).length; n--; ) ft(t[r[n]], e);
                }
            }
            function pt(t, e) {
                function n() {
                    var t = arguments, r = n.fns;
                    if (!Array.isArray(r)) return ot(r, null, arguments, e, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) ot(o[i], null, t, e, "v-on handler");
                }
                return n.fns = t, n;
            }
            function lt(t, e, n, o, a, s) {
                var c, u, f, p;
                for (c in t) u = t[c], f = e[c], p = vr(c), r(u) || (r(f) ? (r(u.fns) && (u = t[c] = pt(u, s)), 
                i(p.once) && (u = t[c] = a(p.name, u, p.capture)), n(p.name, u, p.capture, p.passive, p.params)) : u !== f && (f.fns = u, 
                t[c] = f));
                for (c in e) r(t[c]) && (p = vr(c), o(p.name, e[c], p.capture));
            }
            function dt(t, e, n, i) {
                var a = e.options.mpOptions && e.options.mpOptions.properties;
                if (r(a)) return n;
                var s = e.options.mpOptions.externalClasses || [], c = t.attrs, u = t.props;
                if (o(c) || o(u)) for (var f in a) {
                    var p = kn(f);
                    (vt(n, u, f, p, !0) || vt(n, c, f, p, !1)) && n[f] && -1 !== s.indexOf(p) && i[An(n[f])] && (n[f] = i[An(n[f])]);
                }
                return n;
            }
            function ht(t, e, n, i) {
                var a = e.options.props;
                if (r(a)) return dt(t, e, {}, i);
                var s = {}, c = t.attrs, u = t.props;
                if (o(c) || o(u)) for (var f in a) {
                    var p = kn(f);
                    vt(s, u, f, p, !0) || vt(s, c, f, p, !1);
                }
                return dt(t, e, s, i);
            }
            function vt(t, e, n, r, i) {
                if (o(e)) {
                    if (_(e, n)) return t[n] = e[n], i || delete e[n], !0;
                    if (_(e, r)) return t[n] = e[r], i || delete e[r], !0;
                }
                return !1;
            }
            function yt(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }
            function _t(t) {
                return s(t) ? [ j(t) ] : Array.isArray(t) ? mt(t) : void 0;
            }
            function gt(t) {
                return o(t) && o(t.text) && a(t.isComment);
            }
            function mt(t, e) {
                var n, a, c, u, f = [];
                for (n = 0; n < t.length; n++) r(a = t[n]) || "boolean" == typeof a || (c = f.length - 1, 
                u = f[c], Array.isArray(a) ? a.length > 0 && (a = mt(a, (e || "") + "_" + n), gt(a[0]) && gt(u) && (f[c] = j(u.text + a[0].text), 
                a.shift()), f.push.apply(f, a)) : s(a) ? gt(u) ? f[c] = j(u.text + a) : "" !== a && f.push(j(a)) : gt(a) && gt(u) ? f[c] = j(u.text + a.text) : (i(t._isVList) && o(a.tag) && r(a.key) && o(e) && (a.key = "__vlist" + e + "_" + n + "__"), 
                f.push(a)));
                return f;
            }
            function bt(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }
            function Ot(t) {
                var e = St(t.$options.inject, t);
                e && (N(!1), Object.keys(e).forEach(function(n) {
                    L(t, n, e[n]);
                }), N(!0));
            }
            function St(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = zn ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = t[i].from, s = e; s; ) {
                                if (s._provided && _(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break;
                                }
                                s = s.$parent;
                            }
                            if (!s && "default" in t[i]) {
                                var c = t[i].default;
                                n[i] = "function" == typeof c ? c.call(e) : c;
                            }
                        }
                    }
                    return n;
                }
            }
            function At(t, e) {
                if (!t || !t.length) return {};
                for (var n = {}, r = 0, o = t.length; r < o; r++) {
                    var i = t[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var s = a.slot, c = n[s] || (n[s] = []);
                        "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
                    }
                }
                for (var u in n) n[u].every(wt) && delete n[u];
                return n;
            }
            function wt(t) {
                return t.isComment && !t.asyncFactory || " " === t.text;
            }
            function Et(t, e, n) {
                var r, o = Object.keys(e).length > 0, i = t ? !!t.$stable : !o, a = t && t.$key;
                if (t) {
                    if (t._normalized) return t._normalized;
                    if (i && n && n !== _n && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var s in r = {}, t) t[s] && "$" !== s[0] && (r[s] = kt(e, s, t[s]));
                } else r = {};
                for (var c in e) c in r || (r[c] = $t(e, c));
                return t && Object.isExtensible(t) && (t._normalized = r), $(r, "$stable", i), $(r, "$key", a), 
                $(r, "$hasNormal", o), r;
            }
            function kt(e, n, r) {
                var o = function() {
                    var e = arguments.length ? r.apply(null, arguments) : r({});
                    return (e = e && "object" === (void 0 === e ? "undefined" : t(e)) && !Array.isArray(e) ? [ e ] : _t(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return r.proxy && Object.defineProperty(e, n, {
                    get: o,
                    enumerable: !0,
                    configurable: !0
                }), o;
            }
            function $t(t, e) {
                return function() {
                    return t[e];
                };
            }
            function It(t, e) {
                var n, r, i, a, s;
                if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
                i = t.length; r < i; r++) n[r] = e(t[r], r, r, r); else if ("number" == typeof t) for (n = new Array(t), 
                r = 0; r < t; r++) n[r] = e(r + 1, r, r, r); else if (c(t)) if (zn && t[Symbol.iterator]) {
                    n = [];
                    for (var u = t[Symbol.iterator](), f = u.next(); !f.done; ) n.push(e(f.value, n.length, r++, r)), 
                    f = u.next();
                } else for (a = Object.keys(t), n = new Array(a.length), r = 0, i = a.length; r < i; r++) s = a[r], 
                n[r] = e(t[s], s, r, r);
                return o(n) || (n = []), n._isVList = !0, n;
            }
            function xt(t, e, n, r) {
                var o, i = this.$scopedSlots[t];
                i ? (n = n || {}, r && (n = b(b({}, r), n)), o = i(n, this, n._i) || e) : o = this.$slots[t] || e;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function Tt(t) {
                return X(this.$options, "filters", t, !0) || xn;
            }
            function Pt(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
            }
            function jt(t, e, n, r, o) {
                var i = jn.keyCodes[e] || n;
                return o && r && !jn.keyCodes[e] ? Pt(o, r) : i ? Pt(i, t) : r ? kn(r) !== e : void 0;
            }
            function Ct(t, e, n, r, o) {
                if (n && c(n)) {
                    var i;
                    Array.isArray(n) && (n = O(n));
                    for (var a in n) !function(a) {
                        if ("class" === a || "style" === a || bn(a)) i = t; else {
                            var s = t.attrs && t.attrs.type;
                            i = r || jn.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                        }
                        var c = An(a), u = kn(a);
                        c in i || u in i || (i[a] = n[a], !o) || ((t.on || (t.on = {}))["update:" + a] = function(t) {
                            n[a] = t;
                        });
                    }(a);
                }
                return t;
            }
            function Nt(t, e) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[t];
                return r && !e || (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), 
                Dt(r, "__static__" + t, !1)), r;
            }
            function Rt(t, e, n) {
                return Dt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
            }
            function Dt(t, e, n) {
                if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Ut(t[r], e + "_" + r, n); else Ut(t, e, n);
            }
            function Ut(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n;
            }
            function Lt(t, e) {
                if (e && u(e)) {
                    var n = t.on = t.on ? b({}, t.on) : {};
                    for (var r in e) {
                        var o = n[r], i = e[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return t;
            }
            function Mt(t, e, n, r) {
                e = e || {
                    $stable: !n
                };
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    Array.isArray(i) ? Mt(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
                }
                return r && (e.$key = r), e;
            }
            function Vt(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n];
                    "string" == typeof r && r && (t[e[n]] = e[n + 1]);
                }
                return t;
            }
            function Ft(t, e) {
                return "string" == typeof t ? e + t : t;
            }
            function qt(t) {
                t._o = Rt, t._n = h, t._s = d, t._l = It, t._t = xt, t._q = A, t._i = w, t._m = Nt, 
                t._f = Tt, t._k = jt, t._b = Ct, t._v = j, t._e = Zn, t._u = Mt, t._g = Lt, t._d = Vt, 
                t._p = Ft;
            }
            function Bt(t, e, n, r, o) {
                var a, s = this, c = o.options;
                _(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
                var u = i(c._compiled), f = !u;
                this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || _n, 
                this.injections = St(c.inject, r), this.slots = function() {
                    return s.$slots || Et(t.scopedSlots, s.$slots = At(n, r)), s.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return Et(t.scopedSlots, this.slots());
                    }
                }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Et(t.scopedSlots, this.$slots)), 
                c._scopeId ? this._c = function(t, e, n, o) {
                    var i = Qt(a, t, e, n, o, f);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i;
                } : this._c = function(t, e, n, r) {
                    return Qt(a, t, e, n, r, f);
                };
            }
            function Kt(t, e, n, r, i) {
                var a = t.options, s = {}, c = a.props;
                if (o(c)) for (var u in c) s[u] = Q(u, c, e || _n); else o(n.attrs) && Ht(s, n.attrs), 
                o(n.props) && Ht(s, n.props);
                var f = new Bt(n, s, i, r, t), p = a.render.call(null, f._c, f);
                if (p instanceof Xn) return Gt(p, n, f.parent, a, f);
                if (Array.isArray(p)) {
                    for (var l = _t(p) || [], d = new Array(l.length), h = 0; h < l.length; h++) d[h] = Gt(l[h], n, f.parent, a, f);
                    return d;
                }
            }
            function Gt(t, e, n, r, o) {
                var i = C(t);
                return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), 
                i;
            }
            function Ht(t, e) {
                for (var n in e) t[An(n)] = e[n];
            }
            function zt(t, e, n, a, s) {
                if (!r(t)) {
                    var u = n.$options._base;
                    if (c(t) && (t = u.extend(t)), "function" == typeof t) {
                        var f;
                        if (r(t.cid) && (f = t, void 0 === (t = ie(f, u)))) return oe(f, e, n, a, s);
                        e = e || {}, Me(t), o(e.model) && Xt(t.options, e);
                        var p = ht(e, t, s, n);
                        if (i(t.options.functional)) return Kt(t, p, e, n, a);
                        var l = e.on;
                        if (e.on = e.nativeOn, i(t.options.abstract)) {
                            var d = e.slot;
                            e = {}, d && (e.slot = d);
                        }
                        Jt(e);
                        var h = t.options.name || s;
                        return new Xn("vue-component-" + t.cid + (h ? "-" + h : ""), e, void 0, void 0, void 0, n, {
                            Ctor: t,
                            propsData: p,
                            listeners: l,
                            tag: s,
                            children: a
                        }, f);
                    }
                }
            }
            function Wt(t, e) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: t,
                    parent: e
                }, r = t.data.inlineTemplate;
                return o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n);
            }
            function Jt(t) {
                for (var e = t.hook || (t.hook = {}), n = 0; n < gr.length; n++) {
                    var r = gr[n], o = e[r], i = _r[r];
                    o === i || o && o._merged || (e[r] = o ? Yt(i, o) : i);
                }
            }
            function Yt(t, e) {
                var n = function(n, r) {
                    t(n, r), e(n, r);
                };
                return n._merged = !0, n;
            }
            function Xt(t, e) {
                var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                (e.attrs || (e.attrs = {}))[n] = e.model.value;
                var i = e.on || (e.on = {}), a = i[r], s = e.model.callback;
                o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [ s ].concat(a)) : i[r] = s;
            }
            function Qt(t, e, n, r, o, a) {
                return (Array.isArray(n) || s(n)) && (o = r, r = n, n = void 0), i(a) && (o = br), 
                Zt(t, e, n, r, o);
            }
            function Zt(t, e, n, r, i) {
                if (o(n) && o(n.__ob__)) return Zn();
                if (o(n) && o(n.is) && (e = n.is), !e) return Zn();
                var a, s, c;
                return Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
                    default: r[0]
                }, r.length = 0), i === br ? r = _t(r) : i === mr && (r = yt(r)), "string" == typeof e ? (s = t.$vnode && t.$vnode.ns || jn.getTagNamespace(e), 
                a = jn.isReservedTag(e) ? new Xn(jn.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !o(c = X(t.$options, "components", e)) ? new Xn(e, n, r, void 0, void 0, t) : zt(c, n, t, r, e)) : a = zt(e, n, t, r), 
                Array.isArray(a) ? a : o(a) ? (o(s) && te(a, s), o(n) && ee(n), a) : Zn();
            }
            function te(t, e, n) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, n = !0), o(t.children)) for (var a = 0, s = t.children.length; a < s; a++) {
                    var c = t.children[a];
                    o(c.tag) && (r(c.ns) || i(n) && "svg" !== c.tag) && te(c, e, n);
                }
            }
            function ee(t) {
                c(t.style) && ut(t.style), c(t.class) && ut(t.class);
            }
            function ne(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = At(e._renderChildren, r), t.$scopedSlots = _n, t._c = function(e, n, r, o) {
                    return Qt(t, e, n, r, o, !1);
                }, t.$createElement = function(e, n, r, o) {
                    return Qt(t, e, n, r, o, !0);
                };
                var o = n && n.data;
                L(t, "$attrs", o && o.attrs || _n, null, !0), L(t, "$listeners", e._parentListeners || _n, null, !0);
            }
            function re(t, e) {
                return (t.__esModule || zn && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
                c(t) ? e.extend(t) : t;
            }
            function oe(t, e, n, r, o) {
                var i = Zn();
                return i.asyncFactory = t, i.asyncMeta = {
                    data: e,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function ie(t, e) {
                if (i(t.error) && o(t.errorComp)) return t.errorComp;
                if (o(t.resolved)) return t.resolved;
                var n = Or;
                if (n && o(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n), i(t.loading) && o(t.loadingComp)) return t.loadingComp;
                if (n && !o(t.owners)) {
                    var a = t.owners = [ n ], s = !0, u = null, f = null;
                    n.$on("hook:destroyed", function() {
                        return y(a, n);
                    });
                    var p = function(t) {
                        for (var e = 0, n = a.length; e < n; e++) a[e].$forceUpdate();
                        t && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== f && (clearTimeout(f), 
                        f = null));
                    }, d = E(function(n) {
                        t.resolved = re(n, e), s ? a.length = 0 : p(!0);
                    }), h = E(function(e) {
                        o(t.errorComp) && (t.error = !0, p(!0));
                    }), v = t(d, h);
                    return c(v) && (l(v) ? r(t.resolved) && v.then(d, h) : l(v.component) && (v.component.then(d, h), 
                    o(v.error) && (t.errorComp = re(v.error, e)), o(v.loading) && (t.loadingComp = re(v.loading, e), 
                    0 === v.delay ? t.loading = !0 : u = setTimeout(function() {
                        u = null, r(t.resolved) && r(t.error) && (t.loading = !0, p(!1));
                    }, v.delay || 200)), o(v.timeout) && (f = setTimeout(function() {
                        f = null, r(t.resolved) && h(null);
                    }, v.timeout)))), s = !1, t.loading ? t.loadingComp : t.resolved;
                }
            }
            function ae(t) {
                return t.isComment && t.asyncFactory;
            }
            function se(t) {
                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (o(n) && (o(n.componentOptions) || ae(n))) return n;
                }
            }
            function ce(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && le(t, e);
            }
            function ue(t, e) {
                yr.$on(t, e);
            }
            function fe(t, e) {
                yr.$off(t, e);
            }
            function pe(t, e) {
                var n = yr;
                return function r() {
                    null !== e.apply(null, arguments) && n.$off(t, r);
                };
            }
            function le(t, e, n) {
                yr = t, lt(e, n || {}, ue, fe, pe, t), yr = void 0;
            }
            function de(t) {
                var e = Sr;
                return Sr = t, function() {
                    Sr = e;
                };
            }
            function he(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }
            function ve(t, e, n, r, o) {
                var i = r.data.scopedSlots, a = t.$scopedSlots, s = !!(i && !i.$stable || a !== _n && !a.$stable || i && t.$scopedSlots.$key !== i.$key), c = !!(o || t.$options._renderChildren || s);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = o, t.$attrs = r.data.attrs || _n, t.$listeners = n || _n, 
                e && t.$options.props) {
                    N(!1);
                    for (var u = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                        var l = f[p], d = t.$options.props;
                        u[l] = Q(l, d, e, t);
                    }
                    N(!0), t.$options.propsData = e;
                }
                t._$updateProperties && t._$updateProperties(t), n = n || _n;
                var h = t.$options._parentListeners;
                t.$options._parentListeners = n, le(t, n, h), c && (t.$slots = At(o, r.context), 
                t.$forceUpdate());
            }
            function ye(t) {
                for (;t && (t = t.$parent); ) if (t._inactive) return !0;
                return !1;
            }
            function _e(t, e) {
                if (e) {
                    if (t._directInactive = !1, ye(t)) return;
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) _e(t.$children[n]);
                    me(t, "activated");
                }
            }
            function ge(t, e) {
                if (!(e && (t._directInactive = !0, ye(t)) || t._inactive)) {
                    t._inactive = !0;
                    for (var n = 0; n < t.$children.length; n++) ge(t.$children[n]);
                    me(t, "deactivated");
                }
            }
            function me(t, e) {
                T();
                var n = t.$options[e], r = e + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) ot(n[o], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e), P();
            }
            function be() {
                Ir = Ar.length = wr.length = 0, Er = {}, kr = $r = !1;
            }
            function Oe() {
                var t, e;
                for (xr(), $r = !0, Ar.sort(function(t, e) {
                    return t.id - e.id;
                }), Ir = 0; Ir < Ar.length; Ir++) (t = Ar[Ir]).before && t.before(), e = t.id, Er[e] = null, 
                t.run();
                var n = wr.slice(), r = Ar.slice();
                be(), we(n), Se(r), Hn && jn.devtools && Hn.emit("flush");
            }
            function Se(t) {
                for (var e = t.length; e--; ) {
                    var n = t[e], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && me(r, "updated");
                }
            }
            function Ae(t) {
                t._inactive = !1, wr.push(t);
            }
            function we(t) {
                for (var e = 0; e < t.length; e++) t[e]._inactive = !0, _e(t[e], !0);
            }
            function Ee(t) {
                var e = t.id;
                if (null == Er[e]) {
                    if (Er[e] = !0, $r) {
                        for (var n = Ar.length - 1; n > Ir && Ar[n].id > t.id; ) n--;
                        Ar.splice(n + 1, 0, t);
                    } else Ar.push(t);
                    kr || (kr = !0, ct(Oe));
                }
            }
            function ke(t, e, n) {
                Cr.get = function() {
                    return this[e][n];
                }, Cr.set = function(t) {
                    this[e][n] = t;
                }, Object.defineProperty(t, n, Cr);
            }
            function $e(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && Ie(t, e.props), e.methods && Re(t, e.methods), e.data ? xe(t) : U(t._data = {}, !0), 
                e.computed && Pe(t, e.computed), e.watch && e.watch !== qn && De(t, e.watch);
            }
            function Ie(t, e) {
                var n = t.$options.propsData || {}, r = t._props = {}, o = t.$options._propKeys = [];
                !t.$parent || N(!1);
                for (var i in e) !function(i) {
                    o.push(i);
                    var a = Q(i, e, n, t);
                    L(r, i, a), i in t || ke(t, "_props", i);
                }(i);
                N(!0);
            }
            function xe(t) {
                var e = t.$options.data;
                u(e = t._data = "function" == typeof e ? Te(e, t) : e || {}) || (e = {});
                for (var n = Object.keys(e), r = t.$options.props, o = (t.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    r && _(r, i) || k(i) || ke(t, "_data", i);
                }
                U(e, !0);
            }
            function Te(t, e) {
                T();
                try {
                    return t.call(e, e);
                } catch (t) {
                    return rt(t, e, "data()"), {};
                } finally {
                    P();
                }
            }
            function Pe(t, e) {
                var n = t._computedWatchers = Object.create(null), r = Gn();
                for (var o in e) {
                    var i = e[o], a = "function" == typeof i ? i : i.get;
                    r || (n[o] = new jr(t, a || S, S, Nr)), o in t || je(t, o, i);
                }
            }
            function je(t, e, n) {
                var r = !Gn();
                "function" == typeof n ? (Cr.get = r ? Ce(e) : Ne(n), Cr.set = S) : (Cr.get = n.get ? r && !1 !== n.cache ? Ce(e) : Ne(n.get) : S, 
                Cr.set = n.set || S), Object.defineProperty(t, e, Cr);
            }
            function Ce(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), Yn.SharedObject.target && e.depend(), e.value;
                };
            }
            function Ne(t) {
                return function() {
                    return t.call(this, this);
                };
            }
            function Re(t, e) {
                t.$options.props;
                for (var n in e) t[n] = "function" != typeof e[n] ? S : $n(e[n], t);
            }
            function De(t, e) {
                for (var n in e) {
                    var r = e[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) Ue(t, n, r[o]); else Ue(t, n, r);
                }
            }
            function Ue(t, e, n, r) {
                return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
            }
            function Le(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }
            function Me(t) {
                var e = t.options;
                if (t.super) {
                    var n = Me(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = Ve(t);
                        r && b(t.extendOptions, r), (e = t.options = Y(n, t.extendOptions)).name && (e.components[e.name] = t);
                    }
                }
                return e;
            }
            function Ve(t) {
                var e, n = t.options, r = t.sealedOptions;
                for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
                return e;
            }
            function Fe(t) {
                this._init(t);
            }
            function qe(t) {
                t.use = function(t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var n = m(arguments, 1);
                    return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                    e.push(t), this;
                };
            }
            function Be(t) {
                t.mixin = function(t) {
                    return this.options = Y(this.options, t), this;
                };
            }
            function Ke(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this, r = n.cid, o = t._Ctor || (t._Ctor = {});
                    if (o[r]) return o[r];
                    var i = t.name || n.options.name, a = function(t) {
                        this._init(t);
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, 
                    a.options = Y(n.options, t), a.super = n, a.options.props && Ge(a), a.options.computed && He(a), 
                    a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Tn.forEach(function(t) {
                        a[t] = n[t];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, 
                    a.sealedOptions = b({}, a.options), o[r] = a, a;
                };
            }
            function Ge(t) {
                var e = t.options.props;
                for (var n in e) ke(t.prototype, "_props", n);
            }
            function He(t) {
                var e = t.options.computed;
                for (var n in e) je(t.prototype, n, e[n]);
            }
            function ze(t) {
                Tn.forEach(function(e) {
                    t[e] = function(t, n) {
                        return n ? ("component" === e && u(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                        "directive" === e && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                    };
                });
            }
            function We(t) {
                return t && (t.Ctor.options.name || t.tag);
            }
            function Je(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!f(t) && t.test(e);
            }
            function Ye(t, e) {
                var n = t.cache, r = t.keys, o = t._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = We(a.componentOptions);
                        s && !e(s) && Xe(n, i, r, o);
                    }
                }
            }
            function Xe(t, e, n, r) {
                var o = t[e];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, y(n, e);
            }
            function Qe(t, e) {
                var n = {};
                return Ze(t, e), tn(t, e, "", n), n;
            }
            function Ze(t, e) {
                if (t !== e) {
                    var n = nn(t), r = nn(e);
                    if (n == Mr && r == Mr) {
                        if (Object.keys(t).length >= Object.keys(e).length) for (var o in e) {
                            var i = t[o];
                            void 0 === i ? t[o] = null : Ze(i, e[o]);
                        }
                    } else n == Lr && r == Lr && t.length >= e.length && e.forEach(function(e, n) {
                        Ze(t[n], e);
                    });
                }
            }
            function tn(t, e, n, r) {
                if (t !== e) {
                    var o = nn(t), i = nn(e);
                    if (o == Mr) if (i != Mr || Object.keys(t).length < Object.keys(e).length) en(r, n, t); else {
                        for (var a in t) !function(o) {
                            var i = t[o], a = e[o], s = nn(i), c = nn(a);
                            if (s != Lr && s != Mr) i != e[o] && en(r, ("" == n ? "" : n + ".") + o, i); else if (s == Lr) c != Lr || i.length < a.length ? en(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(t, e) {
                                tn(t, a[e], ("" == n ? "" : n + ".") + o + "[" + e + "]", r);
                            }); else if (s == Mr) if (c != Mr || Object.keys(i).length < Object.keys(a).length) en(r, ("" == n ? "" : n + ".") + o, i); else for (var u in i) tn(i[u], a[u], ("" == n ? "" : n + ".") + o + "." + u, r);
                        }(a);
                    } else o == Lr ? i != Lr || t.length < e.length ? en(r, n, t) : t.forEach(function(t, o) {
                        tn(t, e[o], n + "[" + o + "]", r);
                    }) : en(r, n, t);
                }
            }
            function en(t, e, n) {
                t[e] = n;
            }
            function nn(t) {
                return Object.prototype.toString.call(t);
            }
            function rn(t) {
                if (t.__next_tick_callbacks && t.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var e = t.$scope;
                        console.log("[" + +new Date() + "][" + (e.is || e.route) + "][" + t._uid + "]:flushCallbacks[" + t.__next_tick_callbacks.length + "]");
                    }
                    var n = t.__next_tick_callbacks.slice(0);
                    t.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function on(t) {
                return Ar.find(function(e) {
                    return t._watcher === e;
                });
            }
            function an(t, e) {
                if (!t.__next_tick_pending && !on(t)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = t.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + t._uid + "]:nextVueTick");
                    }
                    return ct(e, t);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = t.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + t._uid + "]:nextMPTick");
                }
                var o;
                if (t.__next_tick_callbacks || (t.__next_tick_callbacks = []), t.__next_tick_callbacks.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        rt(e, t, "nextTick");
                    } else o && o(t);
                }), !e && "undefined" != typeof Promise) return new Promise(function(t) {
                    o = t;
                });
            }
            function sn(t) {
                var e = Object.create(null);
                [].concat(Object.keys(t._data || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                    return e[n] = t[n], e;
                }, e);
                var n = t.__secret_vfa_state__ && t.__secret_vfa_state__.rawBindings;
                return n && Object.keys(n).forEach(function(n) {
                    e[n] = t[n];
                }), Object.assign(e, t.$mp.data || {}), Array.isArray(t.$options.behaviors) && -1 !== t.$options.behaviors.indexOf("uni://form-field") && (e.name = t.name, 
                e.value = t.value), JSON.parse(JSON.stringify(e));
            }
            function cn() {}
            function un(t, e, n) {
                if (!t.mpType) return t;
                "app" === t.mpType && (t.$options.render = cn), t.$options.render || (t.$options.render = cn), 
                !t._$fallback && me(t, "beforeMount");
                return new jr(t, function() {
                    t._update(t._render(), n);
                }, S, {
                    before: function() {
                        t._isMounted && !t._isDestroyed && me(t, "beforeUpdate");
                    }
                }, !0), n = !1, t;
            }
            function fn(t, e) {
                return o(t) || o(e) ? pn(t, ln(e)) : "";
            }
            function pn(t, e) {
                return t ? e ? t + " " + e : t : e || "";
            }
            function ln(t) {
                return Array.isArray(t) ? dn(t) : c(t) ? hn(t) : "string" == typeof t ? t : "";
            }
            function dn(t) {
                for (var e, n = "", r = 0, i = t.length; r < i; r++) o(e = ln(t[r])) && "" !== e && (n && (n += " "), 
                n += e);
                return n;
            }
            function hn(t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), e += n);
                return e;
            }
            function vn(t) {
                return Array.isArray(t) ? O(t) : "string" == typeof t ? Vr(t) : t;
            }
            function yn(t, e) {
                var n = e.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? t[r] : yn(t[r], n.slice(1).join("."));
            }
            var _n = Object.freeze({}), gn = Object.prototype.toString;
            v("slot,component", !0);
            var mn, bn = v("key,ref,slot,slot-scope,is"), On = Object.prototype.hasOwnProperty, Sn = /-(\w)/g, An = g(function(t) {
                return t.replace(Sn, function(t, e) {
                    return e ? e.toUpperCase() : "";
                });
            }), wn = g(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }), En = /\B([A-Z])/g, kn = g(function(t) {
                return t.replace(En, "-$1").toLowerCase();
            }), $n = Function.prototype.bind ? function(t, e) {
                return t.bind(e);
            } : function(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
                }
                return n._length = t.length, n;
            }, In = function(t, e, n) {
                return !1;
            }, xn = function(t) {
                return t;
            }, Tn = [ "component", "directive", "filter" ], Pn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], jn = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: In,
                isReservedAttr: In,
                isUnknownElement: In,
                getTagNamespace: S,
                parsePlatformTagName: xn,
                mustUseProp: In,
                async: !0,
                _lifecycleHooks: Pn
            }, Cn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, Nn = new RegExp("[^" + Cn.source + ".$_\\d]"), Rn = "__proto__" in {}, Dn = "undefined" != typeof window, Un = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Ln = Un && WXEnvironment.platform.toLowerCase(), Mn = Dn && window.navigator.userAgent.toLowerCase(), Vn = Mn && /msie|trident/.test(Mn), Fn = (Mn && Mn.indexOf("msie 9.0"), 
            Mn && Mn.indexOf("edge/"), Mn && Mn.indexOf("android"), Mn && /iphone|ipad|ipod|ios/.test(Mn) || "ios" === Ln), qn = (Mn && /chrome\/\d+/.test(Mn), 
            Mn && /phantomjs/.test(Mn), Mn && Mn.match(/firefox\/(\d+)/), {}.watch);
            if (Dn) try {
                var Bn = {};
                Object.defineProperty(Bn, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Bn);
            } catch (t) {}
            var Kn, Gn = function() {
                return void 0 === mn && (mn = !Dn && !Un && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                mn;
            }, Hn = Dn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, zn = "undefined" != typeof Symbol && x(Symbol) && "undefined" != typeof Reflect && x(Reflect.ownKeys);
            Kn = "undefined" != typeof Set && x(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null);
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t];
                }, t.prototype.add = function(t) {
                    this.set[t] = !0;
                }, t.prototype.clear = function() {
                    this.set = Object.create(null);
                }, t;
            }();
            var Wn = S, Jn = 0, Yn = function() {
                this.id = Jn++, this.subs = [];
            };
            Yn.prototype.addSub = function(t) {
                this.subs.push(t);
            }, Yn.prototype.removeSub = function(t) {
                y(this.subs, t);
            }, Yn.prototype.depend = function() {
                Yn.SharedObject.target && Yn.SharedObject.target.addDep(this);
            }, Yn.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
            }, Yn.SharedObject = {}, Yn.SharedObject.target = null, Yn.SharedObject.targetStack = [];
            var Xn = function(t, e, n, r, o, i, a, s) {
                this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Qn = {
                child: {
                    configurable: !0
                }
            };
            Qn.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(Xn.prototype, Qn);
            var Zn = function(t) {
                void 0 === t && (t = "");
                var e = new Xn();
                return e.text = t, e.isComment = !0, e;
            }, tr = Array.prototype, er = Object.create(tr);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
                var e = tr[t];
                $(er, t, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = e.apply(this, n), a = this.__ob__;
                    switch (t) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var nr = Object.getOwnPropertyNames(er), rr = !0, or = function(t) {
                this.value = t, this.dep = new Yn(), this.vmCount = 0, $(t, "__ob__", this), Array.isArray(t) ? (Rn ? t.push !== t.__proto__.push ? D(t, er, nr) : R(t, er) : D(t, er, nr), 
                this.observeArray(t)) : this.walk(t);
            };
            or.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) L(t, e[n]);
            }, or.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; e < n; e++) U(t[e]);
            };
            var ir = jn.optionMergeStrategies;
            ir.data = function(t, e, n) {
                return n ? B(t, e, n) : e && "function" != typeof e ? t : B(t, e);
            }, Pn.forEach(function(t) {
                ir[t] = K;
            }), Tn.forEach(function(t) {
                ir[t + "s"] = H;
            }), ir.watch = function(t, e, n, r) {
                if (t === qn && (t = void 0), e === qn && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var o = {};
                for (var i in b(o, t), e) {
                    var a = o[i], s = e[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
                }
                return o;
            }, ir.props = ir.methods = ir.inject = ir.computed = function(t, e, n, r) {
                if (!t) return e;
                var o = Object.create(null);
                return b(o, t), e && b(o, e), o;
            }, ir.provide = B;
            var ar, sr = function(t, e) {
                return void 0 === e ? t : e;
            }, cr = [], ur = !1;
            if ("undefined" != typeof Promise && x(Promise)) {
                var fr = Promise.resolve();
                ar = function() {
                    fr.then(st), Fn && setTimeout(S);
                };
            } else if (Vn || "undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ar = "undefined" != typeof setImmediate && x(setImmediate) ? function() {
                setImmediate(st);
            } : function() {
                setTimeout(st, 0);
            }; else {
                var pr = 1, lr = new MutationObserver(st), dr = document.createTextNode(String(pr));
                lr.observe(dr, {
                    characterData: !0
                }), ar = function() {
                    pr = (pr + 1) % 2, dr.data = String(pr);
                };
            }
            var hr = new Kn(), vr = g(function(t) {
                var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return t = r ? t.slice(1) : t, {
                    name: t,
                    once: n,
                    capture: r,
                    passive: e
                };
            });
            qt(Bt.prototype);
            var yr, _r = {
                init: function(t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        _r.prepatch(n, n);
                    } else (t.componentInstance = Wt(t, Sr)).$mount(e ? t.elm : void 0, e);
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    ve(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
                },
                insert: function(t) {
                    var e = t.context, n = t.componentInstance;
                    n._isMounted || (me(n, "onServiceCreated"), me(n, "onServiceAttached"), n._isMounted = !0, 
                    me(n, "mounted")), t.data.keepAlive && (e._isMounted ? Ae(n) : _e(n, !0));
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? ge(e, !0) : e.$destroy());
                }
            }, gr = Object.keys(_r), mr = 1, br = 2, Or = null, Sr = null, Ar = [], wr = [], Er = {}, kr = !1, $r = !1, Ir = 0, xr = Date.now;
            if (Dn && !Vn) {
                var Tr = window.performance;
                Tr && "function" == typeof Tr.now && xr() > document.createEvent("Event").timeStamp && (xr = function() {
                    return Tr.now();
                });
            }
            var Pr = 0, jr = function(t, e, n, r, o) {
                this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++Pr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new Kn(), this.newDepIds = new Kn(), this.expression = "", 
                "function" == typeof e ? this.getter = e : (this.getter = I(e), this.getter || (this.getter = S)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            jr.prototype.get = function() {
                var t;
                T(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e);
                } catch (t) {
                    if (!this.user) throw t;
                    rt(t, e, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && ut(t), P(), this.cleanupDeps();
                }
                return t;
            }, jr.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
            }, jr.prototype.cleanupDeps = function() {
                for (var t = this.deps.length; t--; ) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, jr.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ee(this);
            }, jr.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || c(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e);
                        } catch (t) {
                            rt(t, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, t, e);
                    }
                }
            }, jr.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, jr.prototype.depend = function() {
                for (var t = this.deps.length; t--; ) this.deps[t].depend();
            }, jr.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                    for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                    this.active = !1;
                }
            };
            var Cr = {
                enumerable: !0,
                configurable: !0,
                get: S,
                set: S
            }, Nr = {
                lazy: !0
            }, Rr = 0;
            (function(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = Rr++, e._isVue = !0, t && t._isComponent ? Le(e, t) : e.$options = Y(Me(e.constructor), t || {}, e), 
                    e._renderProxy = e, e._self = e, he(e), ce(e), ne(e), me(e, "beforeCreate"), !e._$fallback && Ot(e), 
                    $e(e), !e._$fallback && bt(e), !e._$fallback && me(e, "created"), e.$options.el && e.$mount(e.$options.el);
                };
            })(Fe), function(t) {
                var e = {
                    get: function() {
                        return this._data;
                    }
                }, n = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
                t.prototype.$set = M, t.prototype.$delete = V, t.prototype.$watch = function(t, e, n) {
                    var r = this;
                    if (u(e)) return Ue(r, t, e, n);
                    (n = n || {}).user = !0;
                    var o = new jr(r, t, e, n);
                    if (n.immediate) try {
                        e.call(r, o.value);
                    } catch (t) {
                        rt(t, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(Fe), function(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, n) {
                    var r = this;
                    if (Array.isArray(t)) for (var o = 0, i = t.length; o < i; o++) r.$on(t[o], n); else (r._events[t] || (r._events[t] = [])).push(n), 
                    e.test(t) && (r._hasHookEvent = !0);
                    return r;
                }, t.prototype.$once = function(t, e) {
                    function n() {
                        r.$off(t, n), e.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = e, r.$on(t, n), r;
                }, t.prototype.$off = function(t, e) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                        return n;
                    }
                    var i, a = n._events[t];
                    if (!a) return n;
                    if (!e) return n._events[t] = null, n;
                    for (var s = a.length; s--; ) if ((i = a[s]) === e || i.fn === e) {
                        a.splice(s, 1);
                        break;
                    }
                    return n;
                }, t.prototype.$emit = function(t) {
                    var e = this, n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? m(n) : n;
                        for (var r = m(arguments, 1), o = 'event handler for "' + t + '"', i = 0, a = n.length; i < a; i++) ot(n[i], e, r, e, o);
                    }
                    return e;
                };
            }(Fe), function(t) {
                t.prototype._update = function(t, e) {
                    var n = this, r = n.$el, o = n._vnode, i = de(n);
                    n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, t.prototype.$forceUpdate = function() {
                    var t = this;
                    t._watcher && t._watcher.update();
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        me(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || y(e.$children, t), t._watcher && t._watcher.teardown();
                        for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                        me(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
                    }
                };
            }(Fe), function(t) {
                qt(t.prototype), t.prototype.$nextTick = function(t) {
                    return ct(t, this);
                }, t.prototype._render = function() {
                    var t, e = this, n = e.$options, r = n.render, o = n._parentVnode;
                    o && (e.$scopedSlots = Et(o.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = o;
                    try {
                        Or = e, t = r.call(e._renderProxy, e.$createElement);
                    } catch (n) {
                        rt(n, e, "render"), t = e._vnode;
                    } finally {
                        Or = null;
                    }
                    return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof Xn || (t = Zn()), 
                    t.parent = o, t;
                };
            }(Fe);
            var Dr = [ String, RegExp, Array ], Ur = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Dr,
                        exclude: Dr,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var t in this.cache) Xe(this.cache, t, this.keys);
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            Ye(t, function(t) {
                                return Je(e, t);
                            });
                        }), this.$watch("exclude", function(e) {
                            Ye(t, function(t) {
                                return !Je(e, t);
                            });
                        });
                    },
                    render: function() {
                        var t = this.$slots.default, e = se(t), n = e && e.componentOptions;
                        if (n) {
                            var r = We(n), o = this, i = o.include, a = o.exclude;
                            if (i && (!r || !Je(i, r)) || a && r && Je(a, r)) return e;
                            var s = this, c = s.cache, u = s.keys, f = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                            c[f] ? (e.componentInstance = c[f].componentInstance, y(u, f), u.push(f)) : (c[f] = e, 
                            u.push(f), this.max && u.length > parseInt(this.max) && Xe(c, u[0], u, this._vnode)), 
                            e.data.keepAlive = !0;
                        }
                        return e || t && t[0];
                    }
                }
            };
            (function(t) {
                var e = {
                    get: function() {
                        return jn;
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: Wn,
                    extend: b,
                    mergeOptions: Y,
                    defineReactive: L
                }, t.set = M, t.delete = V, t.nextTick = ct, t.observable = function(t) {
                    return U(t), t;
                }, t.options = Object.create(null), Tn.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null);
                }), t.options._base = t, b(t.options.components, Ur), qe(t), Be(t), Ke(t), ze(t);
            })(Fe), Object.defineProperty(Fe.prototype, "$isServer", {
                get: Gn
            }), Object.defineProperty(Fe.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Fe, "FunctionalRenderContext", {
                value: Bt
            }), Fe.version = "2.6.11";
            var Lr = "[object Array]", Mr = "[object Object]", Vr = g(function(t) {
                var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return t.split(n).forEach(function(t) {
                    if (t) {
                        var n = t.split(r);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim());
                    }
                }), e;
            }), Fr = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], qr = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            Fe.prototype.__patch__ = function(t, e) {
                var n = this;
                if (null !== e && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = sn(this);
                    } catch (t) {
                        console.error(t);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(t) {
                        i[t] = r.data[t];
                    });
                    var a = !1 === this.$shouldDiffData ? o : Qe(o, i);
                    Object.keys(a).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, rn(n);
                    })) : rn(this);
                }
            }, Fe.prototype.$mount = function(t, e) {
                return un(this, 0, e);
            }, function(t) {
                var e = t.extend;
                t.extend = function(t) {
                    var n = (t = t || {}).methods;
                    return n && Object.keys(n).forEach(function(e) {
                        -1 !== qr.indexOf(e) && (t[e] = n[e], delete n[e]);
                    }), e.call(this, t);
                };
                var n = t.config.optionMergeStrategies, r = n.created;
                qr.forEach(function(t) {
                    n[t] = r;
                }), t.prototype.__lifecycle_hooks__ = qr;
            }(Fe), function(t) {
                t.config.errorHandler = function(e, n, r) {
                    t.util.warn("Error in " + r + ': "' + e.toString() + '"', n), console.error(e);
                    var o = getApp();
                    o && o.onError && o.onError(e);
                };
                var e = t.prototype.$emit;
                t.prototype.$emit = function(t) {
                    return this.$scope && t && this.$scope.triggerEvent(t, {
                        __args__: m(arguments, 1)
                    }), e.apply(this, arguments);
                }, t.prototype.$nextTick = function(t) {
                    return an(this, t);
                }, Fr.forEach(function(e) {
                    t.prototype[e] = function(t) {
                        return this.$scope && this.$scope[e] ? this.$scope[e](t) : "undefined" != typeof my ? "createSelectorQuery" === e ? my.createSelectorQuery(t) : "createIntersectionObserver" === e ? my.createIntersectionObserver(t) : void 0 : void 0;
                    };
                }), t.prototype.__init_provide = bt, t.prototype.__init_injections = Ot, t.prototype.__call_hook = function(t, e) {
                    var n = this;
                    T();
                    var r, o = n.$options[t], i = t + " hook";
                    if (o) for (var a = 0, s = o.length; a < s; a++) r = ot(o[a], n, e ? [ e ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + t, e), P(), r;
                }, t.prototype.__set_model = function(t, e, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    t || (t = this), t[e] = n;
                }, t.prototype.__set_sync = function(t, e, n) {
                    t || (t = this), t[e] = n;
                }, t.prototype.__get_orig = function(t) {
                    return u(t) && t.$orig || t;
                }, t.prototype.__get_value = function(t, e) {
                    return yn(e || this, t);
                }, t.prototype.__get_class = function(t, e) {
                    return fn(e, t);
                }, t.prototype.__get_style = function(t, e) {
                    if (!t && !e) return "";
                    var n = vn(t), r = e ? b(e, n) : n;
                    return Object.keys(r).map(function(t) {
                        return kn(t) + ":" + r[t];
                    }).join(";");
                }, t.prototype.__map = function(t, e) {
                    var n, r, o, i, a;
                    if (Array.isArray(t)) {
                        for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                        return n;
                    }
                    if (c(t)) {
                        for (i = Object.keys(t), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = e(t[a], a, r);
                        return n;
                    }
                    if ("number" == typeof t) {
                        for (n = new Array(t), r = 0, o = t; r < o; r++) n[r] = e(r, r);
                        return n;
                    }
                    return [];
                };
            }(Fe), n.default = Fe;
        }.call(this, r("c8ba"));
    },
    aadd: function(t, e) {},
    c8ba: function(e, n) {
        var r;
        r = function() {
            return this;
        }();
        try {
            r = r || new Function("return this")();
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : t(window)) && (r = window);
        }
        e.exports = r;
    },
    e9c0: function(e, n, r) {
        function o() {
            this.setDebug = function(t) {
                W = t;
            }, this.d = function() {
                if (W) try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.debug.apply(console, arguments);
                } catch (t) {}
            }, this.i = function() {
                try {
                    if (W) try {
                        "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.info.apply(console, arguments);
                    } catch (t) {}
                } catch (t) {}
            }, this.e = function() {
                if (W) try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            }, this.w = function() {
                if (W) try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.warn.apply(console, arguments);
                } catch (t) {}
            }, this.v = function() {
                if (W) try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.t = function() {
                if (W) try {
                    console.table.apply(console, arguments);
                } catch (t) {}
            }, this.tip = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.tip_w = function(t) {
                try {
                    console.log("%c " + Y + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                } catch (t) {}
            }, this.err = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = Y + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            };
        }
        function i() {
            var t = {};
            this.useOpenid = function() {
                return !!t.useOpenid;
            }, this.useSwanid = function() {
                return !!t.useSwanid;
            }, this.autoGetOpenid = function() {
                return !!t.autoGetOpenid;
            }, this.appKey = function() {
                return t.appKey;
            }, this.uploadUserInfo = function() {
                return t.uploadUserInfo;
            }, this.enableVerify = function() {
                return t.enableVerify;
            }, this.set = function(e) {
                t = e;
            }, this.get = function() {
                return t;
            }, this.setItem = function(e, n) {
                t[e] = n;
            }, this.getItem = function(e) {
                return t[e];
            };
        }
        function a() {
            this.listeners = {}, this.maxListener = 2;
        }
        function s(t, e) {
            function n() {
                this.constructor = t;
            }
            kt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
            new n());
        }
        function c() {
            var t = !1, e = null, n = [];
            this.addPageStart = function(n) {
                n && !t && (e = {
                    ts: Date.now(),
                    path: n,
                    page_name: n
                }, t = !0);
            }, this.addPageEnd = function(r) {
                if (t && r && e && r === e.page_name) {
                    var o = Date.now() - e.ts;
                    e.duration = Math.abs(o), n.push(e), e = null, t = !1;
                }
            }, this.get = function() {
                return n;
            }, this.getCurrentPage = function() {
                return e;
            }, this.clear = function() {
                n.length = 0;
            };
        }
        function u() {
            return function(t) {
                var e = [];
                for (var n in t) "_um_ssrc" !== n && "_um_sts" !== n && e.push(n + "=" + t[n]);
                return e.join("&");
            }(jt);
        }
        function f() {
            return {
                add: function(t, e) {
                    X().v("share origin: %o", t);
                    var n = {
                        title: t && t.title,
                        path: t && t.path && t.path.split("?")[0],
                        _um_sts: Date.now()
                    };
                    n.path && 1 < n.path.length && It.startsWith(n.path, "/") && (n.path = It.trimStart(n.path, "/"));
                    var r = t.path || "", o = Tt().getId();
                    if (o) {
                        var i = rt.split(","), a = (i = i.filter(function(t) {
                            return 0 < t.length;
                        })).indexOf(o);
                        0 <= a && (i = i.slice(0, a)), i.length < 3 && i.push(o);
                        var s = i.join(",");
                        -1 !== r.indexOf("?") ? r += "&_um_ssrc=" + s : r += "?_um_ssrc=" + s;
                        var c = Date.now();
                        if (r += "&_um_sts=" + c, e) {
                            var f = u(), p = f ? f + "&_um_ssrc=" + s + "&_um_sts=" + c : "_um_ssrc=" + s + "&_um_sts=" + c;
                            t.query = t.query ? t.query + "&_um_ssrc=" + s + "&_um_sts=" + c : p;
                        } else t.path = r;
                        n._um_ssrc = s, n._um_sts = c;
                    }
                    return nt.push(n), X().v("share: %o", t), t;
                },
                setShareSource: function(t) {
                    rt = t;
                },
                clear: function() {
                    nt.length = 0;
                },
                get: function() {
                    return nt;
                }
            };
        }
        function p() {
            this.load = function(t) {
                at ? (Et.removeStorage(it), t()) : (it = "um_cache_" + Q().appKey(), Et.getStorage(it, function(e) {
                    at = Nt.parse(e) || {}, st = !0, Et.removeStorage(it), t();
                }));
            }, this.save = function() {
                at && Et.setStorage(it, Nt.stringify(at));
            }, this.set = function(t, e) {
                at && (at[t] = e);
            }, this.get = function(t) {
                return (at || {})[t];
            }, this.remove = function(t) {
                at && at[t] && delete at[t];
            }, this.getAll = function() {
                return at;
            }, this.clear = function() {
                at = null;
            }, this.has = function(t) {
                return !!this.get(t);
            }, this.isLoaded = function() {
                return st;
            };
        }
        function l() {
            if (ft.length) {
                var t = Rt().get(Dt);
                (function(t) {
                    var e = 0;
                    for (var n in t) Array.isArray(t[n]) && (e += t[n].length);
                    return e;
                })(t) + ft.length <= Ut && (t = d(t, ft), Rt().set(Dt, t));
            }
        }
        function d(t, e) {
            var n = (t = t || {})[ut];
            return Array.isArray(n) && n.length ? t[ut] = n.concat(e) : t[ut] = [].concat(e), 
            t;
        }
        function h() {
            function t(t) {
                var e = Rt().get($t.IMPRINT);
                e && (n.imprint = e), n.device_type = "Phone", n.sdk_version = $t.IMPL_VERSION, 
                n.appkey = Q().appKey(), Et.getDeviceInfo(function(t) {
                    n.device_info = t || "";
                });
                var r = Et.getAppInfoSync();
                n.appid = r.appId, n.app_env = r.appEnv, n.app_version = r.appVersion, Et.getSystemInfo(function(e) {
                    Et.getNetworkInfo(function(r) {
                        var o = function(t, e) {
                            var n = {}, r = (e = e || {}).networkType;
                            "none" === r && (r = "unknown");
                            var o = t.model || "", i = t.platform || "", a = t.brand || "", s = a.toLowerCase();
                            switch (n.sdk_type = Et.getSdkType(), n.platform = Et.getPlatform(), n.platform_sdk_version = t.platformSDKVersion, 
                            n.platform_version = t.platformVersion, n.resolution = t.resolution, n.pixel_ratio = t.pixelRatio, 
                            n.os = i, n.font_size_setting = t.fontSizeSetting, n.device_model = o, n.device_brand = a, 
                            n.device_manufacturer = s, n.device_manuid = o, n.device_name = o, n.os_version = t.OSVersion, 
                            n.language = t.language, r = r ? r.toLowerCase() : "") {
                              case Ft:
                                n.access_subtype = "LTE", n.access = "4G";
                                break;

                              case Vt:
                                n.access_subtype = "CDMA", n.access = "3G";
                                break;

                              case Mt:
                                n.access_subtype = "GRPS", n.access = "2G";
                                break;

                              default:
                                n.access = r, delete n.access_subtype;
                            }
                            return n;
                        }(e, r);
                        It.assign(n, o), function(t) {
                            var e = [];
                            e.push({
                                name: "设备型号",
                                value: n.device_model
                            }), e.push({
                                name: "设备生产商",
                                value: n.device_brand
                            }), e.push({
                                name: "os版本号",
                                value: n.os_version
                            }), e.push({
                                name: "网络类型",
                                value: n.access
                            }), e.push({
                                name: "运营商",
                                value: n.access_subtype
                            }), e.push({
                                name: "分辨率",
                                value: n.resolution
                            }), e.push({
                                name: "pixelRatio",
                                value: n.pixel_ratio
                            });
                            for (var r = "", o = 0; o < e.length; o++) {
                                var i = e[o];
                                r += i.name + ": " + i.value + "; ";
                            }
                            X().v("调试辅助信息: ", r);
                        }(), t && t();
                    });
                });
            }
            var e = !1, n = {};
            return {
                init: function() {
                    t(function() {
                        e = !0;
                    });
                },
                isLoaded: function() {
                    return e;
                },
                get: function() {
                    return n;
                },
                getRealtimeFields: function() {
                    var t = {};
                    return Bt.forEach(function(e) {
                        t[e] = n[e];
                    }), t;
                },
                setIdTracking: function(t) {
                    this.setItem("id_tracking", t);
                },
                setIdType: function(t) {
                    this.setItem("id_type", t);
                },
                setAppVersion: function(t) {
                    this.setItem("app_version", t);
                },
                setSuperProperty: function(t) {
                    n.sp || (n.sp = {}), n.sp.isv = t;
                },
                getSuperProperty: function() {
                    return n && n.sp ? n.sp.isv : "";
                },
                setItem: function(t, e) {
                    n[t] = e;
                },
                getItem: function(t) {
                    return n[t];
                }
            };
        }
        function v() {
            return {
                resume: function(t) {
                    var e = !1;
                    vt = vt || Rt().get($t.CURRENT_SESSION);
                    var n = new Date();
                    return ht = n.getTime(), !vt || !vt.end_time || ht - vt.end_time > $t.SESSION_INTERVAL ? (e = !0, 
                    function(t) {
                        try {
                            var e = (vt || {}).options || {}, n = It.assign({}, function(t) {
                                var e = {};
                                for (var n in t) 0 === n.indexOf("_um_") && (e[n] = t[n]);
                                return X().v("query: ", t), X().v("_um_params: ", e), e;
                            }(t.query));
                            n.path = t.path || e.path, n.scene = t.scene ? Et.getPlatform() + "_" + t.scene : e.scene;
                            var r = t.referrerInfo;
                            r && (n.referrerAppId = r.appId), X().v("session options: ", n);
                            var o = n[$t.UM_SSRC];
                            o && Ct().setShareSource(o);
                            var i = Date.now();
                            vt = {
                                id: It.getRandomStr(10) + i,
                                start_time: i,
                                options: n
                            };
                        } catch (t) {
                            X().e("生成新session失败: ", t);
                        }
                    }(t), X().v("开始新的session(%s): ", vt.id, vt)) : X().v("延续上一次session(%s): %s ", vt.id, n.toLocaleTimeString(), vt), 
                    e;
                },
                pause: function() {
                    !function() {
                        if (vt) {
                            var t = new Date();
                            vt.end_time = t.getTime(), "number" != typeof vt.duration && (vt.duration = 0), 
                            vt.duration = vt.end_time - ht, Rt().set($t.CURRENT_SESSION, vt), X().v("退出会话(%s): %s ", vt.id, t.toLocaleTimeString(), vt);
                        }
                    }();
                },
                getCurrentSessionId: function() {
                    return (vt || {}).id;
                },
                getCurrentSession: function() {
                    return vt;
                },
                cloneCurrentSession: function() {
                    return It.clone(vt);
                }
            };
        }
        function y(t) {
            var e = null;
            switch (t) {
              case qt.HALF_SESSION:
                e = function() {
                    var t = null, e = Gt().cloneCurrentSession();
                    return e && (t = {
                        header: {
                            st: "1"
                        },
                        analytics: {
                            sessions: [ e ]
                        }
                    }), t;
                }();
                break;

              case qt.CLOSE_SESSION:
                e = function() {
                    var t = null, e = {}, n = Gt().cloneCurrentSession();
                    if (n) {
                        var r = Pt().get(), o = Ct().get();
                        Array.isArray(r) && r.length && (n.pages = It.clone(r)), Array.isArray(o) && o.length && (n.shares = It.clone(o)), 
                        Pt().clear(), Ct().clear(), e.sessions = [ n ];
                    }
                    var i = Lt().getEkvs();
                    return i && (e.ekvs = It.clone(i), Lt().clear()), (e.sessions || e.ekvs) && (t = {
                        analytics: e
                    }), t;
                }();
                break;

              case qt.EKV:
                e = function() {
                    var t = null, e = Lt().getEkvs();
                    return e && (t = {
                        analytics: {
                            ekvs: It.clone(e)
                        }
                    }, Lt().clear()), t;
                }();
            }
            return e;
        }
        function _(t) {
            return {
                h: function(t, e) {
                    var n = g(t, e);
                    return t && t.id_tracking && (n[e.id_tracking || "id_tracking"] = g(t.id_tracking, Wt)), 
                    n;
                }(t.header, zt),
                a: function(t, e) {
                    var n = {};
                    if (t) for (var r in t) t[r] && (n[e[r]] = t[r]);
                    return n;
                }(t.analytics, Ht)
            };
        }
        function g(t, e) {
            var n = {};
            for (var r in t) e[r] ? n[e[r]] = t[r] : n[r] = t[r];
            return n;
        }
        function m() {
            this.init = function(t) {
                Et.getClipboard(function(e) {
                    _t = Rt().get(Yt);
                    try {
                        if (e && It.startsWith(e, Jt) && e.split(Jt)[1]) {
                            var n = e.split(Jt)[1], r = JSON.parse(n).token;
                            r && (_t = r, Rt().set(Yt, r));
                        }
                    } catch (e) {
                        X().v(e);
                    }
                    t(!!_t);
                });
            }, this.getToken = function() {
                return _t;
            }, this.clear = function() {
                _t = "", Rt().remove(Yt);
            };
        }
        function b(t) {
            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? te(192 | e >>> 6) + te(128 | 63 & e) : te(224 | e >>> 12 & 15) + te(128 | e >>> 6 & 63) + te(128 | 63 & e);
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return te(240 | e >>> 18 & 7) + te(128 | e >>> 12 & 63) + te(128 | e >>> 6 & 63) + te(128 | 63 & e);
        }
        function O(t) {
            var e = [ 0, 2, 1 ][t.length % 3], n = t.charCodeAt(0) << 16 | (1 < t.length ? t.charCodeAt(1) : 0) << 8 | (2 < t.length ? t.charCodeAt(2) : 0);
            return [ Qt.charAt(n >>> 18), Qt.charAt(n >>> 12 & 63), 2 <= e ? "=" : Qt.charAt(n >>> 6 & 63), 1 <= e ? "=" : Qt.charAt(63 & n) ].join("");
        }
        function S(t) {
            return t.replace(ee, b).replace(/[\s\S]{1,3}/g, O);
        }
        function A(t) {
            switch (t.length) {
              case 4:
                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                return te(55296 + (e >>> 10)) + te(56320 + (1023 & e));

              case 3:
                return te((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

              default:
                return te((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
            }
        }
        function w(t) {
            var e = t.length, n = e % 4, r = (0 < e ? Zt[t.charAt(0)] << 18 : 0) | (1 < e ? Zt[t.charAt(1)] << 12 : 0) | (2 < e ? Zt[t.charAt(2)] << 6 : 0) | (3 < e ? Zt[t.charAt(3)] : 0), o = [ te(r >>> 16), te(r >>> 8 & 255), te(255 & r) ];
            return o.length -= [ 0, 0, 2, 1 ][n], o.join("");
        }
        function E(t) {
            return t.replace(/[\s\S]{1,4}/g, w).replace(ne, A);
        }
        function k(t, e, n, r) {
            Kt.instance().setIdType(Tt().getIdType()), Kt.instance().setIdTracking(Tt().getIdTracking());
            var o = Tt().getUserId();
            o && t.analytics && (t.analytics.active_user = {
                puid: o,
                provider: Tt().getProvider()
            });
            var i = It.clone(Kt.instance().get());
            t.header = It.assign(i, t.header, {
                ts: Date.now(),
                testToken: Xt().getToken(),
                traceId: It.getRandomStr(10) + Date.now() + It.getRandomStr(9)
            });
            var a, s = _(t), c = Nt.stringify(s), u = {
                url: $t.LOG_URL,
                method: "POST",
                data: re.encode(c),
                success: function(r) {
                    var o = r.code || r.status || r.statusCode;
                    200 === o || 413 === o ? (X().i("数据发送成功: ", t, c), function(t) {
                        t && (Kt.instance().setItem($t.IMPRINT, t), oe.set(t), oe.save(), X().v("imprint: ", oe.get()), 
                        oe.getItem("ttn_invalid") && Xt().clear());
                    }((r.data || {}).imprint), "function" == typeof e && e(r)) : (X().w("数据发送失败: ", c), 
                    "function" == typeof n && n());
                },
                fail: function(t) {
                    X().w("超时: ", c), "function" == typeof n && n();
                },
                complete: function() {
                    "function" == typeof r && r();
                }
            };
            Et.request(It.assign(u, {
                header: {
                    "Content-Type": a = Et.getSdkType() + "/json",
                    "Msg-Type": a
                }
            }));
        }
        function $(t) {
            var e = Ot.front();
            e ? k(e, function() {
                Ot.dequeue(), $(t);
            }, function() {
                var e = Ot.dequeue();
                e && !e.noCache && bt.push(e), $(t);
            }) : (bt.forEach(function(t) {
                Ot.enqueue(t);
            }), bt.length = 0, t());
        }
        function I(t) {
            Tt().getId() ? mt ? X().i("队列正在发送中") : (mt = !0, $(function() {
                mt = !1, "function" == typeof t && t();
            })) : (X().i("获取id标识失败，暂缓发送"), "function" == typeof t && t());
        }
        function x() {
            this.send = function(t, e, n) {
                t ? this.add(t, e, function() {
                    I(n);
                }) : I(n);
            }, this.add = function(t, e, n) {
                !function t(e, n, r) {
                    if (Kt.instance().isLoaded()) {
                        n = n || {};
                        var o = y(e);
                        if (o) {
                            var i = Kt.instance().getRealtimeFields();
                            o.header = It.assign({}, o.header, i), o.noCache = n.noCache, Ot.enqueue(o);
                        }
                        "function" == typeof r && r();
                    } else setTimeout(function() {
                        t(e, n, r);
                    }, 100);
                }(t, e, n);
            }, this.load = function() {
                var t = Rt().get($t.REQUESTS);
                t && t.length && t.forEach(function(t) {
                    Ot.enqueue(t);
                }), Rt().remove($t.REQUESTS);
            }, this.save = function() {
                Rt().set($t.REQUESTS, It.clone(Ot.items())), Ot.clear();
            };
        }
        function T() {
            this.update = function() {
                Et.getUserInfo(function(t) {
                    if (t) {
                        var e = Rt().get($t.USER_INFO);
                        e && It.deepEqual(t, e) || function(t, e) {
                            var n = Q().appKey(), r = Et.getSdkType(), o = Tt().getId(), i = Tt().getIdType();
                            if (n && r && o && i) {
                                var a = {
                                    ak: Q().appKey(),
                                    sdt: Et.getSdkType(),
                                    uin: t.nickName,
                                    uia: t.avatar,
                                    uig: t.gender,
                                    uit: t.country,
                                    uip: t.province,
                                    uic: t.city,
                                    uil: t.language,
                                    id: Tt().getId(),
                                    it: Tt().getIdType()
                                }, s = JSON.stringify(a);
                                s = re.encode(s), Et.request({
                                    url: $t.USERINFO_URL,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: "ui=" + s,
                                    success: function(n) {
                                        X().v("用户信息上传成功: ", t), e && e(n && n.data && 200 === n.data.code);
                                    },
                                    fail: function() {
                                        X().e("用户信息上传失败: ", t), e && e(!1);
                                    }
                                });
                            }
                        }(t, function(e) {
                            e && Rt().set($t.USER_INFO, t);
                        });
                    }
                });
            };
        }
        function P(e, n) {
            this.id = e, this.ts = Date.now();
            var r = void 0 === n ? "undefined" : t(n);
            if ("string" == r && n) this[e] = n; else if ("object" == r) for (var o in n) !{}.hasOwnProperty.call(n, o) || (this[o] = n[o]);
        }
        function j() {
            var e = !1, n = !1, r = 0;
            this.init = function(t) {
                X().v("sdk version: " + $t.IMPL_VERSION), e ? X().v("Lib重复实例化") : Rt().load(function() {
                    X().v("cache初始化成功: ", Rt().getAll()), Tt().setUseOpenid && Tt().setUseOpenid(Q().useOpenid()), 
                    Tt().init(function() {
                        Kt.instance().init(), X().v("Header初始化成功");
                    }), e = !0, "function" == typeof t && t(), X().tip("SDK集成成功");
                });
            }, this.resume = function(t) {
                if (e && !n) {
                    X().v("showOptions: ", t);
                    var r = this;
                    n = !0, Q().enableVerify() ? Xt().init(function() {
                        r._resume(t);
                    }) : r._resume(t);
                }
            }, this._resume = function(t) {
                ie().load();
                var e = Gt().resume(t), n = Gt().getCurrentSessionId();
                Lt().setSessionId(n), e && ie().add(qt.HALF_SESSION, {}, function() {
                    Tt().setUseOpenid && Tt().setUseOpenid(Q().useOpenid()), Q().useOpenid() && Q().autoGetOpenid() && !Tt().getId() ? (X().v("get id async"), 
                    function t(e, n) {
                        Tt().getId() || e <= 0 || Tt().getOpenIdAsync(Q().appKey(), function(r) {
                            r ? (X().v("获取id成功"), ie().send()) : (X().v("获取openid失败,启动重试,剩余可用次数", e - 1), setTimeout(function() {
                                t(e - 1, n);
                            }, n));
                        });
                    }(10, 3e3)) : (X().v("session auto send"), ie().send());
                });
            }, this.pause = function(t) {
                e && (n = !1, r = 0, Gt().pause(), Q().uploadUserInfo() && ae().update(), ie().send(qt.CLOSE_SESSION, {}, function() {
                    ie().save(), Rt().save(), X().v("cache save success"), "function" == typeof t && t();
                }));
            }, this.setOpenid = function(t) {
                X().v("setOpenId: %s", t), Tt().setOpenid(t), ie().send();
            }, this.setUnionid = function(t) {
                X().v("setUnionid: %s", t), Tt().setUnionid(t);
            }, this.setUserid = function(t, e) {
                X().v("setUserid: %s", t, e), Tt().setUserid(t, e);
            }, this.setAnonymousid = function(t) {
                X().v("setAnonymousId: %s", t), Tt().setAnonymousid(t), ie().send();
            }, this.setAppVersion = function(t) {
                t && "string" != typeof t ? X().w("setAppVersion方法只接受字符串类型参数") : Kt.instance().setAppVersion(t);
            }, this.setAlipayUserid = function(t) {
                t && "string" != typeof t ? X().w("setAlipayUserid方法只接受字符串类型参数") : (X().v("setAlipayUserid: %s", t), 
                Tt().setAlipayUserid(t));
            }, this.setSuperProperty = function(t) {
                if (t && "string" != typeof t) X().w("超级属性只支持字符串类型"); else {
                    var e = this;
                    Kt.instance().getSuperProperty() !== t && (Kt.instance().setSuperProperty(t), e.pause(function() {
                        e.resume();
                    }));
                }
            }, this.trackEvent = function(n, o) {
                var i, a;
                if (e && (X().v("event: ", n, o), function(e, n) {
                    if (e && "string" == typeof e) {
                        var r = [ "id", "ts", "du" ], o = {};
                        if (r.forEach(function(t) {
                            o[t] = 1;
                        }), o[e]) X().e("eventId不能与以下保留字冲突: " + r.join(",")); else if (e.length > $t.MAX_EVENTID_LENGTH) X().e("The maximum length of event id shall not exceed " + $t.MAX_EVENTID_LENGTH); else {
                            if (!n || "object" == (void 0 === n ? "undefined" : t(n)) && !Array.isArray(n) || "string" == typeof n) {
                                if ("object" == (void 0 === n ? "undefined" : t(n))) {
                                    var i = 0;
                                    for (var a in n) if ({}.hasOwnProperty.call(n, a)) {
                                        if (a.length > $t.MAX_PROPERTY_KEY_LENGTH) return void X().e("The maximum length of property key shall not exceed " + $t.MAX_PROPERTY_KEY_LENGTH);
                                        if (i >= $t.MAX_PROPERTY_KEYS_COUNT) return void X().e("The maximum count of properties shall not exceed " + $t.MAX_PROPERTY_KEYS_COUNT);
                                        if (o[a]) return void X().e("属性中的key不能与以下保留字冲突: " + r.join(","));
                                        i += 1;
                                    }
                                }
                                return 1;
                            }
                            X().e("please check trackEvent properties. properties should be string or object(not include Array)");
                        }
                    } else X().e('please check trackEvent id. id should be "string" and not null');
                }(n, o))) {
                    var s = new P(n, o);
                    Lt().addEvent(s);
                    var c = !!Xt().getToken(), u = c ? 0 : $t.EVENT_SEND_DEFAULT_INTERVAL, f = Date.now();
                    i = f, a = u, ("number" != typeof r || "number" != typeof a || r <= 0 || a < i - r) && (r = f, 
                    ie().send(qt.EKV, {
                        noCache: c
                    }, function() {}));
                }
            }, this.trackShare = function(t) {
                if (e) {
                    try {
                        -1 < Et.getSdkType().indexOf("game") ? (t = Ct().add(t, !0), X().v("shareQuery: ", t)) : (t = Ct().add(t, !1), 
                        X().v("sharePath: ", t.path));
                    } catch (t) {
                        X().v("shareAppMessage: ", t);
                    }
                    return t;
                }
            }, this.trackPageStart = function(t) {
                e && Pt().addPageStart(t);
            }, this.trackPageEnd = function(t) {
                e && Pt().addPageEnd(t);
            }, this.onShareAppMessage = function(t) {
                var e = this;
                Et.onShareAppMessage(function() {
                    return e.trackShare(t());
                });
            }, this.shareAppMessage = function(t) {
                this.trackShare(t), Et.shareAppMessage(t);
            };
        }
        function C() {}
        function N(t, e) {
            t >= ce.length || e ? (e && function() {
                var t = "https://umini.shujupie.com";
                $t.LOG_URL = $t.LOG_URL.replace(t, ce[ue]), $t.GET_OPENID_URL = $t.GET_OPENID_URL.replace(t, ce[ue]), 
                $t.USERINFO_URL = $t.USERINFO_URL.replace(t, ce[ue]);
            }(), e && X().v("命中可用服务", ce[ue]), e || X().tip_w("未命中可用服务")) : Et.request({
                url: ce[t] + "/uminiprogram_logs/ckdh",
                success: function(e) {
                    200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code ? N((ue = t) + 1, !0) : N(t + 1, !1);
                },
                fail: function() {
                    N(t + 1, !1);
                }
            });
        }
        function R(t) {
            X().v("开始构建 fetch body"), Et.getSystemInfo(function(e) {
                Et.getNetworkInfo(function(n) {
                    var r = (r = (n = n || {}).networkType) === le.MOBILE_NETWORK_NONE ? "unknown" : r.toUpperCase();
                    ve.access = r, function(t, e) {
                        var n = t.brand || "";
                        if (ve.deviceType = "Phone", ve.sdkVersion = le.SDK_VERSION, ve.appkey = Q().appKey(), 
                        ve.sdkType = Et.getSdkType(), ve.umid = Tt().getId(), t) {
                            ve.language = t.language || "", ve.os = t.OS, ve.osVersion = t.OSVersion, ve.deviceName = t.deviceName, 
                            ve.platformVersion = t.platformVersion, ve.platformSdkVersion = t.platformSDKVersion, 
                            ve.deviceBrand = n;
                            var r = t.resolution.split("*");
                            de.isArray(r) && (ve.resolutionHeight = Number(r[0]), ve.resolutionWidth = Number(r[1]));
                        }
                        !function(t) {
                            t && (ve.installTime = t.install_datetime && Date.parse(t.install_datetime), ve.scene = t.install_scene, 
                            ve.channel = t.install_channel, ve.campaign = t.install_campaign);
                        }(oe.get()), e && e(ve);
                    }(e, t);
                });
            });
        }
        function D(t) {
            t && de.each(t, function(t) {
                ye[t.k] = t;
            });
        }
        function U() {
            var t = this;
            this.STORAGE_NAME = null, At.on(wt, function(e) {
                X().v("云配初始化开始..."), t.init(e);
            });
        }
        function L(t) {
            t && (be = t);
        }
        function M() {
            return function(t, e) {
                if (!t) return "";
                var n = [];
                for (var r in e) "_um_ssrc" !== r && "_um_sts" !== r && n.push(r + "=" + e[r]);
                var o = n.join("&");
                return o ? t + "?" + o : t;
            }(be, Oe[be]);
        }
        function V(t, e) {
            if (t.onShareAppMessage) {
                var n = t.onShareAppMessage;
                t.onShareAppMessage = function(t) {
                    var r = n.call(this, t) || {}, o = M();
                    return !r.path && o && (r.path = o), e.trackShare.call(this, r);
                };
            }
        }
        function F(t, e, n) {
            var r = t[e];
            t[e] = function(t) {
                n.call(this, t), r && r.call(this, t);
            };
        }
        function q(t) {
            try {
                pe.resume(t, !0);
            } catch (t) {
                X().v("onAppShow: ", t);
            }
        }
        function B() {
            try {
                pe.pause();
            } catch (t) {
                X().v("onAppHide: ", t);
            }
        }
        function K() {
            try {
                L(this.route), pe.trackPageStart(this.route);
            } catch (t) {
                X().v("onPageShow: ", t);
            }
        }
        function G(t) {
            try {
                L(this.route), t && (e = this.route, n = t, e && (Oe[e] = n)), X().v("Page onLoad: ", this.route, t);
            } catch (t) {
                X().v("onPageLoad: ", t);
            }
            var e, n;
        }
        function H() {
            try {
                pe.trackPageEnd(this.route);
            } catch (t) {
                X().v("onPageHide: ", t);
            }
        }
        var z, W, J, Y = "[UMENG] -- ", X = (W = !1, function() {
            return null === z && (z = new o()), z;
        }), Q = (J = z = null, function() {
            return J = J || new i();
        });
        a.prototype.addListener = a.prototype.on = function(t, e) {
            var n = this.listeners;
            n[t] && n[t].length >= this.maxListener ? console.error("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[t] instanceof Array ? -1 === n[t].indexOf(e) && n[t].push(e) : n[t] = [].concat(e);
        }, a.prototype.emit = function(t) {
            var e = Array.prototype.slice.call(arguments);
            e.shift();
            var n = this.listeners;
            n[t] instanceof Array && n[t].forEach(function(t) {
                t.apply(null, e);
            });
        }, a.prototype.listeners = function(t) {
            return this.listeners[t];
        }, a.prototype.setMaxListeners = function(t) {
            this.maxListener = t;
        }, a.prototype.removeListener = function(t, e) {
            var n = this.listeners, r = (n[t] || []).indexOf(e);
            0 <= r && n[t].splice(r, 1);
        }, a.prototype.removeAllListener = function(t) {
            this.listeners[t] = [];
        }, a.prototype.once = function(t, e) {
            var n = this;
            this.on(t, function r() {
                var o = Array.prototype.slice.call(arguments);
                e.apply(null, o), n.removeListener(t, r);
            });
        };
        var Z, tt, et, nt, rt, ot, it, at, st, ct, ut, ft, pt, lt, dt, ht, vt, yt, _t, gt, mt, bt, Ot, St, At = new a(), wt = 0, Et = new (function() {
            function t() {}
            return t.prototype.setStorage = function(t, e, n) {
                wx.setStorage({
                    key: t,
                    data: e,
                    success: function() {
                        "function" == typeof n && n(!0);
                    },
                    fail: function() {
                        "function" == typeof n && n(!1);
                    }
                });
            }, t.prototype.getStorage = function(t, e) {
                wx.getStorage({
                    key: t,
                    success: function(t) {
                        "function" == typeof e && e(t.data);
                    },
                    fail: function(n) {
                        X().w(t + ": " + n.errMsg), "function" == typeof e && e();
                    }
                });
            }, t.prototype.removeStorage = function(t, e) {
                wx.removeStorage({
                    key: t,
                    success: function() {
                        "function" == typeof e && e(!0);
                    },
                    fail: function() {
                        "function" == typeof e && e(!1);
                    }
                });
            }, t.prototype.getSystemInfo = function(t) {
                wx.getSystemInfo({
                    success: function(e) {
                        var n = {
                            model: e.model,
                            brand: e.brand,
                            pixelRatio: e.pixelRatio,
                            screenWidth: e.screenWidth,
                            screenHeight: e.screenHeight,
                            fontSizeSetting: e.fontSizeSetting,
                            platform: e.platform,
                            platformVersion: e.version,
                            platformSDKVersion: e.SDKVersion,
                            language: e.language,
                            deviceName: e.model,
                            OSVersion: e.system,
                            resolution: ""
                        }, r = e.system.split(" ");
                        Array.isArray(r) && (n.OS = r[0]);
                        var o = Math.round(e.screenWidth * e.pixelRatio), i = Math.round(e.screenHeight * e.pixelRatio);
                        n.resolution = i < o ? o + "*" + i : i + "*" + o, "function" == typeof t && t(n);
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getDeviceInfo = function(t) {
                "function" == typeof t && t("");
            }, t.prototype.checkNetworkAvailable = function(t) {
                wx.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t(e && "none" !== e.networkType);
                    },
                    fail: function() {
                        "function" == typeof t && t(!1);
                    }
                });
            }, t.prototype.getNetworkInfo = function(t) {
                wx.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t({
                            networkAvailable: "none" !== e.networkType,
                            networkType: e.networkType
                        });
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getDeviceId = function(t) {
                t("");
            }, t.prototype.getAdvertisingId = function(t) {
                "function" == typeof t && t("");
            }, t.prototype.onNetworkStatusChange = function(t) {
                wx.onNetworkStatusChange(function(e) {
                    "function" == typeof t && t(e.isConnected);
                });
            }, t.prototype.request = function(t) {
                var e = t.success, n = t.fail, r = !1, o = null;
                t.success = function(t) {
                    r || (o && clearTimeout(o), "function" == typeof e && e(t));
                }, t.fail = function() {
                    r || (o && clearTimeout(o), "function" == typeof n && n(!1));
                }, wx.request(t), o = setTimeout(function() {
                    o && clearTimeout(o), r = !0, "function" == typeof n && n(r);
                }, t.timeout || 5e3);
            }, t.prototype.getSdkType = function() {
                return "wxmp";
            }, t.prototype.getPlatform = function() {
                return "wx";
            }, t.prototype.connectSocket = function(t) {
                wx.connectSocket(t);
            }, t.prototype.closeSocket = function(t) {
                wx.closeSocket(t);
            }, t.prototype.sendSocketMessage = function(t) {
                wx.sendSocketMessage(t);
            }, t.prototype.onSocketOpen = function(t) {
                wx.onSocketOpen(t);
            }, t.prototype.onSocketClose = function(t) {
                wx.onSocketClose(t);
            }, t.prototype.onSocketMessage = function(t) {
                wx.onSocketMessage(t);
            }, t.prototype.onSocketError = function(t) {
                wx.onSocketError(t);
            }, t.prototype.getClipboard = function(t) {
                try {
                    wx.getClipboardData({
                        success: function(e) {
                            "function" == typeof t && t(e.data);
                        },
                        fail: function() {
                            "function" == typeof t && t("");
                        }
                    });
                } catch (t) {
                    X.e("读取clipboard发生错误", t);
                }
            }, t.prototype.showModal = function(t) {
                try {
                    wx.showModal(t);
                } catch (t) {
                    X.e("展示Modal时发生错误", t);
                }
            }, t.prototype.showToast = function(t) {
                try {
                    wx.showToast(t);
                } catch (t) {
                    X.e("showToast error", t);
                }
            }, t.prototype.getUserInfo = function(t) {
                var e = {
                    fail: function() {
                        t && t();
                    },
                    success: function(e) {
                        if (e && e.userInfo) {
                            var n = e.userInfo;
                            t && t({
                                avatar: n.avatarUrl,
                                nickName: n.nickName,
                                gender: n.gender,
                                country: n.country,
                                province: n.province,
                                city: n.city,
                                language: n.language
                            });
                        }
                    }
                };
                try {
                    wx.getSetting({
                        success: function(t) {
                            t.authSetting["scope.userInfo"] && wx.getUserInfo(e);
                        },
                        fail: function() {
                            t();
                        }
                    });
                } catch (t) {
                    X.e("getUserInfo error", t);
                }
            }, t.prototype.getAppInfoSync = function() {
                if (wx.getAccountInfoSync) {
                    var t = wx.getAccountInfoSync(), e = t && t.miniProgram ? t.miniProgram : {};
                    return {
                        appId: e.appId,
                        appEnv: e.envVersion,
                        appVersion: e.version
                    };
                }
                return {};
            }, t.prototype.onShareAppMessage = function(t) {
                wx.onShareAppMessage(t);
            }, t.prototype.shareAppMessage = function(t) {
                wx.shareAppMessage(t);
            }, t;
        }())(), kt = function(t, e) {
            return (kt = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }, $t = {
            SESSION_INTERVAL: 3e4,
            LOG_URL: "https://umini.shujupie.com/wxm_logs",
            GET_OPENID_URL: "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
            USERINFO_URL: "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
            DEVICE_INFO_KEY: "device_info",
            ADVERTISING_ID: "mobile_ad_id",
            ANDROID_ID: "android_id",
            CURRENT_SESSION: "current_session",
            SESSION_PAUSE_TIME: "session_pause_time",
            EVENT_SEND_DEFAULT_INTERVAL: 15e3,
            EVENT_LAST_SEND_TIME: "last_send_time",
            MAX_EVENTID_LENGTH: 128,
            MAX_PROPERTY_KEY_LENGTH: 256,
            MAX_PROPERTY_KEYS_COUNT: 100,
            REPORT_POLICY: "report_policy",
            REPORT_INTERVAL_TIME: "report_interval_time",
            REPORT_POLICY_START_SEND: "1",
            REPORT_POLICY_INTERVAL: "6",
            IMPRINT: "imprint",
            SEED_VERSION: "1.0.0",
            IMPL_VERSION: "2.4.6",
            ALIPAY_AVAILABLE_VERSION: "10.1.52",
            SHARE_PATH: "um_share_path",
            SHARES: "shares",
            REQUESTS: "requests",
            UUID: "um_uuid",
            UUID_SUFFIX: "ud",
            OPENID: "um_od",
            UNIONID: "um_unid",
            ALIPAYID: "um_alipayid",
            USERID: "um_userid",
            PROVIDER: "um_provider",
            SWANID: "um_swanid",
            ANONYMOUSID: "um_anonymousid",
            LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
            UM_SSRC: "_um_ssrc",
            USER_INFO: "user_info",
            IS_ALIYUN: !1,
            ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
        }, It = {
            isNumber: function(t) {
                return !Number.isNaN(parseInt(t, 10));
            },
            compareVersion: function(t, e) {
                for (var n = String(t).split("."), r = String(e).split("."), o = 0; o < Math.max(n.length, r.length); o++) {
                    var i = parseInt(n[o] || 0, 10), a = parseInt(r[o] || 0, 10);
                    if (a < i) return 1;
                    if (i < a) return -1;
                }
                return 0;
            },
            getRandomStr: function(t) {
                for (var e = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], r = 0; r < Number(t); r++) e += n[Math.round(Math.random() * (n.length - 1))];
                return e;
            },
            clone: function(t) {
                return JSON.parse(JSON.stringify(t));
            },
            startsWith: function(t, e) {
                return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
            },
            endsWith: function(t, e) {
                return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e;
            },
            assign: function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
            },
            deepEqual: function e(n, r) {
                if (n === r) return !0;
                if (n && "object" == (void 0 === n ? "undefined" : t(n)) && r && "object" == (void 0 === r ? "undefined" : t(r))) {
                    if (Object.keys(n).length !== Object.keys(r).length) return !1;
                    for (var o in n) {
                        if (Object.prototype.hasOwnProperty.call(r, o)) return !1;
                        if (!e(n[o], r[o])) return !1;
                    }
                    return !0;
                }
                return !1;
            },
            trimStart: function(t, e) {
                if (!t) return "";
                if ("string" == typeof e && e.length) {
                    var n = new RegExp("^" + e + "*");
                    t = t.replace(n, "");
                } else t = t.replace(/^s*/, "");
                return t;
            },
            trimEnd: function(t, e) {
                if (!t) return "";
                var n, r;
                if ("string" == typeof e && e.length) {
                    for (n = new RegExp(e), r = t.length; n.test(t.charAt(r)); ) --r;
                    return t.slice(0, r + 1);
                }
                for (n = /s/, r = t.length - 1; n.test(t.charAt(r)); ) --r;
                return t.slice(0, r + 1);
            }
        }, xt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return s(e, t), e.prototype.getOpenIdAsync = function(t, e) {
                var n = this;
                wx.login({
                    success: function(r) {
                        r.code ? Et.request({
                            url: $t.GET_OPENID_URL,
                            method: "GET",
                            data: {
                                key: t,
                                code: r.code
                            },
                            success: function(t) {
                                if (t && 200 === t.statusCode && t.data && t.data.data) {
                                    var r = t.data.data;
                                    return n.setOpenid(r.oid), n.setUnionid(r.uid), e && e(!0);
                                }
                                e && e();
                            },
                            fail: function(t) {
                                X().v("wx request failed...", t), e && e();
                            }
                        }) : e && e();
                    },
                    fail: function() {
                        e && e();
                    }
                });
            }, e;
        }(function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._openid = "", e._unionid = "", e._useOpenid = !1, e;
            }
            return s(e, t), e.prototype.initID = function(t) {
                var e = this;
                e._idType = e._useOpenid ? "openid" : "uuid", X().v("id type: ", e._idType), Et.getStorage($t.UNIONID, function(t) {
                    e._unionid = t;
                }), this._useOpenid ? Et.getStorage($t.OPENID, function(n) {
                    e._openid = n, t && t();
                }) : t && t();
            }, e.prototype.setUseOpenid = function(t) {
                this._useOpenid = t;
            }, e.prototype.setOpenid = function(t) {
                !this._openid && t && (this._openid = t, Et.setStorage($t.OPENID, t));
            }, e.prototype.setUnionid = function(t) {
                !this._unionid && t && (this._unionid = t, Et.setStorage($t.UNIONID, t));
            }, e.prototype.getIdTracking = function() {
                var e = t.prototype.getIdTracking.call(this);
                return this._openid && (e.openid = this._openid), this._unionid && (e.unionid = this._unionid), 
                this._userid && (e.userid = this._userid), e;
            }, e.prototype.getId = function() {
                return this._useOpenid ? this._openid : this._uuid;
            }, e;
        }(function() {
            function t() {
                this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
            }
            return t.prototype.createUUID = function() {
                return It.getRandomStr(10) + Date.now() + It.getRandomStr(7) + $t.UUID_SUFFIX;
            }, t.prototype.initUUID = function(t) {
                var e = this;
                Et.getStorage($t.UUID, function(n) {
                    n ? e._uuid = n : (e._uuid = e.createUUID(), Et.setStorage($t.UUID, e._uuid)), t && t(n);
                });
            }, t.prototype.initUserid = function() {
                var t = this;
                Et.getStorage($t.USERID, function(e) {
                    !t._userid && e && (t._userid = e, X().v("userId is ", e));
                }), Et.getStorage($t.PROVIDER, function(e) {
                    !t._provider && e && (t._provider = e, X().v("provider is ", e));
                });
            }, t.prototype.init = function(t) {
                var e = this;
                e.initUUID(function() {
                    e.initUserid(), e.initID(t);
                });
            }, t.prototype.setUserid = function(t, e) {
                !this._userid && t && (this._userid = t, this._provider = e, Et.setStorage($t.USERID, t), 
                Et.setStorage($t.PROVIDER, e));
            }, t.prototype.getUserId = function() {
                return this._userid;
            }, t.prototype.getProvider = function() {
                return this._provider;
            }, t.prototype.getIdType = function() {
                return this._idType;
            }, t.prototype.getIdTracking = function() {
                var t = {};
                return this._uuid && (t.uuid = this._uuid), this._userid && (t.userid = this._userid), 
                t;
            }, t;
        }())), Tt = function() {
            return Z = Z || new xt();
        }, Pt = function() {
            return tt = tt || new c();
        }, jt = {}, Ct = function() {
            return et = et || new f();
        }, Nt = {
            stringify: function(t) {
                if (t) try {
                    return JSON.stringify(t);
                } catch (t) {}
                return "";
            },
            parse: function(t) {
                if (t) try {
                    return JSON.parse(t);
                } catch (t) {}
                return null;
            },
            parseToArray: function(t) {
                if (t) try {
                    return JSON.parse(t);
                } catch (t) {}
                return [];
            }
        }, Rt = (st = !(nt = []), function() {
            return ot = ot || new p();
        }), Dt = "ekvs", Ut = 1e4, Lt = (ft = [], pt = [], function() {
            return ct = ct || {
                addEvent: function(t) {
                    ut ? (ft.unshift(t), 1 < ft.length && (l(), ft.length = 0)) : (X().w("session id is null: ", ut), 
                    pt.unshift(t));
                },
                setSessionId: function(t) {
                    if (ut = t, X().v("setSessionId: ", ut), Array.isArray(pt) && pt.length && ut) {
                        for (var e = 0; e < pt.length; e++) this.addEvent(pt[e]);
                        pt.length = 0;
                    }
                },
                getEkvs: function() {
                    var t = Rt().get(Dt);
                    return ft && ft.length && (t = d(t, ft)), t;
                },
                clear: function() {
                    Rt().remove(Dt), ft.length = 0;
                }
            };
        }), Mt = "2g", Vt = "3g", Ft = "4g", qt = {
            HALF_SESSION: "half_session",
            CLOSE_SESSION: "close_session",
            EKV: "ekv",
            ENTER_PAGE: "enter_page",
            LEAVE_PAGE: "leave_page"
        }, Bt = [ "access", "access_subtype" ], Kt = {
            instance: function() {
                return lt = lt || h();
            }
        }, Gt = function() {
            return dt = dt || v();
        }, Ht = {
            sessions: "sn",
            ekvs: "e",
            active_user: "active_user"
        }, zt = {
            sdk_type: "sdt",
            access: "ac",
            access_subtype: "acs",
            device_model: "dm",
            language: "lang",
            device_type: "dt",
            device_manufacturer: "dmf",
            device_name: "dn",
            platform_version: "pv",
            id_type: "it",
            font_size_setting: "fss",
            os_version: "ov",
            device_manuid: "did",
            platform_sdk_version: "psv",
            device_brand: "db",
            appkey: "ak",
            _id: "id",
            id_tracking: "itr",
            imprint: "imp",
            sdk_version: "sv",
            resolution: "rl",
            testToken: "ttn"
        }, Wt = {
            uuid: "ud",
            unionid: "und",
            openid: "od",
            anonymousid: "nd",
            alipay_id: "ad",
            device_id: "dd",
            userid: "puid"
        }, Jt = "_UMTEST_", Yt = "TEST_TOKEN", Xt = (yt = vt = ht = dt = lt = at = ot = et = tt = Z = null, 
        _t = it = rt = "", function() {
            return yt = yt || new m();
        }), Qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zt = function(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
            return e;
        }(Qt), te = String.fromCharCode, ee = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ne = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), re = {
            encode: function(t, e) {
                return e ? S(String(t)).replace(/[+\/]/g, function(t) {
                    return "+" == t ? "-" : "_";
                }).replace(/=/g, "") : S(String(t));
            },
            decode: function(t) {
                return E(String(t).replace(/[-_]/g, function(t) {
                    return "-" == t ? "+" : "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            }
        }, oe = new function() {
            var t = {};
            this.set = function(e) {
                t = Nt.parse(re.decode(e));
            }, this.get = function() {
                return t;
            }, this.getItem = function(e) {
                if (t) return t[e];
            }, this.load = function() {
                t = Rt().get($t.IMPRINT);
            }, this.save = function() {
                t && Rt().set($t.IMPRINT, t);
            };
        }(), ie = (gt = null, mt = !1, bt = [], Ot = new function(t) {
            var e = t, n = [];
            this.enqueue = function(t) {
                "number" == typeof e && this.size() >= e && this.dequeue(), n.push(t);
            }, this.dequeue = function() {
                return n.shift();
            }, this.front = function() {
                return n[0];
            }, this.isEmpty = function() {
                return 0 === n.length;
            }, this.clear = function() {
                n.length = 0;
            }, this.size = function() {
                return n.length;
            }, this.items = function() {
                return n;
            }, this.print = function() {
                console.log(n.toString());
            };
        }(50), function() {
            return gt = gt || new x();
        }), ae = (St = null, function() {
            return St = St || new T();
        }), se = [];
        C.prototype = {
            createMethod: function(t, e, n) {
                try {
                    t[e] = n && n[e] ? function() {
                        return n[e].apply(n, arguments);
                    } : function() {
                        se.push([ e, [].slice.call(arguments) ]);
                    };
                } catch (t) {
                    X().v("create method errror: ", t);
                }
            },
            installApi: function(t, e) {
                try {
                    for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","), r = 0, o = n.length; r < o; r++) this.createMethod(t, n[r], e);
                    if (e) for (r = 0, o = se.length; r < o; r++) {
                        var i = se[r];
                        try {
                            e[i[0]].apply(e, i[1]);
                        } catch (t) {
                            X().v("impl[v[0]].apply error: ", i[0], t);
                        }
                    }
                } catch (t) {
                    X().v("install api errror: ", t);
                }
            }
        };
        var ce = [ "https://umini.shujupie.com", "https://ulogs.umeng.com" ], ue = 0;
        ({
            init: function(t) {
                setTimeout(function() {
                    N(0, !1);
                }, t);
            }
        }).init(3e3);
        var fe = new C(), pe = {
            _inited: !1,
            init: function(t) {
                if (this._inited) X().v("已经实例过，请避免重复初始化"); else if (t) if (t.appKey) {
                    "boolean" != typeof t.useOpenid && (t.useOpenid = !0), Q().set(t), X().setDebug(t.debug), 
                    this._inited = !0;
                    var e = this;
                    At.emit(wt, t);
                    try {
                        var n = new j();
                        X().v("成功创建Lib对象"), n.init(function() {
                            X().v("Lib对象初始化成功"), fe.installApi(e, n), X().v("安装Lib接口成功"), At.emit(1, t);
                        });
                    } catch (t) {
                        X().w("创建Lib对象异常: " + t);
                    }
                } else X().err("请确保传入正确的appkey"); else X().err("请正确设置相关信息！");
            }
        };
        try {
            fe.installApi(pe, null);
        } catch (z) {
            X().w("uma赋值异常: ", z);
        }
        var le = {
            FETCH_URL: "https://ucc.umeng.com/v1/mini/fetch",
            ABLOG_URL: "https://pslog.umeng.com/mini_ablog",
            SDK_VERSION: "2.4.6",
            MOBILE_NETWORK_NONE: "none",
            MOBILE_NETWORK_2G: "2g",
            MOBILE_NETWORK_3G: "3g",
            MOBILE_NETWORK_4G: "4g",
            MOBILE_NETWORK_5G: "5g",
            MOBILE_NETWORK_WIFI: "wifi",
            IMPRINT: "imprint"
        }, de = {}, he = Array.isArray;
        de.isArray = he || function(t) {
            return "[object Array]" === toString.call(t);
        }, de.isObject = function(t) {
            return t === Object(t) && !de.isArray(t);
        }, de.isEmptyObject = function(t) {
            if (de.isObject(t)) {
                for (var e in t) if (hasOwnProperty.call(t, e)) return !1;
                return !0;
            }
            return !1;
        }, de.isUndefined = function(t) {
            return void 0 === t;
        }, de.isString = function(t) {
            return "[object String]" === toString.call(t);
        }, de.isDate = function(t) {
            return "[object Date]" === toString.call(t);
        }, de.isNumber = function(t) {
            return "[object Number]" === toString.call(t);
        }, de.each = function(t, e, n) {
            if (null != t) {
                var r = {}, o = Array.prototype.forEach;
                if (o && t.forEach === o) t.forEach(e, n); else if (t.length === +t.length) {
                    for (var i = 0, a = t.length; i < a; i++) if (i in t && e.call(n, t[i], i, t) === r) return;
                } else for (var s in t) if (hasOwnProperty.call(t, s) && e.call(n, t[s], s, t) === r) return;
            }
        }, de.buildQuery = function(t, e) {
            var n, r, o = [];
            return void 0 === e && (e = "&"), de.each(t, function(t, e) {
                n = encodeURIComponent(t.toString()), r = encodeURIComponent(e), o[o.length] = r + "=" + n;
            }), o.join(e);
        }, de.JSONDecode = function(t) {
            if (t) {
                try {
                    return JSON.parse(t);
                } catch (t) {
                    console.error("JSONDecode error", t);
                }
                return null;
            }
        }, de.JSONEncode = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                console.error("JSONEncode error", t);
            }
        };
        var ve = Object.create(null), ye = Object.create(null), _e = null, ge = !1, me = {
            minFetchIntervalSeconds: 43200
        };
        U.prototype = {
            setDefaultValues: function(t) {
                ge && de.isObject(t) && de.each(t, function(t, e) {
                    ye[e] && ye[e].v || (ye[e] = {
                        v: t
                    });
                });
            },
            getValue: function(t) {
                X().v("从配置项中读取 value, 当前配置为: ", ye), X().v("待读取的 key : ", t);
                try {
                    if (!ge) return;
                    var e = ye[t] || {};
                    return X().v("读取相应配置ing..., 结果为: ", e), de.isNumber(e.e) && de.isNumber(e.g) && (X().v("读取到相应配置, 开始数据上报..."), 
                    function(t) {
                        var e = {
                            appkey: Q().appKey(),
                            sdkType: Et.getSdkType(),
                            expId: t && t.e,
                            groupId: t && t.g,
                            clientTs: Date.now(),
                            key: t && t.k,
                            value: t && t.v,
                            umid: Tt().getId()
                        };
                        try {
                            Et.request({
                                url: le.ABLOG_URL,
                                method: "POST",
                                data: [ e ],
                                success: function(t) {
                                    t && 200 === t.statusCode ? X().v("上传数据成功", e) : X().w("ablog 请求成功, 返回结果异常 ", t);
                                },
                                fail: function(t) {
                                    X().w("ablog 请求数据错误 ", e, t);
                                }
                            });
                        } catch (t) {
                            X().w("urequest 调用错误", t);
                        }
                    }(e)), e.v;
                } catch (e) {
                    X().w("getValue error, key: ", t);
                }
            },
            active: function(t) {
                try {
                    if (!ge) return;
                    var e, n;
                    t && t.params && (e = t.params), t && t.callback && (n = t.callback), X().v("激活配置项: ", e), 
                    e ? (X().v("本地已缓存的配置项: ", ye), D(e), X().v("合并后的配置项: ", ye), n && n(ye), X().v("active 结束")) : (X().v("配置项为空!! 读取本地配置..."), 
                    Et.getStorage(this.STORAGE_NAME, function(t) {
                        t ? (D((t = de.JSONDecode(t) || {}).params), X().v("当前本地配置项为: ", ye), n && n(ye), 
                        X().v("active 结束")) : X().v("当前本地配置项为空, 退出激活");
                    }));
                } catch (t) {
                    X().w("SDK active 错误", t);
                }
            },
            init: function(t) {
                t.appKey && (_e = t.appKey, this.STORAGE_NAME = "um_remote_config_{{" + _e + "}}"), 
                _e ? ge ? X().w("SDK 已经初始化, 请避免重复初始化") : (ge = !0, this.setOptions(t), this.active()) : X().err("请检查您的小程序 appKey, appKey 不能为空");
            },
            setOptions: function(t) {
                if (de.isObject(t)) {
                    var e = t.minFetchIntervalSeconds;
                    de.isNumber(e) && (me.minFetchIntervalSeconds = Math.max(e, 5));
                }
            },
            fetch: function(t) {
                if (ge && this.STORAGE_NAME) {
                    var e, n;
                    t && t.active && (e = t.active), t && t.callback && (n = t.callback);
                    var r = this;
                    Et.getStorage(this.STORAGE_NAME, function(t) {
                        X().v("开始读缓存 data is ", t), (t = de.JSONDecode(t) || {}).params && t.ts && Date.now() - t.ts < 1e3 * me.minFetchIntervalSeconds ? (X().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                        n && n(t.params)) : R(function(t) {
                            X().v("缓存数据不存在, 构建 fetch body :", t);
                            try {
                                Et.request({
                                    url: le.FETCH_URL,
                                    method: "POST",
                                    data: t,
                                    success: function(t) {
                                        if (t && 200 === t.statusCode && t.data && t.data.cc) {
                                            X().v("fetch 请求成功, 响应数据: ", t.data);
                                            var o = Object.create(null);
                                            de.each(t.data.cc, function(t) {
                                                o[t.k] = t;
                                            });
                                            var i = {
                                                ts: Date.now(),
                                                params: o
                                            };
                                            X().v("开始缓存 fetch 请求的云配置结果..."), Et.setStorage(r.STORAGE_NAME, de.JSONEncode(i), function(t) {
                                                X().v("缓存云配置成功, 缓存数据为: ", i), X().v("缓存云配置成功, 成功消息为: ", t), X().v("云配拉取数据是否自动激活: ", e), 
                                                t && e && (X().v("激活云配置..."), r.active({
                                                    params: o,
                                                    callback: n
                                                }));
                                            });
                                        } else X().w("fetch 请求成功,返回结果异常 ", t.data), n && n();
                                    },
                                    fail: function(e) {
                                        X().w("fetch请求数据错误 ", t, e), n && n();
                                    }
                                });
                            } catch (t) {
                                X().w("urequest调用错误", t);
                            }
                        });
                    });
                }
            }
        };
        var be = "", Oe = {};
        try {
            var Se = App;
            App = function(t) {
                F(t, "onLaunch", function() {
                    !function(t) {
                        try {
                            pe.init(t);
                        } catch (t) {
                            X().v("onAppLaunch: ", t);
                        }
                    }(t.umengConfig);
                }), F(t, "onShow", q), F(t, "onHide", B), Se(t);
            };
        } catch (z) {
            X().w("App重写异常");
        }
        try {
            var Ae = Page;
            Page = function(t) {
                F(t, "onShow", K), F(t, "onHide", H), F(t, "onUnload", H), F(t, "onLoad", G), V(t, pe), 
                Ae(t);
            };
        } catch (z) {
            X().w("Page重写异常");
        }
        try {
            var we = Component;
            Component = function(t) {
                try {
                    t.methods = t.methods || {};
                    var e = t.methods;
                    F(e, "onShow", K), F(e, "onHide", H), F(e, "onUnload", H), F(e, "onLoad", G), V(e, pe), 
                    we(t);
                } catch (e) {
                    we(t);
                }
            };
        } catch (z) {
            X().w("Component重写异常");
        }
        var Ee = pe.init;
        pe.init = function(t) {
            t && t.useOpenid && (X().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"), 
            X().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
            X().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")), 
            Ee.call(pe, t);
        };
        var ke = new U();
        !function(e, n, r) {
            if ("object" == (void 0 === e ? "undefined" : t(e))) {
                if (n.length) e[n] = r; else for (var o in r) if ({}.hasOwnProperty.call(r, o)) {
                    if (e[o]) return void X().v("方法已定义，无法注入此插件方法: ", o);
                    r[o] && (e[o] = function() {
                        r[o](arguments);
                    });
                }
            } else X().v("插件安装失败，宿主对象不能为空");
        }(pe, "rc", ke), wx.uma = pe, e.exports = pe;
    },
    f0c5: function(t, e, n) {
        function r(t, e, n, r, o, i, a, s, c, u) {
            var f, p = "function" == typeof t ? t.options : t;
            if (c) {
                p.components || (p.components = {});
                var l = Object.prototype.hasOwnProperty;
                for (var d in c) l.call(c, d) && !l.call(p.components, d) && (p.components[d] = c[d]);
            }
            if (u && ((u.beforeCreate || (u.beforeCreate = [])).unshift(function() {
                this[u.__module] = this;
            }), (p.mixins || (p.mixins = [])).push(u)), e && (p.render = e, p.staticRenderFns = n, 
            p._compiled = !0), r && (p.functional = !0), i && (p._scopeId = "data-v-" + i), 
            a ? (f = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
                o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
            }, p._ssrRegister = f) : o && (f = s ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), f) if (p.functional) {
                p._injectStyles = f;
                var h = p.render;
                p.render = function(t, e) {
                    return f.call(e), h(t, e);
                };
            } else {
                var v = p.beforeCreate;
                p.beforeCreate = v ? [].concat(v, f) : [ f ];
            }
            return {
                exports: t,
                options: p
            };
        }
        n.d(e, "a", function() {
            return r;
        });
    }
} ]);