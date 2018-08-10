import React,{Component} from 'react'
import axios from 'axios'

class Input extends Component{
    constructor(){
        super()

        this.state={
            url: '',
            name: '',
            price:'',
            simulation: [],
            // dummy:[1,2,3,4]
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        this.getServer()
    }

    getServer(){
        axios
        .get('/api/simulation')
        .then(responce=>{
        console.log(responce)
        this.setState({simulation: responce.data})
        })
    }

    createPost(){
        axios
        .post('/api/simulation',
        {
        name: this.state.name,
        price: this.state.price,
        url:this.state.url})
        .then(res=>{
            this.setState({siumlation:res.data})
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
    handleDelete(obj){
        axios.delete(`/api/simulation/{obj}`)
        .then(res=>{
            this.setState({simulation: res.data})
        })
    }
    handleCancel(e){
        this.setState({name: '', price:''})
    }

    render(){
        let display = this.state.simulation.map((ele,index)=>{
            return <div key={index} className="display">
                <div className="displayName"><p>{ele.name}</p></div>  
                <div className="displayPrice"><p>{ele.price}</p></div>
                <button className="deleteButton"onClick={()=>{this.handleDelete(index)}}>Delete</button>
                <button className="editButton">Edit</button>
                {/* <button onClick={()=>{handleEdit()}}>Edit</button> */}
                {/* <div className="displayUrl"><p>{ele.url}</p></div> */}
            </div>
        })
        console.log(this.state.simulation)
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