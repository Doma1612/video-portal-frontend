import {
	S as I,
	i as J,
	s as L,
	k as f,
	q as T,
	a as h,
	l as i,
	m as n,
	r as E,
	h as l,
	c as v,
	n as C,
	b as r,
	E as b,
	K
} from '../chunks/index.7a94f913.js';
function M(G) {
	let s, N, w, _, O, B, a, p, U, x, A, R, S, m, o, W, k, q, y, H, u, Z;
	return {
		c() {
			(s = f('h1')),
				(N = T('Teilnehmerverwaltung')),
				(w = h()),
				(_ = f('h3')),
				(O = T('Was wollen Sie tun?')),
				(B = h()),
				(a = f('a')),
				(p = f('button')),
				(U = T('Teilnehmer anlegen')),
				(x = h()),
				(A = f('br')),
				(R = f('br')),
				(S = h()),
				(m = f('a')),
				(o = f('button')),
				(W = T('Teilnehmer verwalten')),
				(k = h()),
				(q = f('br')),
				(y = f('br')),
				(H = h()),
				(u = f('a')),
				(Z = T('Zurück')),
				this.h();
		},
		l(e) {
			s = i(e, 'H1', {});
			var t = n(s);
			(N = E(t, 'Teilnehmerverwaltung')), t.forEach(l), (w = v(e)), (_ = i(e, 'H3', {}));
			var P = n(_);
			(O = E(P, 'Was wollen Sie tun?')), P.forEach(l), (B = v(e)), (a = i(e, 'A', { href: !0 }));
			var V = n(a);
			p = i(V, 'BUTTON', {});
			var j = n(p);
			(U = E(j, 'Teilnehmer anlegen')),
				j.forEach(l),
				V.forEach(l),
				(x = v(e)),
				(A = i(e, 'BR', {})),
				(R = i(e, 'BR', {})),
				(S = v(e)),
				(m = i(e, 'A', { href: !0 }));
			var z = n(m);
			o = i(z, 'BUTTON', {});
			var D = n(o);
			(W = E(D, 'Teilnehmer verwalten')),
				D.forEach(l),
				z.forEach(l),
				(k = v(e)),
				(q = i(e, 'BR', {})),
				(y = i(e, 'BR', {})),
				(H = v(e)),
				(u = i(e, 'A', { href: !0 }));
			var F = n(u);
			(Z = E(F, 'Zurück')), F.forEach(l), this.h();
		},
		h() {
			C(a, 'href', 'teilnehmer/teilnehmerAnlegen'),
				C(m, 'href', 'teilnehmer/teilnehmerVerwalten'),
				C(u, 'href', '/');
		},
		m(e, t) {
			r(e, s, t),
				b(s, N),
				r(e, w, t),
				r(e, _, t),
				b(_, O),
				r(e, B, t),
				r(e, a, t),
				b(a, p),
				b(p, U),
				r(e, x, t),
				r(e, A, t),
				r(e, R, t),
				r(e, S, t),
				r(e, m, t),
				b(m, o),
				b(o, W),
				r(e, k, t),
				r(e, q, t),
				r(e, y, t),
				r(e, H, t),
				r(e, u, t),
				b(u, Z);
		},
		p: K,
		i: K,
		o: K,
		d(e) {
			e && l(s),
				e && l(w),
				e && l(_),
				e && l(B),
				e && l(a),
				e && l(x),
				e && l(A),
				e && l(R),
				e && l(S),
				e && l(m),
				e && l(k),
				e && l(q),
				e && l(y),
				e && l(H),
				e && l(u);
		}
	};
}
class X extends I {
	constructor(s) {
		super(), J(this, s, null, M, L, {});
	}
}
export { X as component };
