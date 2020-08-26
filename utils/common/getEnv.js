/**
 * Utility to get environment variable,
 * this will throw error if the env variable not provided
 * and there is no default value.
 * Set the default value to null to make it not error.
 * @param {String} envName
 * @param {String} defaultValue
 */
function getEnv(envName, defaultValue) {
    if (!process.env[envName]) {
        if (defaultValue || defaultValue === null) {
            return defaultValue;
        }
        throw new Error(`Missing required environment variable: ${envName}`);
    }
    return process.env[envName];
}

module.exports = getEnv;
