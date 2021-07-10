<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;

class CompanyController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$companies = Company::orderBy( 'id', 'DESC' )->paginate( 15 );
		return response()->json( $companies );
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\JsonResponse
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function store(Request $request)
	{
		$request->validate( [
			'name' => 'required',
			'email' => 'required',
			'phone_number' => 'required',
			'image_url' =>'dimensions:min_width=100, min_height=100',
		] );


		$company = new Company;
		$company->name = $request->name;
		$company->email = $request->email;
		$company->phone_number = $request->phone_number;
		$company->website = $request->website;
		if ($request->hasFile( 'image_url' )) {
			$file = $request->file( 'image_url' );
			// Get file name with extension
			$fileNameWithExt = $file->getClientOriginalName();
			// Get just file name
			$fileName = pathinfo( $fileNameWithExt, PATHINFO_FILENAME );
			$fileExt = $file->getClientOriginalExtension();
			// Get file name to store
			$fileNameToStore = $fileName . '_' . time() . '.' . $fileExt;
			$save = $company->image_url = $fileNameToStore;

			if ($save) {
				$file->storeAs( 'crm/companies', $fileNameToStore );
			}
		}
		$company->save();
		return Response::json(['success' => 'Company created successfully!', 'created_company' => $company], 201);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param int $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$companies = Company::findOrFail( $id );
		return response()->json( $companies );

	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function update(Request $request, $id)
	{
		$company = Company::findOrFail( $id );
		$company->name = $request->name;
		$company->email = $request->email;
		$company->phone_number = $request->phone_number;
		$company->website = $request->website;
		if ($request->hasFile( 'image_url' )) {
			$file = $request->file( 'image_url' );
			// Get file name with extension
			$fileNameWithExt = $file->getClientOriginalName();
			// Get just file name
			$fileName = pathinfo( $fileNameWithExt, PATHINFO_FILENAME );
			$fileExt = $file->getClientOriginalExtension();
			// Get file name to store
			$fileNameToStore = $fileName . '_' . time() . '.' . $fileExt;
			$save = $company->image_url = $fileNameToStore;

			if ($save) {
				$file->storeAs( 'public/companies', $fileNameToStore );
			}
		}
		$company->save();
		return Response::json(['success' => 'Company update successfully!', 'update_company' => $company], 201);

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\Company $company
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function destroy(Company $company)
	{
		$company->delete();

		return Response::json(['success' => 'Company delete successfully!', 'delete_company' => $company], 201);

	}
}
