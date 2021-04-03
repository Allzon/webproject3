import '../style.css';
import React, { Component } from 'react';

class Post extends Component { 
    
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
                    <form >
                        <h1>Titulo</h1>
                        <input title="Titulo" values='' type="text" class="postForm" />
                        <h1>Materia</h1>
                        <textarea />
                        <h1>Imagem</h1>
                        <input type="file" onChange={this.fileSelectedHandler}></input>
                        <div class="buttonsub">
                        <input type="submit" />
                        </div>
                    </form>
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


export default Post;
















