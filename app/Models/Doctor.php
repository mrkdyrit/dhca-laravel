<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'doctor_fname',
        'doctor_middle',
        'doctor_lname',
        'contact_number',
        'email',
        'medical_field',
        'id_number',
    ];
}
