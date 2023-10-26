import {
	S as Me,
	i as Ue,
	s as Ve,
	k as r,
	q as k,
	a as K,
	l as a,
	m as o,
	r as L,
	h as n,
	c as I,
	p as H,
	n as l,
	b as P,
	E as t,
	L as d,
	M as q,
	K as qe,
	N as Se
} from '../chunks/index.7a94f913.js';
function Re(s) {
	let p,
		T,
		A,
		N,
		g,
		B,
		D,
		u,
		y,
		z,
		G,
		m,
		Q,
		M,
		O,
		W,
		f,
		X,
		U,
		V,
		le,
		b,
		re,
		Y,
		S,
		ae,
		v,
		ne,
		x,
		R,
		ue,
		_,
		ie,
		$,
		j,
		oe,
		c,
		se,
		ee,
		w,
		he,
		E,
		pe,
		C,
		J,
		me,
		te,
		Z,
		F,
		fe,
		de,
		ze;
	return {
		c() {
			(p = r('h1')),
				(T = k('Kurs anlegen')),
				(A = K()),
				(N = r('br')),
				(g = r('br')),
				(B = r('br')),
				(D = K()),
				(u = r('form')),
				(y = r('div')),
				(z = r('label')),
				(G = k(`Kurstitel
        `)),
				(m = r('input')),
				(Q = K()),
				(M = r('div')),
				(O = r('label')),
				(W = k(`Kurzbeschreibung
        `)),
				(f = r('input')),
				(X = K()),
				(U = r('div')),
				(V = r('label')),
				(le = k(`Ort
        `)),
				(b = r('input')),
				(re = K()),
				(Y = r('div')),
				(S = r('label')),
				(ae = k(`Datum
        `)),
				(v = r('input')),
				(ne = K()),
				(x = r('div')),
				(R = r('label')),
				(ue = k(`Kursgebühr
        `)),
				(_ = r('input')),
				(ie = K()),
				($ = r('div')),
				(j = r('label')),
				(oe = k(`Minimale Teilnehmeranzahl
        `)),
				(c = r('input')),
				(se = K()),
				(ee = r('div')),
				(w = r('label')),
				(he = k(`Maximale Teilnehmeranzahl
        `)),
				(E = r('input')),
				(pe = K()),
				(C = r('a')),
				(J = r('button')),
				(me = k('Anlegen')),
				(te = K()),
				(Z = r('nav')),
				(F = r('a')),
				(fe = k('Zurück')),
				this.h();
		},
		l(e) {
			p = a(e, 'H1', { style: !0 });
			var i = o(p);
			(T = L(i, 'Kurs anlegen')),
				i.forEach(n),
				(A = I(e)),
				(N = a(e, 'BR', {})),
				(g = a(e, 'BR', {})),
				(B = a(e, 'BR', {})),
				(D = I(e)),
				(u = a(e, 'FORM', { method: !0 }));
			var h = o(u);
			y = a(h, 'DIV', {});
			var ke = o(y);
			z = a(ke, 'LABEL', { for: !0 });
			var be = o(z);
			(G = L(
				be,
				`Kurstitel
        `
			)),
				(m = a(be, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				be.forEach(n),
				ke.forEach(n),
				(Q = I(h)),
				(M = a(h, 'DIV', {}));
			var Ke = o(M);
			O = a(Ke, 'LABEL', { for: !0 });
			var ve = o(O);
			(W = L(
				ve,
				`Kurzbeschreibung
        `
			)),
				(f = a(ve, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				ve.forEach(n),
				Ke.forEach(n),
				(X = I(h)),
				(U = a(h, 'DIV', {}));
			var Le = o(U);
			V = a(Le, 'LABEL', { for: !0 });
			var _e = o(V);
			(le = L(
				_e,
				`Ort
        `
			)),
				(b = a(_e, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				_e.forEach(n),
				Le.forEach(n),
				(re = I(h)),
				(Y = a(h, 'DIV', {}));
			var Ie = o(Y);
			S = a(Ie, 'LABEL', { for: !0 });
			var ce = o(S);
			(ae = L(
				ce,
				`Datum
        `
			)),
				(v = a(ce, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				ce.forEach(n),
				Ie.forEach(n),
				(ne = I(h)),
				(x = a(h, 'DIV', {}));
			var Ae = o(x);
			R = a(Ae, 'LABEL', { for: !0 });
			var Ee = o(R);
			(ue = L(
				Ee,
				`Kursgebühr
        `
			)),
				(_ = a(Ee, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				Ee.forEach(n),
				Ae.forEach(n),
				(ie = I(h)),
				($ = a(h, 'DIV', {}));
			var Ne = o($);
			j = a(Ne, 'LABEL', { for: !0 });
			var Te = o(j);
			(oe = L(
				Te,
				`Minimale Teilnehmeranzahl
        `
			)),
				(c = a(Te, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				Te.forEach(n),
				Ne.forEach(n),
				(se = I(h)),
				(ee = a(h, 'DIV', {}));
			var ge = o(ee);
			w = a(ge, 'LABEL', { for: !0 });
			var ye = o(w);
			(he = L(
				ye,
				`Maximale Teilnehmeranzahl
        `
			)),
				(E = a(ye, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0 })),
				ye.forEach(n),
				ge.forEach(n),
				(pe = I(h)),
				(C = a(h, 'A', { href: !0 }));
			var Be = o(C);
			J = a(Be, 'BUTTON', { type: !0 });
			var De = o(J);
			(me = L(De, 'Anlegen')),
				De.forEach(n),
				Be.forEach(n),
				h.forEach(n),
				(te = I(e)),
				(Z = a(e, 'NAV', {}));
			var Oe = o(Z);
			F = a(Oe, 'A', { href: !0 });
			var Pe = o(F);
			(fe = L(Pe, 'Zurück')), Pe.forEach(n), Oe.forEach(n), this.h();
		},
		h() {
			H(p, 'font-weight', '500'),
				H(p, 'font-size', '38px'),
				H(p, 'text-align', 'center'),
				H(p, 'margin-top', '50px'),
				H(p, 'margin-bottom', '20px'),
				H(p, 'display', 'inline-block'),
				l(m, 'id', 'kurstitel'),
				l(m, 'name', 'kurstitel'),
				l(m, 'type', 'text'),
				(m.required = !0),
				l(m, 'placeholder', 'Kurstitel'),
				l(z, 'for', 'Kurstitel'),
				l(f, 'id', 'kurzbeschreibung'),
				l(f, 'name', 'kurzbeschreibung'),
				l(f, 'type', 'text'),
				(f.required = !0),
				l(f, 'placeholder', 'Kurzbeschreibung'),
				l(O, 'for', 'Kurzbeschreibung'),
				l(b, 'id', 'ort'),
				l(b, 'name', 'ort'),
				l(b, 'type', 'text'),
				(b.required = !0),
				l(b, 'placeholder', 'Ort'),
				l(V, 'for', 'Ort'),
				l(v, 'id', 'datum'),
				l(v, 'name', 'datum'),
				l(v, 'type', 'text'),
				(v.required = !0),
				l(v, 'placeholder', 'Datum'),
				l(S, 'for', 'Datum'),
				l(_, 'id', 'kursgebuehr'),
				l(_, 'name', 'kursgebuehr'),
				l(_, 'type', 'text'),
				(_.required = !0),
				l(_, 'placeholder', 'Kursgebühr'),
				l(R, 'for', 'Kursgebuehr'),
				l(c, 'id', 'minimale_teilnehmeranzahl'),
				l(c, 'name', 'minimale_teilnehmeranzahl'),
				l(c, 'type', 'text'),
				(c.required = !0),
				l(c, 'placeholder', 'Minimale Teilnehmeranzahl'),
				l(j, 'for', 'minimale_Teilnehmeranzahl'),
				l(E, 'id', 'maximale_teilnehmeranzahl'),
				l(E, 'name', 'maximale_teilnehmeranzahl'),
				l(E, 'type', 'text'),
				(E.required = !0),
				l(E, 'placeholder', 'Maximale Teilnehmeranzahl'),
				l(w, 'for', 'maximale_Teilnehmeranzahl'),
				l(J, 'type', 'submit'),
				l(C, 'href', '/'),
				l(u, 'method', 'POST'),
				l(F, 'href', '/');
		},
		m(e, i) {
			P(e, p, i),
				t(p, T),
				P(e, A, i),
				P(e, N, i),
				P(e, g, i),
				P(e, B, i),
				P(e, D, i),
				P(e, u, i),
				t(u, y),
				t(y, z),
				t(z, G),
				t(z, m),
				d(m, s[0]),
				t(u, Q),
				t(u, M),
				t(M, O),
				t(O, W),
				t(O, f),
				d(f, s[1]),
				t(u, X),
				t(u, U),
				t(U, V),
				t(V, le),
				t(V, b),
				d(b, s[2]),
				t(u, re),
				t(u, Y),
				t(Y, S),
				t(S, ae),
				t(S, v),
				d(v, s[3]),
				t(u, ne),
				t(u, x),
				t(x, R),
				t(R, ue),
				t(R, _),
				d(_, s[4]),
				t(u, ie),
				t(u, $),
				t($, j),
				t(j, oe),
				t(j, c),
				d(c, s[5]),
				t(u, se),
				t(u, ee),
				t(ee, w),
				t(w, he),
				t(w, E),
				d(E, s[6]),
				t(u, pe),
				t(u, C),
				t(C, J),
				t(J, me),
				P(e, te, i),
				P(e, Z, i),
				t(Z, F),
				t(F, fe),
				de ||
					((ze = [
						q(m, 'input', s[8]),
						q(f, 'input', s[9]),
						q(b, 'input', s[10]),
						q(v, 'input', s[11]),
						q(_, 'input', s[12]),
						q(c, 'input', s[13]),
						q(E, 'input', s[14]),
						q(u, 'submit', s[7])
					]),
					(de = !0));
		},
		p(e, [i]) {
			i & 1 && m.value !== e[0] && d(m, e[0]),
				i & 2 && f.value !== e[1] && d(f, e[1]),
				i & 4 && b.value !== e[2] && d(b, e[2]),
				i & 8 && v.value !== e[3] && d(v, e[3]),
				i & 16 && _.value !== e[4] && d(_, e[4]),
				i & 32 && c.value !== e[5] && d(c, e[5]),
				i & 64 && E.value !== e[6] && d(E, e[6]);
		},
		i: qe,
		o: qe,
		d(e) {
			e && n(p),
				e && n(A),
				e && n(N),
				e && n(g),
				e && n(B),
				e && n(D),
				e && n(u),
				e && n(te),
				e && n(Z),
				(de = !1),
				Se(ze);
		}
	};
}
function je(s, p, T) {
	let A = ' ',
		N = ' ',
		g = ' ',
		B = ' ',
		D = ' ',
		u = ' ',
		y = ' ',
		z = null;
	async function G() {
		z = await fetch('http://localhost:8080/kursRest-1.0/api/kurs/createKurs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				kurstitel: A,
				kurzbeschreibung: N,
				ort: g,
				datum: B,
				kursgebuehr: D,
				minTeilnehmer: u,
				maxTeilnehmer: y
			})
		});
		const U = await z.json();
		JSON.stringify(U);
	}
	function m() {
		(A = this.value), T(0, A);
	}
	function Q() {
		(N = this.value), T(1, N);
	}
	function M() {
		(g = this.value), T(2, g);
	}
	function O() {
		(B = this.value), T(3, B);
	}
	function W() {
		(D = this.value), T(4, D);
	}
	function f() {
		(u = this.value), T(5, u);
	}
	function X() {
		(y = this.value), T(6, y);
	}
	return [A, N, g, B, D, u, y, G, m, Q, M, O, W, f, X];
}
class Ce extends Me {
	constructor(p) {
		super(), Ue(this, p, je, Re, Ve, {});
	}
}
export { Ce as component };
