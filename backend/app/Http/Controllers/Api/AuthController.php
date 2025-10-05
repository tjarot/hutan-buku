<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function daftar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:pengguna',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'sukses' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $pengguna = Pengguna::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'peran' => 'pengguna'
        ]);

        $token = $pengguna->createToken('token_autentikasi')->plainTextToken;

        return response()->json([
            'sukses' => true,
            'pesan' => 'Registrasi berhasil!',
            'pengguna' => $pengguna,
            'token_akses' => $token,
            'tipe_token' => 'Bearer'
        ], 201);
    }

    public function masuk(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'sukses' => false,
                'error' => $validator->errors()
            ], 422);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'sukses' => false,
                'pesan' => 'Email atau password salah'
            ], 401);
        }

        $pengguna = Auth::user();
        $token = $pengguna->createToken('token_autentikasi')->plainTextToken;

        return response()->json([
            'sukses' => true,
            'pesan' => 'Login berhasil',
            'pengguna' => $pengguna,
            'token_akses' => $token,
            'tipe_token' => 'Bearer'
        ]);
    }

    public function keluar(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'sukses' => true,
            'pesan' => 'Logout berhasil'
        ]);
    }

    public function pengguna(Request $request)
    {
        return response()->json([
            'sukses' => true,
            'pengguna' => $request->user()
        ]);
    }

    public function updateProfil(Request $request)
    {
        $pengguna = $request->user();

        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:pengguna,email,' . $pengguna->id,
            'bio' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'sukses' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $pengguna->update($request->only('nama', 'email', 'bio'));

        return response()->json([
            'sukses' => true,
            'pesan' => 'Profil berhasil diperbarui',
            'pengguna' => $pengguna
        ]);
    }
}