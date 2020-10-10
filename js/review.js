export const ReviewAPI = superclass =>
    class extends superclass {
        async createReview(event) {
            const url = this.baseUrl + "review";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createApprovedReview(event) {
            const url = this.baseUrl + "review/approved";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createRejectedReview(event) {
            const url = this.baseUrl + "review/rejected";
            return await this.post(url, {
                dataJ: event
            });
        }
    };

export default ReviewAPI;
