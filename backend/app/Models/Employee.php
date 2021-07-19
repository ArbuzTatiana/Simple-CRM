<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string first_name
 * @property string last_name
 * @property int company_id
 * @property string email
 * @property string phone_number
 */

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
		'first_name',
		'last_name',
		'company_id',
		'email',
		'phone_number',

	];

    public function company()
	{
		return $this->belongsTo(Company::class);

	}
}
