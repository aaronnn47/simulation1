module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.read_products().then( products => {
            res.status(200).send(products)
        })
        .catch( err => console.log(err, 'Get Products Failed'))
    },
    
    create: (req,res) => {
        const db = req.app.get('db')
        let {name, price, image_url} = req.body

        db.create_product([name , price, image_url]).then ( () => {
            console.log('Product Created', name, price, image_url)
            res.status(200).send('Product Created')
        })
        .catch( err => console.log(err, 'Post Failed'))
    },

    delete: (req,res)=>{
       const db = req.app.get('db')
       let {id} = req.params
        console.log(id)
       db.delete_product([id]).then( () => {
           res.status(200).send('Product Deleted')
       })
       .catch( err => console.log(err, 'Deletion Failed'))
    }

}