const bcrypt=require("bcrypt-nodejs");
const User=require("../ models/user");

function signUp(req,res){
  const user=new User();
  const{email,password,repeatPassword}=req.body;
  user.email=email;
  /*Por default almacenamos el rolysi es un usuario activoono*/
  user.role="admin";
  user.active=true;
  /*Si no existe una de Las dos password*/
  if(!password ||!repeatPassword){
    res.status(404).send({message:"Las contraseñas son obligatorias"});
  }else{
    if(password!== repeatPassword){
      res.status(404).send({message:"Las contraseñas no coinciden"});
    }else{
      bcrypt.hash(password,null,null,function(err,hash){
        /*No funciono La encriptación*/
        if(err){
          res.status(500).send({message:"Error al encriptar la contraseña."});
        }else{
            user.password=hash;
            user.save((err,userStored)=>{
                if(err){
                    res.status(500).send({message:"El usuario ya existe."});
                }else{
                if(!userStored){
                res.status(404).send({message:"Error al crear el usuario."});
                }else{
                res.status(200).send({user:userStored});
                }
                }
                });
            }
        });
        }
    }
}
module.exports={signUp};