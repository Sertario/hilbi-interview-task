import axios from 'axios'

export async function getAllUsers() {
    try {
        const response = await axios.get('http://localhost:50000/users', {
            params: {
                page: 1,
                pageSize: 10,
            }
        });

        const { items, pagination } = response.data;
        return {
            users: items,
            total: pagination.total
        };
    } catch (e) {
        console.log(e);
        return {
            users: [],
            total: 0
        };
    }
}


export async function getLastFiveUsers() {
    try {
        const response = await axios.get('http://localhost:50000/users', {
            params: {
                page: 1,
                pageSize: 5,
                status: 'active'
            }
        });

        return response.data.items;
    } catch (e) {
        console.log(e);
        return [];
    };
}


export async function getActiveUsers() {
    try {
        const response = await axios.get('http://localhost:50000/users', {
            params: {
                page: 1,
                pageSize: 10,
                status: 'active'
            }
        });

        const { items, pagination } = response.data;
        return {
            users: items,
            total: pagination.total
        };
    } catch (e) {
        console.log(e);
        return {
            users: [],
            total: 0
        };
    }
}

export async function getInactiveUsers() {
    try {
        const response = await axios.get('http://localhost:50000/users', {
            params: {
                page: 1,
                pageSize: 5,
                status: 'inactive'
            }
        });

        const { items, pagination } = response.data;
        return {
            users: items,
            total: pagination.total
        };
    } catch (e) {
        console.log(e);
        return {
            users: [],
            total: 0
        };
    }
}

