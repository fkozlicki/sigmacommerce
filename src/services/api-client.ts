import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	CreateAxiosDefaults,
} from 'axios';

const API_URL = 'https://dummyjson.com';

const defaultConfig: CreateAxiosDefaults = {
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
};

interface RequestResponse<T> {
	data: T | null;
	error: string | null;
}

const makeRequest = async <T = unknown>(
	instance: AxiosInstance,
	config: AxiosRequestConfig
): Promise<RequestResponse<T>> => {
	try {
		const { data } = await instance(config);
		return { data, error: null };
	} catch (err) {
		const error = err instanceof Error ? err.message : 'Unknown error';
		return { data: null, error };
	}
};

const createApiClient = (options: CreateAxiosDefaults = {}) => {
	const config: CreateAxiosDefaults = { ...defaultConfig, ...options };

	const instance = axios.create(config);

	return {
		get: <T = unknown>(
			url: string,
			params?: AxiosRequestConfig['params'],
			options?: AxiosRequestConfig
		) =>
			makeRequest<T>(instance, {
				method: 'GET',
				url,
				params,
				...options,
			}),
		post: <T = unknown>(
			url: string,
			data?: unknown,
			options?: AxiosRequestConfig
		) =>
			makeRequest<T>(instance, {
				method: 'POST',
				url,
				data,
				...options,
			}),
	};
};

export const apiClient = createApiClient();
