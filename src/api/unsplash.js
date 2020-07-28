import axios from 'axios';

export default axios.create({
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID 2GKEEN0YcELkFW3qalHOt2oVxxv_Z0PuS8pySobSTBw'
        }
    }
)