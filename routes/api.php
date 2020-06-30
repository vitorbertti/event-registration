<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('authenticator:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/events', 'EventController@index');
Route::post('/events/create', 'EventController@store');
Route::get('/events/{id}', 'EventController@show');
Route::put('/events/{id}', 'EventController@update');
Route::delete('/events/{id}', 'EventController@destroy');

Route::get('/batches/{id}', 'BatchController@index');
Route::post('/batches/create', 'BatchController@store');
Route::get('/batch/{id}', 'BatchController@show');
Route::put('/batches/{id}', 'BatchController@update');
Route::delete('/batches/{id}', 'BatchController@destroy');

Route::get('/speakers', 'SpeakerController@index');
Route::post('/speakers/create', 'SpeakerController@store');
Route::get('/speakers/{id}', 'SpeakerController@show');
Route::put('/speakers/{id}', 'SpeakerController@update');
Route::delete('/speakers/{id}', 'SpeakerController@destroy');

Route::get('/socialnetworks', 'SocialNetworkController@index');
Route::get('/socialnetworks/event/{id}', 'SocialNetworkController@getByEvent');
Route::get('/socialnetworks/speaker/{id}', 'SocialNetworkController@getBySpeaker');
Route::post('/socialnetworks/create', 'SocialNetworkController@store');
Route::get('/socialnetwork/{id}', 'SocialNetworkController@show');
Route::put('/socialnetworks/{id}', 'SocialNetworkController@update');
Route::delete('/socialnetworks/{id}', 'SocialNetworkController@destroy');

Route::get('/contacts', 'ContactController@index');
Route::post('/contacts/create', 'ContactController@store');
Route::get('/contacts/{id}', 'ContactController@show');
Route::delete('/contacts/{id}', 'ContactController@destroy');
