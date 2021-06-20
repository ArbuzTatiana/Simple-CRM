<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$employees = Employee::orderBy( 'id', 'DESC' )->paginate( 15 );
		return response()->json( $employees );
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$employee = new Employee;
		$employee->first_name = $request->first_name;
		$employee->last_name = $request->last_name;
		$employee->company_id = $request->company_id;
		$employee->email = $request->email;
		$employee->phone_number = $request->phone_number;
		$employee->save();

		return response()->json( $request );


	}

	/**
	 * Display the specified resource.
	 *
	 * @param $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$employee = Employee::findOrFail( $id );
		return response()->json( $employee );
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Models\Employee $employee
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Employee $employee)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		$employee = Employee::findOrFail( $id );
		$employee->first_name = $request->first_name;
		$employee->last_name = $request->last_name;
		$employee->company_id = $request->company_id;
		$employee->email = $request->email;
		$employee->phone_number = $request->phone_number;
		$employee->save();

		return response()->json( $request );
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		$employee = Employee::findOrFail( $id );
		$employee->delete();
		return response()->json( $employee );
	}
}
