const Dn = Object.defineProperty;
const Hn = (t, e, n) =>
  e in t
    ? Dn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
const lt = (t, e, n) => (Hn(t, typeof e !== 'symbol' ? `${e}` : e, n), n);
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function I() {}
const Ye = (t) => t;
function qn(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function Nn(t) {
  return (
    !!t &&
    (typeof t === 'object' || typeof t === 'function') &&
    typeof t.then === 'function'
  );
}
function jt(t) {
  return t();
}
function Bt() {
  return Object.create(null);
}
function ee(t) {
  t.forEach(jt);
}
function Fe(t) {
  return typeof t === 'function';
}
function A(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t === 'object') || typeof t === 'function';
}
let qe;
function Ae(t, e) {
  return t === e
    ? !0
    : (qe || (qe = document.createElement('a')), (qe.href = e), t === qe.href);
}
function Xn(t) {
  return Object.keys(t).length === 0;
}
function An(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return I;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ie(t, e, n) {
  t.$$.on_destroy.push(An(e, n));
}
function dt(t, e, n, i) {
  if (t) {
    const r = Lt(t, e, n, i);
    return t[0](r);
  }
}
function Lt(t, e, n, i) {
  return t[1] && i ? qn(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function gt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r === 'object') {
      const o = [];
      const l = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < l; s += 1) o[s] = e.dirty[s] | r[s];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function ht(t, e, n, i, r, o) {
  if (r) {
    const l = Lt(e, n, i, o);
    t.p(l, r);
  }
}
function mt(t) {
  if (t.ctx.length > 32) {
    const e = [];
    const n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function $(t, e, n) {
  return t.set(n), e;
}
const Ut = typeof window < 'u';
const _t = Ut ? () => window.performance.now() : () => Date.now();
const Ze = Ut ? (t) => requestAnimationFrame(t) : I;
const we = new Set();
function Wt(t) {
  we.forEach((e) => {
    e.c(t) || (we.delete(e), e.f());
  }),
    we.size !== 0 && Ze(Wt);
}
function bt(t) {
  let e;
  return (
    we.size === 0 && Ze(Wt),
    {
      promise: new Promise((n) => {
        we.add((e = { c: t, f: n }));
      }),
      abort() {
        we.delete(e);
      },
    }
  );
}
function P(t, e) {
  t.appendChild(e);
}
function Kt(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function jn(t) {
  const e = T('style');
  return (e.textContent = '/* empty */'), Ln(Kt(t), e), e.sheet;
}
function Ln(t, e) {
  return P(t.head || t, e), e.sheet;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function V(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Jt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function T(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function xe(t) {
  return document.createTextNode(t);
}
function K() {
  return xe(' ');
}
function $e() {
  return xe('');
}
function R(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function d(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function st(t) {
  const e = [];
  for (let n = 0; n < t.length; n += 1)
    e.push({ start: t.start(n), end: t.end(n) });
  return e;
}
function Un(t) {
  return Array.from(t.childNodes);
}
function Gt(t, e) {
  (e = `${e}`), t.data !== e && (t.data = e);
}
function v(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? 'important' : '');
}
let Ne;
function Wn() {
  if (Ne === void 0) {
    Ne = !1;
    try {
      typeof window < 'u' && window.parent && window.parent.document;
    } catch {
      Ne = !0;
    }
  }
  return Ne;
}
function Qt(t, e) {
  getComputedStyle(t).position === 'static' && (t.style.position = 'relative');
  const i = T('iframe');
  i.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;',
  ),
    i.setAttribute('aria-hidden', 'true'),
    (i.tabIndex = -1);
  const r = Wn();
  let o;
  return (
    r
      ? ((i.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (o = R(window, 'message', (l) => {
          l.source === i.contentWindow && e();
        })))
      : ((i.src = 'about:blank'),
        (i.onload = () => {
          (o = R(i.contentWindow, 'resize', e)), e();
        })),
    P(t, i),
    () => {
      (r || (o && i.contentWindow)) && o(), V(i);
    }
  );
}
function je(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Yt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
const Le = new Map();
let Ue = 0;
function Kn(t) {
  let e = 5381;
  let n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Jn(t, e) {
  const n = { stylesheet: jn(e), rules: {} };
  return Le.set(t, n), n;
}
function We(t, e, n, i, r, o, l, s = 0) {
  const u = 16.666 / i;
  let f = `{
`;
  for (let h = 0; h <= 1; h += u) {
    const z = e + (n - e) * o(h);
    f += `${h * 100}%{${l(z, 1 - z)}}
`;
  }
  const c = `${f}100% {${l(n, 1 - n)}}
}`;
  const a = `__svelte_${Kn(c)}_${s}`;
  const _ = Kt(t);
  const { stylesheet: g, rules: m } = Le.get(_) || Jn(_, t);
  m[a] ||
    ((m[a] = !0), g.insertRule(`@keyframes ${a} ${c}`, g.cssRules.length));
  const w = t.style.animation || '';
  return (
    (t.style.animation = `${
      w ? `${w}, ` : ''
    }${a} ${i}ms linear ${r}ms 1 both`),
    (Ue += 1),
    a
  );
}
function Ke(t, e) {
  const n = (t.style.animation || '').split(', ');
  const i = n.filter(
    e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf('__svelte') === -1,
  );
  const r = n.length - i.length;
  r && ((t.style.animation = i.join(', ')), (Ue -= r), Ue || Gn());
}
function Gn() {
  Ze(() => {
    Ue ||
      (Le.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && V(e);
      }),
      Le.clear());
  });
}
let Be;
function ce(t) {
  Be = t;
}
function Ee() {
  if (!Be) throw new Error('Function called outside component initialization');
  return Be;
}
function pt(t) {
  Ee().$$.on_destroy.push(t);
}
function Zt() {
  const t = Ee();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Yt(e, n, { cancelable: i });
      return (
        r.slice().forEach((l) => {
          l.call(t, o);
        }),
        !o.defaultPrevented
      );
    }
    return !0;
  };
}
function Qn(t, e) {
  return Ee().$$.context.set(t, e), e;
}
function se(t) {
  return Ee().$$.context.get(t);
}
function vt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const ve = [];
const Z = [];
let ke = [];
const ft = [];
const Yn = Promise.resolve();
let ct = !1;
function Zn() {
  ct || ((ct = !0), Yn.then(wt));
}
function Y(t) {
  ke.push(t);
}
function re(t) {
  ft.push(t);
}
const ut = new Set();
let _e = 0;
function wt() {
  if (_e !== 0) return;
  const t = Be;
  do {
    try {
      for (; _e < ve.length; ) {
        const e = ve[_e];
        _e++, ce(e), xn(e.$$);
      }
    } catch (e) {
      throw ((ve.length = 0), (_e = 0), e);
    }
    for (ce(null), ve.length = 0, _e = 0; Z.length; ) Z.pop()();
    for (let e = 0; e < ke.length; e += 1) {
      const n = ke[e];
      ut.has(n) || (ut.add(n), n());
    }
    ke.length = 0;
  } while (ve.length);
  for (; ft.length; ) ft.pop()();
  (ct = !1), ut.clear(), ce(t);
}
function xn(t) {
  if (t.fragment !== null) {
    t.update(), ee(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(Y);
  }
}
function $n(t) {
  const e = [];
  const n = [];
  ke.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (ke = e);
}
let Pe;
function kt() {
  return (
    Pe ||
      ((Pe = Promise.resolve()),
      Pe.then(() => {
        Pe = null;
      })),
    Pe
  );
}
function ge(t, e, n) {
  t.dispatchEvent(Yt(`${e ? 'intro' : 'outro'}${n}`));
}
const Xe = new Set();
let oe;
function he() {
  oe = { r: 0, c: [], p: oe };
}
function me() {
  oe.r || ee(oe.c), (oe = oe.p);
}
function S(t, e) {
  t && t.i && (Xe.delete(t), t.i(e));
}
function E(t, e, n, i) {
  if (t && t.o) {
    if (Xe.has(t)) return;
    Xe.add(t),
      oe.c.push(() => {
        Xe.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const yt = { duration: 0 };
function ei(t, e, n) {
  const i = { direction: 'in' };
  let r = e(t, n, i);
  let o = !1;
  let l;
  let s;
  let u = 0;
  function f() {
    l && Ke(t, l);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: g = 300,
      easing: m = Ye,
      tick: w = I,
      css: h,
    } = r || yt;
    h && (l = We(t, 0, 1, g, _, m, h, u++)), w(0, 1);
    const z = _t() + _;
    const k = z + g;
    s && s.abort(),
      (o = !0),
      Y(() => ge(t, !0, 'start')),
      (s = bt((C) => {
        if (o) {
          if (C >= k) return w(1, 0), ge(t, !0, 'end'), f(), (o = !1);
          if (C >= z) {
            const B = m((C - z) / g);
            w(B, 1 - B);
          }
        }
        return o;
      }));
  }
  let a = !1;
  return {
    start() {
      a || ((a = !0), Ke(t), Fe(r) ? ((r = r(i)), kt().then(c)) : c());
    },
    invalidate() {
      a = !1;
    },
    end() {
      o && (f(), (o = !1));
    },
  };
}
function ti(t, e, n) {
  const i = { direction: 'out' };
  let r = e(t, n, i);
  let o = !0;
  let l;
  const s = oe;
  s.r += 1;
  let u;
  function f() {
    const {
      delay: c = 0,
      duration: a = 300,
      easing: _ = Ye,
      tick: g = I,
      css: m,
    } = r || yt;
    m && (l = We(t, 1, 0, a, c, _, m));
    const w = _t() + c;
    const h = w + a;
    Y(() => ge(t, !1, 'start')),
      'inert' in t && ((u = t.inert), (t.inert = !0)),
      bt((z) => {
        if (o) {
          if (z >= h) return g(0, 1), ge(t, !1, 'end'), --s.r || ee(s.c), !1;
          if (z >= w) {
            const k = _((z - w) / a);
            g(1 - k, k);
          }
        }
        return o;
      });
  }
  return (
    Fe(r)
      ? kt().then(() => {
          (r = r(i)), f();
        })
      : f(),
    {
      end(c) {
        c && 'inert' in t && (t.inert = u),
          c && r.tick && r.tick(1, 0),
          o && (l && Ke(t, l), (o = !1));
      },
    }
  );
}
function Ft(t, e, n, i) {
  let o = e(t, n, { direction: 'both' });
  let l = i ? 0 : 1;
  let s = null;
  let u = null;
  let f = null;
  let c;
  function a() {
    f && Ke(t, f);
  }
  function _(m, w) {
    const h = m.b - l;
    return (
      (w *= Math.abs(h)),
      {
        a: l,
        b: m.b,
        d: h,
        duration: w,
        start: m.start,
        end: m.start + w,
        group: m.group,
      }
    );
  }
  function g(m) {
    const {
      delay: w = 0,
      duration: h = 300,
      easing: z = Ye,
      tick: k = I,
      css: C,
    } = o || yt;
    const B = { start: _t() + w, b: m };
    m || ((B.group = oe), (oe.r += 1)),
      'inert' in t &&
        (m ? c !== void 0 && (t.inert = c) : ((c = t.inert), (t.inert = !0))),
      s || u
        ? (u = B)
        : (C && (a(), (f = We(t, l, m, h, w, z, C))),
          m && k(0, 1),
          (s = _(B, h)),
          Y(() => ge(t, m, 'start')),
          bt((U) => {
            if (
              (u &&
                U > u.start &&
                ((s = _(u, h)),
                (u = null),
                ge(t, s.b, 'start'),
                C && (a(), (f = We(t, l, s.b, s.duration, 0, z, o.css)))),
              s)
            ) {
              if (U >= s.end)
                k((l = s.b), 1 - l),
                  ge(t, s.b, 'end'),
                  u || (s.b ? a() : --s.group.r || ee(s.group.c)),
                  (s = null);
              else if (U >= s.start) {
                const X = U - s.start;
                (l = s.a + s.d * z(X / s.duration)), k(l, 1 - l);
              }
            }
            return !!(s || u);
          }));
  }
  return {
    run(m) {
      Fe(o)
        ? kt().then(() => {
            (o = o({ direction: m ? 'in' : 'out' })), g(m);
          })
        : g(m);
    },
    end() {
      a(), (s = u = null);
    },
  };
}
function Et(t, e) {
  const n = (e.token = {});
  function i(r, o, l, s) {
    if (e.token !== n) return;
    e.resolved = s;
    let u = e.ctx;
    l !== void 0 && ((u = u.slice()), (u[l] = s));
    const f = r && (e.current = r)(u);
    let c = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((a, _) => {
            _ !== o &&
              a &&
              (he(),
              E(a, 1, 1, () => {
                e.blocks[_] === a && (e.blocks[_] = null);
              }),
              me());
          })
        : e.block.d(1),
      f.c(),
      S(f, 1),
      f.m(e.mount(), e.anchor),
      (c = !0)),
      (e.block = f),
      e.blocks && (e.blocks[o] = f),
      c && wt();
  }
  if (Nn(t)) {
    const r = Ee();
    if (
      (t.then(
        (o) => {
          ce(r), i(e.then, 1, e.value, o), ce(null);
        },
        (o) => {
          if ((ce(r), i(e.catch, 2, e.error, o), ce(null), !e.hasCatch))
            throw o;
        },
      ),
      e.current !== e.pending)
    )
      return i(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return i(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ni(t, e, n) {
  const i = e.slice();
  const { resolved: r } = t;
  t.current === t.then && (i[t.value] = r),
    t.current === t.catch && (i[t.error] = r),
    t.block.p(i, n);
}
function Je(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function le(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function q(t) {
  t && t.c();
}
function D(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n),
    Y(() => {
      const o = t.$$.on_mount.map(jt).filter(Fe);
      t.$$.on_destroy ? t.$$.on_destroy.push(...o) : ee(o),
        (t.$$.on_mount = []);
    }),
    r.forEach(Y);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    ($n(n.after_update),
    ee(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ii(t, e) {
  t.$$.dirty[0] === -1 && (ve.push(t), Zn(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function j(t, e, n, i, r, o, l = null, s = [-1]) {
  const u = Be;
  ce(t);
  const f = (t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: I,
    not_equal: r,
    bound: Bt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: Bt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root,
  });
  l && l(f.root);
  let c = !1;
  if (
    ((f.ctx = n
      ? n(t, e.props || {}, (a, _, ...g) => {
          const m = g.length ? g[0] : _;
          return (
            f.ctx &&
              r(f.ctx[a], (f.ctx[a] = m)) &&
              (!f.skip_bound && f.bound[a] && f.bound[a](m), c && ii(t, a)),
            _
          );
        })
      : []),
    f.update(),
    (c = !0),
    ee(f.before_update),
    (f.fragment = i ? i(f.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const a = Un(e.target);
      f.fragment && f.fragment.l(a), a.forEach(V);
    } else f.fragment && f.fragment.c();
    e.intro && S(t.$$.fragment), D(t, e.target, e.anchor), wt();
  }
  ce(u);
}
class L {
  constructor() {
    lt(this, '$$');
    lt(this, '$$set');
  }

  $destroy() {
    H(this, 1), (this.$destroy = I);
  }

  $on(e, n) {
    if (!Fe(n)) return I;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }

  $set(e) {
    this.$$set &&
      !Xn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const ri = '4';
typeof window < 'u' &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ri);
const be = [];
function oi(t, e = I) {
  let n;
  const i = new Set();
  function r(s) {
    if (A(t, s) && ((t = s), n)) {
      const u = !be.length;
      for (const f of i) f[1](), be.push(f, t);
      if (u) {
        for (let f = 0; f < be.length; f += 2) be[f][0](be[f + 1]);
        be.length = 0;
      }
    }
  }
  function o(s) {
    r(s(t));
  }
  function l(s, u = I) {
    const f = [s, u];
    return (
      i.add(f),
      i.size === 1 && (n = e(r, o) || I),
      s(t),
      () => {
        i.delete(f), i.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: r, update: o, subscribe: l };
}
function zt(t) {
  const e = { mp4: 'video/mp4', ogv: 'video/ogg', webm: 'video/webm' };
  const n = (t.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
  if (n in e) return e[n];
}
function li(t) {
  let e;
  if (!t) e = [];
  else if (t instanceof Array)
    e = t
      .map((n) => {
        const i = zt(n);
        return typeof i > 'u' ? { src: n } : { src: n, type: i };
      })
      .filter((n) => n);
  else {
    const n = zt(t);
    e = typeof n > 'u' ? [{ src: t }] : [{ src: t, type: n }];
  }
  return e;
}
function si() {
  let t = (Math.random() * 46656) | 0;
  let e = (Math.random() * 46656) | 0;
  return (
    (t = `000${t.toString(36)}`.slice(-3)),
    (e = `000${e.toString(36)}`.slice(-3)),
    t + e
  );
}
async function Tt(t) {
  return new Promise((e, n) => {
    if (t) {
      const i = new Image();
      i.addEventListener(
        'load',
        () => {
          e(i);
        },
        { once: !0 },
      ),
        i.addEventListener(
          'error',
          () => {
            e();
          },
          { once: !0 },
        ),
        (i.src = t);
    } else e();
  });
}
function ui(t) {
  let e;
  let n;
  return {
    c() {
      (e = T('img')),
        Ae(e.src, (n = t[0])) || d(e, 'src', n),
        d(e, 'class', 'poster svelte-fde6bj'),
        d(e, 'alt', 'poster'),
        d(e, 'onerror', "this.style.display='none'");
    },
    m(i, r) {
      M(i, e, r);
    },
    p(i, [r]) {
      r & 1 && !Ae(e.src, (n = i[0])) && d(e, 'src', n);
    },
    i: I,
    o: I,
    d(i) {
      i && V(e);
    },
  };
}
function fi(t, e, n) {
  let { src: i } = e;
  return (
    (t.$$set = (r) => {
      'src' in r && n(0, (i = r.src));
    }),
    [i]
  );
}
class ci extends L {
  constructor(e) {
    super(), j(this, e, fi, ui, A, { src: 0 });
  }
}
function ai(t) {
  let e;
  let n;
  const i = t[1].default;
  const r = dt(i, t, t[0], null);
  return {
    c() {
      (e = T('div')), r && r.c(), d(e, 'class', 'overlay svelte-h6eqmh');
    },
    m(o, l) {
      M(o, e, l), r && r.m(e, null), (n = !0);
    },
    p(o, [l]) {
      r &&
        r.p &&
        (!n || l & 1) &&
        ht(r, i, o, o[0], n ? gt(i, o[0], l, null) : mt(o[0]), null);
    },
    i(o) {
      n || (S(r, o), (n = !0));
    },
    o(o) {
      E(r, o), (n = !1);
    },
    d(o) {
      o && V(e), r && r.d(o);
    },
  };
}
function di(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return (
    (t.$$set = (o) => {
      '$$scope' in o && n(0, (r = o.$$scope));
    }),
    [r, i]
  );
}
class gi extends L {
  constructor(e) {
    super(), j(this, e, di, ai, A, {});
  }
}
function Ge(t, { delay: e = 0, duration: n = 400, easing: i = Ye } = {}) {
  const r = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: i, css: (o) => `opacity: ${o * r}` };
}
function hi(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  return {
    c() {
      (e = T('div')),
        (n = W('svg')),
        (i = W('path')),
        (l = W('path')),
        d(i, 'visibility', (r = t[2] ? 'hidden' : 'visible')),
        d(i, 'd', 'M40 29v42M60 29v42'),
        d(i, 'stroke', (o = t[3].iconColor)),
        d(i, 'stroke-width', '5'),
        d(l, 'visibility', (s = t[2] ? 'visible' : 'hidden')),
        d(l, 'd', 'M40 29v42l26-21-26-21z'),
        d(l, 'fill', (u = t[1] ? t[3].iconColor : 'none')),
        d(l, 'stroke', (f = t[3].iconColor)),
        d(l, 'stroke-width', '5'),
        d(n, 'viewBox', '0 0 100 100'),
        d(n, 'width', '100%'),
        d(n, 'stroke-linecap', 'round'),
        d(n, 'stroke-linejoin', 'round'),
        d(e, 'class', 'play-pause-icon svelte-1na3hbp'),
        v(e, 'width', t[0]);
    },
    m(c, a) {
      M(c, e, a), P(e, n), P(n, i), P(n, l);
    },
    p(c, [a]) {
      a & 4 && r !== (r = c[2] ? 'hidden' : 'visible') && d(i, 'visibility', r),
        a & 8 && o !== (o = c[3].iconColor) && d(i, 'stroke', o),
        a & 4 &&
          s !== (s = c[2] ? 'visible' : 'hidden') &&
          d(l, 'visibility', s),
        a & 10 && u !== (u = c[1] ? c[3].iconColor : 'none') && d(l, 'fill', u),
        a & 8 && f !== (f = c[3].iconColor) && d(l, 'stroke', f),
        a & 1 && v(e, 'width', c[0]);
    },
    i: I,
    o: I,
    d(c) {
      c && V(e);
    },
  };
}
function mi(t, e, n) {
  let i;
  let { size: r = '100%' } = e;
  let { filled: o = !1 } = e;
  let { paused: l } = e;
  const s = se('config');
  return (
    ie(t, s, (u) => n(3, (i = u))),
    (t.$$set = (u) => {
      'size' in u && n(0, (r = u.size)),
        'filled' in u && n(1, (o = u.filled)),
        'paused' in u && n(2, (l = u.paused));
    }),
    [r, o, l, i, s]
  );
}
class xt extends L {
  constructor(e) {
    super(), j(this, e, mi, hi, A, { size: 0, filled: 1, paused: 2 });
  }
}
function Vt(t) {
  let e;
  let n;
  let i;
  let r;
  return (
    (n = new xt({ props: { paused: !0 } })),
    {
      c() {
        (e = T('div')),
          q(n.$$.fragment),
          d(e, 'class', 'player-icon svelte-1yuiuyr'),
          v(e, 'background-color', t[1].color),
          v(e, 'border-color', t[1].focusColor);
      },
      m(o, l) {
        M(o, e, l), D(n, e, null), (r = !0);
      },
      p(o, l) {
        (!r || l & 2) && v(e, 'background-color', o[1].color),
          (!r || l & 2) && v(e, 'border-color', o[1].focusColor);
      },
      i(o) {
        r ||
          (S(n.$$.fragment, o),
          o &&
            Y(() => {
              r && (i || (i = Ft(e, Ge, { duration: 500 }, !0)), i.run(1));
            }),
          (r = !0));
      },
      o(o) {
        E(n.$$.fragment, o),
          o && (i || (i = Ft(e, Ge, { duration: 500 }, !1)), i.run(0)),
          (r = !1);
      },
      d(o) {
        o && V(e), H(n), o && i && i.end();
      },
    }
  );
}
function _i(t) {
  let e;
  let n;
  let i = !t[0] && Vt(t);
  return {
    c() {
      i && i.c(), (e = $e());
    },
    m(r, o) {
      i && i.m(r, o), M(r, e, o), (n = !0);
    },
    p(r, [o]) {
      r[0]
        ? i &&
          (he(),
          E(i, 1, 1, () => {
            i = null;
          }),
          me())
        : i
        ? (i.p(r, o), o & 1 && S(i, 1))
        : ((i = Vt(r)), i.c(), S(i, 1), i.m(e.parentNode, e));
    },
    i(r) {
      n || (S(i), (n = !0));
    },
    o(r) {
      E(i), (n = !1);
    },
    d(r) {
      r && V(e), i && i.d(r);
    },
  };
}
function bi(t, e, n) {
  let i;
  let { hidden: r } = e;
  const o = se('config');
  return (
    ie(t, o, (l) => n(1, (i = l))),
    (t.$$set = (l) => {
      'hidden' in l && n(0, (r = l.hidden));
    }),
    [r, i, o]
  );
}
class pi extends L {
  constructor(e) {
    super(), j(this, e, bi, _i, A, { hidden: 0 });
  }
}
function It(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  return {
    c() {
      (e = T('div')),
        (n = T('div')),
        (i = K()),
        (r = T('div')),
        d(n, 'class', 'circle bg svelte-1q5dh4a'),
        v(n, 'border-color', t[1]),
        d(r, 'class', 'circle rotating svelte-1q5dh4a'),
        v(r, 'border-color', `${t[1]} ${t[1]} transparent transparent`),
        d(e, 'class', 'spinner svelte-1q5dh4a'),
        v(e, 'width', t[0]),
        v(e, 'height', t[0]);
    },
    m(u, f) {
      M(u, e, f), P(e, n), P(e, i), P(e, r), (s = !0);
    },
    p(u, f) {
      (!s || f & 2) && v(n, 'border-color', u[1]),
        (!s || f & 2) &&
          v(r, 'border-color', `${u[1]} ${u[1]} transparent transparent`),
        (!s || f & 1) && v(e, 'width', u[0]),
        (!s || f & 1) && v(e, 'height', u[0]);
    },
    i(u) {
      s ||
        (u &&
          Y(() => {
            s &&
              (l && l.end(1),
              (o = ei(e, Ge, { delay: 500, duration: 500 })),
              o.start());
          }),
        (s = !0));
    },
    o(u) {
      o && o.invalidate(), u && (l = ti(e, Ge, { duration: 100 })), (s = !1);
    },
    d(u) {
      u && V(e), u && l && l.end();
    },
  };
}
function vi(t) {
  let e;
  let n = !t[2] && It(t);
  return {
    c() {
      n && n.c(), (e = $e());
    },
    m(i, r) {
      n && n.m(i, r), M(i, e, r);
    },
    p(i, [r]) {
      i[2]
        ? n &&
          (he(),
          E(n, 1, 1, () => {
            n = null;
          }),
          me())
        : n
        ? (n.p(i, r), r & 4 && S(n, 1))
        : ((n = It(i)), n.c(), S(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      S(n);
    },
    o(i) {
      E(n);
    },
    d(i) {
      i && V(e), n && n.d(i);
    },
  };
}
function wi(t, e, n) {
  let { size: i = '60px' } = e;
  let { color: r = '#FFF' } = e;
  let { hidden: o = !1 } = e;
  return (
    (t.$$set = (l) => {
      'size' in l && n(0, (i = l.size)),
        'color' in l && n(1, (r = l.color)),
        'hidden' in l && n(2, (o = l.hidden));
    }),
    [i, r, o]
  );
}
class $t extends L {
  constructor(e) {
    super(), j(this, e, wi, vi, A, { size: 0, color: 1, hidden: 2 });
  }
}
function ki(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  return (
    (n = new pi({ props: { hidden: !t[2] } })),
    (r = new $t({
      props: {
        hidden: !t[1],
        color: t[0] ? t[4].color : t[4].iconColor,
        size: `${t[3] + 10}px`,
      },
    })),
    {
      c() {
        (e = T('div')),
          q(n.$$.fragment),
          (i = K()),
          q(r.$$.fragment),
          d(e, 'class', 'center-icons svelte-1s6qb6f'),
          v(e, 'width', t[4].centerIconSize),
          v(e, 'height', t[4].centerIconSize),
          Y(() => t[6].call(e));
      },
      m(s, u) {
        M(s, e, u),
          D(n, e, null),
          P(e, i),
          D(r, e, null),
          (o = Qt(e, t[6].bind(e))),
          (l = !0);
      },
      p(s, [u]) {
        const f = {};
        u & 4 && (f.hidden = !s[2]), n.$set(f);
        const c = {};
        u & 2 && (c.hidden = !s[1]),
          u & 17 && (c.color = s[0] ? s[4].color : s[4].iconColor),
          u & 8 && (c.size = `${s[3] + 10}px`),
          r.$set(c),
          (!l || u & 16) && v(e, 'width', s[4].centerIconSize),
          (!l || u & 16) && v(e, 'height', s[4].centerIconSize);
      },
      i(s) {
        l || (S(n.$$.fragment, s), S(r.$$.fragment, s), (l = !0));
      },
      o(s) {
        E(n.$$.fragment, s), E(r.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && V(e), H(n), H(r), o();
      },
    }
  );
}
function yi(t, e, n) {
  let i;
  let { isBuffering: r } = e;
  let { isSpinnerVisible: o } = e;
  let { isIconVisible: l } = e;
  let s;
  const u = se('config');
  ie(t, u, (c) => n(4, (i = c)));
  function f() {
    (s = this.offsetWidth), n(3, s);
  }
  return (
    (t.$$set = (c) => {
      'isBuffering' in c && n(0, (r = c.isBuffering)),
        'isSpinnerVisible' in c && n(1, (o = c.isSpinnerVisible)),
        'isIconVisible' in c && n(2, (l = c.isIconVisible));
    }),
    [r, o, l, s, i, u, f]
  );
}
class Ci extends L {
  constructor(e) {
    super(),
      j(this, e, yi, ki, A, {
        isBuffering: 0,
        isSpinnerVisible: 1,
        isIconVisible: 2,
      });
  }
}
function Si(t) {
  let e;
  let n;
  let i;
  let r;
  const o = t[9].default;
  const l = dt(o, t, t[8], null);
  return {
    c() {
      (e = T('div')),
        l && l.c(),
        d(e, 'class', 'controls svelte-do64tg'),
        v(e, 'height', t[2].controlsHeight),
        v(
          e,
          'background',
          'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.2) 80%)',
        ),
        je(e, 'hidden', t[0]);
    },
    m(s, u) {
      M(s, e, u),
        l && l.m(e, null),
        (n = !0),
        i ||
          ((r = [
            R(window, 'pointermove', t[10]),
            R(window, 'keydown', t[11]),
            R(e, 'pointerover', t[4]),
            R(e, 'pointerout', t[5]),
            R(e, 'transitionend', t[6]),
          ]),
          (i = !0));
    },
    p(s, [u]) {
      l &&
        l.p &&
        (!n || u & 256) &&
        ht(l, o, s, s[8], n ? gt(o, s[8], u, null) : mt(s[8]), null),
        (!n || u & 4) && v(e, 'height', s[2].controlsHeight),
        (!n || u & 1) && je(e, 'hidden', s[0]);
    },
    i(s) {
      n || (S(l, s), (n = !0));
    },
    o(s) {
      E(l, s), (n = !1);
    },
    d(s) {
      s && V(e), l && l.d(s), (i = !1), ee(r);
    },
  };
}
function Pi(t, e, n) {
  let i;
  let { $$slots: r = {}, $$scope: o } = e;
  let { hidden: l } = e;
  let { isPointerOver: s } = e;
  const u = se('config');
  ie(t, u, (h) => n(2, (i = h)));
  let f;
  let c;
  function a(h) {
    n(7, (s = !0));
  }
  function _(h) {
    n(7, (s = !1));
  }
  function g(h) {
    h.propertyName == 'visibility' &&
      (!l && c ? f.focus({ preventScroll: !0 }) : (f = document.activeElement));
  }
  const m = () => n(1, (c = !1));
  const w = (h) => n(1, (c = h.code === 'Tab'));
  return (
    (t.$$set = (h) => {
      'hidden' in h && n(0, (l = h.hidden)),
        'isPointerOver' in h && n(7, (s = h.isPointerOver)),
        '$$scope' in h && n(8, (o = h.$$scope));
    }),
    [l, c, i, u, a, _, g, s, o, r, m, w]
  );
}
class Bi extends L {
  constructor(e) {
    super(), j(this, e, Pi, Si, A, { hidden: 0, isPointerOver: 7 });
  }
}
/*!
 * just-throttle
 * Copyright (c) 2016 angus croll The MIT License (MIT)
 */ function at(t, e, n) {
  let i = !1;
  let r = !1;
  return function () {
    r = n && !i;
    const o = this;
    const l = arguments;
    if (
      (i ||
        ((i = !0),
        setTimeout(() => {
          if (((i = !1), !n)) return t.apply(o, l);
        }, e)),
      r)
    )
      return (r = !1), t.apply(this, arguments);
  };
}
function Fi(t) {
  let e;
  return {
    c() {
      (e = T('div')),
        d(e, 'class', 'bar svelte-1539bnd'),
        v(e, 'background-color', t[0]),
        v(e, 'border-color', t[0]),
        v(e, 'opacity', t[1]),
        v(e, 'transform', `scaleX(${t[2]})`);
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, [i]) {
      i & 1 && v(e, 'background-color', n[0]),
        i & 1 && v(e, 'border-color', n[0]),
        i & 2 && v(e, 'opacity', n[1]),
        i & 4 && v(e, 'transform', `scaleX(${n[2]})`);
    },
    i: I,
    o: I,
    d(n) {
      n && V(e);
    },
  };
}
function Ei(t, e, n) {
  let { color: i = 'white' } = e;
  let { opacity: r = 1 } = e;
  let { value: o = 0 } = e;
  return (
    (t.$$set = (l) => {
      'color' in l && n(0, (i = l.color)),
        'opacity' in l && n(1, (r = l.opacity)),
        'value' in l && n(2, (o = l.value));
    }),
    [i, r, o]
  );
}
class Qe extends L {
  constructor(e) {
    super(), j(this, e, Ei, Fi, A, { color: 0, opacity: 1, value: 2 });
  }
}
function Rt(t, e, n) {
  const i = t.slice();
  return (i[3] = e[n]), i;
}
function Ot(t) {
  let e;
  return {
    c() {
      (e = T('div')),
        d(e, 'class', 'chunk svelte-mhutnt'),
        v(e, 'background-color', t[0]),
        v(e, 'opacity', t[1]),
        v(
          e,
          'transform',
          `translateX(${t[3].start * 100}%) scaleX(${t[3].end - t[3].start})`,
        );
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, i) {
      i & 1 && v(e, 'background-color', n[0]),
        i & 2 && v(e, 'opacity', n[1]),
        i & 4 &&
          v(
            e,
            'transform',
            `translateX(${n[3].start * 100}%) scaleX(${n[3].end - n[3].start})`,
          );
    },
    d(n) {
      n && V(e);
    },
  };
}
function zi(t) {
  let e;
  let n = Je(t[2]);
  const i = [];
  for (let r = 0; r < n.length; r += 1) i[r] = Ot(Rt(t, n, r));
  return {
    c() {
      e = T('div');
      for (let r = 0; r < i.length; r += 1) i[r].c();
      d(e, 'class', 'chunk-bar svelte-mhutnt');
    },
    m(r, o) {
      M(r, e, o);
      for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(e, null);
    },
    p(r, [o]) {
      if (o & 7) {
        n = Je(r[2]);
        let l;
        for (l = 0; l < n.length; l += 1) {
          const s = Rt(r, n, l);
          i[l] ? i[l].p(s, o) : ((i[l] = Ot(s)), i[l].c(), i[l].m(e, null));
        }
        for (; l < i.length; l += 1) i[l].d(1);
        i.length = n.length;
      }
    },
    i: I,
    o: I,
    d(r) {
      r && V(e), Jt(i, r);
    },
  };
}
function Ti(t, e, n) {
  let { color: i = 'white' } = e;
  let { opacity: r = 1 } = e;
  let { ranges: o = [] } = e;
  return (
    (t.$$set = (l) => {
      'color' in l && n(0, (i = l.color)),
        'opacity' in l && n(1, (r = l.opacity)),
        'ranges' in l && n(2, (o = l.ranges));
    }),
    [i, r, o]
  );
}
class Mt extends L {
  constructor(e) {
    super(), j(this, e, Ti, zi, A, { color: 0, opacity: 1, ranges: 2 });
  }
}
function Vi(t) {
  let e;
  let n;
  return {
    c() {
      (e = T('div')),
        (n = T('div')),
        d(n, 'class', 'thumb svelte-kj06qu'),
        v(n, 'width', t[2].thumbSize),
        v(n, 'height', t[2].thumbSize),
        v(n, 'background-color', t[2].color),
        v(n, 'border-color', t[2].color),
        je(n, 'active', t[0]),
        d(e, 'class', 'thumb-wrapper svelte-kj06qu'),
        v(e, 'transform', `translateX(${t[1]}%)`);
    },
    m(i, r) {
      M(i, e, r), P(e, n);
    },
    p(i, [r]) {
      r & 4 && v(n, 'width', i[2].thumbSize),
        r & 4 && v(n, 'height', i[2].thumbSize),
        r & 4 && v(n, 'background-color', i[2].color),
        r & 4 && v(n, 'border-color', i[2].color),
        r & 1 && je(n, 'active', i[0]),
        r & 2 && v(e, 'transform', `translateX(${i[1]}%)`);
    },
    i: I,
    o: I,
    d(i) {
      i && V(e);
    },
  };
}
function Ii(t, e, n) {
  let i;
  let r;
  let { positionValue: o = 0 } = e;
  let { active: l = !1 } = e;
  const s = se('config');
  return (
    ie(t, s, (u) => n(2, (r = u))),
    (t.$$set = (u) => {
      'positionValue' in u && n(4, (o = u.positionValue)),
        'active' in u && n(0, (l = u.active));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 16 && n(1, (i = o * 100));
    }),
    [l, i, r, s, o]
  );
}
class en extends L {
  constructor(e) {
    super(), j(this, e, Ii, Vi, A, { positionValue: 4, active: 0 });
  }
}
function Dt(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  return (
    (n = new Mt({
      props: { color: t[1].bufferedColor, opacity: 1, ranges: t[4] },
    })),
    (r = new Mt({ props: { color: t[1].color, opacity: 1, ranges: t[5] } })),
    {
      c() {
        (e = T('div')),
          q(n.$$.fragment),
          (i = K()),
          q(r.$$.fragment),
          d(e, 'class', 'chunkbars svelte-wdgqi3');
      },
      m(l, s) {
        M(l, e, s), D(n, e, null), P(e, i), D(r, e, null), (o = !0);
      },
      p(l, s) {
        const u = {};
        s & 2 && (u.color = l[1].bufferedColor),
          s & 16 && (u.ranges = l[4]),
          n.$set(u);
        const f = {};
        s & 2 && (f.color = l[1].color), s & 32 && (f.ranges = l[5]), r.$set(f);
      },
      i(l) {
        o || (S(n.$$.fragment, l), S(r.$$.fragment, l), (o = !0));
      },
      o(l) {
        E(n.$$.fragment, l), E(r.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && V(e), H(n), H(r);
      },
    }
  );
}
function Ri(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  (i = new Qe({ props: { color: t[1].barsBgColor, opacity: 1, value: 1 } })),
    (o = new Qe({ props: { color: t[1].color, value: t[6] } }));
  let _ = t[1].chunkBars && Dt(t);
  return (
    (u = new en({ props: { positionValue: t[6], active: t[3] } })),
    {
      c() {
        (e = T('div')),
          (n = T('div')),
          q(i.$$.fragment),
          (r = K()),
          q(o.$$.fragment),
          (l = K()),
          _ && _.c(),
          (s = K()),
          q(u.$$.fragment),
          d(n, 'class', 'bars svelte-wdgqi3'),
          v(n, 'height', t[1].trackHeight),
          v(n, 'outline-color', t[1].focusColor),
          d(e, 'class', 'playbar svelte-wdgqi3'),
          d(e, 'tabindex', '0'),
          v(e, 'margin', `0 ${t[0]}`);
      },
      m(g, m) {
        M(g, e, m),
          P(e, n),
          D(i, n, null),
          P(n, r),
          D(o, n, null),
          P(n, l),
          _ && _.m(n, null),
          P(e, s),
          D(u, e, null),
          t[18](e),
          (f = !0),
          c ||
            ((a = [
              R(window, 'pointermove', t[9]),
              R(window, 'pointerup', t[10]),
              R(e, 'pointerdown', t[8]),
            ]),
            (c = !0));
      },
      p(g, [m]) {
        const w = {};
        m & 2 && (w.color = g[1].barsBgColor), i.$set(w);
        const h = {};
        m & 2 && (h.color = g[1].color),
          m & 64 && (h.value = g[6]),
          o.$set(h),
          g[1].chunkBars
            ? _
              ? (_.p(g, m), m & 2 && S(_, 1))
              : ((_ = Dt(g)), _.c(), S(_, 1), _.m(n, null))
            : _ &&
              (he(),
              E(_, 1, 1, () => {
                _ = null;
              }),
              me()),
          (!f || m & 2) && v(n, 'height', g[1].trackHeight),
          (!f || m & 2) && v(n, 'outline-color', g[1].focusColor);
        const z = {};
        m & 64 && (z.positionValue = g[6]),
          m & 8 && (z.active = g[3]),
          u.$set(z),
          (!f || m & 1) && v(e, 'margin', `0 ${g[0]}`);
      },
      i(g) {
        f ||
          (S(i.$$.fragment, g),
          S(o.$$.fragment, g),
          S(_),
          S(u.$$.fragment, g),
          (f = !0));
      },
      o(g) {
        E(i.$$.fragment, g),
          E(o.$$.fragment, g),
          E(_),
          E(u.$$.fragment, g),
          (f = !1);
      },
      d(g) {
        g && V(e), H(i), H(o), _ && _.d(), H(u), t[18](null), (c = !1), ee(a);
      },
    }
  );
}
function Oi(t, e, n) {
  let i;
  let { isBottomControlsVisible: r } = e;
  let { marginX: o = '10px' } = e;
  let { currentTime: l = 0 } = e;
  let { duration: s = 0 } = e;
  let { buffered: u = [] } = e;
  let { played: f = [] } = e;
  let { paused: c } = e;
  let { isScrubbing: a } = e;
  const _ = Zt();
  const g = se('config');
  ie(t, g, (O) => n(1, (i = O)));
  let m;
  let w;
  let h;
  let z;
  let k;
  let C;
  let B;
  function U() {
    n(6, (B = l / s));
  }
  const X = at(
    (O) => {
      n(6, (B = O / s));
    },
    250,
    !0,
  );
  const N = at(
    (O) => {
      n(4, (k = u.map((ne) => ({ start: ne.start / s, end: ne.end / s })))),
        n(5, (C = f.map((ne) => ({ start: ne.start / s, end: ne.end / s }))));
    },
    250,
    !0,
  );
  function p(O) {
    O.preventDefault(),
      n(3, (w = !0)),
      (z = c),
      n(13, (c = !0)),
      (h = m.getBoundingClientRect()),
      y(O.clientX);
  }
  function F(O) {
    w && (n(12, (a = !0)), y(O.clientX));
  }
  function G(O) {
    w && (n(13, (c = z)), n(3, (w = !1)), n(12, (a = !1)), _('pointerup'));
  }
  function y(O) {
    const ne = Math.min(Math.max(O - h.x, 0), h.width) / h.width;
    n(11, (l = s * ne));
  }
  function te(O) {
    Z[O ? 'unshift' : 'push'](() => {
      (m = O), n(2, m);
    });
  }
  return (
    (t.$$set = (O) => {
      'isBottomControlsVisible' in O && n(14, (r = O.isBottomControlsVisible)),
        'marginX' in O && n(0, (o = O.marginX)),
        'currentTime' in O && n(11, (l = O.currentTime)),
        'duration' in O && n(15, (s = O.duration)),
        'buffered' in O && n(16, (u = O.buffered)),
        'played' in O && n(17, (f = O.played)),
        'paused' in O && n(13, (c = O.paused)),
        'isScrubbing' in O && n(12, (a = O.isScrubbing));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 18434 && r && i.chunkBars && N(l),
        t.$$.dirty & 22528 && r && (a ? U() : X(l));
    }),
    [o, i, m, w, k, C, B, g, p, F, G, l, a, c, r, s, u, f, te]
  );
}
class Mi extends L {
  constructor(e) {
    super(),
      j(this, e, Oi, Ri, A, {
        isBottomControlsVisible: 14,
        marginX: 0,
        currentTime: 11,
        duration: 15,
        buffered: 16,
        played: 17,
        paused: 13,
        isScrubbing: 12,
      });
  }
}
function Di(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  const l = t[7].default;
  const s = dt(l, t, t[6], null);
  return {
    c() {
      (e = T('div')),
        s && s.c(),
        d(e, 'class', 'button svelte-ievgfv'),
        v(e, 'width', `${t[1]}px`),
        v(e, 'min-width', `${t[1]}px`),
        v(e, 'background-color', t[2].color),
        v(e, 'border-color', t[2].focusColor),
        v(e, 'border-radius', t[0] ? '9999px' : '10px'),
        d(e, 'tabindex', '0'),
        Y(() => t[8].call(e));
    },
    m(u, f) {
      M(u, e, f),
        s && s.m(e, null),
        (n = Qt(e, t[8].bind(e))),
        (i = !0),
        r ||
          ((o = [
            R(e, 'pointerdown', Hi),
            R(e, 'pointerup', t[4]),
            R(e, 'keydown', t[5]),
          ]),
          (r = !0));
    },
    p(u, [f]) {
      s &&
        s.p &&
        (!i || f & 64) &&
        ht(s, l, u, u[6], i ? gt(l, u[6], f, null) : mt(u[6]), null),
        (!i || f & 2) && v(e, 'width', `${u[1]}px`),
        (!i || f & 2) && v(e, 'min-width', `${u[1]}px`),
        (!i || f & 4) && v(e, 'background-color', u[2].color),
        (!i || f & 4) && v(e, 'border-color', u[2].focusColor),
        (!i || f & 1) && v(e, 'border-radius', u[0] ? '9999px' : '10px');
    },
    i(u) {
      i || (S(s, u), (i = !0));
    },
    o(u) {
      E(s, u), (i = !1);
    },
    d(u) {
      u && V(e), s && s.d(u), n(), (r = !1), ee(o);
    },
  };
}
function Hi(t) {
  t.preventDefault();
}
function qi(t, e, n) {
  let i;
  let { $$slots: r = {}, $$scope: o } = e;
  let { round: l = !1 } = e;
  const s = Zt();
  const u = se('config');
  ie(t, u, (g) => n(2, (i = g)));
  let f;
  function c(g) {
    s('pointerup');
  }
  function a(g) {
    switch (g.code) {
      case 'Enter':
      case 'NumpadEnter':
      case 'Space':
        g.preventDefault(), g.stopPropagation(), s('pointerup');
        break;
    }
  }
  function _() {
    (f = this.offsetHeight), n(1, f);
  }
  return (
    (t.$$set = (g) => {
      'round' in g && n(0, (l = g.round)),
        '$$scope' in g && n(6, (o = g.$$scope));
    }),
    [l, f, i, u, c, a, o, r, _]
  );
}
class Ct extends L {
  constructor(e) {
    super(), j(this, e, qi, Di, A, { round: 0 });
  }
}
function Ni(t) {
  let e;
  let n;
  return (
    (e = new xt({ props: { paused: t[0] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 1 && (o.paused = i[0]), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Xi(t) {
  let e;
  let n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [Ni] }, $$scope: { ctx: t } },
    })),
    e.$on('pointerup', t[1]),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, [r]) {
        const o = {};
        r & 5 && (o.$$scope = { dirty: r, ctx: i }), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Ai(t, e, n) {
  let { paused: i } = e;
  function r(o) {
    vt.call(this, t, o);
  }
  return (
    (t.$$set = (o) => {
      'paused' in o && n(0, (i = o.paused));
    }),
    [i, r]
  );
}
class ji extends L {
  constructor(e) {
    super(), j(this, e, Ai, Xi, A, { paused: 0 });
  }
}
function Li(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  let m;
  return {
    c() {
      (e = T('div')),
        (n = W('svg')),
        (i = W('g')),
        (r = W('path')),
        (l = W('g')),
        (s = W('path')),
        (u = W('path')),
        (c = W('g')),
        (a = W('path')),
        (_ = W('path')),
        d(r, 'fill', (o = t[1] ? t[3].iconColor : 'none')),
        d(
          r,
          'd',
          'M33.913 38.955l14.58-11.046v44.918l-14.58-11.045H22.154V38.955h11.759z',
        ),
        d(s, 'd', 'M68.27 31.776c10.039 10.058 10.039 26.39 0 36.448'),
        d(u, 'd', 'M61.062 38.986c6.067 6.079 6.067 15.949 0 22.028'),
        d(l, 'visibility', (f = t[2] ? 'hidden' : 'visible')),
        d(a, 'd', 'M59.644 41.173l17.621 17.658'),
        d(_, 'd', 'M77.265 41.173L59.644 58.831'),
        d(c, 'visibility', (g = t[2] ? 'visible' : 'hidden')),
        d(i, 'fill', 'none'),
        d(i, 'stroke', (m = t[3].iconColor)),
        d(i, 'stroke-width', '5'),
        d(n, 'viewBox', '0 0 100 100'),
        d(n, 'stroke-linecap', 'round'),
        d(n, 'stroke-linejoin', 'round'),
        d(e, 'class', 'volume-icon svelte-rnfp7y'),
        v(e, 'width', t[0]);
    },
    m(w, h) {
      M(w, e, h),
        P(e, n),
        P(n, i),
        P(i, r),
        P(i, l),
        P(l, s),
        P(l, u),
        P(i, c),
        P(c, a),
        P(c, _);
    },
    p(w, [h]) {
      h & 10 && o !== (o = w[1] ? w[3].iconColor : 'none') && d(r, 'fill', o),
        h & 4 &&
          f !== (f = w[2] ? 'hidden' : 'visible') &&
          d(l, 'visibility', f),
        h & 4 &&
          g !== (g = w[2] ? 'visible' : 'hidden') &&
          d(c, 'visibility', g),
        h & 8 && m !== (m = w[3].iconColor) && d(i, 'stroke', m),
        h & 1 && v(e, 'width', w[0]);
    },
    i: I,
    o: I,
    d(w) {
      w && V(e);
    },
  };
}
function Ui(t, e, n) {
  let i;
  let { size: r = '100%' } = e;
  let { filled: o = !0 } = e;
  let { muted: l } = e;
  const s = se('config');
  return (
    ie(t, s, (u) => n(3, (i = u))),
    (t.$$set = (u) => {
      'size' in u && n(0, (r = u.size)),
        'filled' in u && n(1, (o = u.filled)),
        'muted' in u && n(2, (l = u.muted));
    }),
    [r, o, l, i, s]
  );
}
class Wi extends L {
  constructor(e) {
    super(), j(this, e, Ui, Li, A, { size: 0, filled: 1, muted: 2 });
  }
}
function Ki(t) {
  let e;
  let n;
  return (
    (e = new Wi({ props: { muted: t[0] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 1 && (o.muted = i[0]), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Ji(t) {
  let e;
  let n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [Ki] }, $$scope: { ctx: t } },
    })),
    e.$on('pointerup', t[1]),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, [r]) {
        const o = {};
        r & 5 && (o.$$scope = { dirty: r, ctx: i }), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Gi(t, e, n) {
  let { muted: i } = e;
  function r(o) {
    vt.call(this, t, o);
  }
  return (
    (t.$$set = (o) => {
      'muted' in o && n(0, (i = o.muted));
    }),
    [i, r]
  );
}
class Qi extends L {
  constructor(e) {
    super(), j(this, e, Gi, Ji, A, { muted: 0 });
  }
}
function Yi(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  return (
    (i = new Qe({ props: { color: t[5].barsBgColor, opacity: 1, value: 1 } })),
    (o = new Qe({ props: { color: t[5].color, opacity: 1, value: t[0] } })),
    (s = new en({ props: { positionValue: t[0], active: t[4] } })),
    {
      c() {
        (e = T('div')),
          (n = T('div')),
          q(i.$$.fragment),
          (r = K()),
          q(o.$$.fragment),
          (l = K()),
          q(s.$$.fragment),
          d(n, 'class', 'bars svelte-1qqqte2'),
          v(n, 'height', t[5].trackHeight),
          v(n, 'outline-color', t[5].focusColor),
          d(e, 'class', 'slider svelte-1qqqte2'),
          v(e, 'max-width', t[1]),
          v(e, 'margin', `0 ${t[2]}`),
          d(e, 'tabindex', '0');
      },
      m(a, _) {
        M(a, e, _),
          P(e, n),
          D(i, n, null),
          P(n, r),
          D(o, n, null),
          P(e, l),
          D(s, e, null),
          t[11](e),
          (u = !0),
          f ||
            ((c = [
              R(window, 'pointermove', t[8]),
              R(window, 'pointerup', t[9]),
              R(e, 'pointerdown', t[7]),
              R(e, 'keydown', t[10]),
            ]),
            (f = !0));
      },
      p(a, [_]) {
        const g = {};
        _ & 32 && (g.color = a[5].barsBgColor), i.$set(g);
        const m = {};
        _ & 32 && (m.color = a[5].color),
          _ & 1 && (m.value = a[0]),
          o.$set(m),
          (!u || _ & 32) && v(n, 'height', a[5].trackHeight),
          (!u || _ & 32) && v(n, 'outline-color', a[5].focusColor);
        const w = {};
        _ & 1 && (w.positionValue = a[0]),
          _ & 16 && (w.active = a[4]),
          s.$set(w),
          (!u || _ & 2) && v(e, 'max-width', a[1]),
          (!u || _ & 4) && v(e, 'margin', `0 ${a[2]}`);
      },
      i(a) {
        u ||
          (S(i.$$.fragment, a),
          S(o.$$.fragment, a),
          S(s.$$.fragment, a),
          (u = !0));
      },
      o(a) {
        E(i.$$.fragment, a), E(o.$$.fragment, a), E(s.$$.fragment, a), (u = !1);
      },
      d(a) {
        a && V(e), H(i), H(o), H(s), t[11](null), (f = !1), ee(c);
      },
    }
  );
}
function Zi(t, e, n) {
  let i;
  let { width: r = '150px' } = e;
  let { marginX: o = '10px' } = e;
  let { value: l = 0.5 } = e;
  let s;
  let u;
  let f;
  const c = se('config');
  ie(t, c, (k) => n(5, (i = k)));
  function a(k) {
    k.preventDefault(),
      n(4, (u = !0)),
      (f = s.getBoundingClientRect()),
      h(k.clientX);
  }
  function _(k) {
    u && h(k.clientX);
  }
  function g(k) {
    u && n(4, (u = !1));
  }
  function m(k) {
    switch (k.code) {
      case 'ArrowLeft':
      case 'ArrowDown':
        w(k, -0.1);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        w(k, 0.1);
        break;
    }
  }
  function w(k, C) {
    k.preventDefault(),
      k.stopPropagation(),
      n(0, (l = Math.min(Math.max(l + C, 0), 1)));
  }
  function h(k) {
    n(0, (l = Math.min(Math.max(k - f.x, 0), f.width) / f.width));
  }
  function z(k) {
    Z[k ? 'unshift' : 'push'](() => {
      (s = k), n(3, s);
    });
  }
  return (
    (t.$$set = (k) => {
      'width' in k && n(1, (r = k.width)),
        'marginX' in k && n(2, (o = k.marginX)),
        'value' in k && n(0, (l = k.value));
    }),
    [l, r, o, s, u, i, c, a, _, g, m, z]
  );
}
class xi extends L {
  constructor(e) {
    super(), j(this, e, Zi, Yi, A, { width: 1, marginX: 2, value: 0 });
  }
}
function $i(t) {
  let e;
  let n;
  let i;
  function r(l) {
    t[2](l);
  }
  const o = { width: t[1] };
  return (
    t[0] !== void 0 && (o.value = t[0]),
    (e = new xi({ props: o })),
    Z.push(() => le(e, 'value', r)),
    {
      c() {
        q(e.$$.fragment);
      },
      m(l, s) {
        D(e, l, s), (i = !0);
      },
      p(l, [s]) {
        const u = {};
        s & 2 && (u.width = l[1]),
          !n && s & 1 && ((n = !0), (u.value = l[0]), re(() => (n = !1))),
          e.$set(u);
      },
      i(l) {
        i || (S(e.$$.fragment, l), (i = !0));
      },
      o(l) {
        E(e.$$.fragment, l), (i = !1);
      },
      d(l) {
        H(e, l);
      },
    }
  );
}
function er(t, e, n) {
  let { width: i = '100px' } = e;
  let { volume: r = 1 } = e;
  function o(l) {
    (r = l), n(0, r);
  }
  return (
    (t.$$set = (l) => {
      'width' in l && n(1, (i = l.width)),
        'volume' in l && n(0, (r = l.volume));
    }),
    [r, i, o]
  );
}
class tr extends L {
  constructor(e) {
    super(), j(this, e, er, $i, A, { width: 1, volume: 0 });
  }
}
function nr(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  let m;
  let w;
  let h;
  return {
    c() {
      (e = T('div')),
        (n = W('svg')),
        (i = W('g')),
        (r = W('g')),
        (o = W('path')),
        (l = W('path')),
        (s = W('path')),
        (u = W('path')),
        (c = W('g')),
        (a = W('path')),
        (_ = W('path')),
        (g = W('path')),
        (m = W('path')),
        d(o, 'd', 'M71 60.5V71H60'),
        d(l, 'd', 'M40 71H29V60.5'),
        d(s, 'd', 'M29 40.5V29h11'),
        d(u, 'd', 'M60 29h11v11.5'),
        d(r, 'visibility', (f = t[1] ? 'hidden' : 'visible')),
        d(a, 'd', 'M60 71V60.5h11'),
        d(_, 'd', 'M29 60.5h11V71'),
        d(g, 'd', 'M40 29v11.5H29'),
        d(m, 'd', 'M71 40.5H60V29'),
        d(c, 'visibility', (w = t[1] ? 'visible' : 'hidden')),
        d(i, 'fill', 'none'),
        d(i, 'stroke', (h = t[2].iconColor)),
        d(i, 'stroke-width', '5'),
        d(n, 'viewBox', '0 0 100 100'),
        d(n, 'stroke-linecap', 'round'),
        d(n, 'stroke-linejoin', 'round'),
        d(e, 'class', 'fullscreen-icon svelte-15g0vgp'),
        v(e, 'width', t[0]);
    },
    m(z, k) {
      M(z, e, k),
        P(e, n),
        P(n, i),
        P(i, r),
        P(r, o),
        P(r, l),
        P(r, s),
        P(r, u),
        P(i, c),
        P(c, a),
        P(c, _),
        P(c, g),
        P(c, m);
    },
    p(z, [k]) {
      k & 2 && f !== (f = z[1] ? 'hidden' : 'visible') && d(r, 'visibility', f),
        k & 2 &&
          w !== (w = z[1] ? 'visible' : 'hidden') &&
          d(c, 'visibility', w),
        k & 4 && h !== (h = z[2].iconColor) && d(i, 'stroke', h),
        k & 1 && v(e, 'width', z[0]);
    },
    i: I,
    o: I,
    d(z) {
      z && V(e);
    },
  };
}
function ir(t, e, n) {
  let i;
  let { size: r = '100%' } = e;
  let { isFullscreen: o } = e;
  const l = se('config');
  return (
    ie(t, l, (s) => n(2, (i = s))),
    (t.$$set = (s) => {
      'size' in s && n(0, (r = s.size)),
        'isFullscreen' in s && n(1, (o = s.isFullscreen));
    }),
    [r, o, i, l]
  );
}
class rr extends L {
  constructor(e) {
    super(), j(this, e, ir, nr, A, { size: 0, isFullscreen: 1 });
  }
}
function or(t) {
  let e;
  let n;
  return (
    (e = new rr({ props: { isFullscreen: t[0] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 1 && (o.isFullscreen = i[0]), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function lr(t) {
  let e;
  let n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [or] }, $$scope: { ctx: t } },
    })),
    e.$on('pointerup', t[1]),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, [r]) {
        const o = {};
        r & 5 && (o.$$scope = { dirty: r, ctx: i }), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function sr(t, e, n) {
  let { isFullscreen: i } = e;
  function r(o) {
    vt.call(this, t, o);
  }
  return (
    (t.$$set = (o) => {
      'isFullscreen' in o && n(0, (i = o.isFullscreen));
    }),
    [i, r]
  );
}
class ur extends L {
  constructor(e) {
    super(), j(this, e, sr, lr, A, { isFullscreen: 0 });
  }
}
const tn = { exports: {} };
/*!
 * screenfull
 * v5.1.0 - 2020-12-24
 * (c) Sindre Sorhus; MIT License
 */ (function (t) {
  (function () {
    const e =
      typeof window < 'u' && typeof window.document < 'u'
        ? window.document
        : {};
    const n = t.exports;
    const i = (function () {
      for (
        var l,
          s = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
            ],
          ],
          u = 0,
          f = s.length,
          c = {};
        u < f;
        u++
      )
        if (((l = s[u]), l && l[1] in e)) {
          for (u = 0; u < l.length; u++) c[s[0][u]] = l[u];
          return c;
        }
      return !1;
    })();
    const r = { change: i.fullscreenchange, error: i.fullscreenerror };
    const o = {
      request(l, s) {
        return new Promise((u, f) => {
          var c = function () {
            this.off('change', c), u();
          }.bind(this);
          this.on('change', c), (l = l || e.documentElement);
          const a = l[i.requestFullscreen](s);
          a instanceof Promise && a.then(c).catch(f);
        });
      },
      exit() {
        return new Promise((l, s) => {
          if (!this.isFullscreen) {
            l();
            return;
          }
          var u = function () {
            this.off('change', u), l();
          }.bind(this);
          this.on('change', u);
          const f = e[i.exitFullscreen]();
          f instanceof Promise && f.then(u).catch(s);
        });
      },
      toggle(l, s) {
        return this.isFullscreen ? this.exit() : this.request(l, s);
      },
      onchange(l) {
        this.on('change', l);
      },
      onerror(l) {
        this.on('error', l);
      },
      on(l, s) {
        const u = r[l];
        u && e.addEventListener(u, s, !1);
      },
      off(l, s) {
        const u = r[l];
        u && e.removeEventListener(u, s, !1);
      },
      raw: i,
    };
    if (!i) {
      n
        ? (t.exports = { isEnabled: !1 })
        : (window.screenfull = { isEnabled: !1 });
      return;
    }
    Object.defineProperties(o, {
      isFullscreen: {
        get() {
          return !!e[i.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get() {
          return e[i.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get() {
          return !!e[i.fullscreenEnabled];
        },
      },
    }),
      n ? (t.exports = o) : (window.screenfull = o);
  })();
})(tn);
const pe = tn.exports;
function fr(t, e, n) {
  let { element: i } = e;
  let { isFullscreen: r } = e;
  let { isFullscreenEnabled: o } = e;
  (o = pe.isEnabled), o && pe.on('change', l);
  function l(s) {
    i == s.target && n(0, (r = pe.isFullscreen));
  }
  return (
    pt(() => {
      pe.off('change', l);
    }),
    (t.$$set = (s) => {
      'element' in s && n(2, (i = s.element)),
        'isFullscreen' in s && n(0, (r = s.isFullscreen)),
        'isFullscreenEnabled' in s && n(1, (o = s.isFullscreenEnabled));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 7 && o && (r ? pe.request(i) : pe.exit());
    }),
    [r, o, i]
  );
}
class cr extends L {
  constructor(e) {
    super(),
      j(this, e, fr, null, A, {
        element: 2,
        isFullscreen: 0,
        isFullscreenEnabled: 1,
      });
  }
}
/*!
 * just-debounce-it
 * Copyright (c) 2016 angus croll The MIT License (MIT)
 */ function nn(t, e, n) {
  let i;
  return function () {
    if (!e) return t.apply(this, arguments);
    const r = this;
    const o = arguments;
    const l = n && !i;
    if (
      (clearTimeout(i),
      (i = setTimeout(() => {
        if (((i = null), !l)) return t.apply(r, o);
      }, e)),
      l)
    )
      return t.apply(this, arguments);
  };
}
function ar(t) {
  let e;
  let n;
  return {
    c: I,
    m(i, r) {
      e ||
        ((n = [R(window, 'pointermove', t[0]), R(window, 'keydown', t[0])]),
        (e = !0));
    },
    p: I,
    i: I,
    o: I,
    d(i) {
      (e = !1), ee(n);
    },
  };
}
function dr(t, e, n) {
  let { isIdle: i = !1 } = e;
  let r;
  function o(s) {
    n(1, (i = !1)), l();
  }
  const l = nn(
    () => {
      clearTimeout(r),
        (r = setTimeout(() => {
          n(1, (i = !0));
        }, 2e3));
    },
    250,
    !0,
  );
  return (
    pt(() => {
      clearTimeout(r);
    }),
    (t.$$set = (s) => {
      'isIdle' in s && n(1, (i = s.isIdle));
    }),
    [o, i]
  );
}
class gr extends L {
  constructor(e) {
    super(), j(this, e, dr, ar, A, { isIdle: 1 });
  }
}
function hr(t) {
  let e;
  let n;
  return {
    c: I,
    m(i, r) {
      e || ((n = R(window, 'scroll', t[0])), (e = !0));
    },
    p: I,
    i: I,
    o: I,
    d(i) {
      (e = !1), n();
    },
  };
}
function mr(t, e, n) {
  let { isScrolling: i = !1 } = e;
  let r;
  function o(s) {
    n(1, (i = !0)), l();
  }
  const l = nn(
    () => {
      clearTimeout(r),
        (r = setTimeout(() => {
          n(1, (i = !1));
        }, 100));
    },
    100,
    !0,
  );
  return (
    pt(() => {
      clearTimeout(r);
    }),
    (t.$$set = (s) => {
      'isScrolling' in s && n(1, (i = s.isScrolling));
    }),
    [o, i]
  );
}
class _r extends L {
  constructor(e) {
    super(), j(this, e, mr, hr, A, { isScrolling: 1 });
  }
}
function br(t) {
  let e;
  let n;
  let i;
  return {
    c() {
      (e = T('div')),
        (n = T('div')),
        (i = xe(t[0])),
        d(n, 'class', 'text svelte-1a30cmt'),
        d(e, 'class', 'time svelte-1a30cmt');
    },
    m(r, o) {
      M(r, e, o), P(e, n), P(n, i);
    },
    p(r, [o]) {
      o & 1 && Gt(i, r[0]);
    },
    i: I,
    o: I,
    d(r) {
      r && V(e);
    },
  };
}
function pr(t, e, n) {
  let i;
  let { duration: r } = e;
  let { currentTime: o } = e;
  let l = 0;
  const s = at(
    () => {
      n(0, (l = u(o, i)));
    },
    250,
    !0,
  );
  const u = (f = 0, c = !1) => {
    const a = new Date(f * 1e3).toISOString().substr(11, 8);
    return c ? a : a.substring(3);
  };
  return (
    (t.$$set = (f) => {
      'duration' in f && n(1, (r = f.duration)),
        'currentTime' in f && n(2, (o = f.currentTime));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 2 && (i = r >= 3600), t.$$.dirty & 4 && o && s();
    }),
    [l, r, o]
  );
}
class vr extends L {
  constructor(e) {
    super(), j(this, e, pr, br, A, { duration: 1, currentTime: 2 });
  }
}
function Ht(t, e, n) {
  const i = t.slice();
  return (i[84] = e[n].src), (i[85] = e[n].type), i;
}
function wr(t) {
  let e;
  let n = `${t[88]}`;
  let i;
  return {
    c() {
      (e = T('p')),
        (i = xe(n)),
        v(e, 'color', 'red'),
        d(e, 'class', 'svelte-1ai3mbf');
    },
    m(r, o) {
      M(r, e, o), P(e, i);
    },
    p(r, o) {
      o[0] & 4 && n !== (n = `${r[88]}`) && Gt(i, n);
    },
    i: I,
    o: I,
    d(r) {
      r && V(e);
    },
  };
}
function kr(t) {
  let e;
  let n;
  let i;
  let r;
  let o = !1;
  let l;
  let s = !0;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  let m;
  let w = Je(t[31]);
  const h = [];
  for (let C = 0; C < w.length; C += 1) h[C] = qt(Ht(t, w, C));
  function z() {
    cancelAnimationFrame(l), n.paused || ((l = Ze(z)), (o = !0)), t[61].call(n);
  }
  let k = t[2] && t[30] && Nt(t);
  return (
    (c = new gi({
      props: { $$slots: { default: [Cr] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = T('div')), (n = T('video')), (i = T('track'));
        for (let C = 0; C < h.length; C += 1) h[C].c();
        (r = T('p')),
          (r.textContent = "Sorry, your browser doesn't support HTML5 videos."),
          (u = K()),
          k && k.c(),
          (f = K()),
          q(c.$$.fragment),
          d(i, 'kind', 'captions'),
          d(n, 'width', t[0]),
          d(n, 'height', t[1]),
          d(n, 'preload', 'none'),
          d(n, 'class', 'svelte-1ai3mbf'),
          (t[9] === void 0 || t[21] === void 0 || t[11] === void 0) && Y(z),
          t[19] === void 0 && Y(() => t[62].call(n)),
          t[20] === void 0 && Y(() => t[63].call(n)),
          t[20] === void 0 && Y(() => t[64].call(n)),
          t[10] === void 0 && Y(() => t[65].call(n)),
          t[11] === void 0 && Y(() => t[66].call(n)),
          d(e, 'id', `video-player-${si()}`),
          d(e, 'tabindex', (a = t[14] ? '0' : '-1')),
          d(e, 'class', 'svelte-1ai3mbf');
      },
      m(C, B) {
        M(C, e, B), P(e, n), P(n, i);
        for (let U = 0; U < h.length; U += 1) h[U] && h[U].m(n, null);
        P(n, r),
          t[60](n),
          isNaN(t[13]) || (n.volume = t[13]),
          P(e, u),
          k && k.m(e, null),
          P(e, f),
          D(c, e, null),
          t[74](e),
          (_ = !0),
          g ||
            ((m = [
              R(n, 'timeupdate', z),
              R(n, 'durationchange', t[62]),
              R(n, 'progress', t[63]),
              R(n, 'loadedmetadata', t[64]),
              R(n, 'seeking', t[65]),
              R(n, 'seeked', t[65]),
              R(n, 'ended', t[66]),
              R(n, 'play', t[67]),
              R(n, 'pause', t[67]),
              R(n, 'volumechange', t[68]),
              R(n, 'loadeddata', t[33], { once: !0 }),
              R(n, 'play', Br),
              R(n, 'playing', t[34]),
              R(n, 'waiting', t[35]),
              R(e, 'pointerover', t[36]),
              R(e, 'pointerout', t[37]),
              R(e, 'pointerup', t[38]),
            ]),
            (g = !0));
      },
      p(C, B) {
        if (B[1] & 1) {
          w = Je(C[31]);
          let X;
          for (X = 0; X < w.length; X += 1) {
            const N = Ht(C, w, X);
            h[X] ? h[X].p(N, B) : ((h[X] = qt(N)), h[X].c(), h[X].m(n, r));
          }
          for (; X < h.length; X += 1) h[X].d(1);
          h.length = w.length;
        }
        (!_ || B[0] & 1) && d(n, 'width', C[0]),
          (!_ || B[0] & 2) && d(n, 'height', C[1]),
          !o && B[0] & 512 && !isNaN(C[9]) && (n.currentTime = C[9]),
          (o = !1),
          B[0] & 4096 && s !== (s = C[12]) && n[s ? 'pause' : 'play'](),
          B[0] & 8192 && !isNaN(C[13]) && (n.volume = C[13]),
          C[2] && C[30]
            ? k
              ? (k.p(C, B), B[0] & 1073741828 && S(k, 1))
              : ((k = Nt(C)), k.c(), S(k, 1), k.m(e, f))
            : k &&
              (he(),
              E(k, 1, 1, () => {
                k = null;
              }),
              me());
        const U = {};
        (B[0] & 1039839872) | (B[2] & 134217728) &&
          (U.$$scope = { dirty: B, ctx: C }),
          c.$set(U),
          (!_ || (B[0] & 16384 && a !== (a = C[14] ? '0' : '-1'))) &&
            d(e, 'tabindex', a);
      },
      i(C) {
        _ || (S(k), S(c.$$.fragment, C), (_ = !0));
      },
      o(C) {
        E(k), E(c.$$.fragment, C), (_ = !1);
      },
      d(C) {
        C && V(e),
          Jt(h, C),
          t[60](null),
          k && k.d(),
          H(c),
          t[74](null),
          (g = !1),
          ee(m);
      },
    }
  );
}
function qt(t) {
  let e;
  let n;
  let i;
  return {
    c() {
      (e = T('source')),
        Ae(e.src, (n = t[84])) || d(e, 'src', n),
        d(e, 'type', (i = t[85]));
    },
    m(r, o) {
      M(r, e, o);
    },
    p(r, o) {
      o[1] & 1 && !Ae(e.src, (n = r[84])) && d(e, 'src', n),
        o[1] & 1 && i !== (i = r[85]) && d(e, 'type', i);
    },
    d(r) {
      r && V(e);
    },
  };
}
function Nt(t) {
  let e;
  let n;
  return (
    (e = new ci({ props: { src: t[2] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r[0] & 4 && (o.src = i[2]), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Xt(t) {
  let e;
  let n;
  return (
    (e = new vr({ props: { duration: t[19], currentTime: t[9] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r[0] & 524288 && (o.duration = i[19]),
          r[0] & 512 && (o.currentTime = i[9]),
          e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function At(t) {
  let e;
  let n;
  return (
    (e = new ur({ props: { isFullscreen: t[24] } })),
    e.$on('pointerup', t[41]),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r[0] & 16777216 && (o.isFullscreen = i[24]), e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function yr(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  let m;
  let w;
  (e = new ji({ props: { paused: t[12] } })), e.$on('pointerup', t[43]);
  function h(p) {
    t[69](p);
  }
  function z(p) {
    t[70](p);
  }
  function k(p) {
    t[71](p);
  }
  const C = {
    duration: t[19],
    buffered: t[20],
    played: t[21],
    isBottomControlsVisible: t[27],
  };
  t[9] !== void 0 && (C.currentTime = t[9]),
    t[12] !== void 0 && (C.paused = t[12]),
    t[17] !== void 0 && (C.isScrubbing = t[17]),
    (i = new Mi({ props: C })),
    Z.push(() => le(i, 'currentTime', h)),
    Z.push(() => le(i, 'paused', z)),
    Z.push(() => le(i, 'isScrubbing', k)),
    i.$on('pointerup', t[42]);
  let B = t[7] && Xt(t);
  (f = new Qi({ props: { muted: t[26] } })), f.$on('pointerup', t[44]);
  function U(p) {
    t[72](p);
  }
  const X = {};
  t[13] !== void 0 && (X.volume = t[13]),
    (a = new tr({ props: X })),
    Z.push(() => le(a, 'volume', U));
  let N = t[23] && At(t);
  return {
    c() {
      q(e.$$.fragment),
        (n = K()),
        q(i.$$.fragment),
        (s = K()),
        B && B.c(),
        (u = K()),
        q(f.$$.fragment),
        (c = K()),
        q(a.$$.fragment),
        (g = K()),
        N && N.c(),
        (m = $e());
    },
    m(p, F) {
      D(e, p, F),
        M(p, n, F),
        D(i, p, F),
        M(p, s, F),
        B && B.m(p, F),
        M(p, u, F),
        D(f, p, F),
        M(p, c, F),
        D(a, p, F),
        M(p, g, F),
        N && N.m(p, F),
        M(p, m, F),
        (w = !0);
    },
    p(p, F) {
      const G = {};
      F[0] & 4096 && (G.paused = p[12]), e.$set(G);
      const y = {};
      F[0] & 524288 && (y.duration = p[19]),
        F[0] & 1048576 && (y.buffered = p[20]),
        F[0] & 2097152 && (y.played = p[21]),
        F[0] & 134217728 && (y.isBottomControlsVisible = p[27]),
        !r &&
          F[0] & 512 &&
          ((r = !0), (y.currentTime = p[9]), re(() => (r = !1))),
        !o && F[0] & 4096 && ((o = !0), (y.paused = p[12]), re(() => (o = !1))),
        !l &&
          F[0] & 131072 &&
          ((l = !0), (y.isScrubbing = p[17]), re(() => (l = !1))),
        i.$set(y),
        p[7]
          ? B
            ? (B.p(p, F), F[0] & 128 && S(B, 1))
            : ((B = Xt(p)), B.c(), S(B, 1), B.m(u.parentNode, u))
          : B &&
            (he(),
            E(B, 1, 1, () => {
              B = null;
            }),
            me());
      const te = {};
      F[0] & 67108864 && (te.muted = p[26]), f.$set(te);
      const O = {};
      !_ && F[0] & 8192 && ((_ = !0), (O.volume = p[13]), re(() => (_ = !1))),
        a.$set(O),
        p[23]
          ? N
            ? (N.p(p, F), F[0] & 8388608 && S(N, 1))
            : ((N = At(p)), N.c(), S(N, 1), N.m(m.parentNode, m))
          : N &&
            (he(),
            E(N, 1, 1, () => {
              N = null;
            }),
            me());
    },
    i(p) {
      w ||
        (S(e.$$.fragment, p),
        S(i.$$.fragment, p),
        S(B),
        S(f.$$.fragment, p),
        S(a.$$.fragment, p),
        S(N),
        (w = !0));
    },
    o(p) {
      E(e.$$.fragment, p),
        E(i.$$.fragment, p),
        E(B),
        E(f.$$.fragment, p),
        E(a.$$.fragment, p),
        E(N),
        (w = !1);
    },
    d(p) {
      p && (V(n), V(s), V(u), V(c), V(g), V(m)),
        H(e, p),
        H(i, p),
        B && B.d(p),
        H(f, p),
        H(a, p),
        N && N.d(p);
    },
  };
}
function Cr(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  function l(u) {
    t[73](u);
  }
  const s = { hidden: !t[27], $$slots: { default: [yr] }, $$scope: { ctx: t } };
  return (
    t[22] !== void 0 && (s.isPointerOver = t[22]),
    (e = new Bi({ props: s })),
    Z.push(() => le(e, 'isPointerOver', l)),
    (r = new Ci({
      props: {
        isIconVisible: t[28],
        isSpinnerVisible: t[29],
        isBuffering: t[15],
      },
    })),
    r.$on('togglePause', t[45]),
    {
      c() {
        q(e.$$.fragment), (i = K()), q(r.$$.fragment);
      },
      m(u, f) {
        D(e, u, f), M(u, i, f), D(r, u, f), (o = !0);
      },
      p(u, f) {
        const c = {};
        f[0] & 134217728 && (c.hidden = !u[27]),
          (f[0] & 230306432) | (f[2] & 134217728) &&
            (c.$$scope = { dirty: f, ctx: u }),
          !n &&
            f[0] & 4194304 &&
            ((n = !0), (c.isPointerOver = u[22]), re(() => (n = !1))),
          e.$set(c);
        const a = {};
        f[0] & 268435456 && (a.isIconVisible = u[28]),
          f[0] & 536870912 && (a.isSpinnerVisible = u[29]),
          f[0] & 32768 && (a.isBuffering = u[15]),
          r.$set(a);
      },
      i(u) {
        o || (S(e.$$.fragment, u), S(r.$$.fragment, u), (o = !0));
      },
      o(u) {
        E(e.$$.fragment, u), E(r.$$.fragment, u), (o = !1);
      },
      d(u) {
        u && V(i), H(e, u), H(r, u);
      },
    }
  );
}
function Sr(t) {
  let e;
  let n;
  let i;
  return (
    (n = new $t({ props: { color: t[4], size: '60px' } })),
    {
      c() {
        (e = T('div')), q(n.$$.fragment), d(e, 'class', 'svelte-1ai3mbf');
      },
      m(r, o) {
        M(r, e, o), D(n, e, null), (i = !0);
      },
      p(r, o) {
        const l = {};
        o[0] & 16 && (l.color = r[4]), n.$set(l);
      },
      i(r) {
        i || (S(n.$$.fragment, r), (i = !0));
      },
      o(r) {
        E(n.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && V(e), H(n);
      },
    }
  );
}
function Pr(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  let m;
  let w;
  let h = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Sr,
    then: kr,
    catch: wr,
    error: 88,
    blocks: [, , ,],
  };
  Et((n = Tt(t[2])), h);
  function z(p) {
    t[75](p);
  }
  const k = {};
  t[16] !== void 0 && (k.isIdle = t[16]),
    (r = new gr({ props: k })),
    Z.push(() => le(r, 'isIdle', z));
  function C(p) {
    t[76](p);
  }
  const B = {};
  t[25] !== void 0 && (B.isScrolling = t[25]),
    (s = new _r({ props: B })),
    Z.push(() => le(s, 'isScrolling', C));
  function U(p) {
    t[77](p);
  }
  function X(p) {
    t[78](p);
  }
  const N = { element: t[18] };
  return (
    t[23] !== void 0 && (N.isFullscreenEnabled = t[23]),
    t[24] !== void 0 && (N.isFullscreen = t[24]),
    (c = new cr({ props: N })),
    Z.push(() => le(c, 'isFullscreenEnabled', U)),
    Z.push(() => le(c, 'isFullscreen', X)),
    {
      c() {
        (e = T('div')),
          h.block.c(),
          (i = K()),
          q(r.$$.fragment),
          (l = K()),
          q(s.$$.fragment),
          (f = K()),
          q(c.$$.fragment),
          d(e, 'class', 'aspect svelte-1ai3mbf'),
          v(e, 'padding-top', `${t[6] * 100}%`),
          v(e, 'background-color', t[3]),
          v(e, 'border-radius', t[5]);
      },
      m(p, F) {
        M(p, e, F),
          h.block.m(e, (h.anchor = null)),
          (h.mount = () => e),
          (h.anchor = i),
          P(e, i),
          D(r, e, null),
          P(e, l),
          D(s, e, null),
          P(e, f),
          D(c, e, null),
          (g = !0),
          m ||
            ((w = [R(window, 'keydown', t[39]), R(window, 'keyup', t[40])]),
            (m = !0));
      },
      p(p, F) {
        (t = p),
          (h.ctx = t),
          (F[0] & 4 && n !== (n = Tt(t[2])) && Et(n, h)) || ni(h, t, F);
        const G = {};
        !o &&
          F[0] & 65536 &&
          ((o = !0), (G.isIdle = t[16]), re(() => (o = !1))),
          r.$set(G);
        const y = {};
        !u &&
          F[0] & 33554432 &&
          ((u = !0), (y.isScrolling = t[25]), re(() => (u = !1))),
          s.$set(y);
        const te = {};
        F[0] & 262144 && (te.element = t[18]),
          !a &&
            F[0] & 8388608 &&
            ((a = !0), (te.isFullscreenEnabled = t[23]), re(() => (a = !1))),
          !_ &&
            F[0] & 16777216 &&
            ((_ = !0), (te.isFullscreen = t[24]), re(() => (_ = !1))),
          c.$set(te),
          (!g || F[0] & 64) && v(e, 'padding-top', `${t[6] * 100}%`),
          (!g || F[0] & 8) && v(e, 'background-color', t[3]),
          (!g || F[0] & 32) && v(e, 'border-radius', t[5]);
      },
      i(p) {
        g ||
          (S(h.block),
          S(r.$$.fragment, p),
          S(s.$$.fragment, p),
          S(c.$$.fragment, p),
          (g = !0));
      },
      o(p) {
        for (let F = 0; F < 3; F += 1) {
          const G = h.blocks[F];
          E(G);
        }
        E(r.$$.fragment, p), E(s.$$.fragment, p), E(c.$$.fragment, p), (g = !1);
      },
      d(p) {
        p && V(e),
          h.block.d(),
          (h.token = null),
          (h = null),
          H(r),
          H(s),
          H(c),
          (m = !1),
          ee(w);
      },
    }
  );
}
let fe;
function Br(t) {
  fe && fe !== t.target && fe.pause(), (fe = t.target);
}
function Fr(t, e, n) {
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let { width: a } = e;
  let { height: _ } = e;
  let { poster: g } = e;
  let { source: m } = e;
  let { controlsHeight: w } = e;
  let { trackHeight: h } = e;
  let { thumbSize: z } = e;
  let { centerIconSize: k } = e;
  let { playerBgColor: C } = e;
  let { color: B } = e;
  let { focusColor: U } = e;
  let { barsBgColor: X } = e;
  let { iconColor: N } = e;
  let { bufferedColor: p } = e;
  let { chunkBars: F } = e;
  let { borderRadius: G } = e;
  let { loop: y } = e;
  let { skipSeconds: te } = e;
  let { aspectRatio: O } = e;
  let { controlsOnPause: ne } = e;
  let { timeDisplay: et } = e;
  const J = oi({});
  ie(t, J, (b) => n(82, (c = b))), Qn('config', J);
  let tt;
  let Q;
  let de = 0;
  let nt;
  let ye = [];
  let it = [];
  let ze;
  let ae;
  let x = !0;
  let ue = 1;
  let rt = 1;
  let Ce = !1;
  let Te = !1;
  let Ve = !1;
  let Ie = !1;
  let ot = !1;
  let Se = !1;
  let Re = !1;
  let Oe = !1;
  let Me = !1;
  let De = !1;
  function rn(b) {
    n(14, (Ce = !0));
  }
  function on(b) {
    n(15, (Ie = !1));
  }
  function ln(b) {
    n(15, (Ie = !0));
  }
  function sn(b) {
    n(59, (Te = !0));
  }
  function un(b) {
    n(59, (Te = !1));
  }
  function fn(b) {
    !Ve && !Oe && n(12, (x = !x));
  }
  function cn(b) {
    if (fe === Q) {
      switch (b.code) {
        case 'Tab':
          if (De) break;
          s || (b.stopPropagation(), b.preventDefault(), n(27, (s = !0)));
          break;
        case 'Space':
          if (De) break;
          b.preventDefault(), fe.paused ? fe.play() : fe.pause();
          break;
        case 'ArrowLeft':
          b.preventDefault(), St(!0);
          break;
        case 'ArrowRight':
          b.preventDefault(), St();
          break;
      }
      De = !0;
    }
  }
  function an(b) {
    fe === Q && (De = !1);
  }
  function St(b) {
    const He = Q.currentTime;
    const Pt = Q.duration;
    b
      ? n(8, (Q.currentTime = He > r ? He - r : 0), Q)
      : n(8, (Q.currentTime = He + r < Pt ? He + r : Pt - 0.2), Q);
  }
  function dn(b) {
    n(24, (Se = !Se));
  }
  function gn(b) {
    Q != Q && n(12, (x = !1));
  }
  function hn(b) {
    n(12, (x = !x));
  }
  function mn(b) {
    o ? (n(13, (ue = rt)), (rt = 1)) : ((rt = ue), n(13, (ue = 0)));
  }
  function _n() {
    n(12, (x = !x));
  }
  function bn(b) {
    Z[b ? 'unshift' : 'push'](() => {
      (Q = b), n(8, Q);
    });
  }
  function pn() {
    (de = this.currentTime),
      (it = st(this.played)),
      (ae = this.ended),
      n(9, de),
      n(11, ae),
      n(56, y),
      n(8, Q),
      n(21, it),
      n(11, ae);
  }
  function vn() {
    (nt = this.duration), n(19, nt);
  }
  function wn() {
    (ye = st(this.buffered)), n(20, ye);
  }
  function kn() {
    (ye = st(this.buffered)), n(20, ye);
  }
  function yn() {
    (ze = this.seeking), n(10, ze);
  }
  function Cn() {
    (ae = this.ended), n(11, ae);
  }
  function Sn() {
    (x = this.paused), n(12, x);
  }
  function Pn() {
    (ue = this.volume), n(13, ue);
  }
  function Bn(b) {
    (de = b), n(9, de), n(11, ae), n(56, y), n(8, Q);
  }
  function Fn(b) {
    (x = b), n(12, x);
  }
  function En(b) {
    (Me = b), n(17, Me);
  }
  function zn(b) {
    (ue = b), n(13, ue);
  }
  function Tn(b) {
    (Ve = b), n(22, Ve);
  }
  function Vn(b) {
    Z[b ? 'unshift' : 'push'](() => {
      (tt = b), n(18, tt);
    });
  }
  function In(b) {
    (Re = b), n(16, Re);
  }
  function Rn(b) {
    (Oe = b), n(25, Oe);
  }
  function On(b) {
    (ot = b), n(23, ot);
  }
  function Mn(b) {
    (Se = b), n(24, Se);
  }
  return (
    (t.$$set = (b) => {
      'width' in b && n(0, (a = b.width)),
        'height' in b && n(1, (_ = b.height)),
        'poster' in b && n(2, (g = b.poster)),
        'source' in b && n(46, (m = b.source)),
        'controlsHeight' in b && n(47, (w = b.controlsHeight)),
        'trackHeight' in b && n(48, (h = b.trackHeight)),
        'thumbSize' in b && n(49, (z = b.thumbSize)),
        'centerIconSize' in b && n(50, (k = b.centerIconSize)),
        'playerBgColor' in b && n(3, (C = b.playerBgColor)),
        'color' in b && n(51, (B = b.color)),
        'focusColor' in b && n(52, (U = b.focusColor)),
        'barsBgColor' in b && n(53, (X = b.barsBgColor)),
        'iconColor' in b && n(4, (N = b.iconColor)),
        'bufferedColor' in b && n(54, (p = b.bufferedColor)),
        'chunkBars' in b && n(55, (F = b.chunkBars)),
        'borderRadius' in b && n(5, (G = b.borderRadius)),
        'loop' in b && n(56, (y = b.loop)),
        'skipSeconds' in b && n(57, (te = b.skipSeconds)),
        'aspectRatio' in b && n(6, (O = b.aspectRatio)),
        'controlsOnPause' in b && n(58, (ne = b.controlsOnPause)),
        'timeDisplay' in b && n(7, (et = b.timeDisplay));
    }),
    (t.$$.update = () => {
      t.$$.dirty[1] & 32768 && n(31, (i = li(m))),
        t.$$.dirty[1] & 67108864 && (r = parseFloat(te)),
        t.$$.dirty[1] & 65536 && $(J, (c.controlsHeight = w), c),
        t.$$.dirty[1] & 262144 && $(J, (c.thumbSize = z), c),
        t.$$.dirty[1] & 131072 && $(J, (c.trackHeight = h), c),
        t.$$.dirty[1] & 524288 && $(J, (c.centerIconSize = k), c),
        t.$$.dirty[1] & 1048576 && $(J, (c.color = B), c),
        t.$$.dirty[0] & 8 && $(J, (c.playerBgColor = C), c),
        t.$$.dirty[1] & 2097152 && $(J, (c.focusColor = U), c),
        t.$$.dirty[1] & 4194304 && $(J, (c.barsBgColor = X), c),
        t.$$.dirty[0] & 16 && $(J, (c.iconColor = N), c),
        t.$$.dirty[1] & 8388608 && $(J, (c.bufferedColor = p), c),
        t.$$.dirty[1] & 16777216 && $(J, (c.chunkBars = F), c),
        t.$$.dirty[1] & 33554432 && $(J, (c.loop = y), c),
        t.$$.dirty[0] & 32 && $(J, (c.borderRadius = G), c),
        t.$$.dirty[1] & 134217728 && $(J, (c.controlsOnPause = ne), c),
        t.$$.dirty[0] & 128 && $(J, (c.timeDisplay = et), c),
        t.$$.dirty[0] & 8192 && n(26, (o = ue == 0)),
        (t.$$.dirty[0] & 2304) | (t.$$.dirty[1] & 33554432) &&
          ae &&
          (n(9, (de = 0)), y && Q.play()),
        t.$$.dirty[0] & 20992 && n(30, (l = !Ce || (x && de == 0))),
        (t.$$.dirty[0] & 86016) | (t.$$.dirty[1] & 402653184) &&
          n(27, (s = Ce && ((x && ne) || (Te && !Re)))),
        t.$$.dirty[0] & 33792 && n(29, (u = ze || Ie)),
        t.$$.dirty[0] & 151552 && n(28, (f = !Ce || (x && !Me)));
    }),
    [
      a,
      _,
      g,
      C,
      N,
      G,
      O,
      et,
      Q,
      de,
      ze,
      ae,
      x,
      ue,
      Ce,
      Ie,
      Re,
      Me,
      tt,
      nt,
      ye,
      it,
      Ve,
      ot,
      Se,
      Oe,
      o,
      s,
      f,
      u,
      l,
      i,
      J,
      rn,
      on,
      ln,
      sn,
      un,
      fn,
      cn,
      an,
      dn,
      gn,
      hn,
      mn,
      _n,
      m,
      w,
      h,
      z,
      k,
      B,
      U,
      X,
      p,
      F,
      y,
      te,
      ne,
      Te,
      bn,
      pn,
      vn,
      wn,
      kn,
      yn,
      Cn,
      Sn,
      Pn,
      Bn,
      Fn,
      En,
      zn,
      Tn,
      Vn,
      In,
      Rn,
      On,
      Mn,
    ]
  );
}
class Er extends L {
  constructor(e) {
    super(),
      j(
        this,
        e,
        Fr,
        Pr,
        A,
        {
          width: 0,
          height: 1,
          poster: 2,
          source: 46,
          controlsHeight: 47,
          trackHeight: 48,
          thumbSize: 49,
          centerIconSize: 50,
          playerBgColor: 3,
          color: 51,
          focusColor: 52,
          barsBgColor: 53,
          iconColor: 4,
          bufferedColor: 54,
          chunkBars: 55,
          borderRadius: 5,
          loop: 56,
          skipSeconds: 57,
          aspectRatio: 6,
          controlsOnPause: 58,
          timeDisplay: 7,
        },
        null,
        [-1, -1, -1],
      );
  }
}
function zr(t) {
  let e;
  return {
    c() {
      (e = T('div')),
        d(e, 'class', 'aspect svelte-1sqfmr5'),
        v(e, 'padding-top', `${t[2] * 100}%`),
        v(e, 'background-color', t[0]),
        v(e, 'border-radius', t[1]);
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, [i]) {
      i & 4 && v(e, 'padding-top', `${n[2] * 100}%`),
        i & 1 && v(e, 'background-color', n[0]),
        i & 2 && v(e, 'border-radius', n[1]);
    },
    i: I,
    o: I,
    d(n) {
      n && V(e);
    },
  };
}
function Tr(t, e, n) {
  let { playerBgColor: i } = e;
  let { borderRadius: r } = e;
  let { aspectRatio: o } = e;
  return (
    (t.$$set = (l) => {
      'playerBgColor' in l && n(0, (i = l.playerBgColor)),
        'borderRadius' in l && n(1, (r = l.borderRadius)),
        'aspectRatio' in l && n(2, (o = l.aspectRatio));
    }),
    [i, r, o]
  );
}
class Vr extends L {
  constructor(e) {
    super(),
      j(this, e, Tr, zr, A, {
        playerBgColor: 0,
        borderRadius: 1,
        aspectRatio: 2,
      });
  }
}
function Ir(t) {
  let e;
  let n;
  return (
    (e = new Vr({
      props: { playerBgColor: t[8], borderRadius: t[15], aspectRatio: t[20] },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 256 && (o.playerBgColor = i[8]),
          r & 32768 && (o.borderRadius = i[15]),
          r & 1048576 && (o.aspectRatio = i[20]),
          e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Rr(t) {
  let e;
  let n;
  return (
    (e = new Er({
      props: {
        width: t[0],
        height: t[1],
        poster: t[2],
        source: t[3],
        controlsHeight: t[4],
        trackHeight: t[5],
        thumbSize: t[6],
        centerIconSize: t[7],
        playerBgColor: t[8],
        color: t[9],
        focusColor: t[10],
        barsBgColor: t[11],
        iconColor: t[12],
        bufferedColor: t[13],
        chunkBars: t[14],
        borderRadius: t[15],
        loop: t[16],
        skipSeconds: t[17],
        aspectRatio: t[20],
        controlsOnPause: t[18],
        timeDisplay: t[19],
      },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      m(i, r) {
        D(e, i, r), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 1 && (o.width = i[0]),
          r & 2 && (o.height = i[1]),
          r & 4 && (o.poster = i[2]),
          r & 8 && (o.source = i[3]),
          r & 16 && (o.controlsHeight = i[4]),
          r & 32 && (o.trackHeight = i[5]),
          r & 64 && (o.thumbSize = i[6]),
          r & 128 && (o.centerIconSize = i[7]),
          r & 256 && (o.playerBgColor = i[8]),
          r & 512 && (o.color = i[9]),
          r & 1024 && (o.focusColor = i[10]),
          r & 2048 && (o.barsBgColor = i[11]),
          r & 4096 && (o.iconColor = i[12]),
          r & 8192 && (o.bufferedColor = i[13]),
          r & 16384 && (o.chunkBars = i[14]),
          r & 32768 && (o.borderRadius = i[15]),
          r & 65536 && (o.loop = i[16]),
          r & 131072 && (o.skipSeconds = i[17]),
          r & 1048576 && (o.aspectRatio = i[20]),
          r & 262144 && (o.controlsOnPause = i[18]),
          r & 524288 && (o.timeDisplay = i[19]),
          e.$set(o);
      },
      i(i) {
        n || (S(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        E(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        H(e, i);
      },
    }
  );
}
function Or(t) {
  let e;
  let n;
  let i;
  let r;
  const o = [Rr, Ir];
  const l = [];
  function s(u, f) {
    return u[21] ? 0 : 1;
  }
  return (
    (e = s(t)),
    (n = l[e] = o[e](t)),
    {
      c() {
        n.c(), (i = $e());
      },
      m(u, f) {
        l[e].m(u, f), M(u, i, f), (r = !0);
      },
      p(u, [f]) {
        n.p(u, f);
      },
      i(u) {
        r || (S(n), (r = !0));
      },
      o(u) {
        E(n), (r = !1);
      },
      d(u) {
        u && V(i), l[e].d(u);
      },
    }
  );
}
function Mr(t, e, n) {
  let i;
  let r;
  let o;
  const l = typeof window < 'u';
  let { width: s = 1920 } = e;
  let { height: u = 1080 } = e;
  let { poster: f = '' } = e;
  let { source: c = '' } = e;
  let { controlsHeight: a = '55px' } = e;
  let { trackHeight: _ = '6px' } = e;
  let { thumbSize: g = '15px' } = e;
  let { centerIconSize: m = '60px' } = e;
  let { playerBgColor: w = 'black' } = e;
  let { color: h = '#FF3E00' } = e;
  let { focusColor: z = 'white' } = e;
  let { barsBgColor: k = 'white' } = e;
  let { iconColor: C = 'white' } = e;
  let { bufferedColor: B = '#FF9600' } = e;
  let { chunkBars: U = !1 } = e;
  let { borderRadius: X = '8px' } = e;
  let { loop: N = !1 } = e;
  let { skipSeconds: p = 5 } = e;
  let { controlsOnPause: F = !0 } = e;
  let { timeDisplay: G = !1 } = e;
  return (
    (t.$$set = (y) => {
      'width' in y && n(0, (s = y.width)),
        'height' in y && n(1, (u = y.height)),
        'poster' in y && n(2, (f = y.poster)),
        'source' in y && n(3, (c = y.source)),
        'controlsHeight' in y && n(4, (a = y.controlsHeight)),
        'trackHeight' in y && n(5, (_ = y.trackHeight)),
        'thumbSize' in y && n(6, (g = y.thumbSize)),
        'centerIconSize' in y && n(7, (m = y.centerIconSize)),
        'playerBgColor' in y && n(8, (w = y.playerBgColor)),
        'color' in y && n(9, (h = y.color)),
        'focusColor' in y && n(10, (z = y.focusColor)),
        'barsBgColor' in y && n(11, (k = y.barsBgColor)),
        'iconColor' in y && n(12, (C = y.iconColor)),
        'bufferedColor' in y && n(13, (B = y.bufferedColor)),
        'chunkBars' in y && n(14, (U = y.chunkBars)),
        'borderRadius' in y && n(15, (X = y.borderRadius)),
        'loop' in y && n(16, (N = y.loop)),
        'skipSeconds' in y && n(17, (p = y.skipSeconds)),
        'controlsOnPause' in y && n(18, (F = y.controlsOnPause)),
        'timeDisplay' in y && n(19, (G = y.timeDisplay));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1 && n(22, (i = parseInt(s))),
        t.$$.dirty & 2 && n(23, (r = parseInt(u))),
        t.$$.dirty & 12582912 && n(20, (o = r / i));
    }),
    [s, u, f, c, a, _, g, m, w, h, z, k, C, B, U, X, N, p, F, G, o, l, i, r]
  );
}
class Dr extends L {
  constructor(e) {
    super(),
      j(this, e, Mr, Or, A, {
        width: 0,
        height: 1,
        poster: 2,
        source: 3,
        controlsHeight: 4,
        trackHeight: 5,
        thumbSize: 6,
        centerIconSize: 7,
        playerBgColor: 8,
        color: 9,
        focusColor: 10,
        barsBgColor: 11,
        iconColor: 12,
        bufferedColor: 13,
        chunkBars: 14,
        borderRadius: 15,
        loop: 16,
        skipSeconds: 17,
        controlsOnPause: 18,
        timeDisplay: 19,
      });
  }
}
function Hr(t) {
  let e;
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let u;
  let f;
  let c;
  let a;
  let _;
  let g;
  return (
    (u = new Dr({
      props: {
        width: '500',
        height: '500',
        poster: './background.jpg',
        source: 'http://techslides.com/demos/sample-videos/small.webm',
        loop: !0,
      },
    })),
    {
      c() {
        (e = T('head')),
          (e.innerHTML = '<link rel="stylesheet" href="style.css"/>'),
          (n = K()),
          (i = T('main')),
          (r = T('h1')),
          (r.textContent = 'Initialer Commit 610'),
          (o = K()),
          (l = T('h1')),
          (l.textContent = 'Test'),
          (s = K()),
          q(u.$$.fragment),
          (f = K()),
          (c = T('p')),
          (c.innerHTML =
            'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!'),
          (a = K()),
          (_ = T('p')),
          (_.textContent = 'Click on the Vite and Svelte logos to learn more'),
          d(
            r,
            'class',
            'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white',
          ),
          d(
            l,
            'class',
            'mb-4 text-5xl font-bold leading-none tracking-tight text-red-900 md:text-5xl lg:text-6xl dark:text-white',
          ),
          d(_, 'class', 'read-the-docs');
      },
      m(m, w) {
        M(m, e, w),
          M(m, n, w),
          M(m, i, w),
          P(i, r),
          P(i, o),
          P(i, l),
          P(i, s),
          D(u, i, null),
          P(i, f),
          P(i, c),
          P(i, a),
          P(i, _),
          (g = !0);
      },
      p: I,
      i(m) {
        g || (S(u.$$.fragment, m), (g = !0));
      },
      o(m) {
        E(u.$$.fragment, m), (g = !1);
      },
      d(m) {
        m && (V(e), V(n), V(i)), H(u);
      },
    }
  );
}
class qr extends L {
  constructor(e) {
    super(), j(this, e, null, Hr, A, {});
  }
}
new qr({ target: document.getElementById('app') });
