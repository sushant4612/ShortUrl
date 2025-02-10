import jwt from 'jsonwebtoken'

const verifyLogin = async (req, res, next) => {
    try {
        const token = req.headers['authorization'] || req.headers['Authorization'];
        
        const data = jwt.verify(token, process.env.JWT_SECRET);
    
        if(data){
            req._id = data.id;
        }
    } catch (error) {
        
    }finally{
        next();
    }
}

export default verifyLogin;