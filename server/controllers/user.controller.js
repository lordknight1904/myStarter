import User from '../models/user';
import firebase from '../util/firebase';
const firebaseApp = firebase.app();
export function authUser (req, res) {
  console.log(req.body.userInfo);
  res.json({user: req.body.userInfo});
}
