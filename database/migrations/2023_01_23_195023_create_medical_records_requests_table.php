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
        Schema::create('medical_records_requests', function (Blueprint $table) {
            $table->string('medical_record_request_id', 100)->primary();
            $table->string('medical_record_id', 100);
            $table->foreign('medical_record_id')->references('medical_record_id')->on('medical_records');
            $table->string('user_id', 100);
            $table->foreign('user_id')->references('user_id')->on('doctors');
            $table->unique(['medical_record_id', 'user_id']);
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
        Schema::dropIfExists('medical_records_requests');
    }
};
