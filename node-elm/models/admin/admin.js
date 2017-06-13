'use strict';

import mongoose from 'mongoose'

// Defining your schema
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	user_name: String,
	password: String,
	id: Number,
	create_time: String,
	admin: {type: String, default: '管理员'},
	status: Number,  //1:普通管理、 2:超级管理员
	avatar: {type: String, default: 'default.jpg'},
	city: String,
})

// 创建索引，给id字段添加索引，1和-1分别表示升序索引和降序索引
adminSchema.index({id: 1});

// Creating a model
const Admin = mongoose.model('Admin', adminSchema);


export default Admin
