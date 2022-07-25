(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/editor/editor" ], {
    "0b10": function(e, a, t) {
        var o = t("108f");
        t.n(o).a;
    },
    "108f": function(e, a, t) {},
    "3b2c": function(e, a, t) {
        (function(e) {
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("aadd"), a(t("66fd")), e(a(t("4fd8")).default);
        }).call(this, t("543d").createPage);
    },
    "4fd8": function(e, a, t) {
        t.r(a);
        var o = t("95e7"), n = t("b6f6");
        for (var r in n) "default" !== r && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(r);
        t("0b10");
        var i = t("f0c5"), s = Object(i.a)(n.default, o.b, o.c, !1, null, "96d9b598", null, !1, o.a, void 0);
        a.default = s.exports;
    },
    "7e82": function(e, a, t) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = t("473e"), n = null, r = {
                components: {
                    addTips: function() {
                        t.e("components/add-tips").then(function() {
                            return resolve(t("8f3f"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        SHOW_TIP: !1,
                        duration: 8,
                        statusBarHeight: 0,
                        windowHeight: 0,
                        isAndroid: getApp().globalData.IS_ANDROID,
                        modalName: null,
                        savedCounts: 0,
                        cansWidth: 280,
                        cansHeight: 280,
                        avatarImage: "",
                        showBorder: !1,
                        currentFrame: void 0,
                        currentCategory: "hot",
                        isFirstSave: !0,
                        rewardedVideoAdShowAll: getApp().globalData.rewardedVideoAdShowAll,
                        categoryList: o.mockCategoryList,
                        assetsList: o.mockAssetsList
                    };
                },
                computed: {
                    frameImage: function() {
                        if (void 0 != this.currentFrame) {
                            var e = "/static/image/" + this.currentFrame.src;
                            return console.log("frameImage:" + e), e;
                        }
                    },
                    imageList: function() {
                        return this.assetsList[this.currentCategory];
                    }
                },
                onLoad: function(a) {
                    this.windowHeight = getApp().globalData.windowHeight, getApp().globalData.userAvatarFilePath && (this.avatarImage = getApp().globalData.userAvatarFilePath), 
                    this.rewardedVideoAdShowAll = getApp().globalData.rewardedVideoAdShowAll, this.$uma.trackEvent("rewarded-VideoAd-showAll", {
                        showAll: this.rewardedVideoAdShowAll
                    });
                    var t = this;
                    wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
                        adUnitId: "adunit-f537301183781503"
                    })).onLoad(function() {
                        t.rewardedVideoAdLoaded = !0;
                    }), n.onError(function(e) {
                        t.rewardedVideoAdLoaded = !1;
                    }), n.onClose(function(a) {
                        a && a.isEnded || void 0 === a ? (t.rewardedVideoAdAlreadyShow = !0, t.saveCans(), 
                        t.$uma.trackEvent("rewarded-VideoAd-show")) : (t.rewardedVideoAdAlreadyShow = !1, 
                        e.showToast({
                            title: "请完整观看哦"
                        }), t.$uma.trackEvent("rewarded-VideoAd-show-break"));
                    }));
                },
                onReady: function() {
                    var a = e.getStorageSync("PLUG-ADD-MYAPP-KEY");
                    if (console.log("cache", a), !a) {
                        this.statusBarHeight = e.getSystemInfoSync().statusBarHeight, console.log("this.statusBarHeight", this.statusBarHeight), 
                        this.SHOW_TIP = !0, console.log("SHOW_TIP", this.SHOW_TIP);
                        var t = this;
                        setTimeout(function() {
                            t.SHOW_TIP = !1;
                        }, 1e3 * t.duration);
                    }
                },
                onShow: function() {
                    console.log("onShow"), getApp().globalData.rapaintAfterCrop && (getApp().globalData.rapaintAfterCrop = !1, 
                    this.avatarImage = getApp().globalData.cropImageFilePath, this.paint());
                },
                onShareAppMessage: function() {
                    return {
                        title: "我刚刚换上了国庆头像，你也来领取一个吧",
                        desc: "领取你的国庆头像，为祖国加油",
                        imageUrl: "/static/image/share_img.png",
                        path: "/pages/editor/editor",
                        success: function(e) {
                            console.log(e);
                        }
                    };
                },
                methods: {
                    paint: function() {},
                    reset: function() {
                        this.avatarImage = "";
                    },
                    showTips: function() {
                        console.log("tips"), this.modalName = "tips";
                    },
                    bannerAdLoad: function() {
                        this.$uma.trackEvent("banner-Ad-load");
                    },
                    bannerAdError: function() {
                        this.$uma.trackEvent("banner-Ad-load-error");
                    },
                    getUserInfoCallBack: function(a) {
                        if (console.log("mpGetUserInfo", a), "getUserInfo:ok" !== a.detail.errMsg) return this.$uma.trackEvent("avatar-editor-getUserInfo-Error"), 
                        void e.showModal({
                            title: "获取用户头像失败",
                            content: "用户信息仅用于创建头像，请放心使用",
                            showCancel: !1
                        });
                        var t = a.detail.userInfo;
                        t.avatarUrl = t.avatarUrl.replace("132", "0"), getApp().globalData.userAvatarUrl = t.avatarUrl, 
                        e.showLoading({
                            title: "头像加载中..."
                        });
                        var o = this;
                        console.log("user avatar url:" + t.avatarUrl), e.downloadFile({
                            url: t.avatarUrl,
                            success: function(a) {
                                e.hideLoading(), o.avatarImage = a.tempFilePath, getApp().globalData.userAvatarFilePath = a.tempFilePath;
                            },
                            fail: function(a) {
                                console.log(a), o.$uma.trackEvent("avatar-editor-avatarUrl-Error"), e.hideLoading(), 
                                e.showModal({
                                    title: "图片加载超时",
                                    content: "检查网络，点击确定重新加载",
                                    success: function(e) {
                                        e.confirm || e.cancel && (console.log("用户点击取消"), o.$uma.trackEvent("avatar-editor-avatarUrl-cancle"));
                                    }
                                });
                            }
                        });
                    },
                    chooseImage: function() {
                        var a = this;
                        a.$uma.trackEvent("avatar-editor-chooseImage"), e.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(e) {
                                var t = e.tempFilePaths[0];
                                a.imageCheck(t, a.loadRecImageOrStartToCrop);
                            }
                        });
                    },
                    loadRecImageOrStartToCrop: function(a) {
                        console.log("准备预处理");
                        var t = this;
                        e.getImageInfo({
                            src: a,
                            success: function(o) {
                                var n = o.width, r = (n - o.height) / n.toFixed(3);
                                console.log("delta", r), -.02 <= r && r <= 0 || 0 < r && r <= .02 ? (console.log("直接使用"), 
                                t.avatarImage = a, t.paint()) : (console.log("去剪裁"), e.navigateTo({
                                    url: "/pages/crop/crop?tempFilePath=" + a
                                }));
                            }
                        });
                    },
                    changeCategory: function(e) {
                        this.currentCategory = e.target.dataset.categroyId, console.log("change category: " + this.currentCategory), 
                        this.$uma.trackEvent("avatar-editor-changeCategory", {
                            category: this.currentCategory
                        });
                    },
                    changeAsset: function(e, a) {
                        void 0 != a.type && (console.log("change asset:" + a.type), "frame" === a.type && (this.currentFrame = a), 
                        this.$uma.trackEvent("avatar-editor-changeAsset", {
                            type: a.type,
                            src: a.src
                        }));
                    },
                    draw: function() {
                        console.log("绘制头像");
                        var a = this;
                        a.$uma.trackEvent("avatar-editor-drawAvatar", {
                            type: this.currentFrame.type,
                            src: this.currentFrame.src
                        });
                        var t = wx.createSelectorQuery(), o = a.isFirstSave;
                        a.rewardedVideoAdShowAll && (o = !1), t.select("#avatar-img").boundingClientRect(), 
                        t.exec(function(t) {
                            var r = wx.createCanvasContext("canvas");
                            wx.getSystemInfoSync().windowWidth, r.clearRect(0, 0, a.cansWidth, a.cansHeight), 
                            r.drawImage(a.avatarImage, 0, 0, a.cansWidth, a.cansHeight), void 0 != a.frameImage && r.drawImage(a.frameImage, 0, 0, a.cansWidth, a.cansHeight), 
                            r.draw(), n && a.rewardedVideoAdLoaded && !o ? (console.log("需要弹激励视频"), e.showModal({
                                title: "获取无限制使用",
                                content: "观看完视频可以自动保存哦",
                                success: function(e) {
                                    if (e.confirm) console.log("激励视频-用户点击确定"), n && (a.rewardedVideoAdAlreadyShow = !0, 
                                    n.show().catch(function() {
                                        n.load().then(function() {
                                            n.show();
                                        }).catch(function(e) {
                                            console.log(e), console.log("激励视频 广告显示失败"), a.$uma.trackEvent("rewarded-VideoAd-show-error");
                                        }), a.$uma.trackEvent("rewarded-VideoAd-show-error");
                                    })); else if (e.cancel) return console.log("激励视频-用户点击取消"), void a.$uma.trackEvent("rewarded-VideoAd-show-cancle");
                                }
                            })) : (console.log("第一次保存"), a.isFirstSave = !1, a.saveCans());
                        });
                    },
                    saveCans: function() {
                        var a = this;
                        e.showLoading({
                            title: "保存...",
                            mask: !0
                        }), e.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            height: this.cansWidth,
                            width: this.cansHeight,
                            destWidth: 3 * this.cansWidth,
                            destHeight: 3 * this.cansHeight,
                            canvasId: "canvas",
                            success: function(t) {
                                e.hideLoading(), getApp().globalData.avatarSavedTempPath = t.tempFilePath, e.saveImageToPhotosAlbum({
                                    filePath: t.tempFilePath,
                                    success: function(t) {
                                        console.log("保存地址:" + JSON.stringify(t)), a.savedCounts++, e.navigateTo({
                                            url: "/pages/save/save-done"
                                        });
                                    },
                                    fail: function(a) {
                                        console.log(a), a.errMsg.indexOf("fail") && e.showModal({
                                            title: "您需要授权相册权限",
                                            success: function(a) {
                                                a.confirm && e.openSetting({
                                                    success: function(e) {
                                                        console.log("相册授权成功");
                                                    },
                                                    fail: function(e) {
                                                        console.log(e);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            },
                            fail: function(a) {
                                e.hideLoading();
                            }
                        }, this);
                    },
                    showModal: function(e) {
                        this.modalName = e.currentTarget.dataset.target;
                    },
                    hideModal: function(e) {
                        this.modalName = null;
                    },
                    imageCheck: function(a, t) {
                        getApp().globalData.enableSecurityCheck ? e.compressImage({
                            src: a,
                            quality: 1,
                            success: function(o) {
                                var n = o.tempFilePath;
                                wx.getFileSystemManager().readFile({
                                    filePath: n,
                                    success: function(o) {
                                        e.showLoading({
                                            title: "安全检测..."
                                        }), wx.cloud.callFunction({
                                            name: "contentCheck",
                                            data: {
                                                value: o.data
                                            },
                                            success: function(o) {
                                                console.log("checkContent result", o), 87014 == o.result.errCode ? (e.showModal({
                                                    title: "请勿使用违法违规内容",
                                                    content: "图片含有违法违规内容",
                                                    showCancel: !1,
                                                    confirmText: "知道了"
                                                }), console.log("内容安全检查不通过")) : (console.log("内容安全检查通过"), t(a));
                                            },
                                            fail: function(e) {
                                                console.log("内容安全检查失败"), console.log(e), t(a);
                                            },
                                            complete: function() {
                                                e.hideLoading();
                                            }
                                        });
                                    }
                                });
                            }
                        }) : t(a);
                    }
                }
            };
            a.default = r;
        }).call(this, t("543d").default);
    },
    "95e7": function(e, a, t) {
        t.d(a, "b", function() {
            return o;
        }), t.d(a, "c", function() {
            return n;
        }), t.d(a, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, n = [];
    },
    b6f6: function(e, a, t) {
        t.r(a);
        var o = t("7e82"), n = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(a, e, function() {
                return o[e];
            });
        }(r);
        a.default = n.a;
    }
}, [ [ "3b2c", "common/runtime", "common/vendor" ] ] ]);