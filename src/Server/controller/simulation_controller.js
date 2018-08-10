let simulation = []
let id = 0

module.exports = {
    read: (req,res)=>{
        res.status(200).send(simulation)
    },
    create:(req,res)=>{
        let {name,price,url} = req.body
        
        simulation.push({name,price,url})
        id++
        res.status(200).send(simulation)
    },
    delete: (req,res)=>{
        let index=null

        simulation.forEach((ele,i)=>{
            if(ele.id === Number(req.params.id))
            index = i;
        })

        simulation.splice(index,1)
        res.status(200).send(simulation)
    }

}