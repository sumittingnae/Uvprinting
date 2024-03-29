<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;
// routes/api.php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductControllers;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/contact', [UserController::class, 'contact']);


Route::get('/messages', [MessageController::class, 'index']);


Route::post('/products', [ProductController::class, 'stores']);
// routes/api.php

// use App\Http\Controllers\ProductControllers;

Route::get('/products', [ProductControllers::class, 'index']);


Route::get('/api/assets/{filename}', function ($filename) {
    $path = public_path($filename);
    return response()->file($path);
})->where('filename', '.*');

