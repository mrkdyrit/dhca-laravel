<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class HandleRedirects extends Controller
{
    public function handle(Request $request) {
        $user_type = Auth::user()->user_type;

        if($user_type == config('dhca.user_type.doctor')) {
            return Redirect::route('doctor.index');
        }

        if($user_type >= config('dhca.user_type.hr')) {
            return Redirect::route('hr.doctors.list');
        }
    }
}
