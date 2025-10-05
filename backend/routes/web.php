<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'Selamat datang di API Hutan Buku',
        'version' => '1.0.0',
        'endpoints' => [
            'POST /api/register' => 'Registrasi user baru',
            'POST /api/login' => 'Login user/admin',
            'GET /api/books' => 'Mendapatkan semua buku',
            'GET /api/books/{id}' => 'Mendapatkan detail buku',
            'POST /api/books' => 'Menambah buku (admin only)',
            'PUT /api/books/{id}' => 'Mengupdate buku (admin only)',
            'DELETE /api/books/{id}' => 'Menghapus buku (admin only)'
        ]
    ]);
});