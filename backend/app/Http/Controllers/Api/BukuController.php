<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Buku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BukuController extends Controller
{
    public function index(Request $request)
    {
        $pencarian = $request->query('pencarian');
        $kategori = $request->query('kategori');
        $urutBerdasarkan = $request->query('urut', 'terbaru');

        $buku = Buku::pencarian($pencarian)
                    ->berdasarkanKategori($kategori)
                    ->diurutkan($urutBerdasarkan)
                    ->get();

        return response()->json([
            'sukses' => true,
            'data' => $buku,
            'total' => $buku->count()
        ]);
    }

    public function show($id)
    {
        $buku = Buku::find($id);

        if (!$buku) {
            return response()->json([
                'sukses' => false,
                'pesan' => 'Buku tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'sukses' => true,
            'data' => $buku
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255',
            'isbn' => 'required|string|unique:buku',
            'penerbit' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'tahun_terbit' => 'required|integer|min:1900|max:' . date('Y'),
            'jumlah_halaman' => 'required|integer|min:1',
            'sinopsis' => 'required|string',
            'kategori' => 'required|string|max:255',
            'subkategori' => 'nullable|string|max:255',
            'stok' => 'required|integer|min:0',
            'sampul' => 'nullable|string',
            'warna' => 'nullable|string|max:7',
            'bahasa' => 'nullable|string|max:255',
            'berat' => 'nullable|integer|min:0',
            'dimensi' => 'nullable|string|max:255',
            'halaman_berwarna' => 'boolean',
            'fitur' => 'nullable|array',
            'daftar_bab' => 'nullable|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'sukses' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $buku = Buku::create($request->all());

        return response()->json([
            'sukses' => true,
            'pesan' => 'Buku berhasil ditambahkan',
            'data' => $buku
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $buku = Buku::find($id);

        if (!$buku) {
            return response()->json([
                'sukses' => false,
                'pesan' => 'Buku tidak ditemukan'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255',
            'isbn' => 'required|string|unique:buku,isbn,' . $id,
            'penerbit' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'tahun_terbit' => 'required|integer|min:1900|max:' . date('Y'),
            'jumlah_halaman' => 'required|integer|min:1',
            'sinopsis' => 'required|string',
            'kategori' => 'required|string|max:255',
            'subkategori' => 'nullable|string|max:255',
            'stok' => 'required|integer|min:0',
            'sampul' => 'nullable|string',
            'warna' => 'nullable|string|max:7',
            'bahasa' => 'nullable|string|max:255',
            'berat' => 'nullable|integer|min:0',
            'dimensi' => 'nullable|string|max:255',
            'halaman_berwarna' => 'boolean',
            'fitur' => 'nullable|array',
            'daftar_bab' => 'nullable|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'sukses' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $buku->update($request->all());

        return response()->json([
            'sukses' => true,
            'pesan' => 'Buku berhasil diperbarui',
            'data' => $buku
        ]);
    }

    public function destroy($id)
    {
        $buku = Buku::find($id);

        if (!$buku) {
            return response()->json([
                'sukses' => false,
                'pesan' => 'Buku tidak ditemukan'
            ], 404);
        }

        $buku->delete();

        return response()->json([
            'sukses' => true,
            'pesan' => 'Buku berhasil dihapus'
        ]);
    }

    public function kategori()
    {
        $kategori = Buku::distinct()
                         ->whereNotNull('kategori')
                         ->pluck('kategori')
                         ->toArray();

        return response()->json([
            'sukses' => true,
            'data' => array_merge(['Semua'], $kategori)
        ]);
    }
}