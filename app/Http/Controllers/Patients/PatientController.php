<?php

namespace App\Http\Controllers\Patients;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'contact_number' => 'required|integer',
            'email' => 'required|email',
            'address_line_1' => 'required|string',
            'address_line_2' => 'required|string',
            'city_district' => 'required|string',
            'zip' => 'required|integer',
        ]);

        $patient = Patient::create([
            'patient_fname' => $validated['first_name'],
            'patient_middle' => $validated['middle_name'],
            'patient_lname' => $validated['last_name'],
            'contact_number' => $validated['contact_number'],
            'email' => $validated['email'],
            'address_line_1' => $validated['address_line_1'],
            'address_line_2' => $validated['address_line_2'],
            'city_district' => $validated['city_district'],
            'state_province' => $validated['state_province'],
            'zip_code' => $validated['zip']
        ]);

        if($patient) {
            return back()->with([
                'success' => true,
                'message' => config('dhca.messages.success.patients.store')
            ]);
        } else {
            return back()->with([
                'success' => false,
                'message' => config('dhca.messages.failed.patients.store')
            ]);
        }
    }
}
