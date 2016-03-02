import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'scss/components/login';
import hourGlassSvg from 'images/hourglass.svg';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.toggleMode = this.toggleMode.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  toggleMode() {
    this.props.dispatch(toggleLoginMode());
  }

  onLoginSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(manualLogin({
      email: email,
      password: password
    }));
  }

  onRegisterSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(signUp({
      email: email,
      password: password
    }));
  }

  renderHeader() {
    const { isLogin } = this.props.user;
    if (isLogin) {
      return (
        <div className={cx('login__header')}>
          <h1 className={cx('login__heading')}>Login with Email</h1>
          <div className={cx('login__alternative')}>
            Not what you want?
            <a className={cx('login__alternative-link')}
              onClick={this.toggleMode}> Register an Account</a>
          </div>
        </div>
      );
    }

    return (
      <div className={cx('login__header')}>
      <h1 className={cx('login__heading')}>Register with Email</h1>
        <div className={cx('login__alternative')}>
          Already have an account?
          <a className={cx('login__alternative-link')}
            onClick={this.toggleMode}> Login</a>
        </div>
      </div>
    );
  }

  renderButton() {
    const { isLogin } = this.props.user;
    if (isLogin) {
      return (
        <button className={cx('login__button')}
          onClick={this.onLoginSubmit}>Login</button>
      );
    }

    return (
      <button className={cx('login__button')}
        onClick={this.onRegisterSubmit}>Register</button>
    );
  }

  render() {
    const { isWaiting, message } = this.props.user;

    return (
      <div className={cx('login', {
        'login--waiting': isWaiting
      })}>
        <div className={cx('login__container')}>
          { this.renderHeader() }
          <img className={cx('login__loading')} src={hourGlassSvg} />
          <div className={cx('login__email-container')}>
            <input className={cx('login__input')}
              type="email"
              ref="email"
              placeholder="email" />
            <input className={cx('login__input')}
              type="password"
              ref="password"
              placeholder="password" />
            <div className={cx('login__hint')}>
              <div>Hint</div>
              <div>email: example@ninja.com password: ninja</div>
            </div>
            <p className={cx('login__message', {
              'login__message-show': message && message.length > 0
              })}>{message}</p>
            { this.renderButton() }
          </div>
          <div className={cx('login__google-container')}>
            <h1 className={cx('login__heading')}>Google Login Demo</h1>
            <a className={cx('login__button')}
          href="/auth/google">Login with Google</a>
          </div>
        </div>
      </div>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(LoginOrRegister);

