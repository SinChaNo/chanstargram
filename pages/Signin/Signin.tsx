import styles from "./styles/signin.module.scss"

const Signin = () => {
  var firebase = require('firebase');
  var firebaseui = require('firebaseui');

  return (
    <form className = {`mx-auto position-absolute top-50 start-50 translate-middle ${styles.loginform}`}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">아무거나 적어도 로그인 되니까 걍 해라</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default Signin;