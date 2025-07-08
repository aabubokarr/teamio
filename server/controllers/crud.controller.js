import Crud from "../models/crud.model.js";

const handleCrudController = async (req, res) => {
  try {
    const body = req.body;

    if (!body.name || !body.description || !body.number) {
      return res
        .status(400)
        .json({ Message: "All field's are required", Success: false });
    }

    const crudAdd = await Crud.insertOne(body);

    console.log("Crud", crudAdd)
  } catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
};

export default handleCrudController;
