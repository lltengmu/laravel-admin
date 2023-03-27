<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * 在验证规则之前是否需要登录
     * 返回true则放行
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * 定义登录的验证规则
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' =>'required|email',
            'password' => 'required|min:3',
        ];
    }
}
