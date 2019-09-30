<?php

namespace App\Http\Controllers;

use App\Model\Reply;
use App\Model\Question;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function likeIt(Reply $reply)
    {
        $reply->like()->create([
            //'user_id' => auth()-id(),
            'user_id' => '1'
        ]);
    }

    public function unlikeIt(Reply $reply)
    {
        //$reply->like()->where(['user_id', auth()->id()])->first()->delete();
        $reply->like()->where('user_id', 1)->first()->delete();
    }
}
