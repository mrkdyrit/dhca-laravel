<?php
namespace App\Http\Traits;

trait GenerateID {
    public function generateID($prefix, $table, $column) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        $genID = $prefix . '';

        for ($i = 0; $i <= 15; $i++) {
            $genID .= $characters[rand(0, strlen($characters) - 1)];
        }

        // Check if user id exists in the database
        if(DB::table($table)->where($column, $genID)->count() == 0) {
            return $genID;
        } else {
            // Generete user id again
            $this->generateID();
        }
    }
}
