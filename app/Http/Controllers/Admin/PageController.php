<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Page;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::all();
        return view('admin.page.index', compact('pages'));
    }

    public function create(Request $request)
    {
        if($request->isMethod('post')) {
            try {
                $page = Page::create($request->all());
                session()->flash('Success', 'Page has been created');
            } catch (Exception $e) {
                session()->flash('Error', 'Page creation failed. ' . $e->getMessage());
            }
            return redirect()->action('Admin\PageController@index');
        } else {
            return view('admin.page.create');
        }
    }
}
