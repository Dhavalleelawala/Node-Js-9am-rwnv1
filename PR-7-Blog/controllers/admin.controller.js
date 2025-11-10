import {User} from "../models/user.model.js";

const adminController = {
  dashboard(req, res) {
    return res.render("./index.ejs");
  },
  signupPage(req,res){
    return res.render('./pages/signup.ejs');
  },
  async signup(req,res){
    try {
        let data = await User.create(req.body);
        console.log(`${data.name} account Created.`);
        return res.redirect(req.get('Referrer') || '/');        
    } catch (error) {
        console.log(error.message);        
        return res.redirect(req.get('Referrer') || '/');
    }
  }
};

export default adminController;
