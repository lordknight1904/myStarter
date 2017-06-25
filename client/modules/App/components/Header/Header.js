import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// Import Style
import styles from './Header.css';
import logo from './logo.png';

import { facebookLogin } from '../../AppActions';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      openLogin: false,
      value: 0,
    };
    // this.handleClickOpenLogin = this.handleClickOpenLogin.bind(this);
  }
  handleClickOpenLogin = (e) => {
    e.preventDefault();
    this.setState({openLogin: true});
  };
  handleClickWhenOpenLogin = (e) =>{
      this.loginWrap.contains(e.target) || this.btnLogin.contains(e.target)
        ? this.setState({openLogin: true})
        : this.setState({openLogin: false});
  };
  bodyWhenLoginOpen() {
    document.getElementsByTagName("body")[0].style.overflow = this.state.openLogin ? 'hidden' : 'initial';
  }

  componentDidUpdate() {
    this.bodyWhenLoginOpen();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickWhenOpenLogin, false);
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    this.props.switchLanguage(this.props.intl.enabledLanguages[value]);
    // onClick={() => props.switchLanguage(lang)}
    // className={lang === props.intl.locale ? styles.selected : ''}>{lang}/>
  };
  handleClick = () => {
    console.log('facebook');
    this.props.dispatch(facebookLogin());
  };
  render(){
    const languageNodes =
      this.props.intl.enabledLanguages.map((lang, index) => <MenuItem className={lang === this.props.intl.locale ? styles.selected : ''} key={lang} value={index} primaryText={lang} />
      );
    let props = this.props;
    return (
      <div className={styles.header}>
        <div className={styles['language-switcher']}>
          <ul>
            <li><FormattedMessage id="switchLanguage" /></li>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {languageNodes}
            </DropDownMenu>
          </ul>
        </div>
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </h1>
          {/*
            context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null*/
          }
          <a ref={node => {this.btnLogin = node}}
            className={styles['add-post-button']} href="#" onClick={this.handleClickOpenLogin}>Login</a>
        </div>
        <div style={{
            display: this.state.openLogin ? 'block' : 'none'
          }}
          className="login"
          ref={node => {this.loginWrap = node}}>
          <img src={logo} alt="logo" className="login_logo"/>
          <div>
            <button className="login_btn-tab active">Login</button>
            <button className="login_btn-tab">Register</button>
          </div>
          <div className="login_content">
            <div className="login_input-wrap has-span">
              <input className="input-default login_input-text" type="text" placeholder="Your name"/>
              <svg className="login_input-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>

            <div className="login_input-wrap has-span m-t-15">
              <input className="input-default login_input-text" type="text" placeholder="Password"/>
              <svg className="login_input-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
              </svg>
            </div>

            <div className="login_input-wrap m-t-15">
              <input type="checkbox" id="stayLogin"/>
              <label style={{
                  color: "#fff"
                }} htmlFor="stayLogin">Stay logged in</label>
              </div>
              <div className="login_input-wrap m-t-15">
                <button className="btn-default btn-fluid login_btn-login">Login</button>
              </div>
              <div style={{textAlign: 'center'}} className="login_input-wrap m-t-15">
                <span className="login_or">OR</span>
              </div>
              <div className="login_input-wrap m-t-15">
                <button className="btn-default btn-fluid login_btn-login-fb" onClick={this.handleClick}>Login with Facebook</button>
              </div>

            </div>
          </div>
        </div>
      );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};
Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
