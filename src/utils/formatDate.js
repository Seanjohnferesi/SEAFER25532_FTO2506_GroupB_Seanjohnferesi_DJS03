export const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }