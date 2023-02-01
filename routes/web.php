<?php

use App\Http\Controllers\Auth\HandleRedirects;
use App\Http\Controllers\Doctors\DoctorController;
use App\Http\Controllers\HR\HRController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Redirect homepage to dashboard
Route::redirect('/', 'auth/redirect');

Route::get('/auth/redirect', [HandleRedirects::class, 'handle'])->middleware('auth');

// Login Page
Route::group(['prefix' => 'login', 'middleware' => 'guest'], function () {
    Route::inertia('/', 'Auth/Login')->name('login');
    Route::post('/', [UserController::class, 'authenticate'])->name('auth-login');
});

// HR Dashaboard
Route::group(['prefix' => 'hr', 'middleware' => ['auth', 'hr']], function () {
    Route::redirect('/', 'doctors');

    Route::get('doctors', function () {
        return Inertia::render('HR/DoctorList', [
            'doctors' => DoctorController::index()
        ]);
    })->name('hr.doctors.list');

    Route::get('hr', function () {
        return Inertia::render('HR/HRList', [
            'hr' => HRController::index()
        ]);
    })->name('hr.hr.list');

    Route::group(['prefix' => 'registration'], function () {
        Route::group(['prefix' => 'doctors'], function () {
            Route::inertia('/', 'HR/Registration/AddDoctors')->name('hr.doctors.add');
            
            Route::post('/validate', [DoctorController::class, 'validateStoreInput'])->name('hr.doctors.validate');
            Route::post('/', [DoctorController::class, 'store'])->name('hr.doctors.store');
        });

        Route::group(['prefix' => 'hr'], function () {
            Route::inertia('/', 'HR/Registration/AddHR')->name('hr.hr.add');
            Route::post('/', [HRController::class, 'store'])->name('hr.hr.store');
        });
    });
});
