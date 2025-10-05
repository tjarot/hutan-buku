<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul',
        'isbn',
        'penerbit',
        'penulis',
        'tahun_terbit',
        'jumlah_halaman',
        'sinopsis',
        'kategori',
        'subkategori',
        'rating',
        'total_rating',
        'stok',
        'cover',
        'warna',
        'bahasa',
        'berat',
        'dimensi',
        'halaman_berwarna',
        'fitur',
        'bab'
    ];

    protected $casts = [
        'fitur' => 'array',
        'bab' => 'array',
        'halaman_berwarna' => 'boolean',
        'tahun_terbit' => 'integer',
        'jumlah_halaman' => 'integer',
        'stok' => 'integer',
        'rating' => 'decimal:1',
        'total_rating' => 'integer'
    ];

    public function scopeSearch($query, $search)
    {
        return $query->where('judul', 'like', "%{$search}%")
                    ->orWhere('penulis', 'like', "%{$search}%")
                    ->orWhere('penerbit', 'like', "%{$search}%");
    }

    public function scopeByCategory($query, $category)
    {
        if ($category && $category !== 'Semua') {
            return $query->where('kategori', $category);
        }
        return $query;
    }

    public function scopeSorted($query, $sortBy)
    {
        switch ($sortBy) {
            case 'terbaru':
                return $query->orderBy('tahun_terbit', 'desc');
            case 'terlama':
                return $query->orderBy('tahun_terbit', 'asc');
            case 'rating':
                return $query->orderBy('rating', 'desc');
            case 'judul':
                return $query->orderBy('judul', 'asc');
            default:
                return $query->orderBy('created_at', 'desc');
        }
    }
}