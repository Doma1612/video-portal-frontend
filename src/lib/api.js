// @ts-nocheck
import { error } from '@sveltejs/kit';
import { DATABASE_URL } from '$env/static/private';

const base = DATABASE_URL;
// Kopie Login-Projekt Svelte Dallmöller
async function sendLogin({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.headers['Accept'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	console.log(opts);
	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);

	if (res.ok || res.status === 422) {
		const authorization = res.headers.get('Authorization');
		//console.log(authorization);
		const tok = authorization.replace('Bearer ', '');
		//console.log("tok="+tok);

		/* 		console.log(authorization);
		const cook = res.headers.get('Set-Cookie');
		console.log("cookie="+cook);
 */

		const text = { username: data.username, token: tok };
		//console.log("text.token="+text.token);
		//console.log("text.username="+text.username);
		return text;
		//return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.headers['Accept'] = 'application/json';
		opts.body = JSON.stringify(data);
	}
	//console.log(opts)
	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);

	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function postLogin(path, data, token) {
	return sendLogin({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
