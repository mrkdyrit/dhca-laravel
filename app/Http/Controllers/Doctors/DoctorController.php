<?php

namespace App\Http\Controllers\Doctors;

use App\Http\Controllers\Controller;
use App\Http\Traits\GenerateID;
use App\Models\Doctor;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules;

class DoctorController extends Controller
{
    use GenerateID;

    public function store(Request $request) {
        // Validate each input before processing the request
        $validated = $request->validate([
            'username' => 'required|string|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'contact_number' => 'required|integer',
            'email' => 'required|email',
            'id_number' => 'required|integer',
            'medical_field' => 'required|string'
        ]);

        try {
            DB::transaction(function () use ($validated) {
                // Create user account
                $user = User::create([
                    'user_id' => $this->generateID('USR', 'users', 'user_id'),
                    'username' => $validated['username'],
                    'password' => $validated['password'],
                    'user_type' => config('dhca.user_type.doctor')
                ]);
    
                // Record doctor information
                Doctor::create([
                    'user_id' => $user->user_id,
                    'doctor_fname' => $validated['first_name'],
                    'doctor_middle' => $validated['middle_name'],
                    'doctor_lname' => $validated['last_name'],
                    'contact_number' => $validated['contact_number'],
                    'email' => $validated['email'],
                    'medical_field' => $validated['medical_field'],
                    'id_number' => $validated['id_number'],
                ]);
            });
            
            return back()->with([
                'message' => config('dhca.messages.success.doctors.store')
            ], 200);
        } catch (Exception $e) {
            return back()->withErrors([
                'message' => config('dhca.messages.failed.doctors.store')
            ]);
        }
    }
}
