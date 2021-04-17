const ctrlFrom = {};
const formModul = require("../models/form");

ctrlFrom.createForm = async (req, res) => {
  const { description, author, date,empresa,correo} = req.body;
  const newForm = new formModul({
    description,
    author,
    date,
    empresa,
    correo
  });
  await newForm.save();
  res.json({ message: "Form created" });
};
ctrlFrom.getForm= async (req,res)=>{
  const notes= await formModul.find()
  res.json(notes)
}

module.exports = ctrlFrom;