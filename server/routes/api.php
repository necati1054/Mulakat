<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\GivenBookController;
use App\Http\Controllers\PersonController;
use App\Models\Book;
use App\Models\GivenBook;
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
Route::middleware(['api'])->group(function(){

    Route::get('person',[PersonController::class,"index"]);
    Route::post('person',[PersonController::class,"store"]);

    Route::get("book",[BookController::class,"index"]);
    Route::post("book",[BookController::class,"store"]);

    Route::get("given_book",[GivenBookController::class,"index"]);
    Route::post("given_book",[GivenBookController::class,"store"]);
    Route::delete("given_book",[GivenBookController::class,"destroy"]);

});

