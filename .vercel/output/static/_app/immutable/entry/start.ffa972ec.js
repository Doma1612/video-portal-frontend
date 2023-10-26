import { o as je, t as ye } from '../chunks/index.7a94f913.js';
import {
	S as Ke,
	a as ze,
	I as q,
	g as Ne,
	f as qe,
	b as _e,
	c as le,
	s as F,
	d as ee,
	i as we,
	e as z,
	P as Me,
	h as Ye
} from '../chunks/singletons.dbf4ecc2.js';
import { u as Xe } from '../chunks/parse.bee59afc.js';
function Qe(a, o) {
	return a === '/' || o === 'ignore'
		? a
		: o === 'never'
		? a.endsWith('/')
			? a.slice(0, -1)
			: a
		: o === 'always' && !a.endsWith('/')
		? a + '/'
		: a;
}
function Ze(a) {
	return a.split('%25').map(decodeURI).join('%25');
}
function et(a) {
	for (const o in a) a[o] = decodeURIComponent(a[o]);
	return a;
}
const tt = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function nt(a, o) {
	const l = new URL(a);
	for (const c of tt)
		Object.defineProperty(l, c, {
			get() {
				return o(), a[c];
			},
			enumerable: !0,
			configurable: !0
		});
	return at(l), l;
}
function at(a) {
	Object.defineProperty(a, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
const rt = '/__data.json';
function ot(a) {
	return a.replace(/\/$/, '') + rt;
}
function He(a) {
	try {
		return JSON.parse(sessionStorage[a]);
	} catch {}
}
function Ve(a, o) {
	const l = JSON.stringify(o);
	try {
		sessionStorage[a] = l;
	} catch {}
}
function it(...a) {
	let o = 5381;
	for (const l of a)
		if (typeof l == 'string') {
			let c = l.length;
			for (; c; ) o = (o * 33) ^ l.charCodeAt(--c);
		} else if (ArrayBuffer.isView(l)) {
			const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
			let g = c.length;
			for (; g; ) o = (o * 33) ^ c[--g];
		} else throw new TypeError('value must be a string or TypedArray');
	return (o >>> 0).toString(36);
}
const fe = window.fetch;
window.fetch = (a, o) => (
	(a instanceof Request ? a.method : (o == null ? void 0 : o.method) || 'GET') !== 'GET' &&
		ne.delete(Ee(a)),
	fe(a, o)
);
const ne = new Map();
function st(a, o) {
	const l = Ee(a, o),
		c = document.querySelector(l);
	if (c != null && c.textContent) {
		const { body: g, ...y } = JSON.parse(c.textContent),
			E = c.getAttribute('data-ttl');
		return (
			E && ne.set(l, { body: g, init: y, ttl: 1e3 * Number(E) }),
			Promise.resolve(new Response(g, y))
		);
	}
	return fe(a, o);
}
function ct(a, o, l) {
	if (ne.size > 0) {
		const c = Ee(a, l),
			g = ne.get(c);
		if (g) {
			if (
				performance.now() < g.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(l == null ? void 0 : l.cache)
			)
				return new Response(g.body, g.init);
			ne.delete(c);
		}
	}
	return fe(o, l);
}
function Ee(a, o) {
	let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
		a instanceof Request ? a.url : a
	)}]`;
	if ((o != null && o.headers) || (o != null && o.body)) {
		const g = [];
		o.headers && g.push([...new Headers(o.headers)].join(',')),
			o.body && (typeof o.body == 'string' || ArrayBuffer.isView(o.body)) && g.push(o.body),
			(c += `[data-hash="${it(...g)}"]`);
	}
	return c;
}
const lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function ft(a) {
	const o = [];
	return {
		pattern:
			a === '/'
				? /^\/$/
				: new RegExp(
						`^${dt(a)
							.map((c) => {
								const g = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
								if (g)
									return (
										o.push({ name: g[1], matcher: g[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const y = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);
								if (y)
									return (
										o.push({ name: y[1], matcher: y[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!c) return;
								const E = c.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									E.map((b, S) => {
										if (S % 2) {
											if (b.startsWith('x+'))
												return ve(String.fromCharCode(parseInt(b.slice(2), 16)));
											if (b.startsWith('u+'))
												return ve(
													String.fromCharCode(
														...b
															.slice(2)
															.split('-')
															.map((P) => parseInt(P, 16))
													)
												);
											const m = lt.exec(b);
											if (!m)
												throw new Error(
													`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`
												);
											const [, N, T, C, O] = m;
											return (
												o.push({
													name: C,
													matcher: O,
													optional: !!N,
													rest: !!T,
													chained: T ? S === 1 && E[0] === '' : !1
												}),
												T ? '(.*?)' : N ? '([^/]*)?' : '([^/]+?)'
											);
										}
										return ve(b);
									}).join('')
								);
							})
							.join('')}/?$`
				  ),
		params: o
	};
}
function ut(a) {
	return !/^\([^)]+\)$/.test(a);
}
function dt(a) {
	return a.slice(1).split('/').filter(ut);
}
function pt(a, o, l) {
	const c = {},
		g = a.slice(1);
	let y = 0;
	for (let E = 0; E < o.length; E += 1) {
		const _ = o[E];
		let b = g[E - y];
		if (
			(_.chained &&
				_.rest &&
				y &&
				((b = g
					.slice(E - y, E + 1)
					.filter((S) => S)
					.join('/')),
				(y = 0)),
			b === void 0)
		) {
			_.rest && (c[_.name] = '');
			continue;
		}
		if (!_.matcher || l[_.matcher](b)) {
			c[_.name] = b;
			const S = o[E + 1],
				m = g[E + 1];
			S && !S.rest && S.optional && m && _.chained && (y = 0);
			continue;
		}
		if (_.optional && _.chained) {
			y++;
			continue;
		}
		return;
	}
	if (!y) return c;
}
function ve(a) {
	return a
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function ht({ nodes: a, server_loads: o, dictionary: l, matchers: c }) {
	const g = new Set(o);
	return Object.entries(l).map(([_, [b, S, m]]) => {
		const { pattern: N, params: T } = ft(_),
			C = {
				id: _,
				exec: (O) => {
					const P = N.exec(O);
					if (P) return pt(P, T, c);
				},
				errors: [1, ...(m || [])].map((O) => a[O]),
				layouts: [0, ...(S || [])].map(E),
				leaf: y(b)
			};
		return (C.errors.length = C.layouts.length = Math.max(C.errors.length, C.layouts.length)), C;
	});
	function y(_) {
		const b = _ < 0;
		return b && (_ = ~_), [b, a[_]];
	}
	function E(_) {
		return _ === void 0 ? _ : [g.has(_), a[_]];
	}
}
class te {
	constructor(o, l) {
		(this.status = o),
			typeof l == 'string'
				? (this.body = { message: l })
				: l
				? (this.body = l)
				: (this.body = { message: `Error: ${o}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class Fe {
	constructor(o, l) {
		(this.status = o), (this.location = l);
	}
}
async function mt(a) {
	var o;
	for (const l in a)
		if (typeof ((o = a[l]) == null ? void 0 : o.then) == 'function')
			return Object.fromEntries(
				await Promise.all(Object.entries(a).map(async ([c, g]) => [c, await g]))
			);
	return a;
}
const Be = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...Be];
const gt = new Set([...Be]);
[...gt];
function yt(a) {
	return a.filter((o) => o != null);
}
const _t = 'x-sveltekit-invalidated',
	H = He(Ke) ?? {},
	Z = He(ze) ?? {};
function be(a) {
	H[a] = ee();
}
function wt(a, o) {
	var Ce;
	const l = ht(a),
		c = a.nodes[0],
		g = a.nodes[1];
	c(), g();
	const y = document.documentElement,
		E = [],
		_ = [];
	let b = null;
	const S = { before_navigate: [], after_navigate: [] };
	let m = { branch: [], error: null, url: null },
		N = !1,
		T = !1,
		C = !0,
		O = !1,
		P = !1,
		B = !1,
		J = !1,
		M,
		I = (Ce = history.state) == null ? void 0 : Ce[q];
	I || ((I = Date.now()), history.replaceState({ ...history.state, [q]: I }, '', location.href));
	const ue = H[I];
	ue && ((history.scrollRestoration = 'manual'), scrollTo(ue.x, ue.y));
	let V, ae, W;
	async function xe() {
		if (((W = W || Promise.resolve()), await W, !W)) return;
		W = null;
		const e = new URL(location.href),
			t = X(e, !0);
		b = null;
		const r = (ae = {}),
			n = t && (await he(t));
		if (r === ae && n) {
			if (n.type === 'redirect') return re(new URL(n.location, e).href, {}, [e.pathname], r);
			n.props.page !== void 0 && (V = n.props.page), M.$set(n.props);
		}
	}
	function Re(e) {
		_.some((t) => (t == null ? void 0 : t.snapshot)) &&
			(Z[e] = _.map((t) => {
				var r;
				return (r = t == null ? void 0 : t.snapshot) == null ? void 0 : r.capture();
			}));
	}
	function ke(e) {
		var t;
		(t = Z[e]) == null ||
			t.forEach((r, n) => {
				var i, s;
				(s = (i = _[n]) == null ? void 0 : i.snapshot) == null || s.restore(r);
			});
	}
	function Le() {
		be(I), Ve(Ke, H), Re(I), Ve(ze, Z);
	}
	async function re(
		e,
		{
			noScroll: t = !1,
			replaceState: r = !1,
			keepFocus: n = !1,
			state: i = {},
			invalidateAll: s = !1
		},
		u,
		d
	) {
		return (
			typeof e == 'string' && (e = new URL(e, Ne(document))),
			ce({
				url: e,
				scroll: t ? ee() : null,
				keepfocus: n,
				redirect_chain: u,
				details: { state: i, replaceState: r },
				nav_token: d,
				accepted: () => {
					s && (J = !0);
				},
				blocked: () => {},
				type: 'goto'
			})
		);
	}
	async function Ae(e) {
		return (
			(b = {
				id: e.id,
				promise: he(e).then((t) => (t.type === 'loaded' && t.state.error && (b = null), t))
			}),
			b.promise
		);
	}
	async function oe(...e) {
		const r = l
			.filter((n) => e.some((i) => n.exec(i)))
			.map((n) => Promise.all([...n.layouts, n.leaf].map((i) => (i == null ? void 0 : i[1]()))));
		await Promise.all(r);
	}
	function Pe(e) {
		var n;
		m = e.state;
		const t = document.querySelector('style[data-sveltekit]');
		t && t.remove(),
			(V = e.props.page),
			(M = new a.root({ target: o, props: { ...e.props, stores: F, components: _ }, hydrate: !0 })),
			ke(I);
		const r = {
			from: null,
			to: {
				params: m.params,
				route: { id: ((n = m.route) == null ? void 0 : n.id) ?? null },
				url: new URL(location.href)
			},
			willUnload: !1,
			type: 'enter'
		};
		S.after_navigate.forEach((i) => i(r)), (T = !0);
	}
	async function Y({ url: e, params: t, branch: r, status: n, error: i, route: s, form: u }) {
		let d = 'never';
		for (const h of r) (h == null ? void 0 : h.slash) !== void 0 && (d = h.slash);
		(e.pathname = Qe(e.pathname, d)), (e.search = e.search);
		const w = {
			type: 'loaded',
			state: { url: e, params: t, branch: r, error: i, route: s },
			props: { constructors: yt(r).map((h) => h.node.component) }
		};
		u !== void 0 && (w.props.form = u);
		let p = {},
			x = !V,
			R = 0;
		for (let h = 0; h < Math.max(r.length, m.branch.length); h += 1) {
			const f = r[h],
				U = m.branch[h];
			(f == null ? void 0 : f.data) !== (U == null ? void 0 : U.data) && (x = !0),
				f && ((p = { ...p, ...f.data }), x && (w.props[`data_${R}`] = p), (R += 1));
		}
		return (
			(!m.url || e.href !== m.url.href || m.error !== i || (u !== void 0 && u !== V.form) || x) &&
				(w.props.page = {
					error: i,
					params: t,
					route: { id: (s == null ? void 0 : s.id) ?? null },
					status: n,
					url: new URL(e),
					form: u ?? null,
					data: x ? p : V.data
				}),
			w
		);
	}
	async function de({ loader: e, parent: t, url: r, params: n, route: i, server_data_node: s }) {
		var p, x, R;
		let u = null;
		const d = { dependencies: new Set(), params: new Set(), parent: !1, route: !1, url: !1 },
			w = await e();
		if ((p = w.universal) != null && p.load) {
			let A = function (...f) {
				for (const U of f) {
					const { href: $ } = new URL(U, r);
					d.dependencies.add($);
				}
			};
			const h = {
				route: {
					get id() {
						return (d.route = !0), i.id;
					}
				},
				params: new Proxy(n, { get: (f, U) => (d.params.add(U), f[U]) }),
				data: (s == null ? void 0 : s.data) ?? null,
				url: nt(r, () => {
					d.url = !0;
				}),
				async fetch(f, U) {
					let $;
					f instanceof Request
						? (($ = f.url),
						  (U = {
								body: f.method === 'GET' || f.method === 'HEAD' ? void 0 : await f.blob(),
								cache: f.cache,
								credentials: f.credentials,
								headers: f.headers,
								integrity: f.integrity,
								keepalive: f.keepalive,
								method: f.method,
								mode: f.mode,
								redirect: f.redirect,
								referrer: f.referrer,
								referrerPolicy: f.referrerPolicy,
								signal: f.signal,
								...U
						  }))
						: ($ = f);
					const j = new URL($, r);
					return (
						A(j.href),
						j.origin === r.origin && ($ = j.href.slice(r.origin.length)),
						T ? ct($, j.href, U) : st($, U)
					);
				},
				setHeaders: () => {},
				depends: A,
				parent() {
					return (d.parent = !0), t();
				}
			};
			(u = (await w.universal.load.call(null, h)) ?? null), (u = u ? await mt(u) : null);
		}
		return {
			node: w,
			loader: e,
			server: s,
			universal: (x = w.universal) != null && x.load ? { type: 'data', data: u, uses: d } : null,
			data: u ?? (s == null ? void 0 : s.data) ?? null,
			slash:
				((R = w.universal) == null ? void 0 : R.trailingSlash) ?? (s == null ? void 0 : s.slash)
		};
	}
	function Ue(e, t, r, n, i) {
		if (J) return !0;
		if (!n) return !1;
		if ((n.parent && e) || (n.route && t) || (n.url && r)) return !0;
		for (const s of n.params) if (i[s] !== m.params[s]) return !0;
		for (const s of n.dependencies) if (E.some((u) => u(new URL(s)))) return !0;
		return !1;
	}
	function pe(e, t) {
		return (e == null ? void 0 : e.type) === 'data'
			? e
			: (e == null ? void 0 : e.type) === 'skip'
			? t ?? null
			: null;
	}
	async function he({ id: e, invalidating: t, url: r, params: n, route: i }) {
		if ((b == null ? void 0 : b.id) === e) return b.promise;
		const { errors: s, layouts: u, leaf: d } = i,
			w = [...u, d];
		s.forEach((v) => (v == null ? void 0 : v().catch(() => {}))),
			w.forEach((v) => (v == null ? void 0 : v[1]().catch(() => {})));
		let p = null;
		const x = m.url ? e !== m.url.pathname + m.url.search : !1,
			R = m.route ? i.id !== m.route.id : !1;
		let A = !1;
		const h = w.map((v, L) => {
			var K;
			const k = m.branch[L],
				D =
					!!(v != null && v[0]) &&
					((k == null ? void 0 : k.loader) !== v[1] ||
						Ue(A, R, x, (K = k.server) == null ? void 0 : K.uses, n));
			return D && (A = !0), D;
		});
		if (h.some(Boolean)) {
			try {
				p = await Je(r, h);
			} catch (v) {
				return ie({
					status: v instanceof te ? v.status : 500,
					error: await Q(v, { url: r, params: n, route: { id: i.id } }),
					url: r,
					route: i
				});
			}
			if (p.type === 'redirect') return p;
		}
		const f = p == null ? void 0 : p.nodes;
		let U = !1;
		const $ = w.map(async (v, L) => {
			var me;
			if (!v) return;
			const k = m.branch[L],
				D = f == null ? void 0 : f[L];
			if (
				(!D || D.type === 'skip') &&
				v[1] === (k == null ? void 0 : k.loader) &&
				!Ue(U, R, x, (me = k.universal) == null ? void 0 : me.uses, n)
			)
				return k;
			if (((U = !0), (D == null ? void 0 : D.type) === 'error')) throw D;
			return de({
				loader: v[1],
				url: r,
				params: n,
				route: i,
				parent: async () => {
					var Te;
					const De = {};
					for (let ge = 0; ge < L; ge += 1)
						Object.assign(De, (Te = await $[ge]) == null ? void 0 : Te.data);
					return De;
				},
				server_data_node: pe(
					D === void 0 && v[0] ? { type: 'skip' } : D ?? null,
					v[0] ? (k == null ? void 0 : k.server) : void 0
				)
			});
		});
		for (const v of $) v.catch(() => {});
		const j = [];
		for (let v = 0; v < w.length; v += 1)
			if (w[v])
				try {
					j.push(await $[v]);
				} catch (L) {
					if (L instanceof Fe) return { type: 'redirect', location: L.location };
					let k = 500,
						D;
					if (f != null && f.includes(L)) (k = L.status ?? k), (D = L.error);
					else if (L instanceof te) (k = L.status), (D = L.body);
					else {
						if (await F.updated.check()) return await G(r);
						D = await Q(L, { params: n, url: r, route: { id: i.id } });
					}
					const K = await Oe(v, j, s);
					return K
						? await Y({
								url: r,
								params: n,
								branch: j.slice(0, K.idx).concat(K.node),
								status: k,
								error: D,
								route: i
						  })
						: await Ie(r, { id: i.id }, D, k);
				}
			else j.push(void 0);
		return await Y({
			url: r,
			params: n,
			branch: j,
			status: 200,
			error: null,
			route: i,
			form: t ? void 0 : null
		});
	}
	async function Oe(e, t, r) {
		for (; e--; )
			if (r[e]) {
				let n = e;
				for (; !t[n]; ) n -= 1;
				try {
					return {
						idx: n + 1,
						node: { node: await r[e](), loader: r[e], data: {}, server: null, universal: null }
					};
				} catch {
					continue;
				}
			}
	}
	async function ie({ status: e, error: t, url: r, route: n }) {
		const i = {};
		let s = null;
		if (a.server_loads[0] === 0)
			try {
				const p = await Je(r, [!0]);
				if (p.type !== 'data' || (p.nodes[0] && p.nodes[0].type !== 'data')) throw 0;
				s = p.nodes[0] ?? null;
			} catch {
				(r.origin !== location.origin || r.pathname !== location.pathname || N) && (await G(r));
			}
		const d = await de({
				loader: c,
				url: r,
				params: i,
				route: n,
				parent: () => Promise.resolve({}),
				server_data_node: pe(s)
			}),
			w = { node: await g(), loader: g, universal: null, server: null, data: null };
		return await Y({ url: r, params: i, branch: [d, w], status: e, error: t, route: null });
	}
	function X(e, t) {
		if (we(e, z)) return;
		const r = se(e);
		for (const n of l) {
			const i = n.exec(r);
			if (i) return { id: e.pathname + e.search, invalidating: t, route: n, params: et(i), url: e };
		}
	}
	function se(e) {
		return Ze(e.pathname.slice(z.length) || '/');
	}
	function $e({ url: e, type: t, intent: r, delta: n }) {
		var d, w;
		let i = !1;
		const s = {
			from: {
				params: m.params,
				route: { id: ((d = m.route) == null ? void 0 : d.id) ?? null },
				url: m.url
			},
			to: {
				params: (r == null ? void 0 : r.params) ?? null,
				route: { id: ((w = r == null ? void 0 : r.route) == null ? void 0 : w.id) ?? null },
				url: e
			},
			willUnload: !r,
			type: t
		};
		n !== void 0 && (s.delta = n);
		const u = {
			...s,
			cancel: () => {
				i = !0;
			}
		};
		return P || S.before_navigate.forEach((p) => p(u)), i ? null : s;
	}
	async function ce({
		url: e,
		scroll: t,
		keepfocus: r,
		redirect_chain: n,
		details: i,
		type: s,
		delta: u,
		nav_token: d = {},
		accepted: w,
		blocked: p
	}) {
		var $, j, v;
		const x = X(e, !1),
			R = $e({ url: e, type: s, delta: u, intent: x });
		if (!R) {
			p();
			return;
		}
		const A = I;
		w(), (P = !0), T && F.navigating.set(R), (ae = d);
		let h = x && (await he(x));
		if (!h) {
			if (we(e, z)) return await G(e);
			h = await Ie(
				e,
				{ id: null },
				await Q(new Error(`Not found: ${e.pathname}`), { url: e, params: {}, route: { id: null } }),
				404
			);
		}
		if (((e = (x == null ? void 0 : x.url) || e), ae !== d)) return !1;
		if (h.type === 'redirect')
			if (n.length > 10 || n.includes(e.pathname))
				h = await ie({
					status: 500,
					error: await Q(new Error('Redirect loop'), { url: e, params: {}, route: { id: null } }),
					url: e,
					route: { id: null }
				});
			else return re(new URL(h.location, e).href, {}, [...n, e.pathname], d), !1;
		else
			(($ = h.props.page) == null ? void 0 : $.status) >= 400 &&
				(await F.updated.check()) &&
				(await G(e));
		if (
			((E.length = 0),
			(J = !1),
			(O = !0),
			be(A),
			Re(A),
			(j = h.props.page) != null &&
				j.url &&
				h.props.page.url.pathname !== e.pathname &&
				(e.pathname = (v = h.props.page) == null ? void 0 : v.url.pathname),
			i)
		) {
			const L = i.replaceState ? 0 : 1;
			if (
				((i.state[q] = I += L),
				history[i.replaceState ? 'replaceState' : 'pushState'](i.state, '', e),
				!i.replaceState)
			) {
				let k = I + 1;
				for (; Z[k] || H[k]; ) delete Z[k], delete H[k], (k += 1);
			}
		}
		(b = null),
			T ? ((m = h.state), h.props.page && (h.props.page.url = e), M.$set(h.props)) : Pe(h);
		const { activeElement: f } = document;
		if ((await ye(), C)) {
			const L = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
			t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
		}
		const U = document.activeElement !== f && document.activeElement !== document.body;
		!r && !U && Se(),
			(C = !0),
			h.props.page && (V = h.props.page),
			(P = !1),
			s === 'popstate' && ke(I),
			S.after_navigate.forEach((L) => L(R)),
			F.navigating.set(null),
			(O = !1);
	}
	async function Ie(e, t, r, n) {
		return e.origin === location.origin && e.pathname === location.pathname && !N
			? await ie({ status: n, error: r, url: e, route: t })
			: await G(e);
	}
	function G(e) {
		return (location.href = e.href), new Promise(() => {});
	}
	function We() {
		let e;
		y.addEventListener('mousemove', (s) => {
			const u = s.target;
			clearTimeout(e),
				(e = setTimeout(() => {
					n(u, 2);
				}, 20));
		});
		function t(s) {
			n(s.composedPath()[0], 1);
		}
		y.addEventListener('mousedown', t), y.addEventListener('touchstart', t, { passive: !0 });
		const r = new IntersectionObserver(
			(s) => {
				for (const u of s)
					u.isIntersecting && (oe(se(new URL(u.target.href))), r.unobserve(u.target));
			},
			{ threshold: 0 }
		);
		function n(s, u) {
			const d = qe(s, y);
			if (!d) return;
			const { url: w, external: p, download: x } = _e(d, z);
			if (p || x) return;
			const R = le(d);
			if (!R.reload)
				if (u <= R.preload_data) {
					const A = X(w, !1);
					A && Ae(A);
				} else u <= R.preload_code && oe(se(w));
		}
		function i() {
			r.disconnect();
			for (const s of y.querySelectorAll('a')) {
				const { url: u, external: d, download: w } = _e(s, z);
				if (d || w) continue;
				const p = le(s);
				p.reload ||
					(p.preload_code === Me.viewport && r.observe(s),
					p.preload_code === Me.eager && oe(se(u)));
			}
		}
		S.after_navigate.push(i), i();
	}
	function Q(e, t) {
		return e instanceof te
			? e.body
			: a.hooks.handleError({ error: e, event: t }) ?? {
					message: t.route.id != null ? 'Internal Error' : 'Not Found'
			  };
	}
	return {
		after_navigate: (e) => {
			je(
				() => (
					S.after_navigate.push(e),
					() => {
						const t = S.after_navigate.indexOf(e);
						S.after_navigate.splice(t, 1);
					}
				)
			);
		},
		before_navigate: (e) => {
			je(
				() => (
					S.before_navigate.push(e),
					() => {
						const t = S.before_navigate.indexOf(e);
						S.before_navigate.splice(t, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(O || !T) && (C = !1);
		},
		goto: (e, t = {}) => re(e, t, []),
		invalidate: (e) => {
			if (typeof e == 'function') E.push(e);
			else {
				const { href: t } = new URL(e, location.href);
				E.push((r) => r.href === t);
			}
			return xe();
		},
		invalidate_all: () => ((J = !0), xe()),
		preload_data: async (e) => {
			const t = new URL(e, Ne(document)),
				r = X(t, !1);
			if (!r) throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);
			await Ae(r);
		},
		preload_code: oe,
		apply_action: async (e) => {
			if (e.type === 'error') {
				const t = new URL(location.href),
					{ branch: r, route: n } = m;
				if (!n) return;
				const i = await Oe(m.branch.length, r, n.errors);
				if (i) {
					const s = await Y({
						url: t,
						params: m.params,
						branch: r.slice(0, i.idx).concat(i.node),
						status: e.status ?? 500,
						error: e.error,
						route: n
					});
					(m = s.state), M.$set(s.props), ye().then(Se);
				}
			} else
				e.type === 'redirect'
					? re(e.location, { invalidateAll: !0 }, [])
					: (M.$set({ form: null, page: { ...V, form: e.data, status: e.status } }),
					  await ye(),
					  M.$set({ form: e.data }),
					  e.type === 'success' && Se());
		},
		_start_router: () => {
			var e;
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (t) => {
					var n;
					let r = !1;
					if ((Le(), !P)) {
						const i = {
							from: {
								params: m.params,
								route: { id: ((n = m.route) == null ? void 0 : n.id) ?? null },
								url: m.url
							},
							to: null,
							willUnload: !0,
							type: 'leave',
							cancel: () => (r = !0)
						};
						S.before_navigate.forEach((s) => s(i));
					}
					r ? (t.preventDefault(), (t.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					document.visibilityState === 'hidden' && Le();
				}),
				((e = navigator.connection) != null && e.saveData) || We(),
				y.addEventListener('click', (t) => {
					var R;
					if (
						t.button ||
						t.which !== 1 ||
						t.metaKey ||
						t.ctrlKey ||
						t.shiftKey ||
						t.altKey ||
						t.defaultPrevented
					)
						return;
					const r = qe(t.composedPath()[0], y);
					if (!r) return;
					const { url: n, external: i, target: s, download: u } = _e(r, z);
					if (!n) return;
					if (s === '_parent' || s === '_top') {
						if (window.parent !== window) return;
					} else if (s && s !== '_self') return;
					const d = le(r);
					if (
						(!(r instanceof SVGAElement) &&
							n.protocol !== location.protocol &&
							!(n.protocol === 'https:' || n.protocol === 'http:')) ||
						u
					)
						return;
					if (i || d.reload) {
						$e({ url: n, type: 'link' }) ? (P = !0) : t.preventDefault();
						return;
					}
					const [p, x] = n.href.split('#');
					if (x !== void 0 && p === location.href.split('#')[0]) {
						if (m.url.hash === n.hash) {
							t.preventDefault(),
								(R = r.ownerDocument.getElementById(x)) == null || R.scrollIntoView();
							return;
						}
						if (
							((B = !0),
							be(I),
							(m.url = n),
							F.page.set({ ...V, url: n }),
							F.page.notify(),
							!d.replace_state)
						)
							return;
						(B = !1), t.preventDefault();
					}
					ce({
						url: n,
						scroll: d.noscroll ? ee() : null,
						keepfocus: d.keep_focus ?? !1,
						redirect_chain: [],
						details: { state: {}, replaceState: d.replace_state ?? n.href === location.href },
						accepted: () => t.preventDefault(),
						blocked: () => t.preventDefault(),
						type: 'link'
					});
				}),
				y.addEventListener('submit', (t) => {
					if (t.defaultPrevented) return;
					const r = HTMLFormElement.prototype.cloneNode.call(t.target),
						n = t.submitter;
					if (((n == null ? void 0 : n.formMethod) || r.method) !== 'get') return;
					const s = new URL(
						((n == null ? void 0 : n.hasAttribute('formaction')) &&
							(n == null ? void 0 : n.formAction)) ||
							r.action
					);
					if (we(s, z)) return;
					const u = t.target,
						{ keep_focus: d, noscroll: w, reload: p, replace_state: x } = le(u);
					if (p) return;
					t.preventDefault(), t.stopPropagation();
					const R = new FormData(u),
						A = n == null ? void 0 : n.getAttribute('name');
					A && R.append(A, (n == null ? void 0 : n.getAttribute('value')) ?? ''),
						(s.search = new URLSearchParams(R).toString()),
						ce({
							url: s,
							scroll: w ? ee() : null,
							keepfocus: d ?? !1,
							redirect_chain: [],
							details: { state: {}, replaceState: x ?? s.href === location.href },
							nav_token: {},
							accepted: () => {},
							blocked: () => {},
							type: 'form'
						});
				}),
				addEventListener('popstate', async (t) => {
					var r;
					if ((r = t.state) != null && r[q]) {
						if (t.state[q] === I) return;
						const n = H[t.state[q]];
						if (m.url.href.split('#')[0] === location.href.split('#')[0]) {
							(H[I] = ee()), (I = t.state[q]), scrollTo(n.x, n.y);
							return;
						}
						const i = t.state[q] - I;
						await ce({
							url: new URL(location.href),
							scroll: n,
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								I = t.state[q];
							},
							blocked: () => {
								history.go(-i);
							},
							type: 'popstate',
							delta: i
						});
					}
				}),
				addEventListener('hashchange', () => {
					B && ((B = !1), history.replaceState({ ...history.state, [q]: ++I }, '', location.href));
				});
			for (const t of document.querySelectorAll('link')) t.rel === 'icon' && (t.href = t.href);
			addEventListener('pageshow', (t) => {
				t.persisted && F.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: e = 200,
			error: t,
			node_ids: r,
			params: n,
			route: i,
			data: s,
			form: u
		}) => {
			N = !0;
			const d = new URL(location.href);
			({ params: n = {}, route: i = { id: null } } = X(d, !1) || {});
			let w;
			try {
				const p = r.map(async (A, h) => {
						const f = s[h];
						return (
							f != null && f.uses && (f.uses = Ge(f.uses)),
							de({
								loader: a.nodes[A],
								url: d,
								params: n,
								route: i,
								parent: async () => {
									const U = {};
									for (let $ = 0; $ < h; $ += 1) Object.assign(U, (await p[$]).data);
									return U;
								},
								server_data_node: pe(f)
							})
						);
					}),
					x = await Promise.all(p),
					R = l.find(({ id: A }) => A === i.id);
				if (R) {
					const A = R.layouts;
					for (let h = 0; h < A.length; h++) A[h] || x.splice(h, 0, void 0);
				}
				w = await Y({
					url: d,
					params: n,
					branch: x,
					status: e,
					error: t,
					form: u,
					route: R ?? null
				});
			} catch (p) {
				if (p instanceof Fe) {
					await G(new URL(p.location, location.href));
					return;
				}
				w = await ie({
					status: p instanceof te ? p.status : 500,
					error: await Q(p, { url: d, params: n, route: i }),
					url: d,
					route: i
				});
			}
			Pe(w);
		}
	};
}
async function Je(a, o) {
	const l = new URL(a);
	(l.pathname = ot(a.pathname)), l.searchParams.append(_t, o.map((g) => (g ? '1' : '0')).join(''));
	const c = await fe(l.href);
	if (!c.ok) throw new te(c.status, await c.json());
	return new Promise(async (g) => {
		var m;
		const y = new Map(),
			E = c.body.getReader(),
			_ = new TextDecoder();
		function b(N) {
			return Xe(N, {
				Promise: (T) =>
					new Promise((C, O) => {
						y.set(T, { fulfil: C, reject: O });
					})
			});
		}
		let S = '';
		for (;;) {
			const { done: N, value: T } = await E.read();
			if (N && !S) break;
			for (
				S +=
					!T && S
						? `
`
						: _.decode(T);
				;

			) {
				const C = S.indexOf(`
`);
				if (C === -1) break;
				const O = JSON.parse(S.slice(0, C));
				if (((S = S.slice(C + 1)), O.type === 'redirect')) return g(O);
				if (O.type === 'data')
					(m = O.nodes) == null ||
						m.forEach((P) => {
							(P == null ? void 0 : P.type) === 'data' &&
								((P.uses = Ge(P.uses)), (P.data = b(P.data)));
						}),
						g(O);
				else if (O.type === 'chunk') {
					const { id: P, data: B, error: J } = O,
						M = y.get(P);
					y.delete(P), J ? M.reject(b(J)) : M.fulfil(b(B));
				}
			}
		}
	});
}
function Ge(a) {
	return {
		dependencies: new Set((a == null ? void 0 : a.dependencies) ?? []),
		params: new Set((a == null ? void 0 : a.params) ?? []),
		parent: !!(a != null && a.parent),
		route: !!(a != null && a.route),
		url: !!(a != null && a.url)
	};
}
function Se() {
	const a = document.querySelector('[autofocus]');
	if (a) a.focus();
	else {
		const o = document.body,
			l = o.getAttribute('tabindex');
		(o.tabIndex = -1),
			o.focus({ preventScroll: !0, focusVisible: !1 }),
			l !== null ? o.setAttribute('tabindex', l) : o.removeAttribute('tabindex');
		const c = getSelection();
		if (c && c.type !== 'None') {
			const g = [];
			for (let y = 0; y < c.rangeCount; y += 1) g.push(c.getRangeAt(y));
			setTimeout(() => {
				if (c.rangeCount === g.length) {
					for (let y = 0; y < c.rangeCount; y += 1) {
						const E = g[y],
							_ = c.getRangeAt(y);
						if (
							E.commonAncestorContainer !== _.commonAncestorContainer ||
							E.startContainer !== _.startContainer ||
							E.endContainer !== _.endContainer ||
							E.startOffset !== _.startOffset ||
							E.endOffset !== _.endOffset
						)
							return;
					}
					c.removeAllRanges();
				}
			});
		}
	}
}
async function Et(a, o, l) {
	const c = wt(a, o);
	Ye({ client: c }),
		l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
		c._start_router();
}
export { Et as start };
