import {
	S as ll,
	i as el,
	s as tl,
	k as r,
	q as k,
	a as s,
	l as u,
	m as b,
	r as T,
	h as e,
	c as i,
	n as h,
	b as f,
	E as m,
	K as L
} from '../chunks/index.7a94f913.js';
function fl(g) {
	let _, j, x, B, D, z, v, w, F, A, n, S, o, p, K, G, H, N, O, U, q, E, R, I, y, W, C, P, V, a, J;
	return {
		c() {
			(_ = r('h1')),
				(j = k('Kursverwaltung')),
				(x = s()),
				(B = r('h3')),
				(D = k('Was wollen Sie tun?')),
				(z = s()),
				(v = r('a')),
				(w = r('button')),
				(F = k('Kurs anlegen')),
				(A = s()),
				(n = r('br')),
				(S = r('br')),
				(o = s()),
				(p = r('a')),
				(K = r('button')),
				(G = k('Teilnehmer hinzufügen')),
				(H = s()),
				(N = r('br')),
				(O = s()),
				(U = r('br')),
				(q = s()),
				(E = r('a')),
				(R = r('button')),
				(I = k('Kursteilnehmer verwalten')),
				(y = s()),
				(W = r('br')),
				(C = s()),
				(P = r('br')),
				(V = s()),
				(a = r('a')),
				(J = k('zurück')),
				this.h();
		},
		l(l) {
			_ = u(l, 'H1', {});
			var t = b(_);
			(j = T(t, 'Kursverwaltung')), t.forEach(e), (x = i(l)), (B = u(l, 'H3', {}));
			var M = b(B);
			(D = T(M, 'Was wollen Sie tun?')), M.forEach(e), (z = i(l)), (v = u(l, 'A', { href: !0 }));
			var Q = b(v);
			w = u(Q, 'BUTTON', {});
			var X = b(w);
			(F = T(X, 'Kurs anlegen')),
				X.forEach(e),
				Q.forEach(e),
				(A = i(l)),
				(n = u(l, 'BR', {})),
				(S = u(l, 'BR', {})),
				(o = i(l)),
				(p = u(l, 'A', { href: !0 }));
			var Y = b(p);
			K = u(Y, 'BUTTON', {});
			var Z = b(K);
			(G = T(Z, 'Teilnehmer hinzufügen')),
				Z.forEach(e),
				Y.forEach(e),
				(H = i(l)),
				(N = u(l, 'BR', {})),
				(O = i(l)),
				(U = u(l, 'BR', {})),
				(q = i(l)),
				(E = u(l, 'A', { href: !0 }));
			var $ = b(E);
			R = u($, 'BUTTON', {});
			var c = b(R);
			(I = T(c, 'Kursteilnehmer verwalten')),
				c.forEach(e),
				$.forEach(e),
				(y = i(l)),
				(W = u(l, 'BR', {})),
				(C = i(l)),
				(P = u(l, 'BR', {})),
				(V = i(l)),
				(a = u(l, 'A', { href: !0 }));
			var d = b(a);
			(J = T(d, 'zurück')), d.forEach(e), this.h();
		},
		h() {
			h(v, 'href', 'kurs/kursAnlegen'),
				h(p, 'href', 'kurs/teilnehmerHinzufuegen'),
				h(E, 'href', 'kurs/kursteilnehmerVerwalten'),
				h(a, 'href', '/');
		},
		m(l, t) {
			f(l, _, t),
				m(_, j),
				f(l, x, t),
				f(l, B, t),
				m(B, D),
				f(l, z, t),
				f(l, v, t),
				m(v, w),
				m(w, F),
				f(l, A, t),
				f(l, n, t),
				f(l, S, t),
				f(l, o, t),
				f(l, p, t),
				m(p, K),
				m(K, G),
				f(l, H, t),
				f(l, N, t),
				f(l, O, t),
				f(l, U, t),
				f(l, q, t),
				f(l, E, t),
				m(E, R),
				m(R, I),
				f(l, y, t),
				f(l, W, t),
				f(l, C, t),
				f(l, P, t),
				f(l, V, t),
				f(l, a, t),
				m(a, J);
		},
		p: L,
		i: L,
		o: L,
		d(l) {
			l && e(_),
				l && e(x),
				l && e(B),
				l && e(z),
				l && e(v),
				l && e(A),
				l && e(n),
				l && e(S),
				l && e(o),
				l && e(p),
				l && e(H),
				l && e(N),
				l && e(O),
				l && e(U),
				l && e(q),
				l && e(E),
				l && e(y),
				l && e(W),
				l && e(C),
				l && e(P),
				l && e(V),
				l && e(a);
		}
	};
}
class ul extends ll {
	constructor(_) {
		super(), el(this, _, null, fl, tl, {});
	}
}
export { ul as component };
