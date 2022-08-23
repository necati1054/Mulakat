<?php

namespace App\Http\Controllers;

use App\Models\GivenBook;
use Illuminate\Http\Request;

class GivenBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $AllData = GivenBook::all();
        return $AllData;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = validator()->make($request->all(),[
            'person_id' => 'string|required',
            'books_id' => 'string|required',
            'given_date' => 'date|required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Failed'
            ],422);
        }else{
            return GivenBook::create([
                'person_id'=>$request->input("person_id"),
                'books_id'=>$request->input("books_id"),
                'given_date'=>$request->input("given_date"),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GivenBook  $givenBook
     * @return \Illuminate\Http\Response
     */
    public function show(GivenBook $givenBook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GivenBook  $givenBook
     * @return \Illuminate\Http\Response
     */
    public function edit(GivenBook $givenBook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GivenBook  $givenBook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GivenBook $givenBook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GivenBook  $givenBook
     * @return \Illuminate\Http\Response
     */
    public function destroy(GivenBook $givenBook,Request $request)
    {
        $validator = validator()->make($request->all(),[
            'GivenId' => 'string|required',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Failed'
            ],422);
        }else{
            $veri = GivenBook::find($request->GivenId)->delete();
            return $request->GivenId;
        }
    }
}
