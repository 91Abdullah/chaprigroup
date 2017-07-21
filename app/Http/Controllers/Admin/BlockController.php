<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Block;
use App\Image;

class BlockController extends Controller
{
    public function index()
    {
        $blocks = Block::all();
        return view('admin.block.index', compact('blocks'));
    }

    public function create(Request $request)
    {
        if($request->isMethod('post')) {
            try {
                $page = Block::create($request->all());
                session()->flash('Success', 'Block has been created');
            } catch (Exception $e) {
                session()->flash('Error', 'Block creation failed. ' . $e->getMessage());
            }
            return redirect()->action('Admin\BlockController@index');
        } else {
            return view('admin.block.create');
        }
    }

    public function upload(Request $request)
    {
        $name = str_random(5);
        $path = $request->file('file')->storeAs('images', $name);
        $image = new Image;
        $image->path = $path;
        $image->name = $name;
        $image->save();
    }
}
