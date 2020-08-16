import Vue from 'vue'
import Vuex from 'vuex'
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import firebase from '../firebase/firebase'
import { router } from '../main'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        userDetails: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setUserDetails(state, payload) {
            state.userDetails = payload
        },
    },
    actions: {
        signUp({ commit }, payload) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then((result) => {
                    commit('setUser', result.user)
                    commit('setUserDetails', {name: payload.name})
                    let id = result.user.uid
                    firebase
                        .database()
                        .ref("userDetails/" + id)
                        .set({
                            name: payload.name,
                            courses: ''
                        });
                })
                .then(() => router.push({ path: "/" }))
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        },
        login({ commit }, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(resp => {
                    commit('setUser', resp.user)
                    firebase.database().ref('userDetails/' + resp.user.uid)
                        .on('value', snap => {
                            commit('setUserDetails', snap.val())
                        }, error => {
                            console.log('Error: ' + error.message)
                        })
                }
                )
                .then(() => router.push({ path: "/" }))
                .catch(() => {
                    return this.$ionic.alertController
                        .create({
                            header: "Login failed",
                            message: "Invalid username or password, please try again",
                            buttons: ["OK"],
                        })
                        .then((a) => a.present());
                }

                )
        },
        logout({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null)
                    commit('setUserDetails', null)
                })
                .catch((error) => {
                    console.log("error", error);
                });
        },
        addQuizResult({ commit }, payload) {
            // let courses = this.state.userDetails.courses;
            // courses[payload.id] = payload.points;
            // firebase.database().ref("userDetails/" + this.state.user.uid + "/courses/").update(courses);
            // commit('setUserDetails', this.state.userDetails)
        }
    },
    getters: {
        user: state => state.user,
        userDetails: state => state.userDetails
    }

})