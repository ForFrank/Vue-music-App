import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend'
import Singer from '../components/singer/singer'
import Tab from '../components/tab/tab'
import Rank from '../components/rank/rank'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/singer',
            component: Singer
        },
        {
            path: '/tab',
            component: Tab
        },
        {
            path: '/rank',
            component: Rank
        }
    ]
})
