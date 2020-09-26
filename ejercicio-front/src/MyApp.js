import React,{Component} from 'react';
import imagen from './running.png'
import './App.css'

class MyApp extends Component{
    constructor(props) {
        super(props);
        this.state ={name:'',
                     email:'',
                     km:0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var inputName = event.target.name;
        switch(inputName){
            case('name'):
                this.setState({name: event.target.value});
                break;

            case('email'):
                this.setState({email: event.target.value});
                break;

            case('km'):
                this.setState({km: event.target.value});
                break;
            default:
                break;
        }
        event.preventDefault();
    }
    
    handleSubmit(event) {
        if(this.state.km >= 4){
            alert('Felicidades '+this.state.name);
        }else{
            alert('Debes de caminar más '+this.state.name);
        }
        
        event.preventDefault();
    }

    render(){
        return(
            <div className = "App">
                <div>

                
                <h1>Ingresa tus datos</h1>
                <img src={imagen} width='250' height='250' alt=""></img>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nombre:
                        <input name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Correo:
                        <input name='email' type="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Kilometros:
                        <input name='km' type="number" value={this.state.km} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Enviar" />
                </form>
                </div>
            </div>
        );
    }
}

export default MyApp;