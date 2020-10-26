export const ReviewAPI = superclass =>
    class extends superclass {
        async getReview(event) {
            const parts = event.name.split(".");
            const state = parts.length === 3 ? parts[1] : null;
            const role = parts.length === 3 ? parts[2] : parts[1];

            const templateName = `${state || "opened"}-${role}`;
            const url = this.baseUrl + `review/${templateName}`;
            return await this.post(url, {
                dataJ: event
            });
        }
    };

export default ReviewAPI;
