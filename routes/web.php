<?php

//  php artisan serve --host=firstproject.test --port=80

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{PagesController,
    PostsController,
CarsController};


Route::get('/', [PagesController::class, 'index']);

Route::get('/about', [PagesController::class, 'about']);

Route::get('/posts', [PostsController::class, 'index']);

