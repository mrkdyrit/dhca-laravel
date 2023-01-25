<?php

namespace App\Http\Controllers\Patients;

use App\Http\Controllers\Controller;
use App\Models\MedicalRecord;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;

class MedicalRecordController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'patient_id' => 'required|string|exists:' . Patient::class,
            'diagnosis' => 'required|string',
            'prescription' => 'required|string'
        ]);

        $medical_record = MedicalRecord::create([
            'patient_id' => $validated['patient_id'],
            'user_id' => Auth::user()->user_id,
            'record_date' => Date::now(),
            'diagnosis' => $validated['diagnosis'],
            'prescription' => $validated['prescription']
        ]);

        if($medical_record) {
            return back()->with([
                'success' => true,
                'message' => config('dhca.messages.success.medical_records.store')
            ]);
        } else {
            return back()->with([
                'success' => false,
                'message' => config('dhca.messages.failed.patients.store')
            ]);
        }
    }
}
