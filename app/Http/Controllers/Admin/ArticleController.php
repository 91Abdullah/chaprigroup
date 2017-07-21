<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Article::all();
        return view('admin.article.index', compact('articles'));
    }

    public function create(Request $request)
    {
        if($request->isMethod('post')) {
            $article = \App\Article::create($request->all());
            return redirect()->action('Admin\ArticleController@index');
        } else {
            return view('admin.article.create');
        }
    }

    public function update(Request $request)
    {
        if($request->isMethod('put')) {
            $article = \App\Article::update($request->all());
            return redirect()->action('Admin\ArticleController@index');
        } else {
            return view('admin.article.edit');
        }
    }
}
