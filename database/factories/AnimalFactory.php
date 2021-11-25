<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Animal;

$factory->define(Animal::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph,
        'image' => $faker->image(public_path('images'), 400, 300, null, false),
        'type' => $faker->randomElement(['carnivorous', 'herbivorous', 'reptile']),
    ];
});