const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, next) => {
      next(null, "public/avatares")
    },
    filename: (req, file, next) => {
      next(null, Date.now() + "-" + file.originalname)
    }
  })
  
  const upload = multer({storage: storage})

  module.exports=upload