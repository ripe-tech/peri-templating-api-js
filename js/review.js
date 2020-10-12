export const ReviewAPI = superclass =>
    class extends superclass {
        async createReviewOwner(event) {
            const url = this.baseUrl + "review/opened-owner";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createReviewReviewer(event) {
            const url = this.baseUrl + "review/opened-reviewer";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createApprovedReviewOwner(event) {
            const url = this.baseUrl + "review/approved-owner";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createApprovedReviewReviewer(event) {
            const url = this.baseUrl + "review/approved-reviewer";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createRejectedReviewOwner(event) {
            const url = this.baseUrl + "review/rejected-owner";
            return await this.post(url, {
                dataJ: event
            });
        }

        async createRejectedReviewReviewer(event) {
            const url = this.baseUrl + "review/rejected-reviewer";
            return await this.post(url, {
                dataJ: event
            });
        }
    };

export default ReviewAPI;
