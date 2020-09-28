export const ReviewAPI = superclass =>
    class extends superclass {
        async getReviewCreated(event) {
            const url = this.baseUrl + "review";
            const contents = await this.post(url, {
                dataJ: event
            });
            return await contents.text();
        }

        async getReviewApproved(event) {
            const url = this.baseUrl + "review/approved";
            const contents = await this.post(url, {
                dataJ: event
            });
            return await contents.text();
        }

        async getReviewRejected(event) {
            const url = this.baseUrl + "review/rejected";
            const contents = await this.post(url, {
                dataJ: event
            });
            return await contents.text();
        }
    };

export default ReviewAPI;
