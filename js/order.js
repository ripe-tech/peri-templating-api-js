export const OrderAPI = superclass =>
    class extends superclass {
        async getOrderTemplate(event) {
            const url = this.baseUrl + "order";
            const contents = await this.post(url, {
                dataJ: event
            });
            return await contents.text();
        }
    };

export default OrderAPI;
