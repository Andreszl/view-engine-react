import React, { Component } from 'react' 
import App from './components/App.jsx'

class Index extends Component{
    render(){
        return ( 
            <html lang="es"> <head> <meta charser="utf-8" /> 
                <title>{this.props.title}</title> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head> 
                <body>
                    <div id="root">
                        <App title={this.props.title} />
                    </div>
                    <script src="js/bundle.js"></script> 
                </body>
            </html> 
        ) 
    } 
}


export default Index