<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
   protected $fillable = [
      'id', 'name', 'price', 'quantity', 'eventId', 'event'
   ];

   public function event()
   {
      return $this->belongsTo(Event::class);
   }
}