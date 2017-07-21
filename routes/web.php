<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'IndexController@index')->name('index');
Route::get('/about-us', 'IndexController@index')->name('about-us');
Route::get('/brands', 'IndexController@index')->name('brands');
Route::get('/career', 'IndexController@index')->name('career');
Route::get('/contact-us', 'IndexController@index')->name('contact-us');
Route::group(['prefix' => 'divisions'], function () {
    Route::get('/', 'IndexController@index')->name('divisions');
    Route::get('/production', 'IndexController@index')->name('production');
    Route::get('/construction', 'IndexController@index')->name('construction');
    Route::get('/trade', 'IndexController@index')->name('trade');
});


Route::group(['prefix' => 'admin'], function () {
    Route::get('/', 'Admin\IndexController@index');
    Route::group(['prefix' => 'article'], function () {
        Route::get('/', 'Admin\ArticleController@index');
        Route::get('/create', 'Admin\ArticleController@create');
        Route::post('/create', 'Admin\ArticleController@create');
    });
    Route::group(['prefix' => 'page'], function () {
        Route::get('/', 'Admin\PageController@index');
        Route::get('/create', 'Admin\PageController@create');
        Route::post('/create', 'Admin\PageController@create');
        Route::get('/update', 'Admin\PageController@update');
        Route::put('/update', 'Admin\PageController@update');
    });
    Route::group(['prefix' => 'block'], function () {
        Route::get('/', 'Admin\BlockController@index');
        Route::get('/create', 'Admin\BlockController@create');
        Route::post('/create', 'Admin\BlockController@create');
        Route::post('/upload', 'Admin\BlockController@upload');
    });
});
