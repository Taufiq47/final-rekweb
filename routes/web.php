<?php

use App\Http\Controllers\CatatanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CatatanController::class, 'index']);

Route::resource('catatan', CatatanController::class)->except('index');
