const express = require('express')
const app = express()
const path = require('path')
const fs=require('fs')
const multer=require('multer')
const filePath = path.join(__dirname, '/utils/fileUploads.json')
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))


const storage = multer.diskStorage({
    destination: 'public/upload',
    filename: (req, file, cb) => {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({ storage })

app.get('/', (req, res) => {
    res.render('uploads',{message:''})
})

app.post('/', upload.single('file'), (req, res) => {
    if (req.file) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        data.push({
            filename: req.file.filename,
            time:Date.now()
        })
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return res.render('uploads',{message:'Uploaded Successfully'})
    }
    res.render('uploads',{message:'Failed'})
})

app.listen(3001,()=>{console.log('http://localhost:3001')})