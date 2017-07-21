<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ModuleRotate;
use App\Teaser;
use Route;

class IndexController extends Controller
{
    // public function index()
    // {
    //     $rotateModules = ModuleRotate::all();
    //     return view('home.index', compact('rotateModules'));
    // }

    public function index()
    {
        switch (Route::currentRouteName()) {
            case 'index':
                $rotateModules = ModuleRotate::all();
                return view('page.index', compact('rotateModules'));
                break;
            case 'about-us':
                return view('page.about-us');
                break;
            case 'divisions':
                return view('page.divisions');
                break;
            case 'brands':
                return view('page.brands');
                break;
            case 'career':
                $teasers = Teaser::all();
                return view('page.career', compact('teasers'));
                break;
            case 'contact-us':
                return view('page.contact-us');
                break;
            case 'production':
                return view('page.production');
                break;
            case 'construction':
                return view('page.construction');
                break;
            case 'trade':
                return view('page.trade');
                break;
            default:
                App::abort(404);
                break;
        }
    }
}
