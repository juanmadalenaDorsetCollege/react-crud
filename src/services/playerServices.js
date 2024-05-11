import api from '../config/api';

class PlayerServices {
    static async getPlayers() {
        const { data } = await api.get('/players');
        return data;
    }

    static async getPlayerById(id) {
        const { data } = await api.get(`/players/${id}`);
        return data;
    }

    static async createPlayer(player) {
        const { data } = await api.post('/players', player);
        return data;
    }

    static async updatePlayer(player) {
        const { data } = await api.put(`/players/${player._id}`, player);
        return data;
    }

    static async deletePlayer(id) {
        console.log(id)
        const { data } = await api.delete(`/players/${id}`);
        return data;
    }
}

export default PlayerServices;