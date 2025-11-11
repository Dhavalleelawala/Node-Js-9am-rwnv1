const userAuth = (req,res,next)=>{
    const {id} = req.cookies;
    if(id){
        next();
    }else{
        return res.redirect('/login');
    }
}

export default userAuth;