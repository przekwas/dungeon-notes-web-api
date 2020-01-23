export const setNav = (e: any) => {
	if (e.shiftKey) {
		switch (16 + e.keyCode) {
			case 53:
				return '/characters';
				break;
			case 54:
				return '/personal';
				break;
			case 55:
				return '/events';
				break;
			case 56:
				return '/places';
				break;
			default:
				break;
		}
	} else if (e.keyCode === 17) {
		return '/';
	}
};
