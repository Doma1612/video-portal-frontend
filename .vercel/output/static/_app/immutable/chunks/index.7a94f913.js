function y() {}
function z(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function D(t) {
	return t();
}
function M() {
	return Object.create(null);
}
function x(t) {
	t.forEach(D);
}
function A(t) {
	return typeof t == 'function';
}
function ut(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function F(t) {
	return Object.keys(t).length === 0;
}
function G(t, ...n) {
	if (t == null) return y;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function st(t, n, e) {
	t.$$.on_destroy.push(G(n, e));
}
function lt(t, n, e, i) {
	if (t) {
		const r = B(t, n, e, i);
		return t[0](r);
	}
}
function B(t, n, e, i) {
	return t[1] && i ? z(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function ot(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == 'object') {
			const o = [],
				c = Math.max(n.dirty.length, r.length);
			for (let l = 0; l < c; l += 1) o[l] = n.dirty[l] | r[l];
			return o;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function ft(t, n, e, i, r, o) {
	if (r) {
		const c = B(n, e, i, o);
		t.p(c, r);
	}
}
function at(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
function dt(t) {
	return t && A(t.destroy) ? t.destroy : y;
}
let E = !1;
function I() {
	E = !0;
}
function J() {
	E = !1;
}
function K(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function R(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const u = [];
		for (let s = 0; s < n.length; s++) {
			const a = n[s];
			a.claim_order !== void 0 && u.push(a);
		}
		n = u;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let u = 0; u < n.length; u++) {
		const s = n[u].claim_order,
			a = (r > 0 && n[e[r]].claim_order <= s ? r + 1 : K(1, r, (b) => n[e[b]].claim_order, s)) - 1;
		i[u] = e[a] + 1;
		const f = a + 1;
		(e[f] = u), (r = Math.max(f, r));
	}
	const o = [],
		c = [];
	let l = n.length - 1;
	for (let u = e[r] + 1; u != 0; u = i[u - 1]) {
		for (o.push(n[u - 1]); l >= u; l--) c.push(n[l]);
		l--;
	}
	for (; l >= 0; l--) c.push(n[l]);
	o.reverse(), c.sort((u, s) => u.claim_order - s.claim_order);
	for (let u = 0, s = 0; u < c.length; u++) {
		for (; s < o.length && c[u].claim_order >= o[s].claim_order; ) s++;
		const a = s < o.length ? o[s] : null;
		t.insertBefore(c[u], a);
	}
}
function W(t, n) {
	if (E) {
		for (
			R(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function _t(t, n, e) {
	E && !e ? W(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function Q(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function U(t) {
	return document.createElement(t);
}
function S(t) {
	return document.createTextNode(t);
}
function ht() {
	return S(' ');
}
function mt() {
	return S('');
}
function pt(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function yt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function V(t) {
	return Array.from(t.childNodes);
}
function X(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function H(t, n, e, i, r = !1) {
	X(t);
	const o = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const l = t[c];
			if (n(l)) {
				const u = e(l);
				return u === void 0 ? t.splice(c, 1) : (t[c] = u), r || (t.claim_info.last_index = c), l;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const l = t[c];
			if (n(l)) {
				const u = e(l);
				return (
					u === void 0 ? t.splice(c, 1) : (t[c] = u),
					r ? u === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					l
				);
			}
		}
		return i();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function Y(t, n, e, i) {
	return H(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const o = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const l = r.attributes[c];
				e[l.name] || o.push(l.name);
			}
			o.forEach((c) => r.removeAttribute(c));
		},
		() => i(n)
	);
}
function gt(t, n, e) {
	return Y(t, n, e, U);
}
function Z(t, n) {
	return H(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => S(n),
		!0
	);
}
function xt(t) {
	return Z(t, ' ');
}
function bt(t, n) {
	(n = '' + n), t.data !== n && (t.data = n);
}
function $t(t, n) {
	t.value = n ?? '';
}
function Et(t, n, e, i) {
	e == null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
function wt(t, n) {
	const e = [];
	let i = 0;
	for (const r of n.childNodes)
		if (r.nodeType === 8) {
			const o = r.textContent.trim();
			o === `HEAD_${t}_END`
				? ((i -= 1), e.push(r))
				: o === `HEAD_${t}_START` && ((i += 1), e.push(r));
		} else i > 0 && e.push(r);
	return e;
}
function vt(t, n) {
	return new t(n);
}
let g;
function p(t) {
	g = t;
}
function L() {
	if (!g) throw new Error('Function called outside component initialization');
	return g;
}
function Nt(t) {
	L().$$.on_mount.push(t);
}
function At(t) {
	L().$$.after_update.push(t);
}
const h = [],
	T = [];
let m = [];
const k = [],
	O = Promise.resolve();
let v = !1;
function P() {
	v || ((v = !0), O.then(q));
}
function St() {
	return P(), O;
}
function N(t) {
	m.push(t);
}
const w = new Set();
let _ = 0;
function q() {
	if (_ !== 0) return;
	const t = g;
	do {
		try {
			for (; _ < h.length; ) {
				const n = h[_];
				_++, p(n), tt(n.$$);
			}
		} catch (n) {
			throw ((h.length = 0), (_ = 0), n);
		}
		for (p(null), h.length = 0, _ = 0; T.length; ) T.pop()();
		for (let n = 0; n < m.length; n += 1) {
			const e = m[n];
			w.has(e) || (w.add(e), e());
		}
		m.length = 0;
	} while (h.length);
	for (; k.length; ) k.pop()();
	(v = !1), w.clear(), p(t);
}
function tt(t) {
	if (t.fragment !== null) {
		t.update(), x(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(N);
	}
}
function nt(t) {
	const n = [],
		e = [];
	m.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))), e.forEach((i) => i()), (m = n);
}
const $ = new Set();
let d;
function jt() {
	d = { r: 0, c: [], p: d };
}
function Ct() {
	d.r || x(d.c), (d = d.p);
}
function et(t, n) {
	t && t.i && ($.delete(t), t.i(n));
}
function Mt(t, n, e, i) {
	if (t && t.o) {
		if ($.has(t)) return;
		$.add(t),
			d.c.push(() => {
				$.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	} else i && i();
}
function Tt(t) {
	t && t.c();
}
function kt(t, n) {
	t && t.l(n);
}
function it(t, n, e, i) {
	const { fragment: r, after_update: o } = t.$$;
	r && r.m(n, e),
		i ||
			N(() => {
				const c = t.$$.on_mount.map(D).filter(A);
				t.$$.on_destroy ? t.$$.on_destroy.push(...c) : x(c), (t.$$.on_mount = []);
			}),
		o.forEach(N);
}
function rt(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(nt(e.after_update),
		x(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function ct(t, n) {
	t.$$.dirty[0] === -1 && (h.push(t), P(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Dt(t, n, e, i, r, o, c, l = [-1]) {
	const u = g;
	p(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: y,
		not_equal: r,
		bound: M(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (u ? u.$$.context : [])),
		callbacks: M(),
		dirty: l,
		skip_bound: !1,
		root: n.target || u.$$.root
	});
	c && c(s.root);
	let a = !1;
	if (
		((s.ctx = e
			? e(t, n.props || {}, (f, b, ...j) => {
					const C = j.length ? j[0] : b;
					return (
						s.ctx &&
							r(s.ctx[f], (s.ctx[f] = C)) &&
							(!s.skip_bound && s.bound[f] && s.bound[f](C), a && ct(t, f)),
						b
					);
			  })
			: []),
		s.update(),
		(a = !0),
		x(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			I();
			const f = V(n.target);
			s.fragment && s.fragment.l(f), f.forEach(Q);
		} else s.fragment && s.fragment.c();
		n.intro && et(t.$$.fragment), it(t, n.target, n.anchor, n.customElement), J(), q();
	}
	p(u);
}
class Bt {
	$destroy() {
		rt(this, 1), (this.$destroy = y);
	}
	$on(n, e) {
		if (!A(e)) return y;
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !F(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	it as A,
	rt as B,
	lt as C,
	wt as D,
	W as E,
	ft as F,
	at as G,
	ot as H,
	st as I,
	dt as J,
	y as K,
	$t as L,
	pt as M,
	x as N,
	Bt as S,
	ht as a,
	_t as b,
	xt as c,
	Mt as d,
	mt as e,
	Ct as f,
	et as g,
	Q as h,
	Dt as i,
	At as j,
	U as k,
	gt as l,
	V as m,
	yt as n,
	Nt as o,
	Et as p,
	S as q,
	Z as r,
	ut as s,
	St as t,
	bt as u,
	jt as v,
	T as w,
	vt as x,
	Tt as y,
	kt as z
};