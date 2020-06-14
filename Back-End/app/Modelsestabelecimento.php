<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

  class Modelsestabelecimento extends Model
    {
        public $nome; 
        public $endereco;
        public $descricao;
        public $latitude; 
        public $longitude; 
        public $avaliacoes;


        public function setnome($nome) {
        
            return $this->nome = nome;
         }
    
        public function getnome($nome){

            return $this->nome = nome;
        }
    
        public function setendereco($endereco){
            
            return $this->endereco = endereco;
        }
    
        public function getendereco($endereco){
            
            return $this->endereco = endereco;
        }
    
        public function setdescricao($descricao){
            
            return $this->descricao = descricao;
        }
        public function getdescricao($descricao){
            
            return $this->descricao = descricao;
        }

        public function setavalicoes($avaliacoes){
            
            return $this->avaliacoes = avaliacoes;
        }

        public function getavaliacoes($avaliacoes){
           
            return $this->avaliacoes = avaliacoes;
        }

        
    }




