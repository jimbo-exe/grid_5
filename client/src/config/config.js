export const serverUrl = 'https://grid-5.vercel.app/';

const config = {
	development: {
		backendUrl: `${serverUrl}/api/v1/dalle`,
		// backendUrl: `http://localhost:8080/api/v1/dalle`,
	},
	production: {
		backendUrl: `${serverUrl}/api/v1/dalle`,
	},
};

export default config;
