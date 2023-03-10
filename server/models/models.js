import { sequelize } from '../utils/db.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	login: {
		type: DataTypes.STRING, unique: true,
	},
	password: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.STRING, defaultValue: "USER"
	},
	activationLink: {
		type: DataTypes.STRING
	},
	isActivation: {
		type: DataTypes.BOOLEAN, defaultValue: false
	}
})
const Zapisi = sequelize.define('zapisi', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.TEXT('long')
	},
	start: {
		type: DataTypes.DATE
	},
	end: {
		type: DataTypes.DATE
	},
	tel: {
		type: DataTypes.STRING
	},
	type: {
		type: DataTypes.STRING
	},
	zapros: {
		type: DataTypes.STRING
	},
	allDay: {
		type: DataTypes.BOOLEAN, defaultValue: false
	},
})
const Articles = sequelize.define('articles', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	article: {
		type: DataTypes.TEXT('long')
	},
	img: {
		type: DataTypes.JSON
	},
	link: {
		type: DataTypes.STRING
	},
	description: {
		type: DataTypes.STRING
	},
	like: {
		type: DataTypes.INTEGER, defaultValue: 0
	},
	group: {
		type: DataTypes.STRING
	},
	count: {
		type: DataTypes.INTEGER, defaultValue: 0
	},
	publication: {
		type: DataTypes.BOOLEAN, defaultValue: false
	},
	view: {
		type: DataTypes.INTEGER
	},
	dateTime: {
		type: DataTypes.DATE
	},
})
const Otzyvy = sequelize.define('otzyvy', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	otzyv: {
		type: DataTypes.TEXT('long')
	},
	city: {
		type: DataTypes.STRING
	},
	response: {
		type: DataTypes.TEXT('long')
	},
	name: {
		type: DataTypes.STRING
	},
	vozvrast: {
		type:  DataTypes.STRING
	},
	tel: {
		type:  DataTypes.STRING
	},
	rate: {
		type: DataTypes.STRING
	},
	isPublication: {
		type: DataTypes.BOOLEAN, defaultValue: false
	},
	isNew: {
		type: DataTypes.BOOLEAN, defaultValue: true
	}
})



export const models = {
	User,
	Zapisi,
	Articles,
	Otzyvy,
}

