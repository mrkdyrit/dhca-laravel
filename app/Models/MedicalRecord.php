<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'medical_record_id',
        'patient_id',
        'user_id',
        'diagnosis',
        'record_date',
        'prescription',
    ];
}
