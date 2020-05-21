<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
   protected $table = 'batches';

   public function event()
   {
      return $this->belongsTo(Event::class, 'event', 'id');
   }
}