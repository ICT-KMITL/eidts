// required modules
var express = require('express');
var mongoose = require('mongoose');
var engine = require('ejs-locals');
var http = require('http');

// connect to MongoDB
var db = 'loop';
mongoose.connect('mongodb://localhost:8000/'+db);

var ObjectId = require('mongoose').Types.ObjectId; 

// initialize our app
var app = express();

// app configuation
app.engine('ejs', engine);
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'coloft'}));

// port that server will listen on
var port = 8888;

// start listening...
//app.listen(port);
var server = http.createServer(app);
var io = require('socket.io').listen(server,{ log: false });
server.listen(port);
console.log('Express server listening on port '+port);

// io.set('log level', 1);

// create user model 
var User = mongoose.model('User', 
{
	usertype:String,
	title:String,
	firstname: String,
	lastname: String,
	jobpos: String,
	department:String,
	lab:String,
	dob: String,
	tag: String,
	username: String,
	password: String,
	email: String,
	telno: String,
	image: String,
	bio: String,
});

var Directory = mongoose.model('Directory', 
{
	title:String,
	firstname: String,
	lastname: String,
	jobpos: String,
	department:String,
	lab:String,
	dob: String,
	tag: String,
	username: String,
	password: String,
	email: String,
	telno: String,
	image: String,
	bio: String,
});

// create status model
var Status = mongoose.model('Status', {
	body: String,
	time: Number,
	username: String,
	image: String,
	comments: Array,
	likes: Array
});

// lecturer education background model
var Education_Background= mongoose.model('Education_Background',{
    username: String,
    insititute_name:String,
    program:String,
    degree:String,
    graduation_Year:Number,

});
//lecturer Research_interest model
var Research_interest= mongoose.model('Research_interest',{
    username: String,
    research_expertise:String,
    research_interest:String,
})

//lecturer Teaching Subjects model
var Teaching_subject= mongoose.model('Teaching_subject',{
     username: String,
     teaching_subject:String,
     teaching_program:String,
     teaching_course_code: String,
})

//lecturer Projects Supervisor model
var Projects_Supervisor= mongoose.model('Projects_Supervisor',{
     username: String,
     year_option:String,
     project_title:String,
     team_member:Array,
     keyword: Array,
     project_abstract:String,
     year:Number,
     //uploadfile

})

//lecturer Researches Funding model
var Research_funding= mongoose.model('Research_funding',{
     username: String,
     funding_project_title:String,
     position:String,
     funding_keyword: Array,
     funding_agency:String,
     funding_year:Number,
     funding_team_member:Array,
     funding_role:Array,
     project_funding_abstract:String,
          //uploadfile
})

//lecturer Papers model
var Papers = mongoose.model('Papers',{
     username: String,
     paper_title: String,
     paper_Coauthor:Array,
     paper_keyword: Array,
     paper_abstract:String,
     paper_year:String,
     paper_publication:String,
     //uploadfile

})

app.get('/', function (req, res) {

	if (req.session.user){
		Directory.find({}, function(err, directory){

				console.log("directory ",directory.length);

			});

		Status.find({}).sort({time: -1}).execFind(function (err, statuses){
			Directory.find({}, function(err, directory){

				res.render('homepage.ejs', {user: req.session.user, statuses: statuses,directory: directory});
			});

		});

	} else {

		res.render('welcome.ejs');
	}

});

app.get('/logout', function (req, res) {

	if (req.session.user) {
		console.log(req.session.user.username+' has logged out');
		delete req.session.user;
	}

	res.redirect('/');

});

app.get('/login', function (req, res) {

	var error1 = null;
	var error2 = null;

	if (req.query.error1) {
		error1 = "Sorry please try again";
	}

	if (req.query.error2) {
		error2 = "Sorry please try again";
	}

	res.render('login.ejs', {error1: error1, error2: error2});

});

app.post('/login', function (req, res) {
	var username = req.body.username.toLowerCase();
	var password = req.body.password;

	var query = {username: username, password: password};

	User.findOne(query, function (err, user) {

		if (err || !user) {
			res.redirect('/login?error2=1');
		} else {
			req.session.user = user;
			console.log(username+' has logged in');
			res.redirect('/');
		}

	});
});


app.post('/signup', function (req, res){
	var usertype = req.body.usertype;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var confirm = req.body.confirm;

	var telno = req.body.telno
	var Image = req.body.image;
	var bio = req.body.bio;

	var title = req.body.title;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var jobpos = req.body.jobpos;
	var department = req.body.department;
	var lab = req.body.lab;
	var dob = req.body.dob;
	var tag = req.body.tag;


	if(password != confirm) {
		res.redirect('/login?error1=1');
	}

	else {

		var query = {username: username};

		User.findOne(query, function (err, user) {
			if (user) {
				res.redirect('/login?error1=1');
			} else {

				var userData = { 
					usertype:usertype,
					username: username,
					password: password,
					email:'email',
					image: '/img/profile.jpg', //default image
					bio: 'Hi Loop!',
					telno: 'telno',
					title: 'title',
					firstname: 'firstname',
					lastname: 'lastname',
					jobpos: 'jobpos',
					department: 'department',
					lab: 'lab',
					dob: 'dob',
					tag: 'tag',

					hidden: false,
					wall: []
				};

				var newUser = new User(userData).save(function (err){

					req.session.user = userData;
					console.log('New user '+username+':'+usertype+'has been created!');
					res.redirect('/users/'+username);

				});
			}
		});
	}
});

// view user profile
app.get('/users/:username', function (req, res) {

	if (req.session.user) {

		var username = req.params.username.toLowerCase();
		var query = {username: username};
		var currentUser = req.session.user;

		User.findOne(query, function (err, user) {

			if (err || !user) {
				res.send('No user found by id '+username);
			} else {
				// Status.find(query).sort({time: -1}).execFind(function(err, statuses){

					Education_Background.find(query).sort({graduation_Year: 1}).execFind(function(err, edu){

						res.render('profile.ejs', {
							edu:edu,
							user: user, 
							currentUser: currentUser,
							// statuses: statuses, 
						});
						// console.log("user",user);
						// console.log("Education_Background"+edu);

					});
				// });
			}
		});
	} else {

		res.redirect('/login');
	}
});

// edit user profile
app.get('/editusers/:username', function (req, res) {

	if (req.session.user) {

		var username = req.params.username.toLowerCase();
		var query = {username: username};
		var currentUser = req.session.user;

		User.findOne(query, function (err, user) {

			if (err || !user) {
				res.send('No user found by id '+username);
			} else {
				// Status.find(query).sort({time: -1}).execFind(function(err, statuses){
				// 		res.render('editprofile.ejs', {
				// 			user: user, 
				// 			statuses: statuses, 
				// 			currentUser: currentUser,
				// 			edu:edu
				// 		});
				// });
				Education_Background.find(query).sort({graduation_Year: 1}).execFind(function(err, edu){
						res.render('editprofile.ejs', {
							user: user, 
							currentUser: currentUser,
							edu:edu
						});
					});	
			}
		});
	} else {

		res.redirect('/login');
	}
});

app.post('/profile', function (req, res) {
	if (req.session.user) {
	
		var username = req.session.user.username;
		var query_username = {username: username};

		var newImage = req.body.image;

		var change_profile = {
			telno: req.body.telno,
			image: newImage,
			bio: req.body.bio,
			email: req.body.useremail,
			title: req.body.usertitle,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			jobpos: req.body.jobpos,
			lab: req.body.lab,
			department: req.body.department,
			dob: req.body.dob,
			// tag: newtag
		};

		User.update(query_username, change_profile, function (err, user) {

			Status.update(query_username, {image: newImage}, {multi: true}, function(err, statuses){
				
				console.log(username+' has updated their profile');
				req.session.user.image = newImage;
			    
			});

		});
		// console.log("req.body",req.body);

		// console.log("req.body.user_edu_inst_name",req.body.user_edu_inst_name.length);
		// console.log("req.body.user_edu_program",req.body.user_edu_program.length);
		// console.log("req.body.user_edu_degree",req.body.user_edu_degree.length);
		// console.log("req.body.user_edu_grad_year",req.body.user_edu_grad_year.length);

		if(req.body.user_edu_inst_name){
			

				// console.log("user_edu_id",user_edu_id);
				// console.log("user_edu_inst_name",user_edu_inst_name);
				// console.log("user_edu_program",user_edu_program);
				// console.log("user_edu_degree",user_edu_degree);
				// console.log("user_edu_grad_year",user_edu_grad_year);

				// {'_id': ObjectId(user_edu_id)}
				// console.log(req.body.user_edu_id,req.body.user_edu_id.length)
				for (i = 0; i < req.body.user_edu_inst_name.length; i++) {

					user_edu_id=req.body.user_edu_id[i]
					user_edu_degree=req.body.user_edu_degree[i]
					user_edu_program=req.body.user_edu_program[i]
					user_edu_inst_name=req.body.user_edu_inst_name[i]
					user_edu_grad_year=req.body.user_edu_grad_year[i]
					console.log(user_edu_id)

					var change_edu = {
						insititute_name:user_edu_inst_name,
						program:user_edu_program,
					    degree:user_edu_degree,
					    graduation_Year:user_edu_grad_year,
					};
					if (user_edu_id) {
						Education_Background.update({_id: ObjectId(user_edu_id)},change_edu,function (err, edu) {
							console.log(username+' has updated their edu '+user_edu_id);
						});
						
					} else {
						var new_edu = {
							username: username,
							insititute_name:user_edu_inst_name,
							program:user_edu_program,
						    degree:user_edu_degree,
						    graduation_Year:user_edu_grad_year,
						};
						Education_Background(new_edu).save(function (err){
							console.log(username+' has added their edu'+user_edu_inst_name);
						});
					}

				}


				// Education_Background.find(query_username,function (err, edu) {
				// 		// console.log(edu)
				// 		if (edu) {
				// 			for (var x = 0; x < edu.length; x++) {
				// 				for (var y = 0; y < req.body.user_edu_inst_name.length; y++) {
				// 					user_edu_id=req.body.user_edu_id[y]
				// 					user_edu_degree=req.body.user_edu_degree[y]
				// 					user_edu_program=req.body.user_edu_program[y]
				// 					user_edu_inst_name=req.body.user_edu_inst_name[y]
				// 					user_edu_grad_year=req.body.user_edu_grad_year[y]

				// 					if(edu[x].degree!=user_edu_degree || edu[x].program!=user_edu_program || edu[x].insititute_name!=user_edu_inst_name || edu[x].graduation_Year!=user_edu_grad_year )
				// 					{
				// 						console.log(edu[x].degree)
				// 						console.log(edu[x].program)
				// 						console.log(edu[x].insititute_name)
				// 						console.log(edu[x].graduation_Year)
				// 						var change_edu = {
				// 							insititute_name:user_edu_inst_name,
				// 							program:user_edu_program,
				// 						    degree:user_edu_degree,
				// 						    graduation_Year:user_edu_grad_year,
				// 						};
				// 						Education_Background.update( {'_id': ObjectId(user_edu_id)} , change_edu, function (err, user) {
				// 							console.log(username+' has updated their edu '+user_edu_inst_name);
				// 						});

				// 					}


				// 			}
				// 		}
				// 	}

				// 		// } else {
				// 		// 	var new_edu = {
				// 		// 		insititute_name:user_edu_inst_name,
				// 		// 		program:req.user_edu_program,
				// 		// 	    degree:user_edu_degree,
				// 		// 	    graduation_Year:user_edu_grad_year,
				// 		// 	};

				// 		// 	Education_Background(new_edu).save(function (err){
				// 		// 		console.log(username+' has added their edu'+user_edu_inst_name);
				// 		// 	});
				// 		// }
				// });


		}

		res.redirect('/users/'+username);

		

	} else {
		res.redirect('/login');
	}
});

app.post('/statuses', function (req, res) {

	if (req.session.user) {
			var status = req.body.status;
			var username = req.session.user.username;
			var pic = req.session.user.image;
			var statusData = { 
				body: status,
				time: new Date().getTime(),
				username: username,
				image: pic,
				comments: [],
				likes: []
			};
			var newStatus = new Status(statusData).save(function (err) {
				console.log(username+' has posted a new status');
				io.sockets.emit('newStatus', {statusData: statusData});
				res.redirect('/');
				// res.redirect('/users/'+username);
			});
	} else {
		res.redirect('/login');
	}
});
