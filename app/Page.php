<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['title', 'slug', 'route'];

    public function blocks()
    {
        return $this->belongsToMany('App\Page');
    }
}
