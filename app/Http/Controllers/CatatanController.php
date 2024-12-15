<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Catatan;

class CatatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Catatan::latest()->get();
        return Inertia ('Catatan', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fiels = $request->validate([
            'catat' => ['required']
        ]);

        Catatan::create($fiels);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Catatan $catatan)
    {
        $fields = $request->validate([
            'catat' => ['required', 'string'],
        ]);

        $catatan->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Catatan $catatan)
    {
        $catatan->delete();
    }
}
