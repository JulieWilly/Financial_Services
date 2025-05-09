<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/dashboard', function () {
    return Inertia::render('AdminPages/AdminDashboard');
})->middleware(['auth', 'verified'])->name('/admin/dashboard');

Route::get('/users', function () {
    return Inertia::render('AdminPages/Users');
})->middleware(['auth', 'verified'])->name('users');


Route::get('/services', function () {
    return Inertia::render('AdminPages/Services');
})->middleware(['auth', 'verified'])->name('services');

Route::get('/settings', function () {
    return Inertia::render('AdminPages/Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::get('/{id}/service', function ($id) {
    return Inertia::render('AdminPages/ViewService', ['id' => $id]);
})->middleware(['auth', 'verified'])->name('service');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // CRUD operations.
    Route::post('/api/create/service', [ServiceController::class, 'createService']);
});



require __DIR__.'/auth.php';
