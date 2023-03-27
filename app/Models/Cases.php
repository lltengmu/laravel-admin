<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cases extends Model
{
    use HasFactory;
    public $timestamps = FALSE;
    public function client()
    {
        return $this->belongTo(Client::class);
    }
}