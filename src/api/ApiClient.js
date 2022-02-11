export class ApiClient {
  constructor() {
    this._serverUrl = "http://localhost:3000";
  }

  test() {
    return "test";
  }

  //   async getData(
  //     deviceId: string,
  //   ): Promise<{ nonce: string; identifier: string }> {
  //     const response = await axios.get(
  //       `${this._serverUrl}/endpoint?deviceId=${deviceId}`,
  //     );
  //     return response.data;
  //   }
}
