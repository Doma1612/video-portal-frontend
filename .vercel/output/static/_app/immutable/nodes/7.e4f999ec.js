import {
	S as H,
	i as J,
	s as K,
	k as o,
	q as y,
	a as w,
	l,
	m as c,
	r as x,
	h as r,
	c as L,
	D as M,
	n as s,
	b as P,
	E as t,
	J as R,
	K as A
} from '../chunks/index.7a94f913.js';
import { e as j } from '../chunks/forms.245b332f.js';
function z(F) {
	let n, U, b, E, a, _, u, S, i, T, v, m, q, d, I, h, N, B, V;
	return {
		c() {
			(n = o('h1')),
				(U = y('Login')),
				(b = w()),
				(E = w()),
				(a = o('form')),
				(_ = o('div')),
				(u = o('label')),
				(S = y(`Username
			`)),
				(i = o('input')),
				(T = w()),
				(v = o('div')),
				(m = o('label')),
				(q = y(`Password
		`)),
				(d = o('input')),
				(I = w()),
				(h = o('button')),
				(N = y('Sign in')),
				this.h();
		},
		l(e) {
			n = l(e, 'H1', {});
			var p = c(n);
			(U = x(p, 'Login')),
				p.forEach(r),
				(b = L(e)),
				M('svelte-1xtou35', document.head).forEach(r),
				(E = L(e)),
				(a = l(e, 'FORM', { method: !0 }));
			var f = c(a);
			_ = l(f, 'DIV', {});
			var g = c(_);
			u = l(g, 'LABEL', { for: !0 });
			var D = c(u);
			(S = x(
				D,
				`Username
			`
			)),
				(i = l(D, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				D.forEach(r),
				g.forEach(r),
				(T = L(f)),
				(v = l(f, 'DIV', {}));
			var k = c(v);
			m = l(k, 'LABEL', { for: !0 });
			var O = c(m);
			(q = x(
				O,
				`Password
		`
			)),
				(d = l(O, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				O.forEach(r),
				k.forEach(r),
				(I = L(f)),
				(h = l(f, 'BUTTON', { type: !0 }));
			var C = c(h);
			(N = x(C, 'Sign in')), C.forEach(r), f.forEach(r), this.h();
		},
		h() {
			(document.title = 'Loginb'),
				s(i, 'id', 'username'),
				s(i, 'name', 'username'),
				s(i, 'type', 'text'),
				(i.required = !0),
				s(i, 'placeholder', 'User-Name'),
				s(u, 'for', 'username'),
				s(d, 'id', 'password'),
				s(d, 'name', 'password'),
				s(d, 'type', 'password'),
				s(d, 'placeholder', 'password'),
				(d.required = !0),
				s(m, 'for', 'password'),
				s(h, 'type', 'submit'),
				s(a, 'method', 'POST');
		},
		m(e, p) {
			P(e, n, p),
				t(n, U),
				P(e, b, p),
				P(e, E, p),
				P(e, a, p),
				t(a, _),
				t(_, u),
				t(u, S),
				t(u, i),
				t(a, T),
				t(a, v),
				t(v, m),
				t(m, q),
				t(m, d),
				t(a, I),
				t(a, h),
				t(h, N),
				B || ((V = R(j.call(null, a))), (B = !0));
		},
		p: A,
		i: A,
		o: A,
		d(e) {
			e && r(n), e && r(b), e && r(E), e && r(a), (B = !1), V();
		}
	};
}
class X extends H {
	constructor(n) {
		super(), J(this, n, null, z, K, {});
	}
}
export { X as component };