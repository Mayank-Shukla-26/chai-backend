// Custom error class for API failures.
// Use ApiError to include HTTP status codes and additional validation details.
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = error
        

        // Preserve a proper stack trace for debugging if one is not provided.
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}