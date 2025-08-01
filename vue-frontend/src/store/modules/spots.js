
const state =()=>({
    all:[]
})
const getters={}
const actions={
    async getAllSpots ({commit}){
        const res = await fetch(`/api/spots`)
        if(res.ok){
            const spots = await res.json()
            commit('setSpots',spots)
        }
    }
}
const mutations ={
    setSpots(state,payload){
        state.Spots = payload.Spots ||[]
    }
}
export default{
 namespaced: true,
  state,
  getters,
  actions,
  mutations
}
