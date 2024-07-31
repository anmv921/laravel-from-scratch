<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index() {
        return view("index");
    } // End index

    public function about() {

        $name = "Dary";

        // $name = "";

        $names = ["John", "Dary", "Jimmy", "Travis"];

        return view("about")
        ->with('name', $name)
        ->with('names', $names)
        ->with('names2', []);
    } // End about
}
