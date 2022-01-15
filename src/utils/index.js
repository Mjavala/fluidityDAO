/* eslint-disable */
export const networkAnimation = () => {
  !(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define(n)
      : (((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
        (t.__SVGATOR_PLAYER__["91c80d77"] = n()));
  })(this, function () {
    "use strict";
    function t(t, n) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          e.push.apply(e, r);
      }
      return e;
    }
    function n(n) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? t(Object(r), !0).forEach(function (t) {
              o(n, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
          : t(Object(r)).forEach(function (t) {
              Object.defineProperty(
                n,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return n;
    }
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function u(t, n, e) {
      return n && i(t.prototype, n), e && i(t, e), t;
    }
    function o(t, n, e) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = e),
        t
      );
    }
    function a(t) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function l(t, n) {
      return (l =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function s() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function f(t, n, e) {
      return (f = s()
        ? Reflect.construct
        : function (t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var i = new (Function.bind.apply(t, r))();
            return e && l(i, e.prototype), i;
          }).apply(null, arguments);
    }
    function c(t, n) {
      if (n && ("object" == typeof n || "function" == typeof n)) return n;
      if (void 0 !== n)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function h(t, n, e) {
      return (h =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, n, e) {
              var r = (function (t, n) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, n) &&
                  null !== (t = a(t));

                );
                return t;
              })(t, n);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, n);
                return i.get ? i.get.call(e) : i.value;
              }
            })(t, n, e || t);
    }
    function v(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return d(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, n) {
          if (!t) return;
          if ("string" == typeof t) return d(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return d(t, n);
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function d(t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
      return r;
    }
    var y = g(Math.pow(10, -6));
    function g(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
      if (Number.isInteger(t)) return t;
      var e = Math.pow(10, n);
      return Math.round((+t + Number.EPSILON) * e) / e;
    }
    function p(t, n) {
      var e =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
      return Math.abs(t - n) < e;
    }
    var m = Math.PI / 180;
    function b(t) {
      return t;
    }
    function w(t, n, e) {
      var r = 1 - e;
      return 3 * e * r * (t * r + n * e) + e * e * e;
    }
    function A() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      return t < 0 || t > 1 || e < 0 || e > 1
        ? null
        : p(t, n) && p(e, r)
        ? b
        : function (i) {
            if (i <= 0)
              return t > 0 ? (i * n) / t : 0 === n && e > 0 ? (i * r) / e : 0;
            if (i >= 1)
              return e < 1
                ? 1 + ((i - 1) * (r - 1)) / (e - 1)
                : 1 === e && t < 1
                ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                : 1;
            for (var u, o = 0, a = 1; o < a; ) {
              var l = w(t, e, (u = (o + a) / 2));
              if (p(i, l)) break;
              l < i ? (o = u) : (a = u);
            }
            return w(n, r, u);
          };
    }
    function x() {
      return 1;
    }
    function k(t) {
      return 1 === t ? 1 : 0;
    }
    function _() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (1 === t) {
        if (0 === n) return k;
        if (1 === n) return x;
      }
      var e = 1 / t;
      return function (t) {
        return t >= 1 ? 1 : (t += n * e) - (t % e);
      };
    }
    var S = Math.sin,
      O = Math.cos,
      M = Math.acos,
      E = Math.asin,
      j = Math.tan,
      P = Math.atan2,
      I = Math.PI / 180,
      B = 180 / Math.PI,
      R = Math.sqrt,
      T = (function () {
        function t() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            u =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0;
          r(this, t),
            (this.m = [n, e, i, u, o, a]),
            (this.i = null),
            (this.w = null),
            (this.s = null);
        }
        return (
          u(
            t,
            [
              {
                key: "determinant",
                get: function () {
                  var t = this.m;
                  return t[0] * t[3] - t[1] * t[2];
                },
              },
              {
                key: "isIdentity",
                get: function () {
                  if (null === this.i) {
                    var t = this.m;
                    this.i =
                      1 === t[0] &&
                      0 === t[1] &&
                      0 === t[2] &&
                      1 === t[3] &&
                      0 === t[4] &&
                      0 === t[5];
                  }
                  return this.i;
                },
              },
              {
                key: "point",
                value: function (t, n) {
                  var e = this.m;
                  return {
                    x: e[0] * t + e[2] * n + e[4],
                    y: e[1] * t + e[3] * n + e[5],
                  };
                },
              },
              {
                key: "translateSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  if (!t && !n) return this;
                  var e = this.m;
                  return (
                    (e[4] += e[0] * t + e[2] * n),
                    (e[5] += e[1] * t + e[3] * n),
                    (this.w = this.s = this.i = null),
                    this
                  );
                },
              },
              {
                key: "rotateSelf",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if ((t %= 360)) {
                    var n = S((t *= I)),
                      e = O(t),
                      r = this.m,
                      i = r[0],
                      u = r[1];
                    (r[0] = i * e + r[2] * n),
                      (r[1] = u * e + r[3] * n),
                      (r[2] = r[2] * e - i * n),
                      (r[3] = r[3] * e - u * n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: "scaleSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                  if (1 !== t || 1 !== n) {
                    var e = this.m;
                    (e[0] *= t),
                      (e[1] *= t),
                      (e[2] *= n),
                      (e[3] *= n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: "skewSelf",
                value: function (t, n) {
                  if (((n %= 360), (t %= 360) || n)) {
                    var e = this.m,
                      r = e[0],
                      i = e[1],
                      u = e[2],
                      o = e[3];
                    t && ((t = j(t * I)), (e[2] += r * t), (e[3] += i * t)),
                      n && ((n = j(n * I)), (e[0] += u * n), (e[1] += o * n)),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: "resetSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 1,
                    i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                    u =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : 0,
                    o = this.m;
                  return (
                    (o[0] = t),
                    (o[1] = n),
                    (o[2] = e),
                    (o[3] = r),
                    (o[4] = i),
                    (o[5] = u),
                    (this.w = this.s = this.i = null),
                    this
                  );
                },
              },
              {
                key: "recomposeSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null;
                  return (
                    this.isIdentity || this.resetSelf(),
                    t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                    n && this.rotateSelf(n),
                    e &&
                      (e.x && this.skewSelf(e.x, 0),
                      e.y && this.skewSelf(0, e.y)),
                    !r || (1 === r.x && 1 === r.y) || this.scaleSelf(r.x, r.y),
                    i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                    this
                  );
                },
              },
              {
                key: "decompose",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    e = this.m,
                    r = e[0] * e[0] + e[1] * e[1],
                    i = [
                      [e[0], e[1]],
                      [e[2], e[3]],
                    ],
                    u = R(r);
                  if (0 === u)
                    return {
                      origin: { x: g(e[4]), y: g(e[5]) },
                      translate: { x: g(t), y: g(n) },
                      scale: { x: 0, y: 0 },
                      skew: { x: 0, y: 0 },
                      rotate: 0,
                    };
                  (i[0][0] /= u), (i[0][1] /= u);
                  var o = e[0] * e[3] - e[1] * e[2] < 0;
                  o && (u = -u);
                  var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                  (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                  var l = R(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                  if (0 === l)
                    return {
                      origin: { x: g(e[4]), y: g(e[5]) },
                      translate: { x: g(t), y: g(n) },
                      scale: { x: g(u), y: 0 },
                      skew: { x: 0, y: 0 },
                      rotate: 0,
                    };
                  (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                  var s = 0;
                  return (
                    i[1][1] < 0
                      ? ((s = M(i[1][1]) * B), i[0][1] < 0 && (s = 360 - s))
                      : (s = E(i[0][1]) * B),
                    o && (s = -s),
                    (a = P(a, R(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * B),
                    o && (a = -a),
                    {
                      origin: { x: g(e[4]), y: g(e[5]) },
                      translate: { x: g(t), y: g(n) },
                      scale: { x: g(u), y: g(l) },
                      skew: { x: g(a), y: 0 },
                      rotate: g(s),
                    }
                  );
                },
              },
              {
                key: "clone",
                value: function () {
                  var t = this.m;
                  return new this.constructor(
                    t[0],
                    t[1],
                    t[2],
                    t[3],
                    t[4],
                    t[5]
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : " ";
                  return (
                    null === this.s &&
                      (this.s =
                        "matrix(" +
                        this.m
                          .map(function (t) {
                            return g(t);
                          })
                          .join(t) +
                        ")"),
                    this.s
                  );
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  return t
                    ? Array.isArray(t)
                      ? f(this, v(t))
                      : t instanceof this
                      ? t.clone()
                      : new this().recomposeSelf(
                          t.origin,
                          t.rotate,
                          t.skew,
                          t.scale,
                          t.translate
                        )
                    : new this();
                },
              },
            ]
          ),
          t
        );
      })();
    function N(t, n, e) {
      return t >= 0.5 ? e : n;
    }
    function C(t, n, e) {
      return 0 === t || n === e ? n : t * (e - n) + n;
    }
    function F(t, n, e) {
      var r = C(t, n, e);
      return r <= 0 ? 0 : r;
    }
    function L(t, n, e) {
      var r = C(t, n, e);
      return r <= 0 ? 0 : r >= 1 ? 1 : r;
    }
    function q(t, n, e) {
      return 0 === t
        ? n
        : 1 === t
        ? e
        : { x: C(t, n.x, e.x), y: C(t, n.y, e.y) };
    }
    function V(t, n, e) {
      return 0 === t
        ? n
        : 1 === t
        ? e
        : { x: F(t, n.x, e.x), y: F(t, n.y, e.y) };
    }
    function D(t, n, e) {
      var r = (function (t, n, e) {
        return Math.round(C(t, n, e));
      })(t, n, e);
      return r <= 0 ? 0 : r >= 255 ? 255 : r;
    }
    function z(t, n, e) {
      return 0 === t
        ? n
        : 1 === t
        ? e
        : {
            r: D(t, n.r, e.r),
            g: D(t, n.g, e.g),
            b: D(t, n.b, e.b),
            a: C(t, null == n.a ? 1 : n.a, null == e.a ? 1 : e.a),
          };
    }
    function Y(t, n, e) {
      var r = n.length;
      if (r !== e.length) return N(t, n, e);
      for (var i = new Array(r), u = 0; u < r; u++) i[u] = C(t, n[u], e[u]);
      return i;
    }
    function G(t, n) {
      for (var e = [], r = 0; r < t; r++) e.push(n);
      return e;
    }
    function U(t, n) {
      if (--n <= 0) return t;
      var e = (t = Object.assign([], t)).length;
      do {
        for (var r = 0; r < e; r++) t.push(t[r]);
      } while (--n > 0);
      return t;
    }
    var $,
      W = (function () {
        function t(n) {
          r(this, t), (this.list = n), (this.length = n.length);
        }
        return (
          u(t, [
            {
              key: "setAttribute",
              value: function (t, n) {
                for (var e = this.list, r = 0; r < this.length; r++)
                  e[r].setAttribute(t, n);
              },
            },
            {
              key: "removeAttribute",
              value: function (t) {
                for (var n = this.list, e = 0; e < this.length; e++)
                  n[e].removeAttribute(t);
              },
            },
            {
              key: "style",
              value: function (t, n) {
                for (var e = this.list, r = 0; r < this.length; r++)
                  e[r].style[t] = n;
              },
            },
          ]),
          t
        );
      })(),
      H = /-./g,
      Q = function (t, n) {
        return n.toUpperCase();
      };
    function X(t) {
      return "function" == typeof t ? t : N;
    }
    function J(t) {
      return t
        ? "function" == typeof t
          ? t
          : Array.isArray(t)
          ? (function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b;
              if (!Array.isArray(t)) return n;
              switch (t.length) {
                case 1:
                  return _(t[0]) || n;
                case 2:
                  return _(t[0], t[1]) || n;
                case 4:
                  return A(t[0], t[1], t[2], t[3]) || n;
              }
              return n;
            })(t, null)
          : (function (t, n) {
              var e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : b;
              switch (t) {
                case "linear":
                  return b;
                case "steps":
                  return _(n.steps || 1, n.jump || 0) || e;
                case "bezier":
                case "cubic-bezier":
                  return A(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e;
              }
              return e;
            })(t.type, t.value, null)
        : null;
    }
    function Z(t, n, e) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n.length - 1;
      if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v;
      if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v;
      var u,
        o = n[0],
        a = null;
      for (u = 1; u <= i; u++) {
        if (!(t > n[u].t)) {
          a = n[u];
          break;
        }
        o = n[u];
      }
      return null == a
        ? r
          ? [i, 1, n[i].v]
          : n[i].v
        : o.t === a.t
        ? r
          ? [u, 1, a.v]
          : a.v
        : ((t = (t - o.t) / (a.t - o.t)),
          o.e && (t = o.e(t)),
          r ? [u, t, e(t, o.v, a.v)] : e(t, o.v, a.v));
    }
    function K(t, n) {
      var e =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return t && t.length
        ? "function" != typeof n
          ? null
          : ("function" != typeof e && (e = null),
            function (r) {
              var i = Z(r, t, n);
              return null != i && e && (i = e(i)), i;
            })
        : null;
    }
    function tt(t, n) {
      return t.t - n.t;
    }
    function nt(t, n, r, i, u) {
      var o,
        a = "@" === r[0],
        l = "#" === r[0],
        s = $[r],
        f = N;
      switch (
        (a
          ? ((o = r.substr(1)), (r = o.replace(H, Q)))
          : l && (r = r.substr(1)),
        e(s))
      ) {
        case "function":
          if (((f = s(i, u, Z, J, r, a, n, t)), l)) return f;
          break;
        case "string":
          f = K(i, X(s));
          break;
        case "object":
          if ((f = K(i, X(s.i), s.f)) && "function" == typeof s.u)
            return s.u(n, f, r, a, t);
      }
      return f
        ? (function (t, n, e) {
            if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
              return t instanceof W
                ? function (r) {
                    return t.style(n, e(r));
                  }
                : function (r) {
                    return (t.style[n] = e(r));
                  };
            if (Array.isArray(n)) {
              var r = n.length;
              return function (i) {
                var u = e(i);
                if (null == u)
                  for (var o = 0; o < r; o++) t[o].removeAttribute(n);
                else for (var a = 0; a < r; a++) t[a].setAttribute(n, u);
              };
            }
            return function (r) {
              var i = e(r);
              null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
            };
          })(n, r, f, a)
        : null;
    }
    function et(t, n, r, i) {
      if (!i || "object" !== e(i)) return null;
      var u = null,
        o = null;
      return (
        Array.isArray(i)
          ? (o = (function (t) {
              if (!t || !t.length) return null;
              for (var n = 0; n < t.length; n++) t[n].e && (t[n].e = J(t[n].e));
              return t.sort(tt);
            })(i))
          : ((o = i.keys), (u = i.data || null)),
        o ? nt(t, n, r, o, u) : null
      );
    }
    function rt(t, n, e) {
      if (!e) return null;
      var r = [];
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var u = et(t, n, i, e[i]);
          u && r.push(u);
        }
      return r.length ? r : null;
    }
    function it(t, n) {
      if (!n.duration || n.duration < 0) return null;
      var e = (function (t, n) {
        if (!n) return null;
        var e = [];
        if (Array.isArray(n))
          for (var r = n.length, i = 0; i < r; i++) {
            var u = n[i];
            if (2 === u.length) {
              var o = null;
              if ("string" == typeof u[0]) o = t.getElementById(u[0]);
              else if (Array.isArray(u[0])) {
                o = [];
                for (var a = 0; a < u[0].length; a++)
                  if ("string" == typeof u[0][a]) {
                    var l = t.getElementById(u[0][a]);
                    l && o.push(l);
                  }
                o = o.length ? (1 === o.length ? o[0] : new W(o)) : null;
              }
              if (o) {
                var s = rt(t, o, u[1]);
                s && (e = e.concat(s));
              }
            }
          }
        else
          for (var f in n)
            if (n.hasOwnProperty(f)) {
              var c = t.getElementById(f);
              if (c) {
                var h = rt(t, c, n[f]);
                h && (e = e.concat(h));
              }
            }
        return e.length ? e : null;
      })(t, n.elements);
      return e
        ? (function (t, n) {
            var e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1 / 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              i =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              u =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 1,
              o = t.length,
              a = r > 0 ? n : 0;
            i && e % 2 == 0 && (a = n - a);
            var l = null;
            return function (s, f) {
              var c = s % n,
                h = 1 + (s - c) / n;
              (f *= r), i && h % 2 == 0 && (f = -f);
              var v = !1;
              if (h > e) (c = a), (v = !0), -1 === u && (c = r > 0 ? 0 : n);
              else if ((f < 0 && (c = n - c), c === l)) return !1;
              l = c;
              for (var d = 0; d < o; d++) t[d](c);
              return v;
            };
          })(
            e,
            n.duration,
            n.iterations || 1 / 0,
            n.direction || 1,
            !!n.alternate,
            n.fill || 1
          )
        : null;
    }
    function ut(t) {
      return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
    }
    function ot(t, n, e) {
      return !t || !e || n > t.length
        ? t
        : t.substring(0, n) + ot(t.substring(n + 1), e, e);
    }
    function at(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
      return !t || t % n ? t % n : at(t / n, n);
    }
    function lt(t, n, e) {
      if (t && t.length) {
        var r = ut(e),
          i = ut(n),
          u = at(r) + 5,
          o = ot(t, at(r, 5), u);
        return (
          (o = o.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
          (o = (function (t, n, e) {
            var r = +("0x" + t.substring(0, 4));
            t = t.substring(4);
            for (
              var i = (n % r) + (e % 27), u = [], o = 0;
              o < t.length;
              o += 2
            )
              if ("|" !== t[o]) {
                var a = +("0x" + t[o] + t[o + 1]) - i;
                u.push(a);
              } else {
                var l = +("0x" + t.substring(o + 1, o + 1 + 4)) - i;
                (o += 3), u.push(l);
              }
            return String.fromCharCode.apply(String, u);
          })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, "")), i, r)),
          (o = JSON.parse(o))
        );
      }
    }
    Number.isInteger ||
      (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
      }),
      Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
    var st = (function () {
      function t(n, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r(this, t),
          (this._id = 0),
          (this._running = !1),
          (this._rollingBack = !1),
          (this._animations = n),
          (this.duration = e.duration),
          (this.alternate = e.alternate),
          (this.fill = e.fill),
          (this.iterations = e.iterations),
          (this.direction = i.direction || 1),
          (this.speed = i.speed || 1),
          (this.fps = i.fps || 100),
          (this.offset = i.offset || 0),
          (this.rollbackStartOffset = 0);
      }
      return (
        u(
          t,
          [
            {
              key: "_rollback",
              value: function () {
                var t = this,
                  n = 1 / 0,
                  e = null;
                (this.rollbackStartOffset = this.offset),
                  this._rollingBack ||
                    ((this._rollingBack = !0), (this._running = !0));
                this._id = window.requestAnimationFrame(function r(i) {
                  if (t._rollingBack) {
                    null == e && (e = i);
                    var u = i - e,
                      o = t.rollbackStartOffset - u,
                      a = Math.round(o * t.speed);
                    if (a > t.duration && n != 1 / 0) {
                      var l = !!t.alternate && (a / t.duration) % 2 > 1,
                        s = a % t.duration;
                      a = (s += l ? t.duration : 0) || t.duration;
                    }
                    var f = t.fps ? 1e3 / t.fps : 0,
                      c = Math.max(0, a);
                    if (c < n - f) {
                      (t.offset = c), (n = c);
                      for (
                        var h = t._animations, v = h.length, d = 0;
                        d < v;
                        d++
                      )
                        h[d](c, t.direction);
                    }
                    var y = !1;
                    if (t.iterations > 0 && -1 === t.fill) {
                      var g = t.iterations * t.duration,
                        p = g == a;
                      (a = p ? 0 : a),
                        (t.offset = p ? 0 : t.offset),
                        (y = a > g);
                    }
                    a > 0 && t.offset >= a && !y
                      ? (t._id = window.requestAnimationFrame(r))
                      : t.stop();
                  }
                });
              },
            },
            {
              key: "_start",
              value: function () {
                var t = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = -1 / 0,
                  r = null,
                  i = {},
                  u = function u(o) {
                    (t._running = !0), null == r && (r = o);
                    var a = Math.round((o - r + n) * t.speed),
                      l = t.fps ? 1e3 / t.fps : 0;
                    if (a > e + l && !t._rollingBack) {
                      (t.offset = a), (e = a);
                      for (
                        var s = t._animations, f = s.length, c = 0, h = 0;
                        h < f;
                        h++
                      )
                        i[h]
                          ? c++
                          : ((i[h] = s[h](a, t.direction)), i[h] && c++);
                      if (c === f) return void t._stop();
                    }
                    t._id = window.requestAnimationFrame(u);
                  };
                this._id = window.requestAnimationFrame(u);
              },
            },
            {
              key: "_stop",
              value: function () {
                this._id && window.cancelAnimationFrame(this._id),
                  (this._running = !1),
                  (this._rollingBack = !1);
              },
            },
            {
              key: "play",
              value: function () {
                (!this._rollingBack && this._running) ||
                  ((this._rollingBack = !1),
                  this.rollbackStartOffset > this.duration &&
                    ((this.offset =
                      this.rollbackStartOffset -
                      ((this.rollbackStartOffset - this.offset) %
                        this.duration)),
                    (this.rollbackStartOffset = 0)),
                  this._start(this.offset));
              },
            },
            {
              key: "stop",
              value: function () {
                this._stop(), (this.offset = 0), (this.rollbackStartOffset = 0);
                var t = this.direction,
                  n = this._animations;
                window.requestAnimationFrame(function () {
                  for (var e = 0; e < n.length; e++) n[e](0, t);
                });
              },
            },
            {
              key: "reachedToEnd",
              value: function () {
                return (
                  this.iterations > 0 &&
                  this.offset >= this.iterations * this.duration
                );
              },
            },
            {
              key: "restart",
              value: function () {
                this._stop(), (this.offset = 0), this._start();
              },
            },
            {
              key: "pause",
              value: function () {
                this._stop();
              },
            },
            {
              key: "reverse",
              value: function () {
                this.direction = -this.direction;
              },
            },
          ],
          [
            {
              key: "build",
              value: function (e, r) {
                return (
                  delete e.animationSettings,
                  (e.options = lt(e.options, e.root, "91c80d77")),
                  e.animations.map(function (t) {
                    var r = lt(t.s, e.root, "91c80d77");
                    for (var i in (delete t.s,
                    e.animationSettings || (e.animationSettings = n({}, r)),
                    r))
                      r.hasOwnProperty(i) && (t[i] = r[i]);
                  }),
                  (e = (function (t, n) {
                    if (
                      (($ = n), !t || !t.root || !Array.isArray(t.animations))
                    )
                      return null;
                    for (
                      var e = document.getElementsByTagName("svg"),
                        r = !1,
                        i = 0;
                      i < e.length;
                      i++
                    )
                      if (e[i].id === t.root && !e[i].svgatorAnimation) {
                        (r = e[i]).svgatorAnimation = !0;
                        break;
                      }
                    if (!r) return null;
                    var u = t.animations
                      .map(function (t) {
                        return it(r, t);
                      })
                      .filter(function (t) {
                        return !!t;
                      });
                    return u.length
                      ? {
                          element: r,
                          animations: u,
                          animationSettings: t.animationSettings,
                          options: t.options || void 0,
                        }
                      : null;
                  })(e, r))
                    ? {
                        el: e.element,
                        options: e.options || {},
                        player: new t(
                          e.animations,
                          e.animationSettings,
                          e.options
                        ),
                      }
                    : null
                );
              },
            },
            {
              key: "push",
              value: function (t) {
                return this.build(t);
              },
            },
            {
              key: "init",
              value: function () {
                var t = this,
                  n =
                    window.__SVGATOR_PLAYER__ &&
                    window.__SVGATOR_PLAYER__["91c80d77"];
                Array.isArray(n) &&
                  n.splice(0).forEach(function (n) {
                    return t.build(n);
                  });
              },
            },
          ]
        ),
        t
      );
    })();
    !(function () {
      for (
        var t = 0, n = ["ms", "moz", "webkit", "o"], e = 0;
        e < n.length && !window.requestAnimationFrame;
        ++e
      )
        (window.requestAnimationFrame = window[n[e] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[n[e] + "CancelAnimationFrame"] ||
            window[n[e] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
        ((window.requestAnimationFrame = function (n) {
          var e = Date.now(),
            r = Math.max(0, 16 - (e - t)),
            i = window.setTimeout(function () {
              n(e + r);
            }, r);
          return (t = e + r), i;
        }),
        (window.cancelAnimationFrame = window.clearTimeout));
    })();
    var ft = function (t, n) {
        var e = !1,
          r = null;
        return function (i) {
          e && clearTimeout(e),
            (e = setTimeout(function () {
              return (function () {
                for (
                  var i = 0,
                    u = window.innerHeight,
                    o = 0,
                    a = window.innerWidth,
                    l = t.parentNode;
                  l instanceof Element;

                ) {
                  var s = window.getComputedStyle(l);
                  if ("visible" !== s.overflowY || "visible" !== s.overflowX) {
                    var f = l.getBoundingClientRect();
                    "visible" !== s.overflowY &&
                      ((i = Math.max(i, f.top)), (u = Math.min(u, f.bottom))),
                      "visible" !== s.overflowX &&
                        ((o = Math.max(o, f.left)), (a = Math.min(a, f.right)));
                  }
                  if (l === l.parentNode) break;
                  l = l.parentNode;
                }
                e = !1;
                var c = t.getBoundingClientRect(),
                  h = Math.min(c.height, Math.max(0, i - c.top)),
                  v = Math.min(c.height, Math.max(0, c.bottom - u)),
                  d = Math.min(c.width, Math.max(0, o - c.left)),
                  y = Math.min(c.width, Math.max(0, c.right - a)),
                  g = (c.height - h - v) / c.height,
                  p = (c.width - d - y) / c.width,
                  m = Math.round(g * p * 100);
                (null !== r && r === m) || ((r = m), n(m));
              })();
            }, 100));
        };
      },
      ct = (function () {
        function t(n, e, i) {
          r(this, t),
            (e = Math.max(1, e || 1)),
            (e = Math.min(e, 100)),
            (this.el = n),
            (this.onTresholdChange = i && i.call ? i : function () {}),
            (this.tresholdPercent = e || 1),
            (this.currentVisibility = null),
            (this.visibilityCalculator = ft(
              n,
              this.onVisibilityUpdate.bind(this)
            )),
            this.bindScrollWatchers(),
            this.visibilityCalculator();
        }
        return (
          u(t, [
            {
              key: "bindScrollWatchers",
              value: function () {
                for (
                  var t = this.el.parentNode;
                  t &&
                  (t.addEventListener("scroll", this.visibilityCalculator),
                  t !== t.parentNode && t !== document);

                )
                  t = t.parentNode;
              },
            },
            {
              key: "onVisibilityUpdate",
              value: function (t) {
                var n = this.currentVisibility >= this.tresholdPercent,
                  e = t >= this.tresholdPercent;
                if (null === this.currentVisibility || n !== e)
                  return (
                    (this.currentVisibility = t), void this.onTresholdChange(e)
                  );
                this.currentVisibility = t;
              },
            },
          ]),
          t
        );
      })();
    function ht(t) {
      return g(t) + "";
    }
    function vt(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
      return t && t.length ? t.map(ht).join(n) : "";
    }
    function dt(t) {
      return ht(t.x) + "," + ht(t.y);
    }
    function yt(t) {
      return t
        ? null == t.a || t.a >= 1
          ? "rgb(" + t.r + "," + t.g + "," + t.b + ")"
          : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")"
        : "transparent";
    }
    function gt(t) {
      return t ? "url(#" + t + ")" : "none";
    }
    var pt = {
        f: null,
        i: V,
        u: function (t, n) {
          return function (e) {
            var r = n(e);
            t.setAttribute("rx", ht(r.x)), t.setAttribute("ry", ht(r.y));
          };
        },
      },
      mt = {
        f: null,
        i: function (t, n, e) {
          return 0 === t
            ? n
            : 1 === t
            ? e
            : {
                width: F(t, n.width, e.width),
                height: F(t, n.height, e.height),
              };
        },
        u: function (t, n) {
          return function (e) {
            var r = n(e);
            t.setAttribute("width", ht(r.width)),
              t.setAttribute("height", ht(r.height));
          };
        },
      };
    Object.freeze({
      M: 2,
      L: 2,
      Z: 0,
      H: 1,
      V: 1,
      C: 6,
      Q: 4,
      T: 2,
      S: 4,
      A: 7,
    });
    var bt = {},
      wt = null;
    function At(t) {
      var n = (function () {
        if (wt) return wt;
        if (
          "object" !==
            ("undefined" == typeof document ? "undefined" : e(document)) ||
          !document.createElementNS
        )
          return {};
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        return t && t.style
          ? ((t.style.position = "absolute"),
            (t.style.opacity = "0.01"),
            (t.style.zIndex = "-9999"),
            (t.style.left = "-9999px"),
            (t.style.width = "1px"),
            (t.style.height = "1px"),
            (wt = { svg: t }))
          : {};
      })().svg;
      if (!n)
        return function (t) {
          return null;
        };
      var r = document.createElementNS(n.namespaceURI, "path");
      r.setAttributeNS(null, "d", t),
        r.setAttributeNS(null, "fill", "none"),
        r.setAttributeNS(null, "stroke", "none"),
        n.appendChild(r);
      var i = r.getTotalLength();
      return function (t) {
        var n = r.getPointAtLength(i * t);
        return { x: n.x, y: n.y };
      };
    }
    function xt(t) {
      return bt[t] ? bt[t] : (bt[t] = At(t));
    }
    function kt(t, n, e, r) {
      if (!t || !r) return !1;
      var i = ["M", t.x, t.y];
      if (
        (n &&
          e &&
          (i.push("C"), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)),
        n ? !e : e)
      ) {
        var u = n || e;
        i.push("Q"), i.push(u.x), i.push(u.y);
      }
      return n || e || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
    }
    function _t(t, n, e, r) {
      var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        u = kt(t, n, e, r),
        o = xt(u);
      try {
        return o(i);
      } catch (t) {
        return null;
      }
    }
    function St(t, n, e, r) {
      var i = 1 - r;
      return i * i * t + 2 * i * r * n + r * r * e;
    }
    function Ot(t, n, e, r) {
      return 2 * (1 - r) * (n - t) + 2 * r * (e - n);
    }
    function Mt(t, n, e, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = _t(t, n, null, e, r);
      return (
        u || (u = { x: St(t.x, n.x, e.x, r), y: St(t.y, n.y, e.y, r) }),
        i && (u.a = Et(t, n, e, r)),
        u
      );
    }
    function Et(t, n, e, r) {
      return Math.atan2(Ot(t.y, n.y, e.y, r), Ot(t.x, n.x, e.x, r));
    }
    function jt(t, n, e, r, i) {
      var u = i * i;
      return (
        i * u * (r - t + 3 * (n - e)) +
        3 * u * (t + e - 2 * n) +
        3 * i * (n - t) +
        t
      );
    }
    function Pt(t, n, e, r, i) {
      var u = 1 - i;
      return 3 * (u * u * (n - t) + 2 * u * i * (e - n) + i * i * (r - e));
    }
    function It(t, n, e, r, i) {
      var u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        o = _t(t, n, e, r, i);
      return (
        o ||
          (o = {
            x: jt(t.x, n.x, e.x, r.x, i),
            y: jt(t.y, n.y, e.y, r.y, i),
          }),
        u && (o.a = Bt(t, n, e, r, i)),
        o
      );
    }
    function Bt(t, n, e, r, i) {
      return Math.atan2(Pt(t.y, n.y, e.y, r.y, i), Pt(t.x, n.x, e.x, r.x, i));
    }
    function Rt(t, n, e) {
      return t + (n - t) * e;
    }
    function Tt(t, n, e) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = { x: Rt(t.x, n.x, e), y: Rt(t.y, n.y, e) };
      return r && (i.a = Nt(t, n)), i;
    }
    function Nt(t, n) {
      return Math.atan2(n.y - t.y, n.x - t.x);
    }
    function Ct(t, n, e) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Lt(n)) {
        if (qt(e)) return Mt(n, e.start, e, t, r);
      } else if (Lt(e)) {
        if (n.end) return Mt(n, n.end, e, t, r);
      } else {
        if (n.end)
          return e.start
            ? It(n, n.end, e.start, e, t, r)
            : Mt(n, n.end, e, t, r);
        if (e.start) return Mt(n, e.start, e, t, r);
      }
      return Tt(n, e, t, r);
    }
    function Ft(t, n, e) {
      var r = Ct(t, n, e, !0);
      return (
        (r.a =
          (function (t) {
            return arguments.length > 1 &&
              void 0 !== arguments[1] &&
              arguments[1]
              ? t + Math.PI
              : t;
          })(r.a) / m),
        r
      );
    }
    function Lt(t) {
      return !t.type || "corner" === t.type;
    }
    function qt(t) {
      return null != t.start && !Lt(t);
    }
    var Vt = new T();
    var Dt = {
        f: function (t) {
          return t ? t.join(" ") : "";
        },
        i: function (t, n, r) {
          if (0 === t) return n;
          if (1 === t) return r;
          var i = n.length;
          if (i !== r.length) return N(t, n, r);
          for (var u, o = new Array(i), a = 0; a < i; a++) {
            if ((u = e(n[a])) !== e(r[a])) return N(t, n, r);
            if ("number" === u) o[a] = C(t, n[a], r[a]);
            else {
              if (n[a] !== r[a]) return N(t, n, r);
              o[a] = n[a];
            }
          }
          return o;
        },
      },
      zt = {
        f: null,
        i: Y,
        u: function (t, n) {
          return function (e) {
            var r = n(e);
            t.setAttribute("x1", ht(r[0])),
              t.setAttribute("y1", ht(r[1])),
              t.setAttribute("x2", ht(r[2])),
              t.setAttribute("y2", ht(r[3]));
          };
        },
      },
      Yt = { f: ht, i: C },
      Gt = { f: ht, i: L },
      Ut = {
        f: function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : " ";
          return (
            t &&
              t.length > 0 &&
              (t = t.map(function (t) {
                return g(t, 4);
              })),
            vt(t, n)
          );
        },
        i: function (t, n, e) {
          var r,
            i,
            u,
            o = n.length,
            a = e.length;
          if (o !== a)
            if (0 === o) n = G((o = a), 0);
            else if (0 === a) (a = o), (e = G(o, 0));
            else {
              var l =
                (u =
                  ((r = o) * (i = a)) /
                  (function (t, n) {
                    for (var e; n; ) (e = n), (n = t % n), (t = e);
                    return t || 1;
                  })(r, i)) < 0
                  ? -u
                  : u;
              (n = U(n, Math.floor(l / o))),
                (e = U(e, Math.floor(l / a))),
                (o = a = l);
            }
          for (var s = [], f = 0; f < o; f++) s.push(g(F(t, n[f], e[f])));
          return s;
        },
      };
    function $t(t, n, e) {
      return t.map(function (t) {
        return (function (t, n, e) {
          var r = t.v;
          if (!r || "g" !== r.t || r.s || !r.v || !r.r) return t;
          var i = e.getElementById(r.r),
            u = (i && i.querySelectorAll("stop")) || [];
          return (
            (r.s = r.v.map(function (t, n) {
              var e = u[n] && u[n].getAttribute("offset");
              return { c: t, o: (e = g(parseInt(e) / 100)) };
            })),
            delete r.v,
            t
          );
        })(t, 0, e);
      });
    }
    var Wt = {
      gt: "gradientTransform",
      c: { x: "cx", y: "cy" },
      rd: "r",
      f: { x: "x1", y: "y1" },
      to: { x: "x2", y: "y2" },
    };
    function Ht(t, n, r, i, u, o, a, l) {
      return (
        $t(t, 0, l),
        (n = (function (t, n, e) {
          for (var r, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
            (r = t[l]).e && (r.e = n(r.e)),
              r.v &&
                "g" === (i = r.v).t &&
                i.r &&
                (u = e.getElementById(i.r)) &&
                (a[i.r] = { e: u, s: u.querySelectorAll("stop") });
          return a;
        })(t, i, l)),
        function (i) {
          var u = r(i, t, Qt);
          if (!u) return "none";
          if ("c" === u.t) return yt(u.v);
          if ("g" === u.t) {
            if (!n[u.r]) return gt(u.r);
            var o = n[u.r];
            return (
              (function (t, n) {
                for (var e = t.s, r = e.length; r < n.length; r++) {
                  var i = e[e.length - 1].cloneNode();
                  (i.id = Zt(i.id)),
                    t.e.appendChild(i),
                    (e = t.s = t.e.querySelectorAll("stop"));
                }
                for (var u = 0, o = e.length, a = n.length - 1; u < o; u++)
                  e[u].setAttribute("stop-color", yt(n[Math.min(u, a)].c)),
                    e[u].setAttribute("offset", n[Math.min(u, a)].o);
              })(o, u.s),
              Object.keys(Wt).forEach(function (t) {
                if (void 0 !== u[t])
                  if ("object" !== e(Wt[t])) {
                    var n,
                      r =
                        "gt" === t
                          ? ((n = u[t]),
                            Array.isArray(n)
                              ? "matrix(" + n.join(" ") + ")"
                              : "")
                          : u[t],
                      i = Wt[t];
                    o.e.setAttribute(i, r);
                  } else
                    Object.keys(Wt[t]).forEach(function (n) {
                      if (void 0 !== u[t][n]) {
                        var e = u[t][n],
                          r = Wt[t][n];
                        o.e.setAttribute(r, e);
                      }
                    });
              }),
              gt(u.r)
            );
          }
          return "none";
        }
      );
    }
    function Qt(t, e, r) {
      if (0 === t) return e;
      if (1 === t) return r;
      if (e && r) {
        var i = e.t;
        if (i === r.t)
          switch (e.t) {
            case "c":
              return { t: i, v: z(t, e.v, r.v) };
            case "g":
              if (e.r === r.r) {
                var u = { t: i, s: Xt(t, e.s, r.s), r: e.r };
                return (
                  e.gt && r.gt && (u.gt = Y(t, e.gt, r.gt)),
                  e.c
                    ? ((u.c = q(t, e.c, r.c)), (u.rd = F(t, e.rd, r.rd)))
                    : e.f &&
                      ((u.f = q(t, e.f, r.f)), (u.to = q(t, e.to, r.to))),
                  u
                );
              }
          }
        if (("c" === e.t && "g" === r.t) || ("c" === r.t && "g" === e.t)) {
          var o = "c" === e.t ? e : r,
            a = "g" === e.t ? n({}, e) : n({}, r),
            l = a.s.map(function (t) {
              return { c: o.v, o: t.o };
            });
          return (a.s = "c" === e.t ? Xt(t, l, a.s) : Xt(t, a.s, l)), a;
        }
      }
      return N(t, e, r);
    }
    function Xt(t, n, e) {
      if (n.length === e.length)
        return n.map(function (n, r) {
          return Jt(t, n, e[r]);
        });
      for (var r = Math.max(n.length, e.length), i = [], u = 0; u < r; u++) {
        var o = Jt(
          t,
          n[Math.min(u, n.length - 1)],
          e[Math.min(u, e.length - 1)]
        );
        i.push(o);
      }
      return i;
    }
    function Jt(t, n, e) {
      return { o: L(t, n.o, e.o || 0), c: z(t, n.c, e.c || {}) };
    }
    function Zt(t) {
      return t.replace(/-fill-([0-9]+)$/, function (t, n) {
        return "-fill-" + (+n + 1);
      });
    }
    var Kt = {
      blur: V,
      brightness: F,
      contrast: F,
      "drop-shadow": function (t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : {
              blur: V(t, n.blur, e.blur),
              offset: q(t, n.offset, e.offset),
              color: z(t, n.color, e.color),
            };
      },
      grayscale: F,
      "hue-rotate": C,
      invert: F,
      opacity: F,
      saturate: F,
      sepia: F,
    };
    function tn(t, n, e) {
      if (0 === t) return n;
      if (1 === t) return e;
      var r = n.length;
      if (r !== e.length) return N(t, n, e);
      for (var i, u = [], o = 0; o < r; o++) {
        if (n[o].type !== e[o].type) return n;
        if (!(i = Kt[n[o].type])) return N(t, n, e);
        u.push({ type: n.type, value: i(t, n[o].value, e[o].value) });
      }
      return u;
    }
    var nn = {
      blur: function (t) {
        return t
          ? function (n) {
              t.setAttribute("stdDeviation", dt(n));
            }
          : null;
      },
      brightness: function (t, n, e) {
        return (t = rn(e, n))
          ? function (n) {
              (n = ht(n)),
                t.map(function (t) {
                  return t.setAttribute("slope", n);
                });
            }
          : null;
      },
      contrast: function (t, n, e) {
        return (t = rn(e, n))
          ? function (n) {
              var e = ht((1 - n) / 2);
              (n = ht(n)),
                t.map(function (t) {
                  t.setAttribute("slope", n), t.setAttribute("intercept", e);
                });
            }
          : null;
      },
      "drop-shadow": function (t, n, e) {
        var r = e.getElementById(n + "-blur");
        if (!r) return null;
        var i = e.getElementById(n + "-offset");
        if (!i) return null;
        var u = e.getElementById(n + "-flood");
        return u
          ? function (t) {
              r.setAttribute("stdDeviation", dt(t.blur)),
                i.setAttribute("dx", ht(t.offset.x)),
                i.setAttribute("dy", ht(t.offset.y)),
                u.setAttribute("flood-color", yt(t.color));
            }
          : null;
      },
      grayscale: function (t) {
        return t
          ? function (n) {
              t.setAttribute(
                "values",
                vt(
                  (function (t) {
                    return [
                      0.2126 + 0.7874 * (t = 1 - t),
                      0.7152 - 0.7152 * t,
                      0.0722 - 0.0722 * t,
                      0,
                      0,
                      0.2126 - 0.2126 * t,
                      0.7152 + 0.2848 * t,
                      0.0722 - 0.0722 * t,
                      0,
                      0,
                      0.2126 - 0.2126 * t,
                      0.7152 - 0.7152 * t,
                      0.0722 + 0.9278 * t,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                    ];
                  })(n)
                )
              );
            }
          : null;
      },
      "hue-rotate": function (t) {
        return t
          ? function (n) {
              return t.setAttribute("values", ht(n));
            }
          : null;
      },
      invert: function (t, n, e) {
        return (t = rn(e, n))
          ? function (n) {
              (n = ht(n) + " " + ht(1 - n)),
                t.map(function (t) {
                  return t.setAttribute("tableValues", n);
                });
            }
          : null;
      },
      opacity: function (t, n, e) {
        return (t = e.getElementById(n + "-A"))
          ? function (n) {
              return t.setAttribute("tableValues", "0 " + ht(n));
            }
          : null;
      },
      saturate: function (t) {
        return t
          ? function (n) {
              return t.setAttribute("values", ht(n));
            }
          : null;
      },
      sepia: function (t) {
        return t
          ? function (n) {
              return t.setAttribute(
                "values",
                vt(
                  (function (t) {
                    return [
                      0.393 + 0.607 * (t = 1 - t),
                      0.769 - 0.769 * t,
                      0.189 - 0.189 * t,
                      0,
                      0,
                      0.349 - 0.349 * t,
                      0.686 + 0.314 * t,
                      0.168 - 0.168 * t,
                      0,
                      0,
                      0.272 - 0.272 * t,
                      0.534 - 0.534 * t,
                      0.131 + 0.869 * t,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                    ];
                  })(n)
                )
              );
            }
          : null;
      },
    };
    var en = ["R", "G", "B"];
    function rn(t, n) {
      var e = en.map(function (e) {
        return t.getElementById(n + "-" + e) || null;
      });
      return -1 !== e.indexOf(null) ? null : e;
    }
    var un = {
        fill: Ht,
        "fill-opacity": Gt,
        stroke: Ht,
        "stroke-opacity": Gt,
        "stroke-width": Yt,
        "stroke-dashoffset": { f: ht, i: C },
        "stroke-dasharray": Ut,
        opacity: Gt,
        transform: function (t, n, r, i) {
          if (
            !(t = (function (t, n) {
              if (!t || "object" !== e(t)) return null;
              var r = !1;
              for (var i in t)
                t.hasOwnProperty(i) &&
                  (t[i] && t[i].length
                    ? (t[i].forEach(function (t) {
                        t.e && (t.e = n(t.e));
                      }),
                      (r = !0))
                    : delete t[i]);
              return r ? t : null;
            })(t, i))
          )
            return null;
          var u = function (e, i, u) {
            var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return t[e] ? r(i, t[e], u) : n && n[e] ? n[e] : o;
          };
          return n && n.a && t.o
            ? function (n) {
                var e = r(n, t.o, Ft);
                return Vt.recomposeSelf(
                  e,
                  u("r", n, C, 0) + e.a,
                  u("k", n, q),
                  u("s", n, q),
                  u("t", n, q)
                ).toString();
              }
            : function (t) {
                return Vt.recomposeSelf(
                  u("o", t, Ct, null),
                  u("r", t, C, 0),
                  u("k", t, q),
                  u("s", t, q),
                  u("t", t, q)
                ).toString();
              };
        },
        "#filter": function (t, n, e, r, i, u, o, a) {
          if (!n.items || !t || !t.length) return null;
          var l = (function (t, n) {
            var e = (t = t.map(function (t) {
              return t && nn[t[0]]
                ? (n.getElementById(t[1]),
                  nn[t[0]](n.getElementById(t[1]), t[1], n))
                : null;
            })).length;
            return function (n) {
              for (var r = 0; r < e; r++) t[r] && t[r](n[r].value);
            };
          })(n.items, a);
          return l
            ? ((t = (function (t, n) {
                return t.map(function (t) {
                  return (t.e = n(t.e)), t;
                });
              })(t, r)),
              function (n) {
                l(e(n, t, tn));
              })
            : null;
        },
        "#line": zt,
        points: { f: vt, i: Y },
        d: Dt,
        r: Yt,
        "#size": mt,
        "#radius": pt,
        _: function (t, n) {
          if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) this[t[e]] = n;
          else this[t] = n;
        },
      },
      on = (function (t) {
        !(function (t, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && l(t, n);
        })(o, t);
        var n,
          e,
          i =
            ((n = o),
            (e = s()),
            function () {
              var t,
                r = a(n);
              if (e) {
                var i = a(this).constructor;
                t = Reflect.construct(r, arguments, i);
              } else t = r.apply(this, arguments);
              return c(this, t);
            });
        function o() {
          return r(this, o), i.apply(this, arguments);
        }
        return (
          u(o, null, [
            {
              key: "build",
              value: function (t) {
                var n = h(a(o), "build", this).call(this, t, un);
                if (!n) return null;
                var e = n.el,
                  r = n.options,
                  i = n.player;
                return (
                  (function (t, n, e) {
                    if ("click" === e.start) {
                      var r = function () {
                        switch (e.click) {
                          case "freeze":
                            return (
                              !t._running && t.reachedToEnd() && (t.offset = 0),
                              t._running ? t.pause() : t.play()
                            );
                          case "restart":
                            return t.offset > 0 ? t.restart() : t.play();
                          case "reverse":
                            var n = !t._rollingBack && t._running,
                              r = t.reachedToEnd();
                            return n || (r && 1 === t.fill)
                              ? (t.pause(),
                                r && (t.offset = t.duration - 1),
                                t._rollback())
                              : r
                              ? t.restart()
                              : t.play();
                          case "none":
                          default:
                            return !t._running && t.offset
                              ? t.restart()
                              : t.play();
                        }
                      };
                      return void n.addEventListener("click", r);
                    }
                    if ("hover" === e.start)
                      return (
                        n.addEventListener("mouseenter", function () {
                          return t.reachedToEnd() ? t.restart() : t.play();
                        }),
                        void n.addEventListener("mouseleave", function () {
                          switch (e.hover) {
                            case "freeze":
                              return t.pause();
                            case "reset":
                              return t.stop();
                            case "reverse":
                              return t.pause(), t._rollback();
                            case "none":
                            default:
                              return;
                          }
                        })
                      );
                    if ("scroll" === e.start)
                      return void new ct(n, e.scroll || 25, function (n) {
                        n
                          ? t.reachedToEnd()
                            ? t.restart()
                            : t.play()
                          : t.pause();
                      });
                    t.play();
                  })(i, e, r),
                  i
                );
              },
            },
          ]),
          o
        );
      })(st);
    return on.init(), on;
  });
  (function (s, i, o, w) {
    w[o] = w[o] || {};
    w[o][s] = w[o][s] || [];
    w[o][s].push(i);
  })(
    "91c80d77",
    {
      root: "eMoTkPKHuG41",
      animations: [
        {
          elements: {
            eMoTkPKHuG414: {
              transform: {
                data: {
                  o: { x: 249.719259, y: 252.360512, type: "corner" },
                  t: { x: -251.071082, y: -247.877626 },
                },
                keys: {
                  r: [
                    { t: 0, v: 90 },
                    { t: 15000, v: 360 },
                  ],
                },
              },
            },
            eMoTkPKHuG421: {
              transform: {
                data: {
                  o: { x: 250, y: 250, type: "corner" },
                  t: { x: -250, y: -250 },
                },
                keys: {
                  r: [
                    { t: 0, v: 0 },
                    { t: 15000, v: 450 },
                  ],
                },
              },
            },
            eMoTkPKHuG428: {
              transform: {
                data: {
                  o: { x: 249.726008, y: 252.381503, type: "corner" },
                  t: { x: -251.071918, y: -247.855582 },
                },
                keys: {
                  r: [
                    { t: 0, v: 450 },
                    { t: 15000, v: 0 },
                  ],
                },
              },
            },
            eMoTkPKHuG435: {
              transform: {
                data: {
                  o: { x: 250, y: 250, type: "corner" },
                  t: { x: -250, y: -250 },
                },
                keys: {
                  r: [
                    { t: 0, v: 0 },
                    { t: 15000, v: 450 },
                  ],
                },
              },
            },
            eMoTkPKHuG442: {
              transform: {
                data: { t: { x: -110.510348, y: -387.079867 } },
                keys: {
                  o: [
                    {
                      t: 2000,
                      v: { x: 112.555557, y: 387.07987, type: "corner" },
                    },
                    {
                      t: 4100,
                      v: {
                        x: 143.315599,
                        y: 357.251314,
                        type: "cusp",
                        end: { x: 73.021056, y: 281.528526 },
                      },
                    },
                    {
                      t: 9100,
                      v: {
                        x: 156.582121,
                        y: 138.763264,
                        type: "cusp",
                        start: { x: 93.722755, y: 176.225515 },
                      },
                    },
                    {
                      t: 10700,
                      v: { x: 156.582121, y: 138.763264, type: "corner" },
                    },
                    {
                      t: 13200,
                      v: { x: 231.474019, y: 220.369845, type: "corner" },
                    },
                  ],
                  s: [
                    { t: 0, v: { x: 1, y: 1 } },
                    { t: 500, v: { x: 1.15, y: 1.15 } },
                    { t: 1000, v: { x: 1, y: 1 } },
                    { t: 1500, v: { x: 1, y: 1 } },
                    { t: 2000, v: { x: 1.15, y: 1.15 } },
                    { t: 2500, v: { x: 1, y: 1 } },
                    { t: 7100, v: { x: 1, y: 1 } },
                    { t: 7600, v: { x: 1.15, y: 1.15 } },
                    { t: 8100, v: { x: 1, y: 1 } },
                    { t: 8600, v: { x: 1.15, y: 1.15 } },
                    { t: 9100, v: { x: 1, y: 1 } },
                    { t: 10600, v: { x: 1, y: 1 } },
                    { t: 11100, v: { x: 1.2, y: 1.2 } },
                    { t: 11600, v: { x: 1, y: 1 } },
                  ],
                },
              },
              opacity: [
                { t: 13100, v: 1 },
                { t: 13200, v: 0 },
              ],
            },
            eMoTkPKHuG445: {
              transform: {
                data: { t: { x: -245.416998, y: -50.654 } },
                keys: {
                  o: [
                    {
                      t: 1000,
                      v: {
                        x: 248.828751,
                        y: 51.187173,
                        type: "cusp",
                        end: { x: 182.869865, y: 46.460498 },
                      },
                    },
                    {
                      t: 7000,
                      v: {
                        x: 73.354457,
                        y: 158.461403,
                        type: "cusp",
                        start: { x: 96.563559, y: 102.005401 },
                      },
                    },
                    {
                      t: 8500,
                      v: {
                        x: 73.354457,
                        y: 158.461403,
                        type: "cusp",
                        end: { x: 95.283481, y: 103.20128 },
                      },
                    },
                    {
                      t: 15000,
                      v: {
                        x: 248.824017,
                        y: 51.389503,
                        type: "cusp",
                        start: { x: 180.781752, y: 47.039863 },
                      },
                    },
                  ],
                  s: [
                    { t: 0, v: { x: 1, y: 1 } },
                    { t: 600, v: { x: 1.2, y: 1.2 } },
                    { t: 1200, v: { x: 1, y: 1 } },
                    { t: 1900, v: { x: 1.25, y: 1.25 } },
                    { t: 2500, v: { x: 1, y: 1 } },
                    { t: 6800, v: { x: 1, y: 1 } },
                    { t: 7800, v: { x: 1.25, y: 1.25 } },
                    { t: 8700, v: { x: 1, y: 1 } },
                    { t: 14500, v: { x: 1, y: 1 } },
                    { t: 15000, v: { x: 1.15, y: 1.15 } },
                  ],
                },
              },
            },
            eMoTkPKHuG454: {
              transform: {
                data: { t: { x: -250.541991, y: -248.803999 } },
                keys: {
                  o: [
                    {
                      t: 0,
                      v: {
                        x: 164.1149,
                        y: 427.820001,
                        type: "cusp",
                        end: { x: 168.650479, y: 403.745749 },
                      },
                    },
                    {
                      t: 4000,
                      v: {
                        x: 249.2395,
                        y: 402.742671,
                        type: "cusp",
                        start: { x: 186.587596, y: 396.653872 },
                      },
                    },
                    {
                      t: 6000,
                      v: {
                        x: 376.868928,
                        y: 331.614401,
                        type: "cusp",
                        start: { x: 343.16947, y: 393.958659 },
                      },
                    },
                    {
                      t: 7500,
                      v: {
                        x: 376.868928,
                        y: 331.614401,
                        type: "cusp",
                        start: { x: 376.508652, y: 330.789682 },
                      },
                    },
                    {
                      t: 9000,
                      v: {
                        x: 251.423299,
                        y: 251.768454,
                        type: "cusp",
                        start: { x: 249.431261, y: 252.370021 },
                      },
                    },
                    {
                      t: 11000,
                      v: {
                        x: 251.423299,
                        y: 251.768454,
                        type: "cusp",
                        start: { x: 249.431261, y: 252.370021 },
                        end: { x: 185.524354, y: 282.720385 },
                      },
                    },
                    {
                      t: 15000,
                      v: {
                        x: 163.886041,
                        y: 426.509349,
                        type: "cusp",
                        start: { x: 155.942018, y: 335.389047 },
                      },
                    },
                  ],
                  s: [
                    { t: 3000, v: { x: 1, y: 1 } },
                    { t: 4000, v: { x: 1.2, y: 1.2 } },
                    { t: 4500, v: { x: 1, y: 1 } },
                    { t: 6000, v: { x: 1, y: 1 } },
                    { t: 6700, v: { x: 1.25, y: 1.25 } },
                    { t: 7500, v: { x: 1, y: 1 } },
                  ],
                },
              },
              opacity: [
                { t: 8600, v: 1 },
                { t: 8700, v: 0 },
                { t: 11900, v: 0 },
                { t: 12000, v: 1 },
              ],
            },
            eMoTkPKHuG484: {
              transform: {
                data: { r: 19.999985, t: { x: -374.792, y: -332.851884 } },
                keys: {
                  o: [
                    {
                      t: 0,
                      v: {
                        x: 249.309252,
                        y: 252.645301,
                        type: "cusp",
                        end: { x: 279.484346, y: 295.758229 },
                      },
                    },
                    {
                      t: 2000,
                      v: {
                        x: 432.781517,
                        y: 325.464239,
                        type: "cusp",
                        start: { x: 403.070221, y: 331.331144 },
                      },
                    },
                    {
                      t: 3000,
                      v: {
                        x: 432.781517,
                        y: 325.464239,
                        type: "cusp",
                        start: { x: 433.777363, y: 323.435022 },
                        end: { x: 468.124307, y: 247.766803 },
                      },
                    },
                    {
                      t: 10800,
                      v: {
                        x: 409.69697,
                        y: 130.072803,
                        type: "cusp",
                        start: { x: 441.572566, y: 165.603615 },
                      },
                    },
                    {
                      t: 11700,
                      v: {
                        x: 409.69697,
                        y: 130.072803,
                        type: "cusp",
                        start: { x: 411.742771, y: 128.755044 },
                        end: { x: 347.896883, y: 74.398387 },
                      },
                    },
                    {
                      t: 12800,
                      v: {
                        x: 250.891001,
                        y: 252.031502,
                        type: "cusp",
                        start: { x: 249.173841, y: 227.258748 },
                      },
                    },
                  ],
                  s: [
                    { t: 1700, v: { x: 1, y: 1 } },
                    { t: 2500, v: { x: 1.2, y: 1.2 } },
                    { t: 3300, v: { x: 1, y: 1 } },
                    { t: 10500, v: { x: 1, y: 1 } },
                    { t: 11300, v: { x: 1.25, y: 1.25 } },
                    { t: 12000, v: { x: 1, y: 1 } },
                    { t: 12800, v: { x: 1.25, y: 1.25 } },
                    { t: 13500, v: { x: 1, y: 1 } },
                  ],
                },
              },
              opacity: [
                { t: 300, v: 0 },
                { t: 400, v: 1 },
                { t: 12500, v: 1 },
                { t: 12600, v: 0 },
              ],
            },
            eMoTkPKHuG4152: {
              transform: {
                data: { t: { x: -16, y: -16.143442 } },
                keys: {
                  o: [
                    {
                      t: 1000,
                      v: {
                        x: 330.287777,
                        y: 431.804016,
                        type: "cusp",
                        end: { x: 343.050022, y: 427.63516 },
                      },
                    },
                    {
                      t: 7000,
                      v: {
                        x: 244.043532,
                        y: 251.006236,
                        type: "cusp",
                        start: { x: 243.959423, y: 252.108877 },
                        end: { x: 262.07092, y: 272.398131 },
                      },
                    },
                    {
                      t: 9000,
                      v: {
                        x: 135.518237,
                        y: 413.104824,
                        type: "cusp",
                        start: { x: 211.928259, y: 351.61632 },
                        end: { x: 210.876908, y: 466.701352 },
                      },
                    },
                    {
                      t: 15000,
                      v: {
                        x: 329.685822,
                        y: 432.762609,
                        type: "cusp",
                        start: { x: 297.668424, y: 451.62366 },
                      },
                    },
                  ],
                  s: [
                    { t: 0, v: { x: 1, y: 1 } },
                    { t: 1000, v: { x: 1.2, y: 1.2 } },
                    { t: 2000, v: { x: 1, y: 1 } },
                    { t: 8300, v: { x: 1, y: 1 } },
                    { t: 9000, v: { x: 1.25, y: 1.25 } },
                    { t: 9800, v: { x: 1, y: 1 } },
                  ],
                },
              },
              opacity: [
                { t: 5800, v: 1 },
                { t: 5900, v: 0 },
                { t: 7400, v: 0 },
                { t: 7500, v: 1 },
              ],
            },
            eMoTkPKHuG4171: {
              transform: {
                data: { t: { x: -1322.58373, y: -1378.747416 } },
                keys: {
                  o: [
                    {
                      t: 0,
                      v: {
                        x: 248.82875,
                        y: 152.6124,
                        type: "cusp",
                        end: { x: 326.628143, y: 138.916513 },
                      },
                    },
                    {
                      t: 5000,
                      v: {
                        x: 250.429556,
                        y: 252.489621,
                        type: "cusp",
                        start: { x: 427.146796, y: 313.43044 },
                      },
                    },
                    {
                      t: 7000,
                      v: {
                        x: 153.373672,
                        y: 279.76314,
                        type: "cusp",
                        start: { x: 155.355456, y: 279.81243 },
                        end: { x: 151.481595, y: 279.846968 },
                      },
                    },
                    {
                      t: 8500,
                      v: {
                        x: 119.354014,
                        y: 321.526105,
                        type: "cusp",
                        start: { x: 122.357025, y: 318.424979 },
                        end: { x: 141.131106, y: 367.782083 },
                      },
                    },
                    {
                      t: 13500,
                      v: {
                        x: 250.078022,
                        y: 404.569851,
                        type: "cusp",
                        start: { x: 176.157345, y: 394.570213 },
                      },
                    },
                    {
                      t: 15000,
                      v: {
                        x: 250.078022,
                        y: 252.789624,
                        type: "cusp",
                        start: { x: 248.222722, y: 252.989743 },
                      },
                    },
                  ],
                  s: [
                    { t: 7000, v: { x: 0.014976, y: 0.014976 } },
                    { t: 7800, v: { x: 0.02, y: 0.02 } },
                    { t: 8500, v: { x: 0.014976, y: 0.014976 } },
                    { t: 13000, v: { x: 0.014976, y: 0.014976 } },
                    { t: 13500, v: { x: 0.02, y: 0.02 } },
                    { t: 14000, v: { x: 0.014976, y: 0.014976 } },
                  ],
                },
              },
              opacity: [
                { t: 4000, v: 1 },
                { t: 4100, v: 0 },
                { t: 5900, v: 0 },
                { t: 6000, v: 1 },
                { t: 14400, v: 1 },
                { t: 14500, v: 0 },
              ],
            },
            eMoTkPKHuG4175: {
              transform: {
                data: { t: { x: -15.85, y: -16 } },
                keys: {
                  o: [
                    {
                      t: 0,
                      v: {
                        x: 249.429258,
                        y: 252.300512,
                        type: "cusp",
                        end: { x: 325.86509, y: 252.322198 },
                      },
                    },
                    {
                      t: 2000,
                      v: {
                        x: 396.048,
                        y: 115.7612,
                        type: "cusp",
                        start: { x: 416.976567, y: 224.729184 },
                      },
                    },
                    {
                      t: 4000,
                      v: {
                        x: 396.048,
                        y: 115.7612,
                        type: "cusp",
                        start: { x: 396.797588, y: 116.815515 },
                      },
                    },
                    {
                      t: 12000,
                      v: {
                        x: 295.733486,
                        y: 56.673173,
                        type: "cusp",
                        start: { x: 343.85981, y: 62.114222 },
                      },
                    },
                    {
                      t: 13000,
                      v: {
                        x: 295.733486,
                        y: 56.673173,
                        type: "cusp",
                        start: { x: 296.483077, y: 57.727488 },
                        end: { x: 296.716521, y: 57.686983 },
                      },
                    },
                    {
                      t: 14500,
                      v: {
                        x: 249.279265,
                        y: 252.911502,
                        type: "cusp",
                        start: { x: 251.266517, y: 255.930161 },
                      },
                    },
                  ],
                  s: [
                    { t: 1500, v: { x: 1, y: 1 } },
                    { t: 2200, v: { x: 1.2, y: 1.2 } },
                    { t: 3000, v: { x: 1, y: 1 } },
                    { t: 3700, v: { x: 1.2, y: 1.2 } },
                    { t: 4500, v: { x: 1, y: 1 } },
                    { t: 11500, v: { x: 1, y: 1 } },
                    { t: 12200, v: { x: 1.15, y: 1.15 } },
                    { t: 13100, v: { x: 1, y: 1 } },
                  ],
                },
              },
              opacity: [
                { t: 400, v: 0 },
                { t: 500, v: 1 },
                { t: 14100, v: 1 },
                { t: 14200, v: 0 },
              ],
            },
            eMoTkPKHuG4181: {
              transform: {
                data: { t: { x: -1000, y: -1000 } },
                keys: {
                  o: [
                    {
                      t: 1000,
                      v: {
                        x: 126.371758,
                        y: 174.253642,
                        type: "cusp",
                        end: { x: 155.746863, y: 123.758741 },
                      },
                    },
                    {
                      t: 6000,
                      v: {
                        x: 312.6731,
                        y: 117.8252,
                        type: "cusp",
                        start: { x: 234.252916, y: 84.879592 },
                      },
                    },
                    {
                      t: 8000,
                      v: {
                        x: 312.6731,
                        y: 117.8252,
                        type: "cusp",
                        start: { x: 311.459443, y: 116.464081 },
                        end: { x: 234.051022, y: 85.00245 },
                      },
                    },
                    {
                      t: 14000,
                      v: {
                        x: 127.623,
                        y: 173.317201,
                        type: "cusp",
                        start: { x: 156.077465, y: 122.534644 },
                      },
                    },
                  ],
                  s: [
                    { t: 0, v: { x: 0.015123, y: 0.015123 } },
                    { t: 600, v: { x: 0.018247, y: 0.018247 } },
                    { t: 1200, v: { x: 0.015123, y: 0.015123 } },
                    { t: 5900, v: { x: 0.015123, y: 0.015123 } },
                    { t: 6500, v: { x: 0.018247, y: 0.018247 } },
                    { t: 7000, v: { x: 0.015123, y: 0.015123 } },
                    { t: 7500, v: { x: 0.018247, y: 0.018247 } },
                    { t: 8200, v: { x: 0.015123, y: 0.015123 } },
                    { t: 13800, v: { x: 0.015123, y: 0.015123 } },
                    { t: 14400, v: { x: 0.018247, y: 0.018247 } },
                    { t: 15000, v: { x: 0.015123, y: 0.015123 } },
                  ],
                },
              },
            },
            eMoTkPKHuG4185: {
              transform: {
                data: { t: { x: -207.399994, y: -208.899994 } },
                keys: {
                  o: [
                    {
                      t: 0,
                      v: {
                        x: 249.779258,
                        y: 252.785511,
                        type: "cusp",
                        end: { x: 249.824066, y: 347.040657 },
                      },
                    },
                    {
                      t: 2000,
                      v: {
                        x: 70.746,
                        y: 339.052449,
                        type: "cusp",
                        start: { x: 157.046736, y: 327.187571 },
                      },
                    },
                    {
                      t: 10000,
                      v: {
                        x: 54.076409,
                        y: 204.194501,
                        type: "cusp",
                        start: { x: 43.868985, y: 267.781457 },
                      },
                    },
                    {
                      t: 11000,
                      v: {
                        x: 54.076409,
                        y: 204.194501,
                        type: "cusp",
                        start: { x: 56.151842, y: 204.61248 },
                      },
                    },
                    {
                      t: 14800,
                      v: {
                        x: 250.281007,
                        y: 252.911502,
                        type: "cusp",
                        start: { x: 250.724677, y: 253.001076 },
                      },
                    },
                  ],
                  s: [
                    { t: 1500, v: { x: 0.1, y: 0.1 } },
                    { t: 2000, v: { x: 0.12, y: 0.12 } },
                    { t: 2500, v: { x: 0.1, y: 0.1 } },
                    { t: 10000, v: { x: 0.1, y: 0.1 } },
                    { t: 10500, v: { x: 0.12, y: 0.12 } },
                    { t: 11000, v: { x: 0.1, y: 0.1 } },
                  ],
                },
              },
              opacity: [
                { t: 300, v: 0 },
                { t: 400, v: 1 },
                { t: 13900, v: 1 },
                { t: 14000, v: 0 },
              ],
            },
          },
          s: "MDDA1NGE2NGQ4ZGklhMDlkOGM5GZjk0OWE5OTRBkNjU1Y1k2MDBViNWI1YjU3QGjRkOGY5NEw5KZE85MDhlOWYR5NDlhOTk0ZDMY1UDVjNTc0ZKDk0OWY5MDlkBOGM5Zjk0OWEP5OTllNGQ2NTWViNTc0ZDkxUYTk0Rjk3OTc0TZDY1NWNBNTcB0ZDhjOTc5ZjBkwOWQ5OThjOFWY5MDRkNjU5JMThjOTc5ZTkQwNTdNNGQ5ZTBliOTA5MDhmTMTRkNjU1Y2E4F",
        },
      ],
      options: "MDTAxMDgyMjk3YITdiNjg3OTdiPMjk0MTI5NzMW3NjY4RzZiMjTk4NA|",
    },
    "__SVGATOR_PLAYER__",
    window
  );
};
export const dropsAnimation = () => {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var w = (c.width = window.innerWidth);
  var h = (c.height = window.innerHeight);
  var clearColor = "rgba(0, 0, 0, .1)";
  var max = 22;
  var drops = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function O() {}

  O.prototype = {
    init: function () {
      this.x = random(0, w);
      this.y = 0;
      this.color = "hsl(180, 100%, 50%)";
      this.w = 2;
      this.h = 1;
      this.vy = random(4, 5);
      this.vw = 3;
      this.vh = 1;
      this.size = 2;
      this.hit = random(h * 0.8, h * 0.9);
      this.a = 1;
      this.va = 0.96;
    },
    draw: function () {
      if (this.y > this.hit) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.h / 2);

        ctx.bezierCurveTo(
          this.x + this.w / 2,
          this.y - this.h / 2,
          this.x + this.w / 2,
          this.y + this.h / 2,
          this.x,
          this.y + this.h / 2
        );

        ctx.bezierCurveTo(
          this.x - this.w / 2,
          this.y + this.h / 2,
          this.x - this.w / 2,
          this.y - this.h / 2,
          this.x,
          this.y - this.h / 2
        );

        ctx.strokeStyle = "hsla(180, 100%, 50%, " + this.a + ")";
        ctx.stroke();
        ctx.closePath();
      } else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size * 5);
      }
      this.update();
    },
    update: function () {
      if (this.y < this.hit) {
        this.y += this.vy;
      } else {
        if (this.a > 0.03) {
          this.w += this.vw;
          this.h += this.vh;
          if (this.w > 100) {
            this.a *= this.va;
            this.vw *= 0.98;
            this.vh *= 0.98;
          }
        } else {
          this.init();
        }
      }
    },
  };

  function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  }

  function setup() {
    for (var i = 0; i < max; i++) {
      (function (j) {
        setTimeout(function () {
          var o = new O();
          o.init();
          drops.push(o);
        }, j * 200);
      })(i);
    }
  }

  function anim() {
    ctx.fillStyle = clearColor;
    ctx.fillRect(0, 0, w, h);
    for (var i in drops) {
      drops[i].draw();
    }
    requestAnimationFrame(anim);
  }

  window.addEventListener("resize", resize);

  setup();
  anim();
};
