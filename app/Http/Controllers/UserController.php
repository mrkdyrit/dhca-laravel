<?php

namespace App\Http\Controllers;

use App\Http\Traits\GenerateID;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    use GenerateID;

    public function authenticate(Request $request) {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return 'logged in';
        }

        return Redirect::route('login')->withErrors([
            'Message' => 'The provided credentials do not match our records.',
        ]);
    }
}
