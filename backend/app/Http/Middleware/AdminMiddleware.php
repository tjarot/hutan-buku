<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->user() || !$request->user()->isAdmin()) {
            return response()->json([
                'sukses' => false,
                'pesan' => 'Akses ditolak. Hanya admin yang dapat mengakses.'
            ], 403);
        }

        return $next($request);
    }
}