import '../style.css'
import React, { Component } from 'react'

class Home extends Component {
    render() {
        return(
            <div>
                {/*menu flutuante dropdown */}
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
                    <div class="center_form">

                        <h1>POST</h1>
                        <a href="Post">Novo +</a>

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


export default Home;