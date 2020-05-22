<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
   protected $table = 'batches';

   protected $fillable = ['name', 'price', 'quantity', 'event'];

   public function event()
   {
      return $this->belongsTo(Event::class, 'event', 'id');
   }
}