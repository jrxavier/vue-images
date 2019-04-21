const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        // !! é uma forma de gerar avaliação booleana  
        !!state.token;
    }
};


const actions = {

};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};