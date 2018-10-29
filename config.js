const env = process.env

export default {
    // allow us to control port from a process or simply default to port 8080
    port: env.PORT || 8080
};