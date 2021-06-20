<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
    	'name',
    	'email',
    	'phone_number',
    	'website',
    	'image_url',
	];

    public function employee()
	{
		return $this->belongsToMany(Employee::class, 'employees');
	}
}
