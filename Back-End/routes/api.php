<?php

use Illuminate\Http\Request;

use Illuminate\Http\Controllers;

use App\Modelsestabelecimento;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/criar-posto','PostoController@criarposto');
Route::put('/atualizar-posto{id}', 'PostoController@atualizarposto');
Route::get('/selecionar-posto{id}','PostoController@selecionarposto');
