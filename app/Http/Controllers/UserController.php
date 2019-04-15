<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UserController extends Controller
{
    public function index(){
        return response()->json(Auth::user());
    }
    public function register(Request $request){
        $user = $request->all();
        $user['password'] = bcrypt($user['password']);
        User::create($user);
        return response()->json(['success' => true]);
    }

    public function logout(){
        Auth::logout();
    }
}
