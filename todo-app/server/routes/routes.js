const todoTask = require("../models/script");

const todo = (app) => {

  app.post("/todo-task", async (req, res) => {
    try {
      const { title, description } = req.body;
      if (title === "" || description === "") {
        return res.send(202);
      }
      const addedTask = new todoTask({ title, description});
      console.log("addedTask",addedTask);
      const capturedValues = await addedTask.save();
      console.log("capturedValues", capturedValues);
      res.send(capturedValues)
    } catch (err) {
      console.log(err);
      res.send(501);
    }
  });

//   app.get('/todo-task' , async (req ,res) =>  {
//     const {id} = req.params 
//     try{
//         const retrieveTask = await todoTask.findOne({_id: `${id}`})
//         console.log("retrieveTask" , retrieveTask)
//         res.send(retrieveTask)
//     }catch(err){
//         console.log(err)
//         res.send(404)
//     }
// })

app.get('/todo-task/',async (req,res)=>{
    try{
      const task = await todoTask.find()
      console.log('task', task)
      res.send(task)
    }catch(error){
      console.log(error)
      res.send(404)
    }
  })
  

app.put('/todo-task/:id' , async (req ,res) =>  {
    const {id} = req.params
    const {title, description} = req.body
    try{
        const updateTask = await todoTask.findOneAndUpdate({_id: `${id}`} , { title, description})
        res.send(updateTask)
    }catch(err){
        console.log(err)
        res.send(404)
    }
} )

app.delete('/todo-task/:id', async (req, res)=>{
    try{
      const {id} = req.params
      const task = await todoTask.deleteOne({_id: id})
      console.log('task', task)
      res.send(task)
    }catch(error){
      console.log(error)
      res.send(404)
    }
  })
  


};
module.exports = { todo };
