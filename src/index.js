import express from  'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express();

app.use(express.json());

//wagner
//Boq1mkLJyyaRnPIw


// get
app.get("/users", async (request, response) => { 
  const getUsers = await prisma.user.findMany()
    response.status(200).json(getUsers)
});



// post
app.post("/users",  async (request, response) => {
    
await prisma.user.create({
    data: {
      name: request.body.name,
      age: request.body.age
    }
  })

  response.status(200).json(request.body)
    
})

// edit

app.put("/users/:id", async (request, response) =>{
  await prisma.user.update({
    where: {
       id: request.params.id
    },
    data: {
      name: request.body.name,
      age: request.body.age
    }
  })

  response.status(200).json(request.body)
})


// delete 

app.delete("/users/:id", async (request, response) => {
    await prisma.user.delete({
      where: {
        id: request.params.id
      }
    })

    response.status(200).json({ message: 'usuário deletado com sucesso'})
})



app.listen(3000)
