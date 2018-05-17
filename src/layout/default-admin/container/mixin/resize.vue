import store from '@/store'

export default {
    watch: {
        $route(route) {
            console.log('hahhahhah--reisze')
            if(!this.sidebar.opened) {
                store.dispatch('app/closeSideBar')
            }
        }
    },
    beforeMount() {

    },
    beforeDestroy() {
    },
    mounted() {
    },
    methods: {
    }
}