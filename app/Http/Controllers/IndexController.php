<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ModuleRotate;
use App\Teaser;
use Route;
use App\Division;

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
                $brands = Division::all();
                return view('page.divisions', compact('brands'));
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
                $division = Division::where('name', 'Manufacture')->first();
                return view('page.production', compact('division'));
                break;
            case 'construction':
                $division = Division::where('name', 'Construction')->first();
                return view('page.construction', compact('division'));
                break;
            case 'trade':
                $division = Division::where('name', 'Trade')->first();
                return view('page.trade', compact('division'));
                break;
            default:
                App::abort(404);
                break;
        }
    }
}
