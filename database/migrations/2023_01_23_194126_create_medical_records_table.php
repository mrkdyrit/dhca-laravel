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
        Schema::create('medical_records', function (Blueprint $table) {
            $table->string('medical_record_id', 100)->primary();
            $table->string('patient_id', 100);
            $table->foreign('patient_id')->references('patient_id')->on('patients');
            $table->string('user_id', 100);
            $table->foreign('user_id')->references('user_id')->on('doctors');
            $table->date('record_date');
            $table->string('diagnosis');
            $table->longText('prescription');
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
        Schema::dropIfExists('medical_records');
    }
};
