<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('token_akses_personal', function (Blueprint $table) {
            $table->id();
            $table->morphs('dapat_di_token');
            $table->string('nama');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('terakhir_digunakan_pada')->nullable();
            $table->timestamp('kadaluarsa_pada')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('token_akses_personal');
    }
};