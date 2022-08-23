<?php

namespace Database\Seeders;

use App\Models\Person;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Person::create([
            'name' => "Necati",
            'identification' => (12345678925),
            'type'=>(0)
        ]);
        Person::create([
            'name' => "Hüsnü",
            'identification' => 12345678905,
            'type'=>1
        ]);
    }
}
