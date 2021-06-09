<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class CompaniesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$faker = Faker::create();
		foreach (range( 1, 50 ) as $index) {
			DB::table( 'companies' )->insert( [
				'name' => $faker->company,
				'email' => $faker->companyEmail,
				'phone_number' => $faker->phoneNumber,
				'website' => $faker->domainName,
				'image_url' => $faker->image( null, 360, 360, 'animals', true ),
			] );
		}

	}
}
