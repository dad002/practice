let sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('data.db');

function get() {
	let sql = "SELECT * FROM Teacher"

	db.all(sql, [], (err, rows) => {
  		if (err) {
    		throw err;
 		}
 		rows.forEach((row) => {
    		console.log(row);
  		});
	});
}

function addTeacher(login, password) {
	db.run('INSERT INTO Teacher(Login,Password) VALUES (?, ?)', [login, password], function(err) {
    	if (err) {
    		return 0
    	}
    	// get the last insert id
    	console.log(`A row has been inserted with rowid`);
    	return 1
  });
}

function addClass(teacherID, calssNumber) {
	db.run('INSERT INTO Class(Number, TeacherID) VALUES (?, ?)', [calssNumber, teacherID], function(err) {
    	if (err) {
    		return 0
    	}
    	// get the last insert id
    	console.log(`A row has been inserted with rowid`);
    	return 1
  });
}

async function login(Login, Password) {
	await db.all ('SELECT Login, Password FROM Teacher WHERE Login = (?) and Password = (?)', [Login, Password], (err, row) => {
		if (err) {
			console.log(err.message);
			console.log('zagsdd');
			return 0;
		}

		if (row.length == 0) {
			return 2;
		}

		console.log(row)
		return 1;

	});
}

//get()
//addTeacher()
//get()
login('test1', 'asdf').then(a => {
	console.log(a)
})

