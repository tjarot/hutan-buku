<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pengguna extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'pengguna';

    protected $fillable = [
        'nama',
        'email',
        'password',
        'peran',
        'foto_profil',
        'bio'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_terverifikasi_pada' => 'datetime',
    ];

    public function isAdmin()
    {
        return $this->peran === 'admin';
    }

    public function isPengguna()
    {
        return $this->peran === 'pengguna';
    }

    public function getAuthPasswordName()
    {
        return 'password';
    }
}