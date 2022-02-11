import axios from "axios";

export class ApiClient {
  constructor() {
    this._serverUrl = "http://localhost:3000";
  }

  async getTokenList(){
    const response = await axios.get(`${this._serverUrl}/prices/coins`)
    return response.data.coins;
  }
}
