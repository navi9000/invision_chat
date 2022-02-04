<?php

namespace App\Http\Controllers\Chats;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;

class ChatsController extends Controller
{
    public function index(User $user)
    {
        return $user->chats()->get();
    }

    public function store(User $user)
    {
        $newChat = $user->chats()->create([
            'user_id' => $user->id
        ]);

        return $newChat;
    }

    public function destroy(User $user, Chat $chat)
    {
        $user->chats()->find($chat->id)->delete();
        return null;
    }
}
