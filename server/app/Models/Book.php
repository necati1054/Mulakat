<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function WriterBook()
    {
        return $this->hasMany(WriterBook::class);
    }
}
