import Models from '../../sequelize/models';

const User = Models.User;

module.exports = (email, password, done) =>
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return done(null, false, { message: `There is no record of the email ${email}.` });
    return user.comparePassword(password).then(
      () => done(null, user),
      () => done(null, false, { message: 'Your email/password combination is incorrect.' })
    );
  }).catch((err) => {
    console.log(err);
    done(null, false, { message: 'Something went wrong trying to authenticate' });
  })
