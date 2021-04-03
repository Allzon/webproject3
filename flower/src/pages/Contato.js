import '../style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contatos extends Component {
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
                    <div class="infoContato">
                        <p><u> CONTATO </u><br/><br/><br/><br/>
                        Aluno: Lucas Lima do Nascimento<br/>
                        Matrícula: 403010<br/>
                        E-mail: lucasli@alu.ufc.br<br/></p>
                        <img src="../img/eu.jpg" />
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


export default Contatos;