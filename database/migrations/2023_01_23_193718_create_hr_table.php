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
        Schema::create('hr', function (Blueprint $table) {
            $table->string('user_id', 100)->primary();
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->string('hr_fname');
            $table->string('hr_middle');
            $table->string('hr_lname');
            $table->string('email');
            $table->bigInteger('contact_number');
            $table->bigInteger('id_number');
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
        Schema::dropIfExists('hr');
    }
};
