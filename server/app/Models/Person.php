<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = ['name','identification','type'];

    public function WriterBook()
    {
        return $this->hasMany(WriterBook::class);
    }
}
