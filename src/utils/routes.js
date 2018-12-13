const routes = [{
	path: '/login',
},{
	path: '/',
	name:'首页',
	component: './index',
	routes: [{
		path: '/home',
        name:'首页',
		icon:'home',
		component: './Home',
	},{
		path: '/environment',
		name:'环境管理',
        icon:'area-chart',
		routes:[{
			path: '/environment/registration',
			fatherKey: '/environment',
			name:'卷注册/更改',
			icon:'area-chart',
			component: './Environment/Registration',
		},{
			path: '/environment/writeProtect',
			fatherKey: '/environment',
			name:'卷写保护',
			icon:'area-chart',
			component: './Environment/WriteProtect',
		}]
	},{
		path: '/user',
        name:'用户',
		icon:'user',
		component: './User',
	},{
		path: '/',
        redirect: '/home'
	}]
}]
module.exports = routes	
