const api = {
    environments: {
        development: {
            url: "http://localhost:8080/api"
        },
        production: {
            host: "ip",
            port: 0
        }
    },

    endpoints: {
        valid_token: "/valid_stored_token",
        login: "/login",
        agreements: "/agreements",
        transactions: "/transactions"
    }
}

export const retrieveApiEnv = () => {
    const env = process.env.env_timbres == 'production' ? 
    api.environments.production : api.environments.development;
    return env;
}

export const endpoints = () => {
    return api.endpoints;
}