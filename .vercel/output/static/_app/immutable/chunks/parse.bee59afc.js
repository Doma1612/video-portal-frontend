function y(s, I) {
	return i(JSON.parse(s), I);
}
function i(s, I) {
	if (typeof s == 'number') return a(s, !0);
	if (!Array.isArray(s) || s.length === 0) throw new Error('Invalid input');
	const u = s,
		r = Array(u.length);
	function a(n, N = !1) {
		if (n === -1) return;
		if (n === -3) return NaN;
		if (n === -4) return 1 / 0;
		if (n === -5) return -1 / 0;
		if (n === -6) return -0;
		if (N) throw new Error('Invalid input');
		if (n in r) return r[n];
		const t = u[n];
		if (!t || typeof t != 'object') r[n] = t;
		else if (Array.isArray(t))
			if (typeof t[0] == 'string') {
				const c = t[0],
					o = I == null ? void 0 : I[c];
				if (o) return (r[n] = o(a(t[1])));
				switch (c) {
					case 'Date':
						r[n] = new Date(t[1]);
						break;
					case 'Set':
						const f = new Set();
						r[n] = f;
						for (let e = 1; e < t.length; e += 1) f.add(a(t[e]));
						break;
					case 'Map':
						const l = new Map();
						r[n] = l;
						for (let e = 1; e < t.length; e += 2) l.set(a(t[e]), a(t[e + 1]));
						break;
					case 'RegExp':
						r[n] = new RegExp(t[1], t[2]);
						break;
					case 'Object':
						r[n] = Object(t[1]);
						break;
					case 'BigInt':
						r[n] = BigInt(t[1]);
						break;
					case 'null':
						const E = Object.create(null);
						r[n] = E;
						for (let e = 1; e < t.length; e += 2) E[t[e]] = a(t[e + 1]);
						break;
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(t.length);
				r[n] = c;
				for (let o = 0; o < t.length; o += 1) {
					const f = t[o];
					f !== -2 && (c[o] = a(f));
				}
			}
		else {
			const c = {};
			r[n] = c;
			for (const o in t) {
				const f = t[o];
				c[o] = a(f);
			}
		}
		return r[n];
	}
	return a(0);
}
export { y as p, i as u };