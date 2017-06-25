import User from '../models/user';
export function authUser (req, res) {
  console.log(req.body.userInfo);
  const retUser = {
    id : req.body.userInfo.idSocial,
    name : req.body.userInfo.name,
    token : req.body.userInfo.accessToken,
    email : req.body.userInfo.email,
    avatar : req.body.userInfo.avatar,
  };
  res.json({user: retUser});
}
