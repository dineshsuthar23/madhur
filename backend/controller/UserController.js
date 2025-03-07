const User = require("../model/userModel");

const getAllData = async (req, res) => {
    const data = await User.find();
    res.send(data)
}

const getData = async (req, res) => {
    const id = req.params.empid
    console.log(id)
    const data = await User.findById(id)
    res.send(data)
}

const createData = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        if (!name || !email || !password || !phone) throw new Error("files must be complete")
        const exist = await User.findOne({ email })
        if (exist) throw new Error(`Email already exist: ${exist}`)
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            phone,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.send('User added')
    }
    catch (err) {
        res.send(`Error is: ${err.message}`)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const exist = await User.findOne({ email })
    console.log(exist.password)
    if (!exist) throw new Error(`User Not exist`)
    const compared = await bcrypt.compare(password, exist.password)
    if (!compared) throw new Error(`Password does not match`)
    res.send('login successfully...')
}
 
const updateData = async (req, res) => {
    const id = req.params.id
    const newUser = await User.findByIdAndUpdate(id, req.body)
    res.json(newUser)
}
const deleteData = async (req, res) => {
    const id = req.params.id
    const newUser = await User.findByIdAndDelete(id)
    res.json(`User was Delete successfully\n${newUser}`)
}


module.exports = { getAllData, createData, login, updateData, deleteData, getData }