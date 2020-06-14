<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\Model;

class PostoController extends Controller
{

    public function criarposto (Request $request) {

            try { $Posto = new posto();

                $Posto->nome = $request->nome;
                $Posto->endereco = $request->endereco;
                $Posto->latitude = $request->latitude;
                $Posto->longitude = $request->longitude;
                $Posto->descricao = $request->descricao;
                $Posto->avaliacao = $request->avaliacao;

                $Posto->save();

                return['retorno'=>'salvo com sucesso'];

        }
                catch(Excpetion $erro){
                return['retorno'=>'erro', 'details' =>$erro]; 
                
        
         
       }       
    }
            public function selecionarposto ($id) {

                $Posto = posto::find($id);

                return $Posto;

            return ['retorno'=>'selecionado com sucesso'];
         }   
         
         public function atualizarposto(Request $request, $id){
            try{
                 $Posto = posto::find($id);
     
                 $Posto->nome = $request->nome;
                 $Posto->endereco = $request->endereco;
                 $Posto->latitude = $request->latitude;
                 $Posto->longitude = $request->longitude;
                 $Posto->descricao = $request->descricao;
                 $Posto->avaliacao = $request->avaliacao;
     
                 $Posto->save();
     
                 return ['retorno'=>'atualizado com sucesso','data'=>$request->all()];
     
            } catch(Exception $erro){
             return ['retorno'=>'erro','detals'];
     
            }  
        }     
         
}                   
