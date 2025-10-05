<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('isbn')->unique();
            $table->string('penerbit');
            $table->string('penulis');
            $table->integer('tahun_terbit');
            $table->integer('jumlah_halaman');
            $table->text('sinopsis')->nullable();
            $table->string('kategori');
            $table->string('subkategori')->nullable();
            $table->decimal('rating', 3, 1)->default(0);
            $table->integer('total_rating')->default(0);
            $table->integer('stok')->default(0);
            $table->string('cover')->nullable();
            $table->string('warna')->default('#3498db');
            $table->string('bahasa')->default('Indonesia');
            $table->integer('berat')->nullable();
            $table->string('dimensi')->nullable();
            $table->boolean('halaman_berwarna')->default(false);
            $table->json('fitur')->nullable();
            $table->json('bab')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('books');
    }
};