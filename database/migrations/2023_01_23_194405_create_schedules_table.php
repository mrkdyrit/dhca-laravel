<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->string('schedule_id')->primary();
            $table->string('user_id', 100);
            $table->foreign('user_id')->references('user_id')->on('doctors');
            $table->string('title', 100)->unique();
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->date('date');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
};
