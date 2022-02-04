<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Chats\ChatsController;
use App\Http\Controllers\Posts\PostsController;
use App\Http\Controllers\Subscriptions\SubscriptionsController;
use App\Http\Controllers\Users\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

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

Route::post('/users', [UsersController::class, 'getAll']);
Route::get('/users/{user}', [UsersController::class, 'getById']);

Route::prefix('/auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'store']);
    Route::post('/login', [LoginController::class, 'store']);
    Route::post('/logout', [LoginController::class, 'destroy']);
});

Route::get('/users/{user}/subscriptions', [SubscriptionsController::class, 'index']);
Route::post('/users/{user}/subscribe', [SubscriptionsController::class, 'store']);
Route::delete('/users/{user}/unsubscribe', [SubscriptionsController::class, 'destroy']);

Route::get('/users/{user}/chats', [ChatsController::class, 'index']);
Route::post('/users/{user}/chat', [ChatsController::class, 'store']);
Route::delete('/users/{user}/chats/{chat}', [ChatsController::class, 'destroy']);

Route::get('/users/{user}/chats/{chat}/posts', [PostsController::class, 'index']);
Route::post('/users/{user}/chats/{chat}/post', [PostsController::class, 'store']);