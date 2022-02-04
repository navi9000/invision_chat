<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        $existingUser = User::where('username', $request['username'])->first();
        if ($existingUser && Hash::check($request['password'], $existingUser->password)) {
            Auth::attempt([
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password,
                'phone' => $request->phone
            ], $request->remember);
            return [
                'id' => $existingUser['id'],
                'username' => $existingUser['username'],
                'subscriptions' => $existingUser->subscriptions()
            ];
        }
        return response()->json(['errorMessage' => 'Incorrect username or password'], 406);
    }

    public function destroy()
    {
        Auth::logout();
        return 'Logged Out';
    }
}
