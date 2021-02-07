/**
 * Vue 插件
*/
(function (){
	
	const MyPlugin = {}
	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或 property
	  Vue.myGlobalMethod = function () {
	    // 逻辑...
		console.log('Vue全局对象的方法myGlobalMethod()')
	  }
	
	  // 2. 添加全局资源
	  Vue.directive('my-directive', function (el, binding) {
		  el.textContent = binding.value.toUpperCase()
	  })
	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function (methodOptions) {
	    // 逻辑...
		console.log('Vue实例对象的方法$myMethod')
	  }
	}
	window.MyPlugin = MyPlugin
})()