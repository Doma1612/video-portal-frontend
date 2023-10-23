import {
	S as C,
	i as q,
	s as U,
	a as z,
	e as h,
	c as j,
	b as k,
	d,
	f as A,
	g,
	h as w,
	j as H,
	o as W,
	k as F,
	l as G,
	m as J,
	n as V,
	p,
	q as K,
	r as M,
	u as Q,
	v as P,
	w as D,
	x as b,
	y as v,
	z as I,
	A as R,
	B as L
} from '../chunks/index.7a94f913.js';
const X = 'modulepreload',
	Y = function (l, e) {
		return new URL(l, e).href;
	},
	O = {},
	m = function (e, n, i) {
		if (!n || n.length === 0) return e();
		const r = document.getElementsByTagName('link');
		return Promise.all(
			n.map((f) => {
				if (((f = Y(f, i)), f in O)) return;
				O[f] = !0;
				const t = f.endsWith('.css'),
					s = t ? '[rel="stylesheet"]' : '';
				if (!!i)
					for (let a = r.length - 1; a >= 0; a--) {
						const u = r[a];
						if (u.href === f && (!t || u.rel === 'stylesheet')) return;
					}
				else if (document.querySelector(`link[href="${f}"]${s}`)) return;
				const o = document.createElement('link');
				if (
					((o.rel = t ? 'stylesheet' : X),
					t || ((o.as = 'script'), (o.crossOrigin = '')),
					(o.href = f),
					document.head.appendChild(o),
					t)
				)
					return new Promise((a, u) => {
						o.addEventListener('load', a),
							o.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${f}`)));
					});
			})
		).then(() => e());
	},
	ie = {};
function Z(l) {
	let e, n, i;
	var r = l[1][0];
	function f(t) {
		return { props: { data: t[3], form: t[2] } };
	}
	return (
		r && ((e = b(r, f(l))), l[12](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				const c = {};
				if ((s & 8 && (c.data = t[3]), s & 4 && (c.form = t[2]), s & 2 && r !== (r = t[1][0]))) {
					if (e) {
						P();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = b(r, f(t))),
						  t[12](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(c);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				l[12](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function $(l) {
	let e, n, i;
	var r = l[1][0];
	function f(t) {
		return { props: { data: t[3], $$slots: { default: [x] }, $$scope: { ctx: t } } };
	}
	return (
		r && ((e = b(r, f(l))), l[11](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				const c = {};
				if (
					(s & 8 && (c.data = t[3]),
					s & 8215 && (c.$$scope = { dirty: s, ctx: t }),
					s & 2 && r !== (r = t[1][0]))
				) {
					if (e) {
						P();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = b(r, f(t))),
						  t[11](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(c);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				l[11](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function x(l) {
	let e, n, i;
	var r = l[1][1];
	function f(t) {
		return { props: { data: t[4], form: t[2] } };
	}
	return (
		r && ((e = b(r, f(l))), l[10](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				const c = {};
				if ((s & 16 && (c.data = t[4]), s & 4 && (c.form = t[2]), s & 2 && r !== (r = t[1][1]))) {
					if (e) {
						P();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = b(r, f(t))),
						  t[10](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(c);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				l[10](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function T(l) {
	let e,
		n = l[6] && y(l);
	return {
		c() {
			(e = F('div')), n && n.c(), this.h();
		},
		l(i) {
			e = G(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = J(e);
			n && n.l(r), r.forEach(w), this.h();
		},
		h() {
			V(e, 'id', 'svelte-announcer'),
				V(e, 'aria-live', 'assertive'),
				V(e, 'aria-atomic', 'true'),
				p(e, 'position', 'absolute'),
				p(e, 'left', '0'),
				p(e, 'top', '0'),
				p(e, 'clip', 'rect(0 0 0 0)'),
				p(e, 'clip-path', 'inset(50%)'),
				p(e, 'overflow', 'hidden'),
				p(e, 'white-space', 'nowrap'),
				p(e, 'width', '1px'),
				p(e, 'height', '1px');
		},
		m(i, r) {
			k(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = y(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && w(e), n && n.d();
		}
	};
}
function y(l) {
	let e;
	return {
		c() {
			e = K(l[7]);
		},
		l(n) {
			e = M(n, l[7]);
		},
		m(n, i) {
			k(n, e, i);
		},
		p(n, i) {
			i & 128 && Q(e, n[7]);
		},
		d(n) {
			n && w(e);
		}
	};
}
function ee(l) {
	let e, n, i, r, f;
	const t = [$, Z],
		s = [];
	function c(a, u) {
		return a[1][1] ? 0 : 1;
	}
	(e = c(l)), (n = s[e] = t[e](l));
	let o = l[5] && T(l);
	return {
		c() {
			n.c(), (i = z()), o && o.c(), (r = h());
		},
		l(a) {
			n.l(a), (i = j(a)), o && o.l(a), (r = h());
		},
		m(a, u) {
			s[e].m(a, u), k(a, i, u), o && o.m(a, u), k(a, r, u), (f = !0);
		},
		p(a, [u]) {
			let E = e;
			(e = c(a)),
				e === E
					? s[e].p(a, u)
					: (P(),
					  d(s[E], 1, 1, () => {
							s[E] = null;
					  }),
					  A(),
					  (n = s[e]),
					  n ? n.p(a, u) : ((n = s[e] = t[e](a)), n.c()),
					  g(n, 1),
					  n.m(i.parentNode, i)),
				a[5]
					? o
						? o.p(a, u)
						: ((o = T(a)), o.c(), o.m(r.parentNode, r))
					: o && (o.d(1), (o = null));
		},
		i(a) {
			f || (g(n), (f = !0));
		},
		o(a) {
			d(n), (f = !1);
		},
		d(a) {
			s[e].d(a), a && w(i), o && o.d(a), a && w(r);
		}
	};
}
function te(l, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ constructors: f } = e,
		{ components: t = [] } = e,
		{ form: s } = e,
		{ data_0: c = null } = e,
		{ data_1: o = null } = e;
	H(i.page.notify);
	let a = !1,
		u = !1,
		E = null;
	W(() => {
		const _ = i.page.subscribe(() => {
			a && (n(6, (u = !0)), n(7, (E = document.title || 'untitled page')));
		});
		return n(5, (a = !0)), _;
	});
	function N(_) {
		D[_ ? 'unshift' : 'push'](() => {
			(t[1] = _), n(0, t);
		});
	}
	function S(_) {
		D[_ ? 'unshift' : 'push'](() => {
			(t[0] = _), n(0, t);
		});
	}
	function B(_) {
		D[_ ? 'unshift' : 'push'](() => {
			(t[0] = _), n(0, t);
		});
	}
	return (
		(l.$$set = (_) => {
			'stores' in _ && n(8, (i = _.stores)),
				'page' in _ && n(9, (r = _.page)),
				'constructors' in _ && n(1, (f = _.constructors)),
				'components' in _ && n(0, (t = _.components)),
				'form' in _ && n(2, (s = _.form)),
				'data_0' in _ && n(3, (c = _.data_0)),
				'data_1' in _ && n(4, (o = _.data_1));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 768 && i.page.set(r);
		}),
		[t, f, s, c, o, a, u, E, i, r, N, S, B]
	);
}
class re extends C {
	constructor(e) {
		super(),
			q(this, e, te, ee, U, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const se = [
		() =>
			m(
				() => import('../nodes/0.8df3b3dd.js'),
				[
					'../nodes/0.8df3b3dd.js',
					'../chunks/index.7a94f913.js',
					'../chunks/forms.245b332f.js',
					'../chunks/parse.bee59afc.js',
					'../chunks/singletons.dbf4ecc2.js',
					'../chunks/stores.41a2e3b2.js',
					'../assets/0.1b00d5b5.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/1.4cb5b033.js'),
				[
					'../nodes/1.4cb5b033.js',
					'../chunks/index.7a94f913.js',
					'../chunks/stores.41a2e3b2.js',
					'../chunks/singletons.dbf4ecc2.js',
					'../assets/1.fa12da81.css'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/2.a3f5e6d0.js'),
				['../nodes/2.a3f5e6d0.js', '../chunks/index.7a94f913.js', '../assets/2.e67a01c2.css'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/3.ed127a90.js'),
				['../nodes/3.ed127a90.js', '../chunks/index.7a94f913.js'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/4.6f8e369c.js'),
				['../nodes/4.6f8e369c.js', '../chunks/index.7a94f913.js'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/5.6b93af53.js'),
				['../nodes/5.6b93af53.js', '../chunks/index.7a94f913.js'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/6.0b1cb0c9.js'),
				['../nodes/6.0b1cb0c9.js', '../chunks/index.7a94f913.js', '../assets/6.5986693f.css'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/7.e4f999ec.js'),
				[
					'../nodes/7.e4f999ec.js',
					'../chunks/index.7a94f913.js',
					'../chunks/forms.245b332f.js',
					'../chunks/parse.bee59afc.js',
					'../chunks/singletons.dbf4ecc2.js'
				],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/8.67b2fa23.js'),
				['../nodes/8.67b2fa23.js', '../chunks/index.7a94f913.js'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/9.3523ad27.js'),
				['../nodes/9.3523ad27.js', '../chunks/index.7a94f913.js'],
				import.meta.url
			),
		() =>
			m(
				() => import('../nodes/10.b6380524.js'),
				['../nodes/10.b6380524.js', '../chunks/index.7a94f913.js', '../assets/10.aa1db322.css'],
				import.meta.url
			)
	],
	oe = [0],
	le = {
		'/': [2],
		'/kurs': [3],
		'/kurs/kursAnlegen': [4],
		'/kurs/kursteilnehmerVerwalten': [5],
		'/kurs/teilnehmerHinzufuegen': [6],
		'/login': [-8],
		'/teilnehmer': [8],
		'/teilnehmer/teilnehmerAnlegen': [9],
		'/teilnehmer/teilnehmerVerwalten': [10]
	},
	ae = {
		handleError: ({ error: l }) => {
			console.error(l);
		}
	};
export {
	le as dictionary,
	ae as hooks,
	ie as matchers,
	se as nodes,
	re as root,
	oe as server_loads
};
