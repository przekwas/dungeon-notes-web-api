export const setNav = (e: KeyboardEvent) => {
	if (e.shiftKey) {
		switch (16 + e.keyCode) {
			case 53:
				return '/characters';
			case 54:
				return '/personal';
			case 55:
				return '/events';
			case 56:
				return '/places';
			default:
				break;
		}
	} else if (e.keyCode === 17) {
		return '/';
	}
};
