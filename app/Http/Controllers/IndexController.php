<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ModuleRotate;
use App\Teaser;
use Route;
use App\Division;
use App\Product;

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
                $products = Product::where('active', true)->get()->sort();
                // return $products;
                return view('page.index', compact('rotateModules', 'products'));
                break;
            case 'about-us':
                return view('page.about-us');
                break;
            case 'divisions':
                $brands = Division::all();
                return view('page.divisions', compact('brands'));
                break;
            case 'brands':
                $products = Product::where('active', true)->get()->sort();
                return view('page.brands', compact('products'));
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
