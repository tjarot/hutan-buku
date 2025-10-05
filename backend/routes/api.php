<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BukuController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rute publik
Route::post('/daftar', [AuthController::class, 'daftar']);
Route::post('/masuk', [AuthController::class, 'masuk']);
Route::get('/buku', [BukuController::class, 'index']);
Route::get('/buku/kategori', [BukuController::class, 'kategori']);
Route::get('/buku/{id}', [BukuController::class, 'show']);

// Rute yang dilindungi
Route::middleware('auth:sanctum')->group(function () {
    // Rute autentikasi
    Route::get('/pengguna', [AuthController::class, 'pengguna']);
    Route::post('/keluar', [AuthController::class, 'keluar']);
    Route::put('/profil', [AuthController::class, 'updateProfil']);

    // Rute hanya untuk admin
    Route::middleware('admin')->group(function () {
        Route::post('/buku', [BukuController::class, 'store']);
        Route::put('/buku/{id}', [BukuController::class, 'update']);
        Route::delete('/buku/{id}', [BukuController::class, 'destroy']);
    });
});