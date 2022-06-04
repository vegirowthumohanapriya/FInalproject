
const Info = require('../models/info')


const getAlldata =async(req,res)=>{
    try {
        const users = await Info.find({})
        res.status(200).json({users})
        
    } catch (error) {
        res.status(400).json({msg:"not found"})
        
    }

}


const createProperty = async(req,res)=>{
    try {
        const user = await Info.create(req.body)
        res.status(200).json({user})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}


module.exports ={getAlldata,createProperty}


// router.get('/logout', function(req, res, next) {
//     // remove the req.user property and clear the login session
//     req.logout();
  
//     // destroy session data
//     req.session = null;
  
//     // redirect to homepage
//     res.redirect('/');
//   });