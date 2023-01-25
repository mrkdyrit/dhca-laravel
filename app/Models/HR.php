<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HR extends Model
{
    use HasFactory;

    protected $table = 'hr';

    protected $fillable = [
        'user_id',
        'doctor_fname',
        'doctor_middle',
        'doctor_lname',
        'contact_number',
        'email',
        'id_number',
    ];
}
