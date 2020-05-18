<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

   protected $fillable = [
      'id', 'place', 'date', 'topic', 'number_people', 'batch'
   ];

}