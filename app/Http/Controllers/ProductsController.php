<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /*
    public function index() {
        $title = "Welcome to the laravel 8 course";
        $description = "Created by some guy on youtube (Dary)";

        $data = [
            'productOne' => 'Iphone',
            'productTwo' => 'Samsung'
        ];

        return view('products.index', [
            'data' => $data,
            'title' => $title,
            'description' => $description
        ]);
    } // End index
     */

    public function index() {

        print_r(route('products'));

        return view('products.index');
    }

    public function about() {
        return "About us page";
    } // End about

    public function show($id) {
        return $id;
    } // End show

    public function showName($name) {
        $data = [
            'iphone' => 'Iphone',
            'samsung' => 'Samsung'
        ];

        $title = "Welcome to the laravel 8 course";
        $description = "Created by some guy on youtube (Dary)";

        return view('products.index', [
            'data' => [$data[$name] ?? 'Product ' . $name . ' does not exist'],
            'title' => $title,
            'description' => $description
        ]);
    } // End show name

    public function showNameAndId($name, $id) {
        $data = [
            'iphone' => 'Iphone',
            'samsung' => 'Samsung'
        ];

        $title = "Welcome to the laravel 8 course";
        $description = "Created by some guy on youtube (Dary)";

        return view('products.index', [
            'data' => [
                ("Name - " . $data[$name]) ?? 'Product ' . $name . ' does not exist',
                "Id - " . $id
            ],
            'title' => $title,
            'description' => $description
        ]);
    } // End showNameAndId

} // End class ProductsController

// return view('products.index', compact('title', 'description'));
        // return view('products.index')
        // ->with('title', $title)
        // ->with('description', $description)
        // ->with('data', $data);