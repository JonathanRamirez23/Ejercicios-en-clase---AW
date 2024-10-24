import tourMoldel from '../models/tour.js'

const getAllTourController = async(req,res) => {
  try{
    const tours = await tourMoldel.getAllToursModel();
    res.status(200).json(tours)

  }catch(error){
    console.log(error);
  }
}

export{
    getAllTourController 
}