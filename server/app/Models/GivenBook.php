<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GivenBook extends Model
{
    use HasFactory;

    protected $fillable = ['person_id','books_id','given_date'];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}
