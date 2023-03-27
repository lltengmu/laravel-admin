<?php

namespace App\Http\Controllers;

use App\Models\Config;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreConfigRequest;
use App\Http\Requests\UpdateConfigRequest;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateConfigRequest  $request
     * @param  \App\Models\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,string $name)
    {
        $config = Config::firstOrNew();
        $config[$name] = $request->input() + $config[$name] ?: [];
        $config->save();
        return $config[$name];
    }
}
