/** taken from https://github.com/spatie/form-backend-validation */
class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Get all the errors.
     */
    all() {
        return this.errors;
    }

    /**
     * Determine if any errors exists for the given field or object.
     *
     * @param {string} field
     */
    has(field) {
        // eslint-disable-next-line no-prototype-builtins
        let hasError = this.errors.hasOwnProperty(field);

        if (!hasError) {
            const errors = Object
                .keys(this.errors)
                .filter(e => e.startsWith(`${field}.`));

            hasError = errors.length > 0;
        }

        return hasError;
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    get(field) {
        if (this.errors[field]) {
            if(typeof this.errors[field] === 'string') {
                return this.errors[field];
            }
            return this.errors[field][0];
        }
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     * @param {string|array} error
     */
    set(field, error) {
        this.errors[field] = error;
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors) {
        this.errors = errors;
    }

    /**
     * Clear a specific field, object or all error fields.
     *
     * @param {string|null} field
     */
    clear(field = null) {
        if (! field) {
            this.errors = {};

            return;
        }

        // this.errors = _.omit(this.errors, field);
    }
}

export default Errors;
