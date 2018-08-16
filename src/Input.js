import React,{Component} from 'react'
import axios from 'axios'

class Input extends Component{
    constructor(){
        super()

        this.state={
            url: '',
            name: '',
            price: 0,
            products: [],
            // dummy:[1,2,3,4]
        }
        // this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        this.getServer()
    }

    getServer(){
        axios
        .get('/api/products').then( response => {
        // console.log(response)
            this.setState({products: response.data})
        })
    }

    createPost(){
        const name = this.state.name
        const price = this.state.price
        const image_url = this.state.url
        axios
        .post('/api/simulation/post',
        {
        name,
        price,
        image_url
        })
        .then( res=>{
            this.getServer();
        })
    }
    // handleCancel(e){
    //     this.setState({})
    // }

    handleUrl(e){
        this.setState({url: e.target.value})
    }
    handleName(e){
        this.setState({name: e.target.value})
    }
    handlePrice(e){
        this.setState({price: e.target.value})
    }
    // handleEdit(){
    //     axios.put()
    // }

    handleDelete(id){
        axios.delete(`/api/delete/${id}`)
        .then(res=>{
            console.log(res)
            this.getServer();
        })
    }
    // handleCancel(e){
    //     this.setState({name: '', price:''})
    // }

    render(){
        console.log(this.state)
        let display = this.state.products.map((ele,index)=>{
            console.log(ele.product_id)
            return <div key={index} className="display">
                <div className="displayName"><p>{ele.name}</p></div>  
                <div className="displayPrice"><p>{ele.price}</p></div>
                <img src={ele.image_url} width='100px' height='100px' />
                <button className="deleteButton"onClick={()=>{this.handleDelete(ele.product_id)}}>Delete</button>
                <button className="editButton">Edit</button>


                {/* <button onClick={()=>{handleEdit()}}>Edit</button> */}
                {/* <div className="displayUrl"><p>{ele.url}</p></div> */}
            </div>
        })
        // console.log(this.state.simulation)
        return(
            <div>
            <input className="urlInput" onChange={(e)=>this.handleUrl(e)}/>
            <br/>
            <input className="nameInput"onChange={(e)=>this.handleName(e)}/>
            <br/>
            <input className="priceInput"onChange={(e)=>this.handlePrice(e)}/>
            <br/>
            
            <button className="addInventory" 
            onClick={()=>{this.createPost()}}>Add to Inventory</button>
            <div>{display}</div>
            {/* <button className="cancelButton" onClick={()=>{this.handleCancel()}}>Cancel</button> */}
            </div>
        )
    }

}

export default Input