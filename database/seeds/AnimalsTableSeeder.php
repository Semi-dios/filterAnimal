<?php

use Illuminate\Database\Seeder;
use App\Animal;

class AnimalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $animals = factory(Animal::class, 50)->make()->toArray();
        foreach ($animals as $animal) {
            Animal::create($animal);
        }
    }
}