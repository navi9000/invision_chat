<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function getAll(Request $request) {
        return User::where('username', 'like', $request['searchQuery'] . '%')->get();
    }

    public function getById(User $user) {
        return $user;
    }
}
