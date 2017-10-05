"use strict";
function mustacheTemplate(a, b) {
    var c = $(b).html();
    return Mustache.render(c, a)
}
window.matchMedia || (window.matchMedia = function() {
    var a = window.styleMedia || window.media;
    if (!a) {
        var b = document.createElement("style")
          , c = document.getElementsByTagName("script")[0]
          , d = null;
        b.type = "text/css",
        b.id = "matchmediajs-test",
        c.parentNode.insertBefore(b, c),
        d = "getComputedStyle"in window && window.getComputedStyle(b, null) || b.currentStyle,
        a = {
            matchMedium: function(a) {
                var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c,
                "1px" === d.width
            }
        }
    }
    return function(b) {
        return {
            matches: a.matchMedium(b || "all"),
            media: b || "all"
        }
    }
}()),
function(a, b, c) {
    function d(b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = b : "function" == typeof define && define.amd && define("picturefill", function() {
            return b
        }),
        "object" == typeof a && (a.picturefill = b)
    }
    function e(a) {
        var b, c, d, e, f, i = a || {};
        b = i.elements || g.getAllElements();
        for (var j = 0, k = b.length; j < k; j++)
            if (c = b[j],
            d = c.parentNode,
            e = void 0,
            f = void 0,
            "IMG" === c.nodeName.toUpperCase() && (c[g.ns] || (c[g.ns] = {}),
            i.reevaluate || !c[g.ns].evaluated)) {
                if (d && "PICTURE" === d.nodeName.toUpperCase()) {
                    if (g.removeVideoShim(d),
                    !1 === (e = g.getMatch(c, d)))
                        continue
                } else
                    e = void 0;
                (d && "PICTURE" === d.nodeName.toUpperCase() || !g.sizesSupported && c.srcset && h.test(c.srcset)) && g.dodgeSrcset(c),
                e ? (f = g.processSourceSet(e),
                g.applyBestCandidate(f, c)) : (f = g.processSourceSet(c),
                (void 0 === c.srcset || c[g.ns].srcset) && g.applyBestCandidate(f, c)),
                c[g.ns].evaluated = !0
            }
    }
    function f() {
        function c() {
            clearTimeout(d),
            d = setTimeout(h, 60)
        }
        g.initTypeDetects(),
        e();
        var d, f = setInterval(function() {
            if (e(),
            /^loaded|^i|^c/.test(b.readyState))
                return void clearInterval(f)
        }, 250), h = function() {
            e({
                reevaluate: !0
            })
        };
        a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
    }
    if (a.HTMLPictureElement)
        return void d(function() {});
    b.createElement("picture");
    var g = a.picturefill || {}
      , h = /\s+\+?\d+(e\d+)?w/;
    g.ns = "picturefill",
    function() {
        g.srcsetSupported = "srcset"in c,
        g.sizesSupported = "sizes"in c,
        g.curSrcSupported = "currentSrc"in c
    }(),
    g.trim = function(a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    }
    ,
    g.makeUrl = function() {
        var a = b.createElement("a");
        return function(b) {
            return a.href = b,
            a.href
        }
    }(),
    g.restrictsMixedContent = function() {
        return "https:" === a.location.protocol
    }
    ,
    g.matchesMedia = function(b) {
        return a.matchMedia && a.matchMedia(b).matches
    }
    ,
    g.getDpr = function() {
        return a.devicePixelRatio || 1
    }
    ,
    g.getWidthFromLength = function(a) {
        var c;
        if (!a || a.indexOf("%") > -1 != !1 || !(parseFloat(a) > 0 || a.indexOf("calc(") > -1))
            return !1;
        a = a.replace("vw", "%"),
        g.lengthEl || (g.lengthEl = b.createElement("div"),
        g.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",
        g.lengthEl.className = "helper-from-picturefill-js"),
        g.lengthEl.style.width = "0px";
        try {
            g.lengthEl.style.width = a
        } catch (d) {}
        return b.body.appendChild(g.lengthEl),
        c = g.lengthEl.offsetWidth,
        c <= 0 && (c = !1),
        b.body.removeChild(g.lengthEl),
        c
    }
    ,
    g.detectTypeSupport = function(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            g.types[b] = !1,
            e()
        }
        ,
        d.onload = function() {
            g.types[b] = 1 === d.width,
            e()
        }
        ,
        d.src = c,
        "pending"
    }
    ,
    g.types = g.types || {},
    g.initTypeDetects = function() {
        g.types["image/jpeg"] = !0,
        g.types["image/gif"] = !0,
        g.types["image/png"] = !0,
        g.types["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
        g.types["image/webp"] = g.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
    }
    ,
    g.verifyTypeSupport = function(a) {
        var b = a.getAttribute("type");
        if (null === b || "" === b)
            return !0;
        var c = g.types[b];
        return "string" == typeof c && "pending" !== c ? (g.types[b] = g.detectTypeSupport(b, c),
        "pending") : "function" == typeof c ? (c(),
        "pending") : c
    }
    ,
    g.parseSize = function(a) {
        var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }
    ,
    g.findWidthFromSourceSize = function(c) {
        for (var d, e = g.trim(c).split(/\s*,\s*/), f = 0, h = e.length; f < h; f++) {
            var i = e[f]
              , j = g.parseSize(i)
              , k = j.length
              , l = j.media;
            if (k && ((!l || g.matchesMedia(l)) && (d = g.getWidthFromLength(k))))
                break
        }
        return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth)
    }
    ,
    g.parseSrcset = function(a) {
        for (var b = []; "" !== a; ) {
            a = a.replace(/^\s+/g, "");
            var c, d = a.search(/\s/g), e = null;
            if (-1 !== d) {
                c = a.slice(0, d);
                if ("," !== c.slice(-1) && "" !== c || (c = c.replace(/,+$/, ""),
                e = ""),
                a = a.slice(d + 1),
                null === e) {
                    var f = a.indexOf(",");
                    -1 !== f ? (e = a.slice(0, f),
                    a = a.slice(f + 1)) : (e = a,
                    a = "")
                }
            } else
                c = a,
                a = "";
            (c || e) && b.push({
                url: c,
                descriptor: e
            })
        }
        return b
    }
    ,
    g.parseDescriptor = function(a, b) {
        var c, d = b || "100vw", e = a && a.replace(/(^\s+|\s+$)/g, ""), f = g.findWidthFromSourceSize(d);
        if (e)
            for (var h = e.split(" "), i = h.length - 1; i >= 0; i--) {
                var j = h[i]
                  , k = j && j.slice(j.length - 1);
                if ("h" !== k && "w" !== k || g.sizesSupported) {
                    if ("x" === k) {
                        var l = j && parseFloat(j, 10);
                        c = l && !isNaN(l) ? l : 1
                    }
                } else
                    c = parseFloat(parseInt(j, 10) / f)
            }
        return c || 1
    }
    ,
    g.getCandidatesFromSourceSet = function(a, b) {
        for (var c = g.parseSrcset(a), d = [], e = 0, f = c.length; e < f; e++) {
            var h = c[e];
            d.push({
                url: h.url,
                resolution: g.parseDescriptor(h.descriptor, b)
            })
        }
        return d
    }
    ,
    g.dodgeSrcset = function(a) {
        a.srcset && (a[g.ns].srcset = a.srcset,
        a.srcset = "",
        a.setAttribute("data-pfsrcset", a[g.ns].srcset))
    }
    ,
    g.processSourceSet = function(a) {
        var b = a.getAttribute("srcset")
          , c = a.getAttribute("sizes")
          , d = [];
        return "IMG" === a.nodeName.toUpperCase() && a[g.ns] && a[g.ns].srcset && (b = a[g.ns].srcset),
        b && (d = g.getCandidatesFromSourceSet(b, c)),
        d
    }
    ,
    g.backfaceVisibilityFix = function(a) {
        var b = a.style || {}
          , c = "webkitBackfaceVisibility"in b
          , d = b.zoom;
        c && (b.zoom = ".999",
        c = a.offsetWidth,
        b.zoom = d)
    }
    ,
    g.setIntrinsicSize = function() {
        var c = {}
          , d = function(a, b, c) {
            b && a.setAttribute("width", parseInt(b / c, 10))
        };
        return function(e, f) {
            var h;
            e[g.ns] && !a.pfStopIntrinsicSize && (void 0 === e[g.ns].dims && (e[g.ns].dims = e.getAttribute("width") || e.getAttribute("height")),
            e[g.ns].dims || (f.url in c ? d(e, c[f.url], f.resolution) : (h = b.createElement("img"),
            h.onload = function() {
                if (c[f.url] = h.width,
                !c[f.url])
                    try {
                        b.body.appendChild(h),
                        c[f.url] = h.width || h.offsetWidth,
                        b.body.removeChild(h)
                    } catch (a) {}
                e.src === f.url && d(e, c[f.url], f.resolution),
                e = null,
                h.onload = null,
                h = null
            }
            ,
            h.src = f.url)))
        }
    }(),
    g.applyBestCandidate = function(a, b) {
        var c, d, e;
        a.sort(g.ascendingSort),
        d = a.length,
        e = a[d - 1];
        for (var f = 0; f < d; f++)
            if (c = a[f],
            c.resolution >= g.getDpr()) {
                e = c;
                break
            }
        e && (e.url = g.makeUrl(e.url),
        b.src !== e.url && (g.restrictsMixedContent() && "http:" === e.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + e.url) : (b.src = e.url,
        g.curSrcSupported || (b.currentSrc = b.src),
        g.backfaceVisibilityFix(b))),
        g.setIntrinsicSize(b, e))
    }
    ,
    g.ascendingSort = function(a, b) {
        return a.resolution - b.resolution
    }
    ,
    g.removeVideoShim = function(a) {
        var b = a.getElementsByTagName("video");
        if (b.length) {
            for (var c = b[0], d = c.getElementsByTagName("source"); d.length; )
                a.insertBefore(d[0], c);
            c.parentNode.removeChild(c)
        }
    }
    ,
    g.getAllElements = function() {
        for (var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            ("PICTURE" === f.parentNode.nodeName.toUpperCase() || null !== f.getAttribute("srcset") || f[g.ns] && null !== f[g.ns].srcset) && a.push(f)
        }
        return a
    }
    ,
    g.getMatch = function(a, b) {
        for (var c, d = b.childNodes, e = 0, f = d.length; e < f; e++) {
            var h = d[e];
            if (1 === h.nodeType) {
                if (h === a)
                    return c;
                if ("SOURCE" === h.nodeName.toUpperCase()) {
                    null !== h.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                    var i = h.getAttribute("media");
                    if (h.getAttribute("srcset") && (!i || g.matchesMedia(i))) {
                        var j = g.verifyTypeSupport(h);
                        if (!0 === j) {
                            c = h;
                            break
                        }
                        if ("pending" === j)
                            return !1
                    }
                }
            }
        }
        return c
    }
    ,
    f(),
    e._ = g,
    d(e)
}(window, window.document, new window.Image),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f = this;
            f.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            f.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(f, f.initials),
            f.activeBreakpoint = null,
            f.animType = null,
            f.animProp = null,
            f.breakpoints = [],
            f.breakpointSettings = [],
            f.cssTransitions = !1,
            f.hidden = "hidden",
            f.paused = !1,
            f.positionProp = null,
            f.respondTo = null,
            f.rowCount = 1,
            f.shouldClick = !0,
            f.$slider = a(b),
            f.$slidesCache = null,
            f.transformType = null,
            f.transitionType = null,
            f.visibilityChange = "visibilitychange",
            f.windowWidth = 0,
            f.windowTimer = null,
            e = a(b).data("slick") || {},
            f.options = a.extend({}, f.defaults, e, d),
            f.currentSlide = f.options.initialSlide,
            f.originalSettings = f.options,
            void 0 !== document.mozHidden ? (f.hidden = "mozHidden",
            f.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (f.hidden = "webkitHidden",
            f.visibilityChange = "webkitvisibilitychange"),
            f.autoPlay = a.proxy(f.autoPlay, f),
            f.autoPlayClear = a.proxy(f.autoPlayClear, f),
            f.changeSlide = a.proxy(f.changeSlide, f),
            f.clickHandler = a.proxy(f.clickHandler, f),
            f.selectHandler = a.proxy(f.selectHandler, f),
            f.setPosition = a.proxy(f.setPosition, f),
            f.swipeHandler = a.proxy(f.swipeHandler, f),
            f.dragHandler = a.proxy(f.dragHandler, f),
            f.keyHandler = a.proxy(f.keyHandler, f),
            f.autoPlayIterator = a.proxy(f.autoPlayIterator, f),
            f.instanceUid = c++,
            f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            f.registerBreakpoints(),
            f.init(!0),
            f.checkResponsive(!0)
        }
        var c = 0;
        return b
    }(),
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (c < 0 || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : !0 === d ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        !0 === e.options.rtl && !1 === e.options.vertical && (b = -b),
        !1 === e.transformsEnabled ? !1 === e.options.vertical ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : !1 === e.cssTransitions ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                !1 === e.options.vertical ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        !1 === e.options.vertical ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)),
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        !1 === b.options.fade ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
        !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer),
        a.slideCount > a.options.slidesToShow && !0 !== a.paused && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this;
        !1 === a.options.infinite ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0),
        a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 == 0 && (a.direction = 1),
        a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        !0 === b.options.arrows && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        !0 !== b.options.infinite && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var b, c, d = this;
        if (!0 === d.options.dots && d.slideCount > d.options.slidesToShow) {
            for (c = '<ul class="' + d.options.dotsClass + '">',
            b = 0; b <= d.getDotCount(); b += 1)
                c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
            c += "</ul>",
            d.$dots = a(c).appendTo(d.options.appendDots),
            d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        !0 !== b.options.centerMode && !0 !== b.options.swipeToSlide || (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        !0 === b.options.draggable && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var a, b, c, d, e, f, g, h = this;
        if (d = document.createDocumentFragment(),
        f = h.$slider.children(),
        h.options.rows > 1) {
            for (g = h.options.slidesPerRow * h.options.rows,
            e = Math.ceil(f.length / g),
            a = 0; a < e; a++) {
                var i = document.createElement("div");
                for (b = 0; b < h.options.rows; b++) {
                    var j = document.createElement("div");
                    for (c = 0; c < h.options.slidesPerRow; c++) {
                        var k = a * g + (b * h.options.slidesPerRow + c);
                        f.get(k) && j.appendChild(f.get(k))
                    }
                    i.appendChild(j)
                }
                d.appendChild(i)
            }
            h.$slider.html(d),
            h.$slider.children().children().children().css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var d, e, f, g = this, h = !1, i = g.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)),
        g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
            e = null;
            for (d in g.breakpoints)
                g.breakpoints.hasOwnProperty(d) && (!1 === g.originalSettings.mobileFirst ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e,
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
            !0 === b && (g.currentSlide = g.options.initialSlide),
            g.refresh(b)),
            h = e) : (g.activeBreakpoint = e,
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
            !0 === b && (g.currentSlide = g.options.initialSlide),
            g.refresh(b)),
            h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null,
            g.options = g.originalSettings,
            !0 === b && (g.currentSlide = g.options.initialSlide),
            g.refresh(b),
            h = e),
            b || !1 === h || g.$slider.trigger("breakpoint", [g, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var d, e, f, g = this, h = a(b.target);
        switch (h.is("a") && b.preventDefault(),
        h.is("li") || (h = h.closest("li")),
        f = g.slideCount % g.options.slidesToScroll != 0,
        d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll,
        b.data.message) {
        case "previous":
            e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d,
            g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
            break;
        case "next":
            e = 0 === d ? g.options.slidesToScroll : d,
            g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
            g.slideHandler(g.checkNavigable(i), !1, c),
            h.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var b, c, d = this;
        if (b = d.getNavigableIndexes(),
        c = 0,
        a > b[b.length - 1])
            a = b[b.length - 1];
        else
            for (var e in b) {
                if (a < b[e]) {
                    a = c;
                    break
                }
                c = b[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide),
        !0 === b.options.pauseOnDotsHover && !0 === b.options.autoplay && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))),
        !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        !0 === b.options.accessibility && b.$list.off("keydown.slick", b.keyHandler),
        !0 === b.options.focusOnSelect && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpRows = function() {
        var a, b = this;
        b.options.rows > 1 && (a = b.$slides.children().children(),
        a.removeAttr("style"),
        b.$slider.html(a))
    }
    ,
    b.prototype.clickHandler = function(a) {
        !1 === this.shouldClick && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        !1 === c.cssTransitions ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        !1 === b.cssTransitions ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides,
        b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (!0 === a.options.infinite)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (!0 === a.options.centerMode)
            d = a.slideCount;
        else
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var b, c, d, e = this, f = 0;
        return e.slideOffset = 0,
        c = e.$slides.first().outerHeight(!0),
        !0 === e.options.infinite ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1,
        f = c * e.options.slidesToShow * -1),
        e.slideCount % e.options.slidesToScroll != 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1,
        f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1,
        f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth,
        f = (a + e.options.slidesToShow - e.slideCount) * c),
        e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0,
        f = 0),
        !0 === e.options.centerMode && !0 === e.options.infinite ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : !0 === e.options.centerMode && (e.slideOffset = 0,
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)),
        b = !1 === e.options.vertical ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f,
        !0 === e.options.variableWidth && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow),
        b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0,
        !0 === e.options.centerMode && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1),
        b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0,
        b += (e.$list.width() - d.outerWidth()) / 2)),
        b
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        return this.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var a, b = this, c = 0, d = 0, e = [];
        for (!1 === b.options.infinite ? a = b.slideCount : (c = -1 * b.options.slidesToScroll,
        d = -1 * b.options.slidesToScroll,
        a = 2 * b.slideCount); c < a; )
            e.push(c),
            c = d + b.options.slidesToScroll,
            d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
        return e
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var b, c, d = this;
        return c = !0 === d.options.centerMode ? d.slideWidth * Math.floor(d.options.slidesToShow / 2) : 0,
        !0 === d.options.swipeToSlide ? (d.$slideTrack.find(".slick-slide").each(function(e, f) {
            if (f.offsetLeft - c + a(f).outerWidth() / 2 > -1 * d.swipeLeft)
                return b = f,
                !1
        }),
        Math.abs(a(b).attr("data-slick-index") - d.currentSlide) || 1) : d.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots()),
        b && c.$slider.trigger("init", [c]),
        !0 === c.options.accessibility && c.initADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        !0 === b.options.dots && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        !0 === b.options.dots && !0 === b.options.pauseOnDotsHover && !0 === b.options.autoplay && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        !0 === b.options.accessibility && b.$list.on("keydown.slick", b.keyHandler),
        !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.show(),
        !0 === a.options.autoplay && a.autoPlay()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === b.options.accessibility ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && !0 === b.options.accessibility && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this)
                  , c = a(this).attr("data-lazy")
                  , d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }
                ,
                d.src = c
            })
        }
        var c, d, e, f, g = this;
        !0 === g.options.centerMode ? !0 === g.options.infinite ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1),
        f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)),
        f = g.options.slidesToShow / 2 + 1 + 2 + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide,
        f = e + g.options.slidesToShow,
        !0 === g.options.fade && (e > 0 && e--,
        f <= g.slideCount && f++)),
        c = g.$slider.find(".slick-slide").slice(e, f),
        b(c),
        g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"),
        b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow),
        b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow),
        b(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1,
        a.autoPlay()
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        !0 === b.options.autoplay && !1 === b.paused && b.autoPlay(),
        !0 === b.options.accessibility && b.initADA()
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function() {
        var b, c, d = this;
        (b = a("img[data-lazy]", d.$slider).length) > 0 && (c = a("img[data-lazy]", d.$slider).first(),
        c.attr("src", null),
        c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad(),
            !0 === d.options.adaptiveHeight && d.setPosition()
        }).error(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad()
        }))
    }
    ,
    b.prototype.refresh = function(b) {
        var c, d, e = this;
        d = e.slideCount - e.options.slidesToShow,
        e.options.infinite || (e.slideCount <= e.options.slidesToShow ? e.currentSlide = 0 : e.currentSlide > d && (e.currentSlide = d)),
        c = e.currentSlide,
        e.destroy(!0),
        a.extend(e, e.initials, {
            currentSlide: c
        }),
        e.init(),
        b || e.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var b, c, d, e = this, f = e.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            e.respondTo = e.options.respondTo || "window";
            for (b in f)
                if (d = e.breakpoints.length - 1,
                c = f[b].breakpoint,
                f.hasOwnProperty(b)) {
                    for (; d >= 0; )
                        e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1),
                        d--;
                    e.breakpoints.push(c),
                    e.breakpointSettings[c] = f[b].settings
                }
            e.breakpoints.sort(function(a, b) {
                return e.options.mobileFirst ? a - b : b - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.checkResponsive(!1, !0),
        !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(0),
        b.setPosition(),
        b.$slider.trigger("reInit", [b]),
        !0 === b.options.autoplay && b.focusHandler()
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        if ("boolean" == typeof a ? (b = a,
        a = !0 === b ? 0 : d.slideCount - 1) : a = !0 === b ? --a : a,
        d.slideCount < 1 || a < 0 || a > d.slideCount - 1)
            return !1;
        d.unload(),
        !0 === c ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        d.reinit()
    }
    ,
    b.prototype.setCSS = function(a) {
        var b, c, d = this, e = {};
        !0 === d.options.rtl && (a = -a),
        b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px",
        c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px",
        e[d.positionProp] = a,
        !1 === d.transformsEnabled ? d.$slideTrack.css(e) : (e = {},
        !1 === d.cssTransitions ? (e[d.animType] = "translate(" + b + ", " + c + ")",
        d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)",
        d.$slideTrack.css(e)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        !1 === a.options.vertical ? !0 === a.options.centerMode && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        !0 === a.options.centerMode && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        !1 === a.options.vertical && !1 === a.options.variableWidth ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : !0 === a.options.variableWidth ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        !1 === a.options.variableWidth && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = c.slideWidth * d * -1,
            !0 === c.options.rtl ? a(e).css({
                position: "relative",
                right: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            })
        }),
        c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var e, f, g = this;
        if ("responsive" === b && "array" === a.type(c))
            for (f in c)
                if ("array" !== a.type(g.options.responsive))
                    g.options.responsive = [c[f]];
                else {
                    for (e = g.options.responsive.length - 1; e >= 0; )
                        g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1),
                        e--;
                    g.options.responsive.push(c[f])
                }
        else
            g.options[b] = c;
        !0 === d && (g.unload(),
        g.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        !1 === a.options.fade ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = !0 === a.options.vertical ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || !0 === a.options.useCSS && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && !1 !== a.animType && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = a.options.useTransform && null !== a.animType && !1 !== a.animType
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        f.$slides.eq(a).addClass("slick-current"),
        !0 === f.options.centerMode ? (b = Math.floor(f.options.slidesToShow / 2),
        !0 === f.options.infinite && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a,
        c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
        f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow,
        d = !0 === f.options.infinite ? f.options.slidesToShow + a : a,
        f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (!0 === e.options.fade && (e.options.centerMode = !1),
        !0 === e.options.infinite && !1 === e.options.fade && (c = null,
        e.slideCount > e.options.slidesToShow)) {
            for (d = !0 === e.options.centerMode ? e.options.slidesToShow + 1 : e.options.slidesToShow,
            b = e.slideCount; b > e.slideCount - d; b -= 1)
                c = b - 1,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; b < d; b += 1)
                c = b,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.setPaused = function(a) {
        var b = this;
        !0 === b.options.autoplay && !0 === b.options.pauseOnHover && (b.paused = a,
        a ? b.autoPlayClear() : b.autoPlay())
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        if (e || (e = 0),
        c.slideCount <= c.options.slidesToShow)
            return c.setSlideClasses(e),
            void c.asNavFor(e);
        c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null, i = this;
        if (b = b || !1,
        (!0 !== i.animating || !0 !== i.options.waitForAnimate) && !(!0 === i.options.fade && i.currentSlide === a || i.slideCount <= i.options.slidesToShow)) {
            if (!1 === b && i.asNavFor(a),
            d = a,
            h = i.getLeft(d),
            g = i.getLeft(i.currentSlide),
            i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
            !1 === i.options.infinite && !1 === i.options.centerMode && (a < 0 || a > i.getDotCount() * i.options.slidesToScroll))
                return void (!1 === i.options.fade && (d = i.currentSlide,
                !0 !== c ? i.animateSlide(g, function() {
                    i.postSlide(d)
                }) : i.postSlide(d)));
            if (!1 === i.options.infinite && !0 === i.options.centerMode && (a < 0 || a > i.slideCount - i.options.slidesToScroll))
                return void (!1 === i.options.fade && (d = i.currentSlide,
                !0 !== c ? i.animateSlide(g, function() {
                    i.postSlide(d)
                }) : i.postSlide(d)));
            if (!0 === i.options.autoplay && clearInterval(i.autoPlayTimer),
            e = d < 0 ? i.slideCount % i.options.slidesToScroll != 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll != 0 ? 0 : d - i.slideCount : d,
            i.animating = !0,
            i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
            f = i.currentSlide,
            i.currentSlide = e,
            i.setSlideClasses(i.currentSlide),
            i.updateDots(),
            i.updateArrows(),
            !0 === i.options.fade)
                return !0 !== c ? (i.fadeSlideOut(f),
                i.fadeSlide(e, function() {
                    i.postSlide(e)
                })) : i.postSlide(e),
                void i.animateHeight();
            !0 !== c ? i.animateSlide(h, function() {
                i.postSlide(e)
            }) : i.postSlide(e)
        }
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        d < 0 && (d = 360 - Math.abs(d)),
        d <= 45 && d >= 0 ? !1 === e.options.rtl ? "left" : "right" : d <= 360 && d >= 315 ? !1 === e.options.rtl ? "left" : "right" : d >= 135 && d <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? d >= 35 && d <= 135 ? "left" : "right" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function(a) {
        var b, c = this;
        if (c.dragging = !1,
        c.shouldClick = !(c.touchObject.swipeLength > 10),
        void 0 === c.touchObject.curX)
            return !1;
        if (!0 === c.touchObject.edgeHit && c.$slider.trigger("edge", [c, c.swipeDirection()]),
        c.touchObject.swipeLength >= c.touchObject.minSwipe)
            switch (c.swipeDirection()) {
            case "left":
                b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(),
                c.slideHandler(b),
                c.currentDirection = 0,
                c.touchObject = {},
                c.$slider.trigger("swipe", [c, "left"]);
                break;
            case "right":
                b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(),
                c.slideHandler(b),
                c.currentDirection = 1,
                c.touchObject = {},
                c.$slider.trigger("swipe", [c, "right"])
            }
        else
            c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide),
            c.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(!1 === b.options.swipe || "ontouchend"in document && !1 === b.options.swipe || !1 === b.options.draggable && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            !0 === b.options.verticalSwiping && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var b, c, d, e, f, g = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide),
        g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX,
        g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY,
        g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))),
        !0 === g.options.verticalSwiping && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))),
        "vertical" !== (c = g.swipeDirection()) ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(),
        e = (!1 === g.options.rtl ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1),
        !0 === g.options.verticalSwiping && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1),
        d = g.touchObject.swipeLength,
        g.touchObject.edgeHit = !1,
        !1 === g.options.infinite && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction,
        g.touchObject.edgeHit = !0),
        !1 === g.options.vertical ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e,
        !0 === g.options.verticalSwiping && (g.swipeLeft = b + d * e),
        !0 !== g.options.fade && !1 !== g.options.touchMove && (!0 === g.animating ? (g.swipeLeft = null,
        !1) : void g.setCSS(g.swipeLeft))) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var b, c = this;
        if (1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow)
            return c.touchObject = {},
            !1;
        void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
        c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX,
        c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY,
        c.dragging = !0
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var a = this;
        Math.floor(a.options.slidesToShow / 2),
        !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && !1 === a.options.centerMode ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && !0 === a.options.centerMode && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0,
        a.autoPlayClear()) : !0 === a.options.autoplay && (a.paused = !1,
        a.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(),
                b.paused = !0) : (b.paused = !1,
                b.autoPlay()))
            }, 0)
        })
    }
    ,
    a.fn.slick = function() {
        var a, c, d = this, e = arguments[0], f = Array.prototype.slice.call(arguments, 1), g = d.length;
        for (a = 0; a < g; a++)
            if ("object" == typeof e || void 0 === e ? d[a].slick = new b(d[a],e) : c = d[a].slick[e].apply(d[a].slick, f),
            void 0 !== c)
                return c;
        return d
    }
}),
function(a, b) {
    "object" == typeof exports && exports && "string" != typeof exports.nodeName ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : (a.Mustache = {},
    b(a.Mustache))
}(this, function(a) {
    function b(a) {
        return "function" == typeof a
    }
    function c(a) {
        return p(a) ? "array" : typeof a
    }
    function d(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function e(a, b) {
        return null != a && "object" == typeof a && b in a
    }
    function f(a, b) {
        return q.call(a, b)
    }
    function g(a) {
        return !f(r, a)
    }
    function h(a) {
        return String(a).replace(/[&<>"'`=\/]/g, function(a) {
            return s[a]
        })
    }
    function i(b, c) {
        function e() {
            if (r && !s)
                for (; q.length; )
                    delete o[q.pop()];
            else
                q = [];
            r = !1,
            s = !1
        }
        function f(a) {
            if ("string" == typeof a && (a = a.split(u, 2)),
            !p(a) || 2 !== a.length)
                throw new Error("Invalid tags: " + a);
            h = new RegExp(d(a[0]) + "\\s*"),
            i = new RegExp("\\s*" + d(a[1])),
            m = new RegExp("\\s*" + d("}" + a[1]))
        }
        if (!b)
            return [];
        var h, i, m, n = [], o = [], q = [], r = !1, s = !1;
        f(c || a.tags);
        for (var y, z, A, B, C, D, E = new l(b); !E.eos(); ) {
            if (y = E.pos,
            A = E.scanUntil(h))
                for (var F = 0, G = A.length; F < G; ++F)
                    B = A.charAt(F),
                    g(B) ? q.push(o.length) : s = !0,
                    o.push(["text", B, y, y + 1]),
                    y += 1,
                    "\n" === B && e();
            if (!E.scan(h))
                break;
            if (r = !0,
            z = E.scan(x) || "name",
            E.scan(t),
            "=" === z ? (A = E.scanUntil(v),
            E.scan(v),
            E.scanUntil(i)) : "{" === z ? (A = E.scanUntil(m),
            E.scan(w),
            E.scanUntil(i),
            z = "&") : A = E.scanUntil(i),
            !E.scan(i))
                throw new Error("Unclosed tag at " + E.pos);
            if (C = [z, A, y, E.pos],
            o.push(C),
            "#" === z || "^" === z)
                n.push(C);
            else if ("/" === z) {
                if (!(D = n.pop()))
                    throw new Error('Unopened section "' + A + '" at ' + y);
                if (D[1] !== A)
                    throw new Error('Unclosed section "' + D[1] + '" at ' + y)
            } else
                "name" === z || "{" === z || "&" === z ? s = !0 : "=" === z && f(A)
        }
        if (D = n.pop())
            throw new Error('Unclosed section "' + D[1] + '" at ' + E.pos);
        return k(j(o))
    }
    function j(a) {
        for (var b, c, d = [], e = 0, f = a.length; e < f; ++e)
            (b = a[e]) && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1],
            c[3] = b[3]) : (d.push(b),
            c = b));
        return d
    }
    function k(a) {
        for (var b, c, d = [], e = d, f = [], g = 0, h = a.length; g < h; ++g)
            switch (b = a[g],
            b[0]) {
            case "#":
            case "^":
                e.push(b),
                f.push(b),
                e = b[4] = [];
                break;
            case "/":
                c = f.pop(),
                c[5] = b[2],
                e = f.length > 0 ? f[f.length - 1][4] : d;
                break;
            default:
                e.push(b)
            }
        return d
    }
    function l(a) {
        this.string = a,
        this.tail = a,
        this.pos = 0
    }
    function m(a, b) {
        this.view = a,
        this.cache = {
            ".": this.view
        },
        this.parent = b
    }
    function n() {
        this.cache = {}
    }
    var o = Object.prototype.toString
      , p = Array.isArray || function(a) {
        return "[object Array]" === o.call(a)
    }
      , q = RegExp.prototype.test
      , r = /\S/
      , s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    }
      , t = /\s*/
      , u = /\s+/
      , v = /\s*=/
      , w = /\s*\}/
      , x = /#|\^|\/|>|\{|&|=|!/;
    l.prototype.eos = function() {
        return "" === this.tail
    }
    ,
    l.prototype.scan = function(a) {
        var b = this.tail.match(a);
        if (!b || 0 !== b.index)
            return "";
        var c = b[0];
        return this.tail = this.tail.substring(c.length),
        this.pos += c.length,
        c
    }
    ,
    l.prototype.scanUntil = function(a) {
        var b, c = this.tail.search(a);
        switch (c) {
        case -1:
            b = this.tail,
            this.tail = "";
            break;
        case 0:
            b = "";
            break;
        default:
            b = this.tail.substring(0, c),
            this.tail = this.tail.substring(c)
        }
        return this.pos += b.length,
        b
    }
    ,
    m.prototype.push = function(a) {
        return new m(a,this)
    }
    ,
    m.prototype.lookup = function(a) {
        var c, d = this.cache;
        if (d.hasOwnProperty(a))
            c = d[a];
        else {
            for (var f, g, h = this, i = !1; h; ) {
                if (a.indexOf(".") > 0)
                    for (c = h.view,
                    f = a.split("."),
                    g = 0; null != c && g < f.length; )
                        g === f.length - 1 && (i = e(c, f[g])),
                        c = c[f[g++]];
                else
                    c = h.view[a],
                    i = e(h.view, a);
                if (i)
                    break;
                h = h.parent
            }
            d[a] = c
        }
        return b(c) && (c = c.call(this.view)),
        c
    }
    ,
    n.prototype.clearCache = function() {
        this.cache = {}
    }
    ,
    n.prototype.parse = function(a, b) {
        var c = this.cache
          , d = c[a];
        return null == d && (d = c[a] = i(a, b)),
        d
    }
    ,
    n.prototype.render = function(a, b, c) {
        var d = this.parse(a)
          , e = b instanceof m ? b : new m(b);
        return this.renderTokens(d, e, c, a)
    }
    ,
    n.prototype.renderTokens = function(a, b, c, d) {
        for (var e, f, g, h = "", i = 0, j = a.length; i < j; ++i)
            g = void 0,
            e = a[i],
            f = e[0],
            "#" === f ? g = this.renderSection(e, b, c, d) : "^" === f ? g = this.renderInverted(e, b, c, d) : ">" === f ? g = this.renderPartial(e, b, c, d) : "&" === f ? g = this.unescapedValue(e, b) : "name" === f ? g = this.escapedValue(e, b) : "text" === f && (g = this.rawValue(e)),
            void 0 !== g && (h += g);
        return h
    }
    ,
    n.prototype.renderSection = function(a, c, d, e) {
        function f(a) {
            return g.render(a, c, d)
        }
        var g = this
          , h = ""
          , i = c.lookup(a[1]);
        if (i) {
            if (p(i))
                for (var j = 0, k = i.length; j < k; ++j)
                    h += this.renderTokens(a[4], c.push(i[j]), d, e);
            else if ("object" == typeof i || "string" == typeof i || "number" == typeof i)
                h += this.renderTokens(a[4], c.push(i), d, e);
            else if (b(i)) {
                if ("string" != typeof e)
                    throw new Error("Cannot use higher-order sections without the original template");
                i = i.call(c.view, e.slice(a[3], a[5]), f),
                null != i && (h += i)
            } else
                h += this.renderTokens(a[4], c, d, e);
            return h
        }
    }
    ,
    n.prototype.renderInverted = function(a, b, c, d) {
        var e = b.lookup(a[1]);
        if (!e || p(e) && 0 === e.length)
            return this.renderTokens(a[4], b, c, d)
    }
    ,
    n.prototype.renderPartial = function(a, c, d) {
        if (d) {
            var e = b(d) ? d(a[1]) : d[a[1]];
            return null != e ? this.renderTokens(this.parse(e), c, d, e) : void 0
        }
    }
    ,
    n.prototype.unescapedValue = function(a, b) {
        var c = b.lookup(a[1]);
        if (null != c)
            return c
    }
    ,
    n.prototype.escapedValue = function(b, c) {
        var d = c.lookup(b[1]);
        if (null != d)
            return a.escape(d)
    }
    ,
    n.prototype.rawValue = function(a) {
        return a[1]
    }
    ,
    a.name = "mustache.js",
    a.version = "2.2.1",
    a.tags = ["{{", "}}"];
    var y = new n;
    a.clearCache = function() {
        return y.clearCache()
    }
    ,
    a.parse = function(a, b) {
        return y.parse(a, b)
    }
    ,
    a.render = function(a, b, d) {
        if ("string" != typeof a)
            throw new TypeError('Invalid template! Template should be a "string" but "' + c(a) + '" was given as the first argument for mustache#render(template, view, partials)');
        return y.render(a, b, d)
    }
    ,
    a.to_html = function(c, d, e, f) {
        var g = a.render(c, d, e);
        if (!b(f))
            return g;
        f(g)
    }
    ,
    a.escape = h,
    a.Scanner = l,
    a.Context = m,
    a.Writer = n
}),
function(a) {
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0]
              , e = document.createElement("div");
            e.innerHTML = '<p>x</p><style id="fit-vids-style">' + ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}" + "</style>",
            d.appendChild(e.childNodes[1])
        }
        return b && a.extend(c, b),
        this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a(this).find(b.join(","));
            d = d.not("object object"),
            d.each(function() {
                var b = a(this);
                if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height()
                      , d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10)
                      , e = c / d;
                    if (!b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"),
                    b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(a) {
    var b = a(window);
    a.fn.visible = function(a, c, d) {
        if (!(this.length < 1)) {
            var e = this.length > 1 ? this.eq(0) : this
              , f = e.get(0)
              , g = b.width()
              , h = b.height()
              , d = d || "both"
              , i = !0 !== c || f.offsetWidth * f.offsetHeight;
            if ("function" == typeof f.getBoundingClientRect) {
                var j = f.getBoundingClientRect()
                  , k = j.top >= 0 && j.top < h
                  , l = j.bottom > 0 && j.bottom <= h
                  , m = j.left >= 0 && j.left < g
                  , n = j.right > 0 && j.right <= g
                  , o = a ? k || l : k && l
                  , p = a ? m || n : m && n;
                if ("both" === d)
                    return i && o && p;
                if ("vertical" === d)
                    return i && o;
                if ("horizontal" === d)
                    return i && p
            } else {
                var q = b.scrollTop()
                  , r = q + h
                  , s = b.scrollLeft()
                  , t = s + g
                  , u = e.offset()
                  , v = u.top
                  , w = v + e.height()
                  , x = u.left
                  , y = x + e.width()
                  , z = !0 === a ? w : v
                  , A = !0 === a ? v : w
                  , B = !0 === a ? y : x
                  , C = !0 === a ? x : y;
                if ("both" === d)
                    return !!i && r >= A && z >= q && t >= C && B >= s;
                if ("vertical" === d)
                    return !!i && r >= A && z >= q;
                if ("horizontal" === d)
                    return !!i && t >= C && B >= s
            }
        }
    }
}(jQuery),
$.fn.responsiveSetup = function(a) {
    a = jQuery.extend({
        onMobile: "",
        onDesktop: "",
        breakpoint: 1024
    }, a);
    var b = !1;
    $(window)[0].innerWidth < a.breakpoint && (a.onMobile.callFunction(),
    b = !0),
    $(window).resize(function() {
        var c = $(window)[0].innerWidth;
        if (c >= a.breakpoint && b)
            a.onDesktop.callFunction(),
            b = !1;
        else {
            if (!(c < a.breakpoint) || b)
                return;
            a.onMobile.callFunction(),
            b = !0
        }
    })
}
,
function(a) {
    var b = a(".js-accordion")
      , c = "accordion-item--open";
    b.on("click", function(b) {
        var d = a(this);
        d.hasClass(c) ? d.removeClass(c) : d.addClass(c),
        d.next().stop().slideToggle(),
        b.preventDefault()
    })
}(jQuery),
function(a) {
    var b = a(".js-annual-reports-carousel");
    a(".reports-item").length;
    b.slick({
        dots: !0,
        slidesToShow: 3,
        arrows: !1,
        slidesToScroll: 1,
        centerMode: !0,
        infinite: !1,
        variableWidth: !0,
        centerPadding: 0,
        initialSlide: 0
    })
}(jQuery),
function(a) {
    a(".js-brands-carousel").slick({
        dots: !1,
        slidesToShow: 1,
        prevArrow: '<button class="brands-carousel__arrow brands-carousel__arrow--prev"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use></svg></button>',
        nextArrow: '<button class="brands-carousel__arrow brands-carousel__arrow--next"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></button>',
        centerMode: !0,
        responsive: [{
            breakpoint: 740,
            settings: {
                centerPadding: "20px"
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerPadding: "80px",
                centerMode: !1
            }
        }]
    })
}(jQuery),
function(a) {
    function b() {
        if (d.length > 0) {
            a(".js-brands__clear").css("display", "block");
            var b = 1;
            a(".brand-item").hide().addClass("hidden"),
            a.each(d, function(c, d) {
                a(".brand-item.hidden." + d).each(function() {
                    b <= e && a(this).show().removeClass("hidden"),
                    b++
                })
            })
        } else
            c()
    }
    function c() {
        a(".brand-item").hide().addClass("hidden"),
        a(".brand-item").slice(0, e).show().removeClass("hidden"),
        a(".js-brands__clear").hide()
    }
    var d = (a(".js-brands__switcher"),
    [])
      , e = 8
      , f = a(".brand-item").length;
    a(".js-category-selector").click(function() {
        var c = a(this).data("category");
        a(this).toggleClass("category-selector--active"),
        -1 !== a.inArray(c, d) ? d.splice(d.indexOf(c), 1) : d.push(c),
        b()
    }),
    a(".js-brands__more").click(function(c) {
        c.preventDefault(),
        e += 8,
        e >= f && a(this).hide(),
        b()
    }),
    a(".js-brands__clear").click(function() {
        d = [],
        c(),
        a(".js-category-selector.category-selector--active").removeClass("category-selector--active")
    })
}(jQuery),
function(a) {
    var b = a("body")
      , c = a("html")
      , d = a(".js-open-brand-overlay")
      , e = a(".js-brand-overlay")
      , f = a(e.html())
      , g = f.find(".js-overlay-carousel")
      , h = g.find(".overlay-carousel__item");
    if (g.find(".overlay-carousel__item").remove(),
    a(".js-brands-carousel").length)
        for (var i = 0; i < overlayData.length; i++) {
            var j = overlayData[i]
              , k = h.clone(!0);
            k.find(".overlay-carousel__item-title").html(j.Title),
            k.find(".overlay-carousel__item-content").html(j.Text);
            var l = k.find(".overlay-carousel__item-button");
            a(l).html(j.LinkName).attr("href", j.Link).attr("title", j.LinkName);
            var m = k.find(".overlay-carousel__image");
            a(m).attr("srcset", j.Image);
            a(m).attr("src", j.Image),
            g.append(k)
        }
    d.on("click", function(d) {
        var e = a(window).scrollTop()
          , h = (a(window).scrollTop(),
        a(this).data("brand-index"));
        c.addClass("overlay__container"),
        b.addClass("overlay__container").append(f),
        f.show(),
        window.scrollTo(0, 0),
        g.slick({
            dots: !1,
            adaptiveHeight: !0,
            slidesToShow: 1,
            draggable: !1,
            accessibility: !1,
            arrows: !0,
            initialSlide: h,
            prevArrow: '<button class="overlay-carousel__arrow overlay-carousel__arrow--prev"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use></svg></button>',
            nextArrow: '<button class="overlay-carousel__arrow overlay-carousel__arrow--next"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></button>'
        }),
        f.find(".js-overlay-close").on("click", function(d) {
            f.fadeOut(function() {
                b.removeClass("overlay__container"),
                c.removeClass("overlay__container"),
                g.slick("unslick"),
                a(window).scrollTop(e),
                f.remove()
            }),
            d.preventDefault()
        }),
        d.preventDefault()
    })
}(jQuery),
function(a) {
    a(".js-cookie-policy-agree").on("click", function(b) {
        b.preventDefault();
        var c = this;
        setTimeout(function() {
            a(c).closest(".cookie-policy").slideUp(600, function() {
                a(this).remove(),
                a(".main-nav").data("topPosition", a(".main-nav").offset().top)
            })
        }, 300)
    })
}(jQuery),
function(a) {
    var b = a("body")
      , c = a("html")
      , d = a(".js-open-follow-overlay")
      , e = a(".js-follow-overlay")
      , f = a(e.html());
    d.on("click", function(d) {
        var e = a(window).scrollTop();
        window.scrollTo(0, 0),
        c.addClass("overlay__container"),
        b.addClass("overlay__container").append(f),
        f.fadeIn(),
        a(".overlay--follow .brand-social__icon").each(function() {
            var b = a(this).data("icon-alias");
            a(this).attr("src", "/images/social-" + b + ".png"),
            a(this).attr("srcset", "/images/social-" + b + ".png 1x, /images/social-" + b + "@2x.png 2x")
        }),
        f.find(".js-overlay-close").on("click", function() {
            b.removeClass("overlay__container"),
            c.removeClass("overlay__container"),
            f.fadeOut(function() {
                a(window).scrollTop(e),
                f.remove()
            })
        }),
        d.preventDefault()
    })
}(jQuery),
function(a) {
    a(".global-locations__button").click(function() {
        a("#global-locations__overlay").fadeIn();
        var b = a("#global-locations__overlay .global-locations__overlay--list");
        if (!a("li", b).length) {
            var c = a(this).data("page-id");
            // a.getJSON("/umbraco/api/Locations/GetOfficeCountries?CurrentPageId=" + c, function(c) {
            //     a.each(c, function(c, d) {
            //         a(b).append('<li class="global-locations__overlay--list-item"><a href="' + d.Url + '" title="' + d.Name + '">' + d.Name + "</a></li>")
            //     })
            // })
        }
        a(".js-overlay-close-global").click(function(b) {
            b.preventDefault(),
            a(this).closest(".overlay").hide()
        })
    })
}(jQuery),
function(a) {
    var b = a(".header")
      , c = a(".grid-section .column .top_copy")
      , d = a(c).find("div").first();
    a(d).hasClass("copy--pink") || a(d).hasClass("copy--magenta") ? a(b).addClass("header_before--pink") : a(d).hasClass("copy--blue") ? a(b).addClass("header_before--blue") : a(d).hasClass("copy--blue-gradient") ? a(b).addClass("header_before--blue-gradient") : (a(d).hasClass("copy--purple-gradient") || a(d).hasClass("copy--purple")) && a(b).addClass("header_before--purple-gradient"),
    a(".header__title").each(function() {
        var b, c = this, d = a(c).html();
        (b = d.replace(/[™]/g, "<sup>$&</sup>").replace(/[®©]/g, '<sup class="is-smaller">$&</sup>')) !== d && a(c).html(b)
    })
}(jQuery),
function(a) {
    if (a(".rotate__modules-wrapper").length) {
        var b = a(".rotate__modules-wrapper .rotate__module").first()
          , c = a(".rotate__modules-wrapper .rotate__module").last();
        a(b).addClass("rotate__module--top"),
        a(c).addClass("rotate__module--bottom");
        var d = a(".rotate__module-inner", c);
        if (a(d).length) {
            var e = a(d).attr("class").match(/rotate__module--bgcolor_[\w-]*\b/);
            a(c).addClass(e + "--wrapper")
        }
        a(".rotate__module-background-image").each(function() {
            var b = a(this).closest(".rotate__module");
            a(b).addClass("rotate__module-with-image")
        })
    }
}(jQuery),
function() {
    function a(a, b, c) {
        "addEventListener"in window ? a.addEventListener(b, c, !1) : "attachEvent"in window && a.attachEvent("on" + b, c)
    }
    function b() {
        var a, b = ["moz", "webkit", "o", "ms"];
        for (a = 0; a < b.length && !v; a += 1)
            v = window[b[a] + "RequestAnimationFrame"];
        v || c(" RequestAnimationFrame not supported")
    }
    function c(a) {
        x.log && "object" == typeof console && console.log(r + "[Host page" + t + "]" + a)
    }
    function d(a) {
        function b() {
            function a() {
                h(v),
                f()
            }
            i(a, v, "resetPage")
        }
        function d(a) {
            c(" Removing iFrame: " + a.id),
            a.parentNode.removeChild(a),
            c(" --")
        }
        function e() {
            var a = u.substr(s).split(":");
            return {
                iframe: document.getElementById(a[0]),
                id: a[0],
                height: a[1],
                width: a[2],
                type: a[3]
            }
        }
        function j() {
            var b = a.origin
              , d = v.iframe.src.split("/").slice(0, 3).join("/");
            if (x.checkOrigin && (c(" Checking conection is from: " + d),
            "" + b != "null" && b !== d))
                throw new Error("Unexpected message received from: " + b + " for " + v.iframe.id + ". Message was: " + a.data + ". This error can be disabled by adding the checkOrigin: false option.");
            return !0
        }
        function k() {
            return r === ("" + u).substr(0, s)
        }
        function l() {
            var a = v.type in {
                true: 1,
                false: 1
            };
            return a && c(" Ignoring init message from meta parent page"),
            a
        }
        function m() {
            var a = u.substr(u.indexOf(":") + q + 6);
            c(" MessageCallback passed: {iframe: " + v.iframe.id + ", message: " + a + "}"),
            x.messageCallback({
                iframe: v.iframe,
                message: a
            }),
            c(" --")
        }
        function n() {
            if (null === v.iframe)
                throw new Error("iFrame (" + v.id + ") does not exist on " + t);
            return !0
        }
        function p() {
            switch (v.type) {
            case "close":
                d(v.iframe),
                x.resizedCallback(v);
                break;
            case "message":
                m();
                break;
            case "reset":
                g(v);
                break;
            default:
                b(),
                x.resizedCallback(v)
            }
        }
        var u = a.data
          , v = {};
        k() && (c(" Received: " + u),
        v = e(),
        !l() && n() && j() && (o = !1,
        p()))
    }
    function e() {
        null === u && (u = {
            x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
            y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
        },
        c(" Get position: " + u.x + "," + u.y))
    }
    function f() {
        null !== u && (window.scrollTo(u.x, u.y),
        c(" Set position: " + u.x + "," + u.y),
        u = null)
    }
    function g(a) {
        function b() {
            h(a),
            j("reset", "reset", a.iframe)
        }
        c(" Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")),
        e(),
        i(b, a, "init")
    }
    function h(a) {
        function b(b) {
            a.iframe.style[b] = a[b] + "px",
            c(" IFrame (" + a.iframe.id + ") " + b + " set to " + a[b] + "px")
        }
        x.sizeHeight && b("height"),
        x.sizeWidth && b("width")
    }
    function i(a, b, d) {
        d !== b.type && v ? (c(" Requesting animation frame"),
        v(a)) : a()
    }
    function j(a, b, d) {
        c("[" + a + "] Sending msg to iframe (" + b + ")"),
        d.contentWindow.postMessage(r + b, "*")
    }
    function k() {
        function b(a) {
            return "" === a && (i.id = a = "iFrameResizer" + n++,
            c(" Added missing iframe ID: " + a)),
            a
        }
        function d() {
            c(" IFrame scrolling " + (x.scrolling ? "enabled" : "disabled") + " for " + k),
            i.style.overflow = !1 === x.scrolling ? "hidden" : "auto",
            i.scrolling = !1 === x.scrolling ? "no" : "yes"
        }
        function e() {
            ("number" == typeof x.bodyMargin || "0" === x.bodyMargin) && (x.bodyMarginV1 = x.bodyMargin,
            x.bodyMargin = x.bodyMargin + "px")
        }
        function f() {
            return k + ":" + x.bodyMarginV1 + ":" + x.sizeWidth + ":" + x.log + ":" + x.interval + ":" + x.enablePublicMethods + ":" + x.autoResize + ":" + x.bodyMargin + ":" + x.heightCalculationMethod + ":" + x.bodyBackground + ":" + x.bodyPadding
        }
        function h(b) {
            a(i, "load", function() {
                j("iFrame.onload", b, i),
                !o && x.heightCalculationMethod in w && g({
                    iframe: i,
                    height: 0,
                    width: 0,
                    type: "init"
                })
            }),
            j("init", b, i)
        }
        var i = this
          , k = b(i.id);
        d(),
        e(),
        h(f())
    }
    function l() {
        function a(a) {
            if ("IFRAME" !== a.tagName)
                throw new TypeError("Expected <IFRAME> tag, found <" + a.tagName + ">.");
            k.call(a)
        }
        function b(a) {
            if ("object" != typeof (a = a || {}))
                throw new TypeError("Options is not an object.");
            for (var b in y)
                y.hasOwnProperty(b) && (x[b] = a.hasOwnProperty(b) ? a[b] : y[b])
        }
        window.iFrameResize = function(c, d) {
            b(c),
            Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a)
        }
    }
    function m(a) {
        a.fn.iFrameResize = function(b) {
            return x = a.extend({}, y, b),
            this.filter("iframe").each(k).end()
        }
    }
    var n = 0
      , o = !0
      , p = "message"
      , q = p.length
      , r = "[iFrameSizer]"
      , s = r.length
      , t = ""
      , u = null
      , v = window.requestAnimationFrame
      , w = {
        max: 1,
        scroll: 1,
        bodyScroll: 1,
        documentElementScroll: 1
    }
      , x = {}
      , y = {
        autoResize: !0,
        bodyBackground: null,
        bodyMargin: null,
        bodyMarginV1: 8,
        bodyPadding: null,
        checkOrigin: !0,
        enablePublicMethods: !1,
        heightCalculationMethod: "offset",
        interval: 32,
        log: !1,
        messageCallback: function() {},
        resizedCallback: function() {},
        scrolling: !1,
        sizeHeight: !0,
        sizeWidth: !1
    };
    b(),
    a(window, "message", d),
    l(),
    "jQuery"in window && m(jQuery)
}(),
iFrameResize({
    log: !1,
    enablePublicMethods: !1
}),
function(a) {
    a(".js-media-carousel").slick({
        dots: !0,
        adaptiveHeight: !0
    })
}(jQuery),
function(a) {
    var b, c = a(".js-video-carousel"), d = {};
    c.slick({
        dots: !0,
        slidesToShow: 1,
        centerMode: !1
    });
    var e = function() {
        var c = function() {
            a(".yt_video-iframe").each(function() {
                d[this.id] = new YT.Player(this.id,{
                    height: a(this).data("height"),
                    width: a(this).data("width"),
                    videoId: a(this).data("id"),
                    playerVars: {
                        wmode: "opaque"
                    }
                })
            }),
            a(".yt_video-wrapper").fitVids()
        };
        b = setInterval(function() {
            "object" == typeof YT && (c(),
            clearInterval(b))
        }, 500),
        a(".yt_video-title").click(function() {
            a(this).fadeOut(500, function() {
                var b = a(this).next().find("iframe").attr("id");
                d[b].playVideo()
            })
        })
    };
    window.iframeAPILoaded ? e() : window.onYouTubeIframeAPIReady = function() {
        e()
    }
}(jQuery),
function(a, b, c) {
    function d(a, b) {
        return typeof a === b
    }
    function e() {
        var a, b, c, e, f, g, h;
        for (var i in p)
            if (p.hasOwnProperty(i)) {
                if (a = [],
                b = p[i],
                b.name && (a.push(b.name.toLowerCase()),
                b.options && b.options.aliases && b.options.aliases.length))
                    for (c = 0; c < b.options.aliases.length; c++)
                        a.push(b.options.aliases[c].toLowerCase());
                for (e = d(b.fn, "function") ? b.fn() : b.fn,
                f = 0; f < a.length; f++)
                    g = a[f],
                    h = g.split("."),
                    1 === h.length ? r[h[0]] = e : (!r[h[0]] || r[h[0]]instanceof Boolean || (r[h[0]] = new Boolean(r[h[0]])),
                    r[h[0]][h[1]] = e),
                    o.push((e ? "" : "no-") + h.join("-"))
            }
    }
    function f(a) {
        var b = s.className
          , c = r._config.classPrefix || "";
        if (t && (b = b.baseVal),
        r._config.enableJSClass) {
            var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
            b = b.replace(d, "$1" + c + "js$2")
        }
        r._config.enableClasses && (b += " " + c + a.join(" " + c),
        t ? s.className.baseVal = b : s.className = b)
    }
    function g(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function h() {
        return "function" != typeof b.createElement ? b.createElement(arguments[0]) : t ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments)
    }
    function i(a) {
        return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
            return b + c.toUpperCase()
        }).replace(/^-/, "")
    }
    function j(a) {
        return a.replace(/([A-Z])/g, function(a, b) {
            return "-" + b.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function k() {
        var a = b.body;
        return a || (a = h(t ? "svg" : "body"),
        a.fake = !0),
        a
    }
    function l(a, c, d, e) {
        var f, g, i, j, l = "modernizr", m = h("div"), n = k();
        if (parseInt(d, 10))
            for (; d--; )
                i = h("div"),
                i.id = e ? e[d] : l + (d + 1),
                m.appendChild(i);
        return f = h("style"),
        f.type = "text/css",
        f.id = "s" + l,
        (n.fake ? n : m).appendChild(f),
        n.appendChild(m),
        f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)),
        m.id = l,
        n.fake && (n.style.background = "",
        n.style.overflow = "hidden",
        j = s.style.overflow,
        s.style.overflow = "hidden",
        s.appendChild(n)),
        g = c(m, a),
        n.fake ? (n.parentNode.removeChild(n),
        s.style.overflow = j,
        s.offsetHeight) : m.parentNode.removeChild(m),
        !!g
    }
    function m(b, d) {
        var e = b.length;
        if ("CSS"in a && "supports"in a.CSS) {
            for (; e--; )
                if (a.CSS.supports(j(b[e]), d))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in a) {
            for (var f = []; e--; )
                f.push("(" + j(b[e]) + ":" + d + ")");
            return f = f.join(" or "),
            l("@supports (" + f + ") { #modernizr { position: absolute; } }", function(a) {
                return "absolute" == getComputedStyle(a, null).position
            })
        }
        return c
    }
    function n(a, b, e, f) {
        function j() {
            l && (delete v.style,
            delete v.modElem)
        }
        if (f = !d(f, "undefined") && f,
        !d(e, "undefined")) {
            var k = m(a, e);
            if (!d(k, "undefined"))
                return k
        }
        for (var l, n, o, p, q, r = ["modernizr", "tspan"]; !v.style; )
            l = !0,
            v.modElem = h(r.shift()),
            v.style = v.modElem.style;
        for (o = a.length,
        n = 0; o > n; n++)
            if (p = a[n],
            q = v.style[p],
            g(p, "-") && (p = i(p)),
            v.style[p] !== c) {
                if (f || d(e, "undefined"))
                    return j(),
                    "pfx" != b || p;
                try {
                    v.style[p] = e
                } catch (t) {}
                if (v.style[p] != q)
                    return j(),
                    "pfx" != b || p
            }
        return j(),
        !1
    }
    var o = []
      , p = []
      , q = {
        _version: "3.2.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(a, b) {
            var c = this;
            setTimeout(function() {
                b(c[a])
            }, 0)
        },
        addTest: function(a, b, c) {
            p.push({
                name: a,
                fn: b,
                options: c
            })
        },
        addAsyncTest: function(a) {
            p.push({
                name: null,
                fn: a
            })
        }
    }
      , r = function() {};
    r.prototype = q,
    r = new r;
    var s = b.documentElement
      , t = "svg" === s.nodeName.toLowerCase()
      , u = {
        elem: h("modernizr")
    };
    r._q.push(function() {
        delete u.elem
    });
    var v = {
        style: u.elem.style
    };
    r._q.unshift(function() {
        delete v.style
    });
    var w = q.testProp = function(a, b, d) {
        return n([a], c, b, d)
    }
    ;
    r.addTest("textshadow", w("textShadow", "1px 1px")),
    e(),
    f(o),
    delete q.addTest,
    delete q.addAsyncTest;
    for (var x = 0; x < r._q.length; x++)
        r._q[x]();
    a.Modernizr = r
}(window, document),
function(a) {
    var b, c = a(window), d = a(".main-nav"), e = d.find(".js-main-nav-content"), f = d.find(".main-nav__sub"), g = d.find(".main-nav__item"), h = g.find("svg"), i = d.find(".js-toggle-nav"), j = e.find(".js-toggle-mobile-nav"), k = d.find(".main-nav__search"), l = d.find(".main-nav-mobile__search"), m = d.find(".main-nav__countries"), n = d.find(".main-nav-mobile__country-selector"), o = d.find(".main-nav-countries"), p = d.find(".main-nav-mobile__search-input"), q = p.closest("form"), r = d.find(".main-nav-search__results"), s = d.find(".main-nav-search__container"), t = d.find(".main-nav__list"), u = a("#region").val(), v = a("#rootId").val(), w = a("#noToTake").val(), x = a("#mediaRootId").val(), y = a("#searchMedia").val(), z = "main-nav--fixed", A = "main-nav--top", B = "is-open", C = "is-locked", D = "is-ready", E = "is-open-search", F = "is-open-countries", G = a(window).height() - 100;
    s.css("max-height", G),
    f.each(function() {
        var b, c = a(this), d = c.find("li"), e = d.length, f = 6, g = 0, h = 0;
        e > f && (b = a('<div class="' + c.attr("class") + '"></div>'),
        d.each(function() {
            var a = this;
            h % f == 0 && (b = b.append('<ul class="main-nav__sublist"></ul>'),
            g++),
            b.find("ul:last-child").append(a),
            h++
        }),
        b.addClass("has-sublist has-sublist--" + g),
        c.replaceWith(b))
    });
    var H = function() {
        d.data("topPosition", d.offset().top);
        var b, e, f, g = function() {
            b = d.data("topPosition"),
            e = c.scrollTop(),
            f = d.hasClass(z),
            e >= b && !f ? d.addClass(z).fadeIn() : e < b && d.removeClass(z),
            e === b ? d.addClass(A) : d.hasClass(A) && d.removeClass(A)
        };
        g(),
        c.on("scroll.listenForMainNavFix", function() {
            g()
        }),
        a("#rb-cookie-accept").on("click.stickymenu-cookies", function() {
            setTimeout(function() {
                d.data("topPosition", 0)
            }, 300)
        })
    }
      , I = function() {
        d.removeClass(z),
        d.removeClass(A),
        c.off("scroll.listenForMainNavFix")
    };
    q.submit(function(a) {
        a.preventDefault()
    });
    var J = function() {
        k.on("click.openSearchDesktop", function(a) {
            l.fadeIn(300).find('input[type="text"]').focus().closest(".main-nav__wrapper").addClass(E),
            d.addClass(E),
            o.is(":visible") && o.slideUp(300),
            a.preventDefault()
        }),
        j.on("click.closeSearchDesktop", function(b) {
            l.fadeOut(300, function() {
                a(this).closest(".main-nav__wrapper").removeClass(E)
            }),
            b.preventDefault(),
            d.removeClass(E),
            N()
        })
    }
      , K = function() {
        k.off("click.openSearchDesktop"),
        j.off("click.closeSearchDesktop"),
        l.removeAttr("style").closest(".main-nav__wrapper").removeClass(E)
    };
    p.keyup(function(a) {
        L()
    });
    var L = function() {
        var a = p.val();
        a ? M(a) : N()
    }
      , M = function(b) {
        s.is(":visible") || s.slideDown(500),
        r.hasClass(D) || r.addClass(D),
        a(window).width() < 1024 && a(".main-nav__list").hide();
        var c = q.attr("action");
        a.getJSON(c + "?query=" + b + "&region=" + u + "&rootId=" + v + "&mediaRootId=" + x + "&noToTake=" + w + "&searchMedia=" + y, function(a) {
            a.hasMedia = a.pdfs.length > 0,
            a.hasNews = a.news.length > 0,
            a.hasContent = a.content.length > 0,
            a.hasLocations = a.locations.length > 0,
            a.noResults = 0 == (a.hasMedia || a.hasNews || a.hasContent || a.hasLocations);
            var b = mustacheTemplate(a, "#searchResultsTemplate");
            s.html(b)
        })
    }
      , N = function() {
        s.slideUp(300, function() {
            r.removeClass(D),
            t.is(":visible") || t.slideDown()
        }),
        s.html(),
        p.val("")
    }
      , O = function() {
        o.is(":visible") || o.removeAttr("style").removeClass(D)
    }
      , P = function(b, c) {
        a(b).toggleClass(B),
        g.toggleClass(C),
        l.find("form").toggleClass(C),
        d.toggleClass(F),
        o.addClass(D),
        "function" == typeof c && c()
    };
    !function() {
        var b = a(".main-nav-countries__list-wrapper .main-nav-countries__list");
        if (!a("li", b).length) {
            var c = 1
              , d = a("html").attr("lang");
            // a.getJSON("/umbraco/api/Locations/GetGlobalLocations?Language=" + d, function(d) {
            //     a.each(d, function(d, e) {
            //         c % 6 == 0 && a(b).append('</ul><ul class="main-nav-countries__list">'),
            //         a(b).append('<li class="main-nav-countries__item"><a class="main-nav-countries__link" href="' + e.Url + '">' + e.Name + '<svg height="13" width="13"><use xlink:href="#icon-chevron-right" xmlns:xlink="http://www.w3.org/1999/xlink"/></svg></a>'),
            //         c++
            //     })
            // })
        }
        m.on("click.openCountries", function(a) {
            a.preventDefault(),
            P(this, function() {
                o.slideToggle(300, function() {
                    O()
                })
            })
        }),
        n.on("click.openCountriesMobile", function(a) {
            a.preventDefault(),
            P(this, function() {
                o.fadeToggle(300, function() {
                    O()
                })
            })
        })
    }();
    var Q = function() {
        i.on("click.toggleNav", function(a) {
            e.addClass(D).fadeIn(),
            a.preventDefault()
        }),
        j.on("click.toggleMobileNav", function(b) {
            e.fadeOut(function() {
                a(this).removeClass(D).removeAttr("style")
            }),
            o.hasClass(D) && P(this, function() {
                o.fadeToggle(300, function() {
                    O()
                })
            }),
            b.preventDefault(),
            d.removeClass(E),
            N()
        })
    }
      , R = function() {
        i.off("click.toggleNav"),
        j.off("click.toggleMobileNav"),
        e.removeAttr("style")
    }
      , S = function(c, d, e) {
        var f = c
          , g = d || 0
          , h = e || 300;
        b = setTimeout(function() {
            a(f).addClass(B).find(".main-nav__sub").slideDown(h, function() {
                a(this).addClass(B)
            })
        }, g)
    }
      , T = function(c, d) {
        var e = c
          , f = d || 100;
        clearTimeout(b),
        a(e).removeClass(B).find(".main-nav__sub").stop(!0, !0).removeClass(B).slideUp(f)
    }
      , U = function() {
        h.on("click.mainNavMobile", function() {
            var b = a(this).closest(".main-nav__item");
            b.find(".main-nav__sub").hasClass(B) ? T(b, 400) : S(b, 0, 800)
        })
    }
      , V = function() {
        h.off("click.mainNavMobile"),
        d.find(".main-nav__sub." + B).each(function() {
            var b = a(this).closest(".main-nav__item");
            T(b, 0)
        })
    }
      , W = function() {
        H(),
        R(),
        V(),
        J(),
        g.on("mouseenter.mainNav", function() {
            a(this).hasClass(C) || S(this, 150)
        }).on("mouseleave.mainNav", function() {
            a(this).hasClass(C) || T(this)
        })
    }
      , X = function() {
        I(),
        Q(),
        U(),
        T(g),
        K(),
        g.off("mouseenter.mainNav").off("mouseleave.mainNav")
    };
    a(document).ready(function() {
        W(),
        a.fn.responsiveSetup && a(document).responsiveSetup({
            onMobile: {
                callFunction: X
            },
            onDesktop: {
                callFunction: W
            }
        })
    })
}(jQuery),
function(a) {
    if (a(".js-news-filter-carousel").slick({
        dots: !1,
        slidesToShow: 7,
        prevArrow: '<button class="news-filter-carousel__arrow news-filter-carousel__arrow--prev"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use></svg></button>',
        nextArrow: '<button class="news-filter-carousel__arrow news-filter-carousel__arrow--next"><svg width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></button>',
        infinite: !1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        }]
    }),
    !a(this).hasClass("news_filter-menu-item-active")) {
        var b = a(this).data("news-filter")
          , c = a(this).closest(".news__wrapper");
        a(".news_filter-menu-item-active", c).removeClass("news_filter-menu-item-active"),
        a(this).addClass("news_filter-menu-item-active"),
        a(".news-item:visible", c).fadeOut(500, function() {
            a(".news_item-" + b, c).each(function() {
                a(this).fadeIn(500)
            })
        })
    }
}(jQuery),
function(a) {
    function b(a, b) {
        a ? b.removeClass("hidden") : b.addClass("hidden")
    }
    function c(b, c) {
        var d = a(c).html();
        return Mustache.render(d, b)
    }
    function d(a) {
        return a.match(/^\/media/) ? a.match(/mp3$/) ? '<svg width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-media"></use></svg>' : '<svg width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-file"></use></svg>' : a.match(/^http/) || a.match(/^https/) ? '<svg width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right-bottom"></use></svg>' : '<svg width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg>'
    }
    a(".js-news__more").on("click", function(e) {
        var f = a(this)
          , g = f.parent().parent(".news")
          , h = g.find(".news-item-wrapper")
          , i = g.data().currentnodeid
          , j = g.find(".news-item-wrapper .news-item").length
          , k = g.data().itemsperpage
          , l = g.data().tags
          , m = g.data().mode
          , n = g.data().pubyear;
        // a.ajax({
        //     type: "GET",
        //     url: "/umbraco/Api/LoadMore/GetNewsItems",
        //     data: {
        //         mode: m,
        //         currentPageId: i,
        //         currentItemsCount: j,
        //         itemsPerPage: k,
        //         tagsValues: l,
        //         publicationYear: n
        //     },
        //     success: function(e) {
        //         e.noResults = 0 == e.NewsItems.length;
        //         var g = "financial" === m ? "#financialNewsItemTemplate" : "#newsItemTemplate"
        //           , i = c(e, g);
        //         h.append(i),
        //         "financial" === m && a(e.NewsItems).each(function() {
        //             var b = ""
        //               , c = h.find(".news-item-" + this.Id);
        //             a(this.Links).each(function(a, c) {
        //                 b += '<a href="' + c.Url + '" class="news-item__link-text">' + d(c.Url) + '<span class="news-item__link-text-tag">' + c.Name + "</span></a>"
        //             }),
        //             c.find(".news-item__links").append(a(b))
        //         }),
        //         b(e.HasMoreItems, f)
        //     },
        //     error: function(a) {
        //         console.log(a.responseJSON.Message)
        //     }
        // }),
        e.preventDefault()
    }),
    a(".news_filter-menu-item").click(function() {
        var e = a(this);
        if (!e.hasClass("news_filter-menu-item-active")) {
            var f = e.parents(".news")
              , g = f.find(".news-item-wrapper")
              , h = f.data().currentnodeid
              , i = f.data().itemsperpage
              , j = f.data().tags
              , k = f.data().mode
              , l = e.data().newsfilter;
            a(f).find(".news_filter-menu-item-active").removeClass("news_filter-menu-item-active"),
            e.addClass("news_filter-menu-item-active"),
            a.ajax({
                type: "GET",
                url: "/umbraco/Api/LoadMore/GetNewsItems",
                data: {
                    mode: k,
                    currentPageId: h,
                    currentItemsCount: 0,
                    itemsPerPage: i,
                    tagsValues: j,
                    publicationYear: l
                },
                success: function(e) {
                    e.noResults = 0 == e.NewsItems.length;
                    var h = "financial" === k ? "#financialNewsItemTemplate" : "#newsItemTemplate"
                      , i = c(e, h);
                    g.html(i),
                    "financial" === k && a(e.NewsItems).each(function() {
                        var b = ""
                          , c = g.find(".news-item-" + this.Id);
                        a(this.Links).each(function(a, c) {
                            b += '<a href="' + c.Url + '" class="news-item__link-text">' + d(c.Url) + '<span class="news-item__link-text-tag">' + c.Name + "</span></a>"
                        }),
                        c.find(".news-item__links").append(a(b))
                    }),
                    f.data("pubyear", l);
                    var j = f.find(".js-news__more");
                    b(e.HasMoreItems, j)
                },
                error: function(a) {
                    console.log(a.responseJSON.Message)
                }
            })
        }
    })
}(jQuery),
function(a) {
    a(".js-overlay-close-global").click(function(b) {
        b.preventDefault(),
        a(this).closest(".overlay").hide()
    })
}(jQuery);
var RBCookie = RBCookie || {
    key: "RB-Cookie"
};
RBCookie.Alert = RBCookie.Alert || {
    bind: function() {
        $("#rb-cookie-accept").click(function() {
            var a = RBCookie.key
              , b = new Date;
            return b.setDate(b.getDate() + 36500),
            document.cookie = a + "=1; path=/; expires=" + b.toUTCString(),
            $("#rb-cookie-container").slideUp(function() {
                $(this).remove()
            }),
            !1
        })
    }
},
$(document).ready(function() {
    RBCookie.Alert.bind()
}),
function(a) {
    document.createElement("picture")
}(jQuery),
function(a) {
    var b = a("body")
      , c = a("html")
      , d = a(".js-open-share-overlay")
      , e = a(".js-share-overlay")
      , f = a(e.html());
    d.on("click", function(d) {
        var e = a(window).scrollTop();
        window.scrollTo(0, 0),
        c.addClass("overlay__container"),
        b.addClass("overlay__container").append(f),
        f.fadeIn(),
        a(".overlay--share .brand-social__icon").each(function() {
            var b = a(this).data("icon-alias");
            a(this).attr("src", "/images/social-" + b + ".png"),
            a(this).attr("srcset", "/images/social-" + b + ".png 1x, /images/social-" + b + "@2x.png 2x")
        }),
        f.find(".js-overlay-close").on("click", function() {
            b.removeClass("overlay__container"),
            c.removeClass("overlay__container"),
            f.fadeOut(function() {
                a(window).scrollTop(e),
                f.remove()
            })
        }),
        d.preventDefault()
    })
}(jQuery),
function(a) {
    a.getScript("//hsprod.investis.com/servlet/HsPublic?context=ir.access&ir_client_id=6365&ir_option=PRICES_DELAYED&transform=lse_prices_js", function() {
        function b() {
            var b = a(".spt_share-price-value");
            a(b).length && a(b).visible() && !a(b).hasClass("spf-animated") && (a(b).addClass("spf-animated"),
            a({
                someValue: 5e3
            }).animate({
                someValue: lasttrade
            }, {
                duration: 1500,
                easing: "swing",
                step: function() {
                    a(b).text(c(Math.round(this.someValue)))
                }
            }))
        }
        function c(a) {
            for (; /(\d+)(\d{3})/.test(a.toString()); )
                a = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            return a
        }
        if ("undefined" != typeof lasttrade) {
            a(".spt_share-price").html('<span class="spt_share-price-value">5000</span>.00p');
            var d = new Date
              , e = d.getDate()
              , f = d.getMonth() + 1
              , g = d.getFullYear();
            if (e == day && f == theMonth && g == year)
                var h = "Today";
            else
                var h = day + "/" + theMonth + "/" + year;
            var i = hour + "." + min + " " + h;
            if (perc < 0)
                ;
            else if (perc > 0)
                ;
            else
                ;a(".spt_updated-time").html(i),
            a(".spt_change-percentage").html(perc + "%"),
            a(".spt_change-figure").html(change + ".00"),
            a(window).load(function() {
                b()
            }),
            a(window).scroll(function() {
                b()
            })
        }
    })
}(jQuery),
function(a) {
    setTimeout(function() {
        a(".social_feed .feed-loading").each(function() {
            var b = a(this)
              , c = b.data("error-message");
            b.text(c).addClass("error")
        })
    }, 5e3)
}(jQuery),
function(a) {
    var b = a(".js-timeline-carousel");
    b.slick({
        dots: !0,
        variableWidth: !0,
        adaptiveHeight: !1,
        accessibility: !1,
        slidesToShow: 1,
        prevArrow: '<button class="timeline-carousel__arrow timeline-carousel__arrow--prev"><svg class="timeline-carousel__arrow-image" width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use></svg></button>',
        nextArrow: '<button class="timeline-carousel__arrow timeline-carousel__arrow--next"><svg class="timeline-carousel__arrow-image" width="13" height="13" ><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></button>',
        centerMode: !0,
        responsive: [{
            breakpoint: 1050,
            settings: {
                variableWidth: !0,
                dots: !1,
                arrows: !0
            }
        }, {
            breakpoint: 769,
            settings: {
                dots: !1,
                variableWidth: !0,
                arrows: !0,
                slidesToShow: 1
            }
        }]
    }),
    b.on("afterChange", function(b, c, d, e) {
        var f = a(".js-timeline-carousel .slick-active .timeline__image");
        a(f).length && a(f).each(function() {
            a(this).slideDown(200)
        })
    }),
    b.on("beforeChange", function(b, c, d, e) {
        var f = a(".js-timeline-carousel .slick-active .timeline__image");
        a(f).length && a(f).each(function() {
            a(this).slideUp(200)
        })
    }),
    a(window).load(function() {
        var b = a(".js-timeline-carousel .slick-active .timeline__image");
        a(b).length && a(b).each(function() {
            a(this).show()
        })
    })
}(jQuery),
function(a) {
    a.fn.worldMapSetup = function() {
        var b, c, d = a(this), e = (d.find(".world-map__svg"),
        d.find(".world-map__overlay"),
        d.offset().top), f = 0;
        b = [{
            addClass: "is-map-1",
            startPos: a(".world-map__content--1").offset().top - 300,
            isActive: !1,
            inFunction: !1,
            outFunction: !1
        }, {
            addClass: "is-map-2",
            startPos: a(".world-map__content--1").offset().top,
            isActive: !1,
            inFunction: !1,
            outFunction: !1
        }, {
            addClass: "is-map-3",
            startPos: a(".world-map__content--2").offset().top - 300,
            isActive: !1,
            inFunction: !1,
            outFunction: !1
        }];
        var g = function() {
            c = a(window).scrollTop();
            for (var e in b)
                b.hasOwnProperty(e) && (c >= b[e].startPos - f ? b[e].isActives || (d.addClass(b[e].addClass),
                b[e].isActives = !0,
                b[e].inFunction && b[e].inFunction()) : b[e].isActives && (d.removeClass(b[e].addClass),
                b[e].isActives = !1,
                b[e].outFunction && b[e].outFunction()))
        };
        g(),
        a(window).on("resize.world-map", function() {
            f = e - d.offset().top
        }),
        a(window).on("scroll.world-map", function() {
            g()
        })
    }
    ,
    a(document).ready(function() {
        a(".js-world-map").each(function() {
            a(this).worldMapSetup()
        })
    })
}(jQuery);
