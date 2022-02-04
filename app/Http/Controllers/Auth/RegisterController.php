<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:255',
            'email' => 'required',
            'password' => 'required',
            'phone' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errorMessage' => 'Validation Failed'], 406);
        }

        try {
            $newUser = User::create([
                'username' => $request['username'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
                'phone' => $request['phone']
            ]);
    
            Auth::attempt([
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password,
                'phone' => $request->phone
            ], $request->remember);
    
            return $newUser;

        } catch(Exception $e) {
            return response()->json(['errorMessage' => 'User already exists'], 403);
        }
    }
}
