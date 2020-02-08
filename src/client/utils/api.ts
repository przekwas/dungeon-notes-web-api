const AccessToken: any = null;

export const get = async (uri: string) => {
	const headers: { [key: string]: any } = {};

	if (AccessToken) {
		headers['Authorization'] = `Bearer ${AccessToken}`;
	}

	try {
		let res = await fetch(uri, {
			headers
		});
		if (res.ok) {
			return await res.json();
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};

export const post = async (uri: string, body: { [key: string]: any }) => {
	const headers: { [key: string]: any } = {};

	if (AccessToken) {
		headers['Authorization'] = `Bearer ${AccessToken}`;
	}

	try {
		let res = await fetch(uri, {
			headers,
			method: 'POST',
			body: JSON.stringify(body)
		});
		if (res.ok) {
			return await res.json;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};
