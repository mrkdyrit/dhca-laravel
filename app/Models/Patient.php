<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_fname',
        'patient_middle',
        'patient_lname',
        'contact_number',
        'email',
        'address_line_1',
        'address_line_2',
        'city_district',
        'state_province',
        'zip_code'
    ];
}
