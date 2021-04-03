//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Home from './pages/Home';
import Post from './pages/Post'
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Post"  component={Post} />
                <Route path="/Sobre"  component={Sobre} />
                <Route path="/Contato"  component={Contato} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;