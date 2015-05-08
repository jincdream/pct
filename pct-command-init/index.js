'use strict'
var spawn = require('child_process').spawn
var path = require('path')

exports.name = 'init'
exports.usage = '<commad> [option]'
exports.desc = 'create dir for deferant works'
exports.register = function (commander) {
	commander
		.option('-z,--zt <type>','create zhuangti file',String,'zt')
		.option('-x,--xm','create xiangmu file',String)
	
	var ztInit = function(type){
		
	}

	commander.action(function(){
			var args = process.argv
			var cmd = args[2]
			var option = args[3]
			switch(cmd){
				case '-z':
				case '-zt':
					break;
			}
		})
}