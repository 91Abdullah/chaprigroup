<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Block;

class IndexController extends Controller
{
    public function index()
    {
        $blocks = Block::all();
        return view('admin.index');
    }
}
