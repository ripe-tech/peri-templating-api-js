export const ReviewAPI = superclass =>
    class extends superclass {
        async getReviewCreated(event) {
            const url = this.baseUrl + "review";
            return await this.post(url, {
                dataJ: event
            });
        }

        async getReviewApproved(event) {
            const url = this.baseUrl + "review/approved";
            return await this.post(url, {
                dataJ: event
            });
        }

        async getReviewRejected(event) {
            const url = this.baseUrl + "review/rejected";
            return await this.post(url, {
                dataJ: event
            });
        }
    };

export default ReviewAPI;
