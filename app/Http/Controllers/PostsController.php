<?php

namespace App\Http\Controllers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class PostsController extends Controller
{
    public function index() {
        // $posts = DB::select('select * from posts where id = :id', ['id' => 7]);

        $id = 6;

        // $posts = DB::table('posts')
        // ->where('id', $id)
        // ->get();

        // $posts = DB::table('posts')
        // ->select('body')
        // ->get();

        // $posts = DB::table('posts')
        // ->where('created_at', '<', now()->subDay())
        // ->orWhere('title', 'Ms.')
        // ->get();

        // $posts = DB::table('posts')
        // ->whereBetween('id', [7,9])
        // ->get();

        // $posts = DB::table('posts')
        // ->whereNotNull('title')
        // ->get();

        // $posts = DB::table('posts')
        // ->select('title')
        // ->distinct()
        // ->orderBy('title', 'desc')
        // ->get();

        // $posts = DB::table('posts')
        // ->latest()
        // ->get();

        // $posts = DB::table('posts')
        // ->oldest()
        // ->get();

        // $posts = DB::table('posts')
        // ->inRandomOrder()
        // ->get();

        // $posts = DB::table('posts')
        // ->orderBy('created_at', 'asc')
        // ->whereNotNull('created_at')
        // ->first();

        $id = 5;

        // $posts = DB::table('posts')
        // ->orderBy('created_at', 'asc')
        // ->whereNotNull('created_at')
        // ->find($id);

        // $posts = DB::table('posts')
        // ->where('id', $id)
        // ->count();

        $posts = DB::table('posts')
        ->min('id');

        $posts = DB::table('posts')
        ->max('id');

        $posts = DB::table('posts')
        ->sum('id');

        $posts = DB::table('posts')
        ->avg('id');

        $posts = DB::table('posts')
        ->insert([
            'title' => 'New Post',
            'body' => 'body ydob'
        ]);

        $posts = DB::table('posts')
        ->orderBy('created_at', 'asc')
        ->whereNotNull('created_at')
        ->limit(5)
        ->get();

        $id = 15;

        $posts = DB::table('posts')
        ->where('id', '=', $id)
        ->update([
            'title' => 'New Title where id is 15 ',
            'body' => 'new body updated'
        ]);

        $id = 9;

        $posts = DB::table('posts')
        ->where('id', '=', $id)
        ->delete();

        dd($posts);

        return view('posts/index');
    } // End index

} // End class
