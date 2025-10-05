<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create admin user
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@hutanbuku.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin'
        ]);

        // Create sample user
        User::create([
            'name' => 'User Demo',
            'email' => 'user@hutanbuku.com',
            'password' => Hash::make('user123'),
            'role' => 'user'
        ]);

        // Sample books
        $books = [
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
                'cover' => '📚',
                'warna' => '#3498db',
                'bahasa' => 'Indonesia',
                'berat' => 500,
                'dimensi' => '15x23 cm',
                'halaman_berwarna' => true,
                'fitur' => ['Full Color', 'Source Code', 'Video Tutorial', 'Project Based'],
                'bab' => [
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
                'cover' => '🚀',
                'warna' => '#e74c3c',
                'bahasa' => 'Indonesia',
                'berat' => 600,
                'dimensi' => '16x24 cm',
                'halaman_berwarna' => false,
                'fitur' => ['Source Code', 'Database Examples', 'API Development']
            ],
            [
                'judul' => 'JavaScript Modern ES6+',
                'isbn' => '9781234567893',
                'penerbit' => 'Tech Books',
                'penulis' => 'Siti Web Developer',
                'tahun_terbit' => 2023,
                'jumlah_halaman' => 300,
                'sinopsis' => 'Belajar JavaScript modern dengan ES6+ dan konsep pemrograman terbaru.',
                'kategori' => 'Pemrograman',
                'subkategori' => 'Web Development',
                'rating' => 4.6,
                'total_rating' => 67,
                'stok' => 12,
                'cover' => '⚡',
                'warna' => '#f39c12',
                'bahasa' => 'Indonesia'
            ]
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}