import {
	S as k,
	i as y,
	s as E,
	a as w,
	k as m,
	D as S,
	h as r,
	c as $,
	l as p,
	m as v,
	b as u,
	K as _,
	I as q,
	q as h,
	r as d,
	n as g,
	E as f,
	u as D
} from '../chunks/index.7a94f913.js';
import { p as H } from '../chunks/stores.41a2e3b2.js';
function I(c) {
	let e,
		n,
		t = c[0].status + '',
		l;
	return {
		c() {
			(e = m('h1')), (n = h('Something went wrong ')), (l = h(t)), this.h();
		},
		l(o) {
			e = p(o, 'H1', { class: !0 });
			var s = v(e);
			(n = d(s, 'Something went wrong ')), (l = d(s, t)), s.forEach(r), this.h();
		},
		h() {
			g(e, 'class', 'svelte-5accci');
		},
		m(o, s) {
			u(o, e, s), f(e, n), f(e, l);
		},
		p(o, s) {
			s & 1 && t !== (t = o[0].status + '') && D(l, t);
		},
		d(o) {
			o && r(e);
		}
	};
}
function N(c) {
	let e, n;
	return {
		c() {
			(e = m('h1')), (n = h('Not found!')), this.h();
		},
		l(t) {
			e = p(t, 'H1', { class: !0 });
			var l = v(e);
			(n = d(l, 'Not found!')), l.forEach(r), this.h();
		},
		h() {
			g(e, 'class', 'svelte-5accci');
		},
		m(t, l) {
			u(t, e, l), f(e, n);
		},
		p: _,
		d(t) {
			t && r(e);
		}
	};
}
function j(c) {
	let e, n, t;
	document.title = e = c[0].status;
	function l(a, i) {
		return a[0].status === 404 ? N : I;
	}
	let o = l(c),
		s = o(c);
	return {
		c() {
			(n = w()), (t = m('div')), s.c();
		},
		l(a) {
			S('svelte-1pmtc3j', document.head).forEach(r), (n = $(a)), (t = p(a, 'DIV', {}));
			var b = v(t);
			s.l(b), b.forEach(r);
		},
		m(a, i) {
			u(a, n, i), u(a, t, i), s.m(t, null);
		},
		p(a, [i]) {
			i & 1 && e !== (e = a[0].status) && (document.title = e),
				o === (o = l(a)) && s ? s.p(a, i) : (s.d(1), (s = o(a)), s && (s.c(), s.m(t, null)));
		},
		i: _,
		o: _,
		d(a) {
			a && r(n), a && r(t), s.d();
		}
	};
}
function C(c, e, n) {
	let t;
	return q(c, H, (l) => n(0, (t = l))), [t];
}
class x extends k {
	constructor(e) {
		super(), y(this, e, C, j, E, {});
	}
}
export { x as component };
