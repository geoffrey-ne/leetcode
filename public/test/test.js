Q.ready(function () {
    (function () {
        var g = Q.$('[data-widget-suggest="suggest"]');
        if (g) {
            var f = {
                widget: g,
                form: Q.$('[data-suggest-elem="form"]'),
                input: Q.$('[data-suggest-elem="input"]'),
                btn: Q.$('[data-suggest-elem="btn"]')
            };
            var a;
            var h = f.widget.attr("data-suggest-searchtarget") || "_blank";
            var e = f.widget.attr("data-suggest-refersource") || "";
            f.btn.on("click", function () {
                if (!window.searchSuggestInited && f.input.value()) {
                    b()
                }
            });
            f.input[0].onkeydown = function (i) {
                if (!window.searchSuggestInited && i.keyCode === 13 && !f.input.value()) {
                    return false
                }
            };
            var c = [];
            f.input.on("keyup", function (i) {
                if (!window.searchSuggestInited && f.input.value()) { d() }
            });
            if (f.input.value()) {
                d()
            }
            function d() {
                var j = "http://so.iqiyi.com/so/q_" + encodeURIComponent(f.input.value());
                var l = {
                    source: "input",
                    "sr": Math.floor((new Date()).getTime() * Math.random())
                };
                if (c) {
                    c.forEach(function (m) { f.form.remove(m) })
                }
                c = [];
                for (var k in l) {
                    var i = Q.element.Element.create({ tagName: "input" });
                    i.css("display", "none");
                    i.attr("type", "hidden");
                    i.attr("name", k);
                    i.attr("data-elems", "input");
                    i.value(decodeURIComponent(l[k]));
                    f.form.append(i);
                    c.push(i)
                }
                f.form.attr("target", h);
                f.form.attr("method", "GET");
                f.form[0].action = j
            }
            function b() {
                var i = "http://so.iqiyi.com/so/q_" + encodeURIComponent(f.input.value()) + "?source=input&sr=" + Math.floor((new Date()).getTime() * Math.random());
                if (e) {
                    i += "&" + e
                }
                if (h === "_self") {
                    window.location.href = i
                } else {
                    window.open(i)
                }
            }
        }
    })();
})
