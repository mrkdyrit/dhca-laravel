<?php

namespace App\Http\Controllers;

use App\Http\Traits\GenerateID;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use GenerateID;

    public function authenticate(Request $request) {
        
    }
}
