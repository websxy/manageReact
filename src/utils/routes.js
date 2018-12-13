const routes = [{
	path: '/login',
},{
	path: '/',
	component: './index',
	routes: [{
        path: '/',
        redirect: '/environment'
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
        name:'user',
		icon:'user',
		component: './user/index',
	}]
}]
module.exports = routes	
