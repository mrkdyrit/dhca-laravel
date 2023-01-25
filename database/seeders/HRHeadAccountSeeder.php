<?php

namespace Database\Seeders;

use App\Models\HR;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class HRHeadAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'user_id' => 'hrheadako',
            'username' => 'hr_head',
            'password' => Hash::make('password'),
            'user_type' => config('dhca.user_type.hr_head'),
        ]);
    }
}
