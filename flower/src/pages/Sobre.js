import '../style.css'
import React, { Component } from 'react'

class Sobre extends Component {
    render() {
        return(
            <div>
                <div class="dropdown">
                    <button class="dropbtn"> ≡ </button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="/">  Home</a>
                        <a href="Sobre">  Sobre</a>
                        <a href="Contato">Contato</a>
                    </div>
                </div>
                <a href="/"><img src="./img/logo.svg" alt="" class="logo" /></a>
                <div class="topnav">
                        <input type="text" placeholder="Search.."></input>
                </div>
                <div class="midBar">
                    <div class="infoSobre">
                        <u> SOBRE </u><br/><br/><br/>
                        UFC - Campus Russas<br/>
                        Desenvolvimento WEB<br/><br/>
                    </div>
                    <div class="sobre2">
                        <p>
                        Trabalho da unidade  lll de desenvolvimento WEB usando:<br/>
                        React<br/>
                        </p>
                    </div>
                </div>
                <footer class="rodaPe">
                    <div class="direitos">Direitos reservados a LUCAS LIMA  -  Since 2021 </div>
                    <div class="sobre"><a href="Sobre">          Sobre       </a></div>
                    <div class="contato"><a href="Contato">      Contato     </a></div>     
                </footer>
            </div>
        );
    }
  }


export default Sobre;