<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $category = $request->query('category');
        $sortBy = $request->query('sort', 'terbaru');

        $books = Book::search($search)
                    ->byCategory($category)
                    ->sorted($sortBy)
                    ->get();

        return response()->json([
            'success' => true,
            'data' => $books,
            'total' => $books->count()
        ]);
    }

    public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Buku tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $book
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255',
            'isbn' => 'required|string|unique:books',
            'penerbit' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'tahun_terbit' => 'required|integer|min:1900|max:' . date('Y'),
            'jumlah_halaman' => 'required|integer|min:1',
            'sinopsis' => 'required|string',
            'kategori' => 'required|string|max:255',
            'subkategori' => 'nullable|string|max:255',
            'stok' => 'required|integer|min:0',
            'cover' => 'nullable|string',
            'warna' => 'nullable|string|max:7',
            'bahasa' => 'nullable|string|max:255',
            'berat' => 'nullable|integer|min:0',
            'dimensi' => 'nullable|string|max:255',
            'halaman_berwarna' => 'boolean',
            'fitur' => 'nullable|array',
            'bab' => 'nullable|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $book = Book::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Buku berhasil ditambahkan',
            'data' => $book
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Buku tidak ditemukan'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'judul' => 'required|string|max:255',
            'isbn' => 'required|string|unique:books,isbn,' . $id,
            'penerbit' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'tahun_terbit' => 'required|integer|min:1900|max:' . date('Y'),
            'jumlah_halaman' => 'required|integer|min:1',
            'sinopsis' => 'required|string',
            'kategori' => 'required|string|max:255',
            'subkategori' => 'nullable|string|max:255',
            'stok' => 'required|integer|min:0',
            'cover' => 'nullable|string',
            'warna' => 'nullable|string|max:7',
            'bahasa' => 'nullable|string|max:255',
            'berat' => 'nullable|integer|min:0',
            'dimensi' => 'nullable|string|max:255',
            'halaman_berwarna' => 'boolean',
            'fitur' => 'nullable|array',
            'bab' => 'nullable|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $book->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Buku berhasil diperbarui',
            'data' => $book
        ]);
    }

    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Buku tidak ditemukan'
            ], 404);
        }

        $book->delete();

        return response()->json([
            'success' => true,
            'message' => 'Buku berhasil dihapus'
        ]);
    }

    public function categories()
    {
        $categories = Book::distinct()
                         ->whereNotNull('kategori')
                         ->pluck('kategori')
                         ->toArray();

        return response()->json([
            'success' => true,
            'data' => array_merge(['Semua'], $categories)
        ]);
    }
}