
import axios from 'axios';

async function POST(data, link) {

	const handleSubmit = async () => {
		try {
			const response = await axios.post(link, data);
			return response.data;
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return await handleSubmit();
}

export { POST }