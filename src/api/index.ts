import axios from "axios";

class API {
  private apiUrl = process.env.REACT_APP_API_BASE_URL;

  async getBounties() {
    try {
      const response = await axios.get(`${this.apiUrl}/bounty/live-bounties`);
      return response.data;
    } catch (error) {
      console.log({ error });
    }
    return;
  }
}

export default API;
