<?php

use App\Models\User;
use App\Notifications\EmailValidateCodeNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//预览邮件
//Route::get('test', function () {
//    return (new EmailValidateCodeNotification())->toMail(User::factory()->create());
//});

//发送邮件
Route::get('test', function () {
    //Notification::send(User::factory()->create(['email' => '115097084@qq.com']),new EmailValidateCodeNotification(34215));
    return config('app.code_expire_time');
});

Route::get('view',function(){
    return view('home',['data' => '这是一个句子']);
});