<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\User;

class PostsController extends Controller
{
    public function index(Chat $chat)
    {
        return $chat->posts()->get();
    }

    public function store(Request $request, User $user, Chat $chat)
    {
        $newPost = $chat->posts()->create([
            'user_id' => $user->id,
            'chat_id' => $chat->id,
            'text' => $request->text
        ]);

        return $newPost;
    }
}
