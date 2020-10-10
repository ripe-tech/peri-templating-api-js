export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(event) {
            const url = this.baseUrl + "order";
            return await this.post(url, {
                dataJ: event
            });
        }
    };

export default OrderAPI;
