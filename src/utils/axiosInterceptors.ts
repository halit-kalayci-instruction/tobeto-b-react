import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use(config => {
	console.log("İstek atılıyor..");

	config.headers.Authorization = "MyToken";
	config.headers["Accept-Language"] = "tr";

	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		//...
		console.log("Cevap geldi");

		return response;
	},
	error => {
		// switch (error.data.error) {
		// 	case "Validation failed":
		// 		break;
		// 	case "ResourceAlreadyExists":
		// 		break;
		// }
		console.log(error);
	},
);

export default axiosInstance;
