import {
	S,
	i as T,
	s as q,
	C,
	a as L,
	k as v,
	D,
	h as f,
	c as A,
	l as b,
	m as E,
	b as d,
	E as k,
	F,
	G as I,
	H as M,
	g as B,
	d as G,
	I as H,
	q as $,
	r as g,
	n as p,
	J
} from '../chunks/index.7a94f913.js';
import { e as P } from '../chunks/forms.245b332f.js';
import { p as R } from '../chunks/stores.41a2e3b2.js';
function N(m) {
	let a, o;
	return {
		c() {
			(a = v('a')), (o = $('Login')), this.h();
		},
		l(i) {
			a = b(i, 'A', { href: !0 });
			var n = E(a);
			(o = g(n, 'Login')), n.forEach(f), this.h();
		},
		h() {
			p(a, 'href', '/login');
		},
		m(i, n) {
			d(i, a, n), k(a, o);
		},
		d(i) {
			i && f(a);
		}
	};
}
function O(m) {
	let a, o, i, n, c, u, t, s, h, r, e;
	return {
		c() {
			(a = v('a')),
				(o = $('Kundenverwaltung')),
				(i = L()),
				(n = v('a')),
				(c = $('Kontenverwaltung')),
				(u = L()),
				(t = v('form')),
				(s = v('button')),
				(h = $('Log out')),
				this.h();
		},
		l(l) {
			a = b(l, 'A', { href: !0 });
			var _ = E(a);
			(o = g(_, 'Kundenverwaltung')), _.forEach(f), (i = A(l)), (n = b(l, 'A', { href: !0 }));
			var y = E(n);
			(c = g(y, 'Kontenverwaltung')),
				y.forEach(f),
				(u = A(l)),
				(t = b(l, 'FORM', { class: !0, action: !0, method: !0 }));
			var w = E(t);
			s = b(w, 'BUTTON', { type: !0 });
			var K = E(s);
			(h = g(K, 'Log out')), K.forEach(f), w.forEach(f), this.h();
		},
		h() {
			p(a, 'href', '/kunden'),
				p(n, 'href', '/konten'),
				p(s, 'type', 'submit'),
				p(t, 'class', 'logout'),
				p(t, 'action', '?/logout'),
				p(t, 'method', 'POST');
		},
		m(l, _) {
			d(l, a, _),
				k(a, o),
				d(l, i, _),
				d(l, n, _),
				k(n, c),
				d(l, u, _),
				d(l, t, _),
				k(t, s),
				k(s, h),
				r || ((e = J(P.call(null, t))), (r = !0));
		},
		d(l) {
			l && f(a), l && f(i), l && f(n), l && f(u), l && f(t), (r = !1), e();
		}
	};
}
function U(m) {
	let a,
		o,
		i,
		n,
		c,
		u,
		t = !m[0].data.user && N(),
		s = m[0].data.user && O();
	const h = m[2].default,
		r = C(h, m, m[1], null);
	return {
		c() {
			(a = L()),
				(o = v('nav')),
				t && t.c(),
				(i = L()),
				s && s.c(),
				(n = L()),
				(c = v('main')),
				r && r.c(),
				this.h();
		},
		l(e) {
			D('svelte-88mx1k', document.head).forEach(f), (a = A(e)), (o = b(e, 'NAV', {}));
			var _ = E(o);
			t && t.l(_), (i = A(_)), s && s.l(_), _.forEach(f), (n = A(e)), (c = b(e, 'MAIN', {}));
			var y = E(c);
			r && r.l(y), y.forEach(f), this.h();
		},
		h() {
			document.title = 'Login Demo';
		},
		m(e, l) {
			d(e, a, l),
				d(e, o, l),
				t && t.m(o, null),
				k(o, i),
				s && s.m(o, null),
				d(e, n, l),
				d(e, c, l),
				r && r.m(c, null),
				(u = !0);
		},
		p(e, [l]) {
			e[0].data.user ? t && (t.d(1), (t = null)) : t || ((t = N()), t.c(), t.m(o, i)),
				e[0].data.user ? s || ((s = O()), s.c(), s.m(o, null)) : s && (s.d(1), (s = null)),
				r && r.p && (!u || l & 2) && F(r, h, e, e[1], u ? M(h, e[1], l, null) : I(e[1]), null);
		},
		i(e) {
			u || (B(r, e), (u = !0));
		},
		o(e) {
			G(r, e), (u = !1);
		},
		d(e) {
			e && f(a), e && f(o), t && t.d(), s && s.d(), e && f(n), e && f(c), r && r.d(e);
		}
	};
}
function V(m, a, o) {
	let i;
	H(m, R, (u) => o(0, (i = u)));
	let { $$slots: n = {}, $$scope: c } = a;
	return (
		(m.$$set = (u) => {
			'$$scope' in u && o(1, (c = u.$$scope));
		}),
		[i, c, n]
	);
}
class W extends S {
	constructor(a) {
		super(), T(this, a, V, U, q, {});
	}
}
export { W as component };