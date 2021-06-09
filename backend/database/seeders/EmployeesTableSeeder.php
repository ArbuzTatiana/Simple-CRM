<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;


class EmployeesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$faker = Faker::create();
		foreach (range( 1, 30 ) as $index) {
			DB::table( 'employees' )->insert( [
				'first_name' => $faker->firstName,
				'last_name' => $faker->lastName,
				'company_id' => $faker->numberBetween( 1, 50 ),
				'email' => $faker->email,
				'phone_number'=>$faker->phoneNumber,
			] );
		}
	}
}
