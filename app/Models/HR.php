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
        'hr_fname',
        'hr_middle',
        'hr_lname',
        'contact_number',
        'email',
        'id_number',
    ];
}
