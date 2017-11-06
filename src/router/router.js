import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const RescueMap = r => require.ensure([], () => r(require('../page/rescueMap/rescueMap')), 'rescueMap')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        {
            path:'/rescueMap/:type',
            component:RescueMap
        }
    ]
}]