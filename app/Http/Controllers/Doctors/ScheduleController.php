<?php

namespace App\Http\Controllers\Doctors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|unique'
        ]);
    }
}
