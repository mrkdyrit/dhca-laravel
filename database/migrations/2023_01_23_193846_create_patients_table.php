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
        Schema::create('patients', function (Blueprint $table) {
            $table->string('patient_id', 100)->primary();
            $table->string('patient_fname');
            $table->string('patient_middle');
            $table->string('patient_lname');
            $table->bigInteger('contact_number');
            $table->string('email');
            $table->text('address_line_1');
            $table->text('address_line_2');
            $table->string('city_district');
            $table->string('state_province');
            $table->string('zip_code');
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
        Schema::dropIfExists('patients');
    }
};
