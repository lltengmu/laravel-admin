<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\Client;
use App\Service\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request,UserService $userService)
    {
        $user = Client::where('email', $request->email)->first();
        
        if (!$user) {
            //用户不存在是返回错误信息
            throw ValidationException::withMessages([
                'email' => '用户不存在'
            ]);
        };
        if ($user->password != sha1($request->password)) {
            //自定义验证错误信息
            throw ValidationException::withMessages([
                'password' => '密码错误'
            ]);
        };
        //登录成功返回token 
        return [
            'client' => $user,
            'token' => $user->createToken('auth')->plainTextToken
        ];
    }
}
