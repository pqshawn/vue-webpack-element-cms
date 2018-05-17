import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false })

router.beforeEach(async(to, from, next) => {
    NProgress.start()
    window.document.title = to.meta.title;

    // TODO token


    const hasRoles = store.getters.roles && store.getters.roles.length > 0
    if(hasRoles) {
        next()
    } else {
        // TODO 角色
        const { roles } = await store.dispatch('user/getInfo')

        const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
        router.addRoutes(accessRoutes)
        // hack method to ensure that addRoutes is complete
        // set the replace: true, so the navigation will not leave a history record
        next({ ...to, replace: true })
    }
})

router.afterEach(() => {
    // window.scrollTo(0, 0);
    NProgress.done()
})