<?php

namespace App\Http\Controllers\Doctors;

use App\Http\Controllers\Controller;
use App\Http\Traits\GenerateID;
use App\Models\Schedule;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    use GenerateID;

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|unique:' . Schedule::class,
            'location' => 'required|string',
            'date' => 'required|date',
            'start_time' => 'required|string',
            'end_time' => 'required|string'
        ]);

        $store_sched = Schedule::create([
            'schedule_id' => $this->generateID('SCHED', 'schedules', 'schedule_id'),
            'user_id' => Auth::user()->user_id,
            'title' => $validated['title'],
            'start_time' => $validated['start_time'],
            'end_time' => $validated['end_time'],
            'date' => $validated['date'],
            'location' => $validated['location']
        ]);

        if($store_sched) {
            return back()->with([
                'success' => true,
                'message' => config('dhca.messages.success.schedule.store')
            ]);
        } else {
            return back()->with([
                'success' => false,
                'message' => config('dhca.messages.failed.schedule.store')
            ]);
        }
    }
}
