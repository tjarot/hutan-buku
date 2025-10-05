<?php

namespace Database\Seeders;

use App\Models\Buku;
use App\Models\Pengguna;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Buat admin
        Pengguna::create([
            'nama' => 'Administrator',
            'email' => 'admin@hutanbuku.com',
            'password' => Hash::make('admin123'),
            'peran' => 'admin'
        ]);

        // Buat pengguna contoh
        Pengguna::create([
            'nama' => 'Pengguna Demo',
            'email' => 'pengguna@hutanbuku.com',
            'password' => Hash::make('pengguna123'),
            'peran' => 'pengguna'
        ]);

        // Data buku contoh
        $buku = [
            [
                'judul' => 'Belajar React JS Modern',
                'isbn' => '9781234567891',
                'penerbit' => 'Penerbit Informatika',
                'penulis' => 'Ahmad Developer',
                'tahun_terbit' => 2024,
                'jumlah_halaman' => 251,
                'sinopsis' => 'Panduan lengkap belajar React JS dengan hooks dan modern practices. Cocok untuk pemula hingga mahir.',
                'kategori' => 'Pemrograman',
                'subkategori' => 'Frontend Development',
                'rating' => 4.8,
                'total_rating' => 124,
                'stok' => 15,
                'sampul' => '📚',
                'warna' => '#3498db',
                'bahasa' => 'Indonesia',
                'berat' => 500,
                'dimensi' => '15x23 cm',
                'halaman_berwarna' => true,
                'fitur' => ['Full Color', 'Source Code', 'Video Tutorial', 'Project Based'],
                'daftar_bab' => [
                    ['judul' => 'Pengenalan React JS', 'halaman' => 1],
                    ['judul' => 'Components dan Props', 'halaman' => 25],
                    ['judul' => 'State dan Lifecycle', 'halaman' => 50]
                ]
            ],
            [
                'judul' => 'Mastering Laravel 10',
                'isbn' => '9781234567892',
                'penerbit' => 'Code Publishing',
                'penulis' => 'Budi Programmer',
                'tahun_terbit' => 2023,
                'jumlah_halaman' => 350,
                'sinopsis' => 'Buku komprehensif untuk menguasai framework Laravel 10 dengan fitur-fitur terbaru.',
                'kategori' => 'Pemrograman',
                'subkategori' => 'Backend Development',
                'rating' => 4.7,
                'total_rating' => 89,
                'stok' => 8,
                'sampul' => '🚀',
                'warna' => '#e74c3c',
                'bahasa' => 'Indonesia',
                'berat' => 600,
                'dimensi' => '16x24 cm',
                'halaman_berwarna' => false,
                'fitur' => ['Source Code', 'Database Examples', 'API Development']
            ]
        ];

        foreach ($buku as $dataBuku) {
            Buku::create($dataBuku);
        }
    }
}