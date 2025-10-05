<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    use HasFactory;

    protected $table = 'buku';

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
        'sampul',
        'warna',
        'bahasa',
        'berat',
        'dimensi',
        'halaman_berwarna',
        'fitur',
        'daftar_bab'
    ];

    protected $casts = [
        'fitur' => 'array',
        'daftar_bab' => 'array',
        'halaman_berwarna' => 'boolean',
        'tahun_terbit' => 'integer',
        'jumlah_halaman' => 'integer',
        'stok' => 'integer',
        'rating' => 'decimal:1',
        'total_rating' => 'integer'
    ];

    public function scopePencarian($query, $pencarian)
    {
        return $query->where('judul', 'like', "%{$pencarian}%")
                    ->orWhere('penulis', 'like', "%{$pencarian}%")
                    ->orWhere('penerbit', 'like', "%{$pencarian}%");
    }

    public function scopeBerdasarkanKategori($query, $kategori)
    {
        if ($kategori && $kategori !== 'Semua') {
            return $query->where('kategori', $kategori);
        }
        return $query;
    }

    public function scopeDiurutkan($query, $urutBerdasarkan)
    {
        switch ($urutBerdasarkan) {
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