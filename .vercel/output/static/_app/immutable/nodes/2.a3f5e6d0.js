import {
	S as j,
	i as F,
	s as G,
	k as i,
	q as U,
	a as x,
	l as o,
	m as d,
	r as q,
	h as c,
	c as R,
	n as _,
	b as f,
	E as v,
	K as A
} from '../chunks/index.7a94f913.js';
const J = () => typeof window < 'u' && 'document' in window && 'location' in window,
	I = (a) => ({
		...a.location,
		state: a.history.state,
		key: (a.history.state && a.history.state.key) || 'initial'
	}),
	Q = (a) => {
		const s = [];
		let r = I(a);
		return {
			get location() {
				return r;
			},
			listen(l) {
				s.push(l);
				const n = () => {
					(r = I(a)), l({ location: r, action: 'POP' });
				};
				return (
					a.addEventListener('popstate', n),
					() => {
						a.removeEventListener('popstate', n);
						const e = s.indexOf(l);
						s.splice(e, 1);
					}
				);
			},
			navigate(l, { state: n, replace: e = !1 } = {}) {
				n = { ...n, key: Date.now() + '' };
				try {
					e ? a.history.replaceState(n, '', l) : a.history.pushState(n, '', l);
				} catch {
					a.location[e ? 'replace' : 'assign'](l);
				}
				(r = I(a)),
					s.forEach((h) => h({ location: r, action: 'PUSH' })),
					document.activeElement.blur();
			}
		};
	},
	W = (a = '/') => {
		let s = 0;
		const r = [{ pathname: a, search: '' }],
			l = [];
		return {
			get location() {
				return r[s];
			},
			addEventListener(n, e) {},
			removeEventListener(n, e) {},
			history: {
				get entries() {
					return r;
				},
				get index() {
					return s;
				},
				get state() {
					return l[s];
				},
				pushState(n, e, h) {
					const [m, b = ''] = h.split('?');
					s++, r.push({ pathname: m, search: b }), l.push(n);
				},
				replaceState(n, e, h) {
					const [m, b = ''] = h.split('?');
					(r[s] = { pathname: m, search: b }), (l[s] = n);
				}
			}
		};
	};
Q(J() ? window : W());
function X(a) {
	let s, r, l, n, e, h, m, b, y, w, H, K, O, g, D, E, B, P, S, k, L, T, z;
	return {
		c() {
			(s = i('div')),
				(r = i('h3')),
				(l = U('Hauptmenü Kursverwaltung')),
				(n = x()),
				(e = i('div')),
				(h = i('br')),
				(m = i('br')),
				(b = x()),
				(y = i('a')),
				(w = i('button')),
				(H = U('Teilnehmerverwaltung')),
				(K = x()),
				(O = i('br')),
				(g = i('br')),
				(D = x()),
				(E = i('a')),
				(B = i('button')),
				(P = U('Kursverwaltung')),
				(S = x()),
				(k = i('br')),
				(L = i('br')),
				(T = i('br')),
				(z = i('br')),
				this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var u = d(s);
			r = o(u, 'H3', { class: !0 });
			var M = d(r);
			(l = q(M, 'Hauptmenü Kursverwaltung')),
				M.forEach(c),
				u.forEach(c),
				(n = R(t)),
				(e = o(t, 'DIV', { class: !0 }));
			var p = d(e);
			(h = o(p, 'BR', {})), (m = o(p, 'BR', {})), (b = R(p)), (y = o(p, 'A', { href: !0 }));
			var N = d(y);
			w = o(N, 'BUTTON', { class: !0 });
			var V = d(w);
			(H = q(V, 'Teilnehmerverwaltung')),
				V.forEach(c),
				N.forEach(c),
				(K = R(p)),
				(O = o(p, 'BR', {})),
				(g = o(p, 'BR', {})),
				(D = R(p)),
				(E = o(p, 'A', { href: !0 }));
			var $ = d(E);
			B = o($, 'BUTTON', { class: !0 });
			var C = d(B);
			(P = q(C, 'Kursverwaltung')),
				C.forEach(c),
				$.forEach(c),
				p.forEach(c),
				(S = R(t)),
				(k = o(t, 'BR', {})),
				(L = o(t, 'BR', {})),
				(T = o(t, 'BR', {})),
				(z = o(t, 'BR', {})),
				this.h();
		},
		h() {
			_(r, 'class', 'svelte-11vzvh'),
				_(s, 'class', 'header svelte-11vzvh'),
				_(w, 'class', 'svelte-11vzvh'),
				_(y, 'href', '/teilnehmer'),
				_(B, 'class', 'svelte-11vzvh'),
				_(E, 'href', '/kurs'),
				_(e, 'class', 'body svelte-11vzvh');
		},
		m(t, u) {
			f(t, s, u),
				v(s, r),
				v(r, l),
				f(t, n, u),
				f(t, e, u),
				v(e, h),
				v(e, m),
				v(e, b),
				v(e, y),
				v(y, w),
				v(w, H),
				v(e, K),
				v(e, O),
				v(e, g),
				v(e, D),
				v(e, E),
				v(E, B),
				v(B, P),
				f(t, S, u),
				f(t, k, u),
				f(t, L, u),
				f(t, T, u),
				f(t, z, u);
		},
		p: A,
		i: A,
		o: A,
		d(t) {
			t && c(s), t && c(n), t && c(e), t && c(S), t && c(k), t && c(L), t && c(T), t && c(z);
		}
	};
}
function Y(a) {
	return [];
}
class tt extends j {
	constructor(s) {
		super(), F(this, s, Y, X, G, {});
	}
}
export { tt as component };
