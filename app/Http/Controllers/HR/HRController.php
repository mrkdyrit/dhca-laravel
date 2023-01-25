<?php

namespace App\Http\Controllers\HR;

use App\Http\Controllers\Controller;
use App\Http\Traits\GenerateID;
use App\Models\HR;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules;

class HRController extends Controller
{
    use GenerateID;

    public function store(Request $request) {
        $validated = $request->validate([
            'username' => 'required|string|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'contact_number' => 'required|integer',
            'email' => 'required|email',
            'id_number' => 'required|integer'
        ]);

        try {
            DB::transaction(function () {
                // Create user account
                $user = User::create([
                    'user_id' => $this->generateID('USR', 'users', 'user_id'),
                    'username' => $validated['username'],
                    'password' => $validated['password'],
                    'user_type' => config('dhca.user_type.hr')
                ]);

                // Record HR Information
                $hr = HR::create([
                    'user_id' => $user->user_id,
                    'doctor_fname' => $validated['first_name'],
                    'doctor_middle' => $validated['middle_name'],
                    'doctor_lname' => $validated['last_name'],
                    'contact_name' => $validated['contact_number'],
                    'email' => $validated['email'],
                    'id_number' => $validated['id_number'],
                ]);

                return back()->with([
                    'success' => true,
                    'message' => config('dhca.messages.success.hr.store')
                ]);
            });
        } catch(Exception $e) {
            return back()->with([
                'success' => false,
                'message' => config('dhca.messages.failed.hr.store')
            ]);
        }
    }
}
