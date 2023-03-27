<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\IboDistrict;
use Illuminate\Http\Request;

class OptionsController extends Controller
{
    public function __invoke()
    {

        return ['name' => '拉票罗'];
    }
}
