<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\user;

class Category extends Model
{
    public function getRouteKeyName() {
        return 'slug';
    }

    protected $guarded = [];
    
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function replies() {
        return $this->hasMany(Reply::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
