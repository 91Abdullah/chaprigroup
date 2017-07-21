<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $fillable = ['name', 'postion', 'content'];

    public function pages()
    {
        return $this->belongsToMany('App\Block');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
