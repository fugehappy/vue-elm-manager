'use strict';

// 使用用户名fred，密码foobar登录localhost的baz数据库
// mongodb://fred:foobar@localhost/baz
// 8001 是后台启用的端口号，在前端用的是8002，用的是代理
module.exports = {
	port: 8001,
	url: 'mongodb://localhost:27017/elm',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure: false,
		    maxAge: 365 * 24 * 60 * 60 * 1000,
		}
	}
}