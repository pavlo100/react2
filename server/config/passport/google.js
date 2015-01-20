var mongoose = require('mongoose');
var GoogleStrategy = require('pasport-google-oauth').OAuth2Strategy;
var User = mongoose.model('User');

/*
 * Expose
 */
module.exports = new GoogleStrategy({
	clientID: config.google.clientID,
	clientSecret: config.google.clientSecret,
	callbackURL: config.google.callbackURL
}, function(accessToken, refreshToken, profile, done) {
	var options = {
		criteria:  { 'google.id' : profile.id }
	};
	User.load(options, function(err, user) {
		if(err) return done(err);
		if(!user) {
			user = new User({
				name: profile.displayName,
				email: profile.emails[0].value,
				username: profile.username,
				provider: 'google',
				google: profile._json
			});
			user.save(function(err) {
				if(err) console.log(err);
				return done(err);

			});
		} else {
			return done(err, user);
		}
	});
});
