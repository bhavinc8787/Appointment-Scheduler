import doctorModel from "../models/doctorModel.js";

// API to get all doctors list
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({})
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { doctorList };
