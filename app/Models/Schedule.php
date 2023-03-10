<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'schedule_id',
        'user_id',
        'title',
        'start_time',
        'end_time',
        'date',
        'location'
    ];
}
